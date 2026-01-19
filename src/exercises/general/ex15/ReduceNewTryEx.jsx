import React, { useState } from 'react'

export default function ReduceNewTryEx() {

    const [items] = useState([
        { id: 1, name: "Watermelon", color: "red" },
        { id: 2, name: "Banana", color: "yellow" },
        { id: 3, name: "Cherry", color: "red" },
        { id: 4, name: "Lemon", color: "yellow" },
        { id: 5, name: "Strawberry", color: "red" }
    ]);

    const groupsColors = items.reduce((objects ,item) => {
        const color = item.color; 
        console.log(color);
        
        // we check if the object have a value: 'red'
        // color = 'red'
        // if(!objects['red'] doesnt exist yet)
        if(!objects[color]){
            // Does objects have a "red" property?
            // NO! It's empty!
            // So create it:
            // objects["red"] = []
            // objects = {red: [] }  // NOW it exists!

            objects[color] = []
        }
        
        objects[color].push(item);
        return objects;
    }, {})

    console.log(groupsColors);
    


  return (
    <div>
        <h1>Colors</h1>
        <h2>Red</h2>
        {groupsColors.red.map((item, index) => (
            <div key={index} >
                <p>{item.name}</p>
            </div>
        ))}
        <h2>Yellow</h2>
        {groupsColors.yellow.map((item, index) => (
            <div key={index} >
                <p>{item.name}</p>
            </div>
        ))}
    </div>
  )
}
