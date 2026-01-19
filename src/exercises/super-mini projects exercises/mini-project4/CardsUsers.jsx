import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import useDebounceUsers from './useDebounceUsers'
// import { users } from './MockDataUsers'

export default function CardsUsers() {
 
    const [users, setUsers] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [input, setInput] = useState('');
    const [inputCounter, setCounter] = useState(0);
    const [sortOrder, setSortOrder] = useState('none');
    const [sortByCity, setSortByCity] = useState('');
    const [sortByFav, setSortByFav] = useState(false);
    // false -> show all users (default)
    // true -> show only favorites users

    const [favorites, setFavorites] = useState([])

    const toggleFavorites = (userId) => {
        let newFavorites;
        //check if already favorites
        if(favorites.includes(userId)){
            
            newFavorites = favorites.filter(id => id !== userId)
            // user clicked on an already favorited (to unfavorite them)
            // .filter() => creates a new array keeping only items that pass the test
            // the test: id !== userId (keep all IDs that are NOT equal to userId)
            // favorites = [1, 5, 8]
            // userId = 5  // User clicked unfavorite on user 5

            // favorites.filter(id => id !== 5)

            // Filter checks each ID:
            // id = 1: Is 1 !== 5? YES → KEEP 1
            // id = 5: Is 5 !== 5? NO → REMOVE 5
            // id = 8: Is 8 !== 5? YES → KEEP 8

        } else{
            // not favorite -> add this
            newFavorites = [...favorites, userId];
            // creates new array with all favorited, plus the current userId that clicked add
        }
        
        // apdate the state with the newFavorite array
        // in both cases - if and else we run this:
        setFavorites(newFavorites)
        localStorage.setItem('favorites', JSON.stringify(newFavorites));
        console.log(newFavorites);
    }

    const handleInput = (e) => {
        const newValue = e.target.value;
        setInput(newValue);

        // This always mathes the actual text length
        setCounter(newValue.length);
    }

    const handleSortAsc = () => {
        setSortOrder('asc');
    }

    const handleSortDesc = () => {
        setSortOrder('desc')
    }

    
    const handleCityChange = (e) => {
        setSortByCity(e.target.value)
    }
    const handleSortReset = () => {
        setSortOrder('none')
        setSortByFav(false)
        setSortByCity('')
        // how to reset the country choose
    }

    const fetchUser = async () => {
        setIsLoading(true);
        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/users')
            const data = await response.json();
            setUsers(data);
        }
        catch(err){
            console.log(err);
        } finally{
            setIsLoading(false)
        }
    }

    
    useEffect(() => {
        const savedFavorites = localStorage.getItem('favorites')
        if(savedFavorites){
            setFavorites(JSON.parse(savedFavorites))
        }

        fetchUser()
        console.log('rendered');
    }, [])
    
    const navigate = useNavigate();
    const handleNavigate = (id) => {
        navigate(`/users/user/${id}`)
    }
    
    const debounceValue = useDebounceUsers(input, 2000);

    // input not empty string and not have spaces, && input not equal to debounce value that will be ready after the user will stop typing
    // Meaning: inpit not empty (ignores spaces)
    // input !== debounceValue
    // user has typed but debounce hasn't caugth up yet
    const isSearching = input.trim() !== '' && input !== debounceValue;

    // The filter is outside the fetch because it need to run every time debounceValue changes, not just when we fetch 
    const filtred = users.filter(user => 
        user.name.toLowerCase().includes(debounceValue.toLowerCase())   
    )

    

    let filteredByCity = filtred;
    // filterByCity = Take all users that match name search.
    // start with the name-filtredlist
    // we might filter it more or we might not (depends on city selection)

    // Optinally filtering by city
    if(sortByCity !== '') {
        filteredByCity = filtred.filter(user => 
            user.address.city === sortByCity
        )
    }

    let filterByFavorites = filteredByCity
    if(sortByFav){
        filterByFavorites = filteredByCity.filter((user) =>
            favorites.includes(user.id)
        )
    }

    // Create a copy to sort, don't mutate filtred array
    let sortUsers = [...filterByFavorites];

    // Apply sorting based on sortOrder state
    if(sortOrder === 'asc'){
        sortUsers.sort((a,b) => a.name.localeCompare(b.name));
    }
    else if (sortOrder === 'desc'){
        sortUsers.sort((a,b) => b.name.localeCompare(a.name));
    }

    if (isLoading) {
        return (
            <div>
                <h1>Filter By Name</h1>
                <p>Loading...</p>
            </div>
        )
    }

  return (
    <div>
        <h1>Filter By Name</h1>
        <input 
            value={input}
            onChange={handleInput}
            placeholder='Type Name'
            maxLength={30}
        />
        {inputCounter > 0 && (
            <p style={{color: inputCounter > 10 ? 'red' : 'black'}}>Characters: {inputCounter}</p>
        ) }
        {/* instead of: */}
        {/* {inputCounter > 10 ? (<p style={{color: 'red'}}>{inputCounter}</p>) : (<p style={{color: 'black'}}>{inputCounter}</p>)} */}


        {input && (<button onClick={() => {setInput(''); setCounter(0)}}>Clear</button>)}

        {/* Sort Buttons Section: */}
        <div 
            style={{
                marginTop: '20px',
                marginBottom: '20px',
                display: 'flex',
                gap: '10px',
                alignItems: 'center'
            }}
        >
            <span style={{fontWeight: 'bold'}}>Sort By</span>
            <button onClick={handleSortAsc}>Name A-Z ↑</button>
            <button onClick={handleSortDesc}>Name Z-A ↓</button>
            <button onClick={handleSortReset}>Reset</button>
            <button onClick={() => setSortByFav(!sortByFav)}>Favorites {favorites.length}</button>
            <select onChange={handleCityChange} value={sortByCity}>
                <option value=''>all cities</option>
                {users.map((user) => (
                        <option key={user.id} value={user.address.city} >{user.address.city}</option>
                ))}
            </select>
        </div>

        {/* show searching indicators */}
        {isSearching && (<p>🔍 Searching...</p>)}

        {/* show results count */}
        {!isSearching && (<p>Found {sortUsers.length}</p>)}

        {!isSearching && sortUsers.length === 0 && debounceValue && (
            <p>No Users Found for {debounceValue}</p>
        )}

        {!isSearching && (
            <div>
                {sortUsers.map((user) => (
                    <div 
                        key={user.id}
                        style={{border: '1px solid black', padding: '10px', margin: '20px 0px'}}
                    >
                        <img src={`https://i.pravatar.cc/150?img=${user.id}`} alt="" />
                        <h2>{user.name}</h2>
                        <p>From "{user.company.name}" - Company </p>
                        {/* <p>{user.email}</p>
                        <p>{user.phone}</p> */}
                        <button onClick={() => handleNavigate(user.id)}>To {user.name}'s Page</button>
                        <button 
                        onClick={() => toggleFavorites(user.id)}>
                            {favorites.includes(user.id) ? 'Faforited ❤️' : 'Add 🤍'} 
                        </button>
                    </div>
                ))}
            </div>
        )}
    </div>
  )
}
// _________________________________________________________________
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
    // Wrong Way To Handle Favories:
    // const [toggleFav, setToggleFav] = useState(false)
    // this wrong:
    // This is ONE boolean for all users!
    // which user isFavorited? Alice? Bob? All of them?
    // We don't know!
    // you need to know which specific users are favorite
    // const handleFavBtn = () => {
        //     const fav = [...users, toggleFav]
        //     if(toggleFav){
            //         setToggleFav(false)
            //         setUsers(false)
            //         console.log('false');
            //     } 
            //     else{
                //         console.log('true');
                //         setUsers(true)
                //         setToggleFav(true)
                
                //     }
                // }

                // const favorite = users.filter(user =>
                //     user === true
                // )
                // console.log(favorite);
    // XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX
// ________________________________________________________
    //  
    // let filteredByCity = filteredByName;
    // if (sortByCity !== '') {  // ← If city is selected
    //     filteredByCity = filteredByName.filter(user => 
    //     user.address.city === sortByCity  // ← Compare with selected city
    // );
    // }

    // understanding with real example:
    // All students in school:
    // 1. Alice - Math class - Grade A
    // 2. Bob - Math class - Grade B
    // 3. Charlie - Science class - Grade A
    // 4. David - Math class - Grade C
    // 5. Eve - Science class - Grade A

    // Tacher says 'I want Math students with Grade A'
    // Two condition:
    // 1. Must be in math class
    // 2. Must have grade A
    // How do we find them?

    // ________________________________________________________

    // sort Logic Explanation
    // const [sortOrder, setSortOrder] = useState('none')
    // Possible Values:
    // sort order = 'none' // No sorting (original order)
    // sort order = 'asc' // ascending (A-Z)
    // sort order = 'desc' // Descending (Z-A)

    // the component needs to "remember" which button was clicked
    // when user clicks "A-Z" we need to remember that choice
    // Even after re-renders!

    // ________________________________________________________
//   Wrong:
//   {users.map((user) => (
// //   ↑ Wrong! Shows ALL users always!
//     <div>...</div>
// ))}

// Right:
// {filteredUsers.map((user) => (
// //  ↑ Correct! Shows only filtered users!
//     <div>...</div>
// ))}


// why we don't put filter in the fetch?
// Problem 1: Fetches on every search
// useEffect(() => {
    // if(debounceValue.trim().length >= 2){
        // fetchUser();  // ← API call every time!
    // }
// }, [debounceValue])  // ← Runs on every debounce change

// Problem 2: Filter inside fetch
// const fetchUser = async () => {
    // const response = await fetch('...')
    // const data = await response.json()
    
    // const filtered = data.filter(...)  // ← Filters API data
    // setUsers(filtered)  // ← Saves only filtered
// }

// Make API call on every search (slow!)
// Gets smae 10 users repeatedly (wasteful)
// Loses original data (can't go back without re-fetching)


// Ussue: Loading turns on when user types, but fetch already finished! 
// the data is already there
    // if(e.target.value){
    //     setIsLoading(true); <- set Loading on every keystroke
    // } else{
    //     setIsLoading(false);
    // }

    // The Solution: Compare input vs debounceValue is save in variable to use it.
    // const isSearching = input


    // ❌ REMOVE THIS - Not needed!
    // that's wrogn because when we open tha page the input is empty always
    // and we set here true if the input is empty so it's make an infinite render
    // sometimes we must to check if there is easy way, we don't need to complicate things whan not needed.
    // const [clear, setClear] = useState(false)
    // if(input.trim() === ''){
    //     setClear(true)
    // } else if(input){
    //     setClear(false)
    // }
    // if you can calculate it from existing state, don't create new state.


    // __________________________________________________________ 
    // input characters counter limit and display handling:
    // const [input, setinput] = useState('')
    // const [counter, setCounter] = useState('')

    // think about this:
    // what is input? -> it's string with the user typed
    // what does input.length give you? -> the number of characters

    // So ask yourself: Do you need a seperate inputCounter state? 
    // Or can you calculate if from input?

    // Question 2: When does your counter update?
    // does onKetDown catch all ways text can change?

    // Question 3: What's the simpler way?
    // instead of:
    // track every key press
    // update counter manually
    // handle backspace specially
    // handle paste
    // handle delete
    // handle cut
    // handle select all + replace
    // what if you just use input.length directly?

    // What we want:
    // Track character count manually by listening to key presses
    // what's hapepening:
    // your counter gets out of sync with actual input

    // setConter((prev) => prev + 1) -> counts EVERY key including spaces








// ==================================================================================
// ==================================================================================
// If you want to use the manuall way:

/* 
// ============================================================================
// STATE SETUP
// ============================================================================

// State 1: Stores the actual text that appears in the input
// Example: If user types "Hello", input = "Hello"
const [input, setInput] = useState('')

// State 2: Manually tracks how many characters are in the input
// We're keeping this separate to learn manual tracking
// Example: If "Hello" is typed, inputCounter = 5
// NOTE: In real apps, you'd just use input.length instead!
const [inputCounter, setCounter] = useState(0)


// ============================================================================
// HANDLER 1: onChange - Updates the input value
// ============================================================================

const handleInput = (e) => {
    // e = event object (automatically passed by React when input changes)
    // e.target = the input element itself (the <input> tag)
    // e.target.value = the current text inside the input
    
    // Update the input state with whatever user typed
    // This makes the input a "controlled component"
    setInput(e.target.value);
    
    // NOTE: We're NOT updating counter here!
    // The counter is updated in onKeyDown, onPaste, onCut
}


// ============================================================================
// HANDLER 2: onKeyDown - Fires when user presses ANY key
// ============================================================================

const handleKeyDown = (e) => {
    // e = keyboard event object
    // e.key = which key was pressed (examples: "a", "Backspace", "Shift", "Enter")
    // e.target = the input element
    
    // ────────────────────────────────────────────────────────────────────────
    // STEP 1: Get the current length of the text
    // ────────────────────────────────────────────────────────────────────────
    
    const currentLength = input.length;
    // Example: If input = "Hello", currentLength = 5
    // We need this to calculate the new length after the key press
    
    
    // ────────────────────────────────────────────────────────────────────────
    // STEP 2: Check if user has selected (highlighted) any text
    // ────────────────────────────────────────────────────────────────────────
    
    // selectionStart: The position where selection begins
    // Example: In "Hello", if you select "ell", selectionStart = 1 (starts at 'e')
    // This is a built-in browser property on input elements
    const selectionStart = e.target.selectionStart;
    
    // selectionEnd: The position where selection ends
    // Example: In "Hello", if you select "ell", selectionEnd = 4 (ends after 'l')
    // This is also a built-in browser property
    const selectionEnd = e.target.selectionEnd;
    
    // hasSelection: true if user highlighted some text, false if cursor is just blinking
    // Example: 
    //   "Hello" with cursor blinking → selectionStart = 2, selectionEnd = 2 → hasSelection = false
    //   "Hello" with "ell" selected → selectionStart = 1, selectionEnd = 4 → hasSelection = true
    const hasSelection = selectionStart !== selectionEnd;
    
    // selectedLength: How many characters are selected
    // Example: "ell" selected → selectionEnd (4) - selectionStart (1) = 3
    const selectedLength = selectionEnd - selectionStart;
    
    
    // ────────────────────────────────────────────────────────────────────────
    // STEP 3: Determine if the key pressed will add a character
    // ────────────────────────────────────────────────────────────────────────
    
    // We need to filter out keys that DON'T add characters:
    // - Shift, Ctrl, Alt (modifier keys)
    // - Arrow keys, Home, End (navigation keys)
    // - F1-F12 (function keys)
    // - Escape, Tab, etc.
    
    // e.key.length === 1: 
    //   - Printable characters have length 1: "a", "5", "!", " "
    //   - Non-printable have longer names: "Shift", "ArrowLeft", "F1"
    //   Examples:
    //     e.key = "a" → length = 1 ✅
    //     e.key = "Shift" → length = 5 ❌
    //     e.key = "Enter" → length = 5 ❌
    
    // !e.ctrlKey:
    //   - Checks if Ctrl key is NOT pressed
    //   - We exclude Ctrl combinations like Ctrl+C (copy), Ctrl+V (paste)
    //   - e.ctrlKey is true when Ctrl is held down
    //   Examples:
    //     Just pressing "a" → e.ctrlKey = false ✅
    //     Pressing Ctrl+C → e.ctrlKey = true ❌
    
    // !e.metaKey:
    //   - Checks if Command key (Mac) / Windows key is NOT pressed
    //   - Similar to Ctrl, but for Mac users (Cmd+C, Cmd+V)
    //   - e.metaKey is true when Cmd/Windows key is held down
    
    const isPrintable = e.key.length === 1 && !e.ctrlKey && !e.metaKey;
    // Examples:
    //   Pressing "a" → isPrintable = true ✅
    //   Pressing "Shift" → isPrintable = false ❌
    //   Pressing Ctrl+V → isPrintable = false ❌
    
    
    // ────────────────────────────────────────────────────────────────────────
    // SCENARIO 1: User pressed BACKSPACE key
    // ────────────────────────────────────────────────────────────────────────
    
    if (e.key === 'Backspace') {
        // e.key === 'Backspace' checks if the Backspace key was pressed
        // Backspace deletes character(s) to the LEFT of cursor
        
        if (hasSelection) {
            // User has text selected and pressed Backspace
            // Example: "Hello" with "ell" selected → becomes "Ho"
            // 
            // Calculation:
            //   currentLength = 5 (length of "Hello")
            //   selectedLength = 3 (length of "ell")
            //   New length = 5 - 3 = 2 (length of "Ho")
            setCounter(currentLength - selectedLength);
            
        } else if (selectionStart > 0) {
            // No selection, just cursor blinking
            // selectionStart > 0 means cursor is NOT at the very beginning
            //
            // Example: "Hello" with cursor after "H|ello"
            //   selectionStart = 1 (cursor position)
            //   Pressing Backspace deletes "H" → becomes "ello"
            //   New length = 5 - 1 = 4
            //
            // Why check selectionStart > 0?
            //   If cursor is at position 0 (|Hello), Backspace does nothing!
            //   Can't delete what's not there!
            setCounter(currentLength - 1);
        }
        // If selectionStart = 0 and no selection, do nothing (can't delete)
    }
    
    
    // ────────────────────────────────────────────────────────────────────────
    // SCENARIO 2: User pressed DELETE key
    // ────────────────────────────────────────────────────────────────────────
    
    else if (e.key === 'Delete') {
        // Delete key deletes character(s) to the RIGHT of cursor
        // Different from Backspace which deletes to the LEFT
        
        if (hasSelection) {
            // Same as Backspace when text is selected
            // Example: "Hello" with "ell" selected → becomes "Ho"
            setCounter(currentLength - selectedLength);
            
        } else if (selectionStart < currentLength) {
            // No selection, cursor blinking
            // selectionStart < currentLength means cursor is NOT at the very end
            //
            // Example: "Hello" with cursor "Hel|lo"
            //   selectionStart = 3
            //   currentLength = 5
            //   3 < 5 → true (there's text to the right!)
            //   Pressing Delete removes "l" → becomes "Helo"
            //   New length = 5 - 1 = 4
            //
            // Why check selectionStart < currentLength?
            //   If cursor is at end "Hello|", Delete does nothing!
            //   No characters to the right!
            setCounter(currentLength - 1);
        }
        // If cursor at end and no selection, do nothing
    }
    
    
    // ────────────────────────────────────────────────────────────────────────
    // SCENARIO 3: User pressed a PRINTABLE character (letter, number, etc.)
    // ────────────────────────────────────────────────────────────────────────
    
    else if (isPrintable) {
        // isPrintable = true means user pressed a character that will appear
        // Examples: "a", "5", "!", " " (space), etc.
        
        if (hasSelection) {
            // User has text selected and is typing to replace it
            // Example: "Hello" with "ell" selected, user types "a" → becomes "Hao"
            //
            // Calculation:
            //   currentLength = 5 (length of "Hello")
            //   selectedLength = 3 (length of "ell" being replaced)
            //   +1 = the new character being typed ("a")
            //   New length = 5 - 3 + 1 = 3 (length of "Hao")
            //
            // Logic: Remove selected text, add new character
            setCounter(currentLength - selectedLength + 1);
            
        } else {
            // No selection, just inserting a character at cursor position
            // Example: "Hello" with cursor "Hel|lo", user types "p" → becomes "Helplo"
            //   New length = 5 + 1 = 6
            //
            // Simply adding one more character
            setCounter(currentLength + 1);
        }
    }
    
    // NOTE: If none of the above conditions match:
    //   - User pressed a non-printable key (Shift, Ctrl, Arrow, etc.)
    //   - Counter doesn't change (correct behavior!)
}


// ============================================================================
// HANDLER 3: onPaste - Fires when user pastes text (Ctrl+V or right-click paste)
// ============================================================================

const handlePaste = (e) => {
    // e = clipboard event object
    // This fires when user pastes text into the input
    // NOTE: onKeyDown does NOT fire for paste!
    
    // ────────────────────────────────────────────────────────────────────────
    // STEP 1: Get the text being pasted
    // ────────────────────────────────────────────────────────────────────────
    
    // e.clipboardData: Special object containing clipboard contents
    // getData('text'): Gets the text from clipboard
    // Example: If user copied "World", pastedText = "World"
    const pastedText = e.clipboardData.getData('text');
    
    
    // ────────────────────────────────────────────────────────────────────────
    // STEP 2: Check what text is currently selected (will be replaced)
    // ────────────────────────────────────────────────────────────────────────
    
    // Same as in handleKeyDown - checking selection
    const selectionStart = e.target.selectionStart;
    const selectionEnd = e.target.selectionEnd;
    const selectedLength = selectionEnd - selectionStart;
    
    
    // ────────────────────────────────────────────────────────────────────────
    // STEP 3: Calculate new length after paste
    // ────────────────────────────────────────────────────────────────────────
    
    // Example 1: No selection
    //   input = "Hello" (length 5)
    //   Cursor at position 3: "Hel|lo"
    //   Paste "XXX"
    //   selectedLength = 0 (nothing selected)
    //   pastedText.length = 3
    //   New length = 5 - 0 + 3 = 8 ("HelXXXlo")
    //
    // Example 2: With selection
    //   input = "Hello" (length 5)
    //   "ell" selected
    //   Paste "XXX"
    //   selectedLength = 3
    //   pastedText.length = 3
    //   New length = 5 - 3 + 3 = 5 ("HXXXo")
    //
    // Logic: Remove selected text, add pasted text
    const newLength = input.length - selectedLength + pastedText.length;
    setCounter(newLength);
}


// ============================================================================
// HANDLER 4: onCut - Fires when user cuts text (Ctrl+X or right-click cut)
// ============================================================================

const handleCut = (e) => {
    // e = clipboard event object
    // This fires when user cuts text (copies AND removes it)
    // NOTE: onKeyDown does NOT fire for cut!
    
    // ────────────────────────────────────────────────────────────────────────
    // STEP 1: Determine what text is selected (will be removed)
    // ────────────────────────────────────────────────────────────────────────
    
    const selectionStart = e.target.selectionStart;
    const selectionEnd = e.target.selectionEnd;
    const selectedLength = selectionEnd - selectionStart;
    
    
    // ────────────────────────────────────────────────────────────────────────
    // STEP 2: Calculate new length after cutting
    // ────────────────────────────────────────────────────────────────────────
    
    // Example:
    //   input = "Hello" (length 5)
    //   "ell" is selected
    //   User presses Ctrl+X (cut)
    //   selectedLength = 3
    //   New length = 5 - 3 = 2 ("Ho")
    //   The "ell" is copied to clipboard AND removed from input
    //
    // Logic: Simply remove the selected text
    setCounter(input.length - selectedLength);
}


// ============================================================================
// JSX USAGE
// ============================================================================

// <input 
//     value={input}                // Controlled input - shows current state
//     onChange={handleInput}       // Fires on ANY text change
//     onKeyDown={handleKeyDown}    // Fires when ANY key is pressed
//     onPaste={handlePaste}        // Fires when user pastes (Ctrl+V)
//     onCut={handleCut}            // Fires when user cuts (Ctrl+X)
// />
//
// {inputCounter}/30  // Display the manually tracked counter */
