import React, { useState } from 'react'

export default function RemoveListEx() {

    const [names, setNames] = useState(['dave', 'leon', 'moshe', 'hana']);
    const removeName = (nameToRemove) => {
        const newArray = names.filter((name) => name !== nameToRemove)
        setNames(newArray); //showing the updated filtered array
    }


  return (
    <div>
        {names.map((name, index) => (
            <div key={index}>
                <p>{name}</p>
                <button
                    onClick={() => removeName(name)}
                >Remove</button>
            </div>
        ))}
    </div>
  )
}
