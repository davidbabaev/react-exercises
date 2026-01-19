import React, { useEffect, useState } from 'react'

// Show a number on screen (starts at 0)
// Have a button that says "Increase"
// When clicked, number goes up by 1
// Save the number to localStorage
// When page loads, load the saved number

export default function SaveNumberLoacl() {

    const [showNum, setShowNum] = useState(0);

    const hnadleIncrease = () => {
        // setShowNum((prev) => prev + 1);
        // The Problem:
        // using prev in setState but showNum in localStorage
        // what is prev?
        // prev is the current value at the moment setState runs
        // - React uses this to calculate the new value
        // - But the actual showNum variable doesn't update until later

        // what's happens:
        // 1. React calls you function with prev = 5
        // 2. your function returns 5 + 1 = 6
        // 3. React says: 'ok i'll update showNum to 6... LATER
        // 4. Right now, showNum is still 5

        const newNum = showNum + 1;
        setShowNum(newNum);
        
        // show what we do, really simple thing:
        // we making showNum + 1;
        // updating state number + 1;
        // and save it inside newNum variable
        // each time we put the current increased number in that variable
        // and each time setShowNum(newNumber)
        // the current icncreased number

        localStorage.setItem('number', newNum);
        //              ↑        ↑         ↑
        //              |        |         └─ Value to save
        //              |        └─────────── Name (like a label)
        //              └──────────────────── Save to browser storage
    }

    useEffect(() => {
        // first time opening page:
        const saved = localStorage.getItem('number')
        
        // -> null (nothing there!)
        
        if(saved){ // -> if null -> false! Don't run code inside
            setShowNum(Number(saved))
            // solution:
            // conver saved to number

            // showNum is a string because local storage save onlt strings
            // so we take it back as a string not as a number
            // then we we click the button we don't calculate number
            // we just chaining strings '11111111'
            // "5" + 1 = "51" -> wrong

            // set string "5" not number 5
        }
    }, [])

    // after we saved something:
    // localStorage.getItem('number') -> "5" (something there!)
    // if ("5") -> true! run code inside

  return (
    <div>
        <p>{showNum}</p>
        <button onClick={hnadleIncrease}>Increase</button>
    </div>
  )

// issues:
// const hnadleIncrease = () => {
    // setShowNum((prev) => prev + 1);  // State updates LATER
    // localStorage.setItem('number', showNum);  // Saves OLD number!
// }

// What happens: 
// showNum = 5;
// User clicks button

//  setShowNum(6) -> will update LATER
// localStorage saves 5 <- Still OLD number! ❌

// After function ends:
// showNum becomes 6
// But localStorage has 5! ❌


// setShowNum((prev) => prev + 1) 
// what happens:
// React says: 'Ok, i'll update to 6, but not right now!'
// React puts this update in a queue (waiting list)

// memory right now:
// showNum = 5 <- still 5! Not changed yet
// update queue: [showNum -> 6] <- Waiting to happen
// function continues immediatly to next line!


    // localStorage.setItem('number', showNum);
        //              ↑        ↑         ↑
        //              |        |         └─ Value to save
        //              |        └────────── Name (like a label)
        //              └──────────────────── Save to browser storage

        // save the current number in the browser's storage, label it as 'number'

    // useEffect(() => {
        // Code here runs when component first appears
    // }, [])

    // What useEffect does:
    // Runs code after component appears on screen
    // [] empty array means: run ONCE when page loads

    // think of it like:
    // Component lifecycle
    // 1. Component created
    // 2. showNum = 0
    // 3. Component appears on screen
    // 4. useEffect runs <- HERE!


    // Before refresh (works fine):
    // showNum = 0 -> NUMBER
    // click button:
    // 0 + 1 = 1  ✅
    // 1 + 1 = 2  ✅
    // 2 + 1 = 3  ✅
    // ...
    // 5 + 1 = 6  ✅

    // localStorage saves "6" (string, but that's OK)
    // why it works: showNum is a number, so + does math!

    // After refresh (Breaks!):
    // useEffect(() => {
        // const saved = localStorage.getItem('number');
        // saved = "6" <- string
        // if(saved){
            //setShowNum(saved); -> Sets string "6", not NUMBER 6 
        // }
    // }, [])

    // NOW:
    // showNum = "6" -> string! ❌

    // Click button:
    // "6" + 1 = "61" (string concatenation, not math!)
    // "61" + 1 = "611"

    // The Problem: loacalStorage Returns strings
    // when you save:
    // localStorage.setItem('number', 6)
    // converts to string: "6"

    // when you load: 
    // localStorage.getItem('number');
    // Returns: "6" (string, not number!)
    // localStorage only stores strings

    // before refresh, still didn't show value from storage
    // component loads
    // showNum = 0 (number)
    // click button:
    // 0 + 1 = 1 (number)

    // ---

    // After refresh:
    // Component loads showNum = 0 (number)

    // useEffect runs:
    // const saved = localStorage.getItem('number);
    // saved = "6" -> string

    // setShoeNum(saved)

    // click button
    // const newNum = showNum + 1;
    // "6" + 1 = "61" ❌ (Concatenation, not math!)



    // ________________________________________________
    // Problem:
    // setShowNum((prev) => prev + 1);

    // what this does:
    // React: Give me a function, i'll call it with the lastest value.
    // Your function:
    // (prev) => prev + 1
    //   ↑        ↑
    //   |        └─ Return: prev + 1
    //   └──────────── React gives you latest value

    // Current State:
    // showNum  = 5

    // You call:
    // setShowNum((prev) => prev = 1);

    // React does:
    // let me get the latest value of showNum
    // it's 5
    // i'll call your function with 5
    // your function returns: 5 + 1 = 6
    // ok i'll update shoeNum to 6

    // The Only Problem: Can't access the new value
    // The prev method works perfectly for updating state!
    // The problem is only when you need to use the new value immidiayly
    // const hnadleIncrease = () => {
        // setShowNum((prev) => prev + 1)
        // problem: What's inside the new value?
        // it's hidden inside the function!
        // can't use it for localStorage!
        // localStorage.setItem('number', ???); <- What do we put here?
    // }

    // open tjhe page on the first time:
    // screen shows: 0
    // lcoal storage: (empty! not 0!)

    // CLICK 1:
    // before click: showNum = 0
    // function runs:
    // - setShoeNum((prev) => prev + 1) -> will set to 1
    // - localStorage.setItem('number', 0) -> saves 0

    
    // on the first click the local will save the first deafult state value 0,  on the screen we will see 1, but in the local 0, because we save in the local not the current number state, we set the previus number brfore the click.




    // Method 2: Direct Calculation
    // const newNum = showNum + 1
    // setShowNum(newNum);

    // what this does:
    // let me calculate the new value NOW
    // here React, set it to this value.


}
