import React, { useState } from 'react'

export default function RandomNumber() {
    // A guessing game where you guess a random number.

    const [apiNumber, setApiNumber] = useState(null);
    const fetchNumber = async () => {
        console.log('Api Num');
        const response = await fetch('https://www.random.org/integers/?num=1&min=1&max=100&col=1&base=10&format=plain');
        const data = await response.text(); //changed from json to text()
        const number = parseInt(data) // converting the data to number
        setApiNumber(number)
        console.log(number);
        console.log('My Num');
    }

    const [userGuess, setUserGuess] = useState('')
    const inputGuess = (e) => {
        setUserGuess(e.target.value)
    }
    console.log(userGuess);

    // your comparing on every render, not just when button is clicked
    // so we need to take it out from the component boy and put inside function.
    const checkGuess = () => {
        const guess = parseInt(userGuess); //convert to number

        if(apiNumber > guess) {
            console.log('api num bigger');
        } else if(apiNumber < guess){
            console.log('api num smaller');
        } else{
            console.log('api num tie');
        }
    }
  return (
    <div>
        <input 
            type="number" 
            value={userGuess}
            onChange={inputGuess}
        />
        <button
            onClick={fetchNumber}
        >Start Game</button>
        <button
            onClick={checkGuess}
        >Check Guess</button>
    </div>
  )
}
