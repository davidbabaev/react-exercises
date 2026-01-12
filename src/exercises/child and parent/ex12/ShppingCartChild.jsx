import React from 'react'

export default function ShppingCartChild() {
    let arr = ['dave', 'noga']
    const purch = (index) => {
        console.log(arr[index] + ' ' + 'purch');
    }
    
  return (
    <div>
        <div>
            {arr.map((name, index) => (
                <div key={index}>
                    <p>{name}</p>
                    <button
                        onClick={() => purch(index)}
                    >Porchuse</button>
                </div>
            ))}
            {}
        </div>
    </div>
  )
}
