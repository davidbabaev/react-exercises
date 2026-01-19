import React, { useEffect, useState } from 'react'

export default function RandomCat() {

    const [loading, setLoading] = useState(true)
    const [cat, setCat] = useState(null);

    const randomCat = async () => {

        setLoading(true)

        const response = await fetch('https://catfact.ninja/fact');
        const data = await response.json();
        setCat(data.fact);
        setLoading(false)
    };

    useEffect(() => {
        console.log('Component mounted! Fetching user...');
        randomCat();
    }, [])

    if(loading){
        return <h2>
            Loading...
        </h2>
    }

  return (
    <div>
        <button
            onClick={randomCat}
        >
            Random Cat
        </button>
        <p>Cat Fact: {cat}</p>
    </div>
  )
}
