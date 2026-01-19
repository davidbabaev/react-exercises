import React, { useEffect, useState } from 'react'

export default function JokeFetcherEx() {

    const [punchline, setPunchline] = useState('')
    const [loading, setLoading] = useState(true);

    const fetchJoke = async () => {
        setLoading(true);

        const response = await fetch('https://official-joke-api.appspot.com/random_joke');
        const data = await response.json();
        // console.log(data);

        setPunchline(data.setup + ' ' + data.punchline)
        setLoading(false);
        console.log('fetch');
    }
    
    const handleBtnFetch = () => {
        fetchJoke();
    }

    // run the fetch on first time the page opened
    // so we can see the joke, without that we can't see the joke on first render
    // if we call fetchJoke without useEffect we will get infinity loop of fetches because we in react
    useEffect(() => {
        fetchJoke();
        console.log('fetch Once');
    },[])
    // - Button calls `fetchJoke()` MANUALLY
    // - NOT through useEffect
    if(loading){
        return(
            <p>Loading..</p>
        )
    }

  return (
    <div>
        {/* if we don't use the || so it automatically will show the punch line before the click*/}
        {/* <p>{punchline|| 'Click button to load joke'}</p> */}
        <p>{punchline}</p>
        <button onClick={handleBtnFetch}>Fetch New</button>
    </div>
  )
}
