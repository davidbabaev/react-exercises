import React, { useState } from 'react'

export default function CheckFruitsEx() {
    const [fruits, setFruits] = useState(['apple', 'watermelon', 'peach']);
    const [favorite, setFavorite] = useState(['apple'])

    const [result, setResult] = useState('');
    const checkResult = (fruit) => {
        if(favorite.includes(fruit)){
            setResult(fruit);
            console.log('yes ', fruit, ' is favorite');
        } else {
            console.log('no', fruit, ' is not favorite');
            
        }
    }

  return (
    <div>
        {fruits.map((fruit, index) => (
            <div key={index}>
                <p>{fruit}</p>
                <button onClick={() => checkResult(fruit)}>Click</button>
                {result.includes(fruit) && result === fruit && (<p>yes {fruit} is Favorite</p>)}
            </div>
        ))}
    </div>
  )
}
