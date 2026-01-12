import React, { useEffect, useState } from 'react'

export default function RandomDog() {

    // const [loading, setLoading] = useState(true);
    const [dog, setDog] = useState(null);
    const [showMessage, setShowMessage] = useState(false);

    const fetchDog = async () => {

        // console.log('loading while fetching');
        // setLoading(true);

        setShowMessage(true); // turn on the message

        const response = await fetch('https://dog.ceo/api/breeds/image/random');
        const data = await response.json()
        setDog(data.message)
        console.log(data);

        // setLoading(false)
    }

    // useEffect(() => {
    //     console.log('render');
    //     fetchDog() // this runs automatically
    //     // This code runs AUTOMATICALLY when component loads
    //     // useEffect with [] = "Do this automatically when component first appears"
    //     // If you want to fetch ONLY when button is clicked, don't use useEffect!
    // },[])

    // if(loading){
    //     return <h2>
    //         Loading...
    //     </h2>
    // }

    // if(!dog){
    //     return<div>
    //             <h2>
    //                 No Dog Yet
    //             </h2>
    //         </div> 
    // }

  return (
    <div>
        <button
            onClick={fetchDog}
        >
            Load dog
        </button>
        {showMessage && <p>Dog Fetched! {dog}</p>}
        {dog && <img src= {dog}></img>}
    </div>
  )
}
