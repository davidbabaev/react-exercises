import React, { useState } from 'react'

export default function RandomJoke() {

    const [joke, setJoke] = useState(null); 
    const [showJoke, setShowJoke] = useState(false);

    const fetchJoke = async () => {
        const response = await fetch('https://official-joke-api.appspot.com/random_joke')
        const data = await response.json();

        setJoke(data.setup + data.punchline);


        if(joke){
            console.log(joke);
        }
        
    }

  return (
    <div>
        <button
            onClick={fetchJoke}
        >Fetch Joke</button>
        <p>{joke}</p>
    </div>
  )
}
