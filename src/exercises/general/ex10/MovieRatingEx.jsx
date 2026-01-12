import React, { useRef, useState } from 'react'

export default function MovieRatingEx() {

    const inputRef = useRef(null)

    const[items, setItems] = useState([]) 

    const handleItems = () => {
        if(input === '') return

        const isExisting = items.find((objectItem) => {
            return objectItem.name.toLowerCase() === input.toLowerCase()
        })
        // isExisting will be the same object that we already have. if we will have the same word

        if(isExisting){
            // my current step
            // if object already exist We want to INCREASE this current object rating
            // check if already max rating:
            if(isExisting.rating >= 5){
                // max rating reached - do nothing
                setInput('');
                inputRef.current.focus();
                return;
            }

            // we found isExisting and it's not 5 stars yet
            // now we need to update this current object rating, increase the rating and save it in the state
            setItems(items.map((item) => {
                return(
                    item.id === isExisting.id
                    ? {...item, rating: item.rating + 1}
                    : item // -> id the current id not === to existing id keep the old object item as it is
                )
            }))

            // if we not will use here the return, so the Code will continue to this line and will run it too - so it's create new movie istead just increase the stars:
            // setItems([...items, {name: input, id: Date.now(), rating: 0}])
            // Updates rating ✅
            // ALSO adds new movie ❌ (Bug!)
            // you will have two movies with the same name
            // items = [
            //     { name: "Inception", rating: 3, id: 123 },
            //     { name: "Inception", rating: 1, id: 456 } ← Duplicate! Bug!
            // ]
            return; // --> stop here don't continue 
        } // --> End of this block because the return
        
        // This code is SKIPPED if movie exists.
        setItems([...items, {name: input, id: Date.now(), rating: 1}])
        console.log(d);
        
    }

    const [input, setInput] = useState('')
    const handleInput = (e) => {
        setInput(e.target.value)
    }

    const handleRemove = (taskId) => {
        const filtered = items.filter((item) => {
            return item.id !== taskId
        })
        setItems(filtered)
    }

    // const [rating, setRating] = useState('&#9733;')
    // console.log(items);
    


  return (
    <div>
        <input 
            type="text"
            autoFocus    
            value={input}
            ref={inputRef}
            onChange={handleInput}
        />
        <button
            onClick={() => {
                inputRef.current.focus()
                setInput('')
                handleItems()
            }}
        >Add Movie</button>
        {items.length === 0 ? (
            <p>no tasks yet</p>
        ) : (
            <div>
                {items.map((item, index) => (
                    <div style={{border: '1px solid black', margin: '10px', width: '40%', borderRadius: '20px', padding: '20px'}} key={item.id} >
                        <p>{item.name}</p>
                        <p>ID: {item.id}</p>
                        <p>Rating: {'⭐'.repeat(item.rating)}</p>
                        <button
                            onClick={() => {
                                handleRemove(item.id)
                                inputRef.current.focus();
                                setInput('')
                            }}
                        >Remove</button>
                    </div>
                ))}
            </div>
        ) }
    </div>
  )



//   what is find() doing:
// check if a movie with this name already exists in the array.

// items = [
// {name: wolf, id: 123, rating: 2+}
// ]
// input = 'wolf' --> user typed this
// 
// objectItem = { name: "wolf", id: 123, rating: 2 }

// objectItem.name.toLowerCase() === input.toLowerCase()
// "wolf" === "wolf"  // TRUE!

// // Stop searching! Return this object
// isExisting = { name: "Inception", id: 123, rating: 2 }

// if found:
// isExisting = {name: 'wolf', id:123, rating: 2 }

// if not found:
// isExisting = undefined

// what to do if(isExisting)
// the Logic:
// if(isExisting){
// movie Exists!
// we want to increase the rating
// but don't go above 5 stars
// }
}
