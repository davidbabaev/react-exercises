import React, { useState } from 'react'

export default function NameInputChild({onGreet}) {


    // create state variable name with initial empty string
    const[name, setName] = useState('')
    // job: store what user is typing right now
    // lifetime: temporary, just for typing
    // porpuse: control the input box.
    // when it changes: every ketStroke
    // what in the input box right now

    // the diffrence here:
    // unless to do setName(e.target.value)
    // we do -> onGreet(name)
    // the {onGreet} came from parent file and doing the mnipulations on the name

    // the button handleGreet
    // call the function handleGreet(name)- then it called
    // to onGreet (a prop from parent file) that will do some mnipulation
    // on our local (name) state that we declare in that file
    

    // what: create a function called handleGreet 
    // why: this function runs the 'Greet' button is clicked
    const handleGreet = () => {
        onGreet(name);
        // onGreet = the function parent gave us
        // (name) = send the typed name to parent
        // this is how child tells parent here's tha name
    };

  return (
    <div>
        <input 
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder='Enter Your Name'
        />
        <button
            onClick={handleGreet}
        >Greet</button>
    </div>
  )
}
