import React from 'react'
import Button from './Button'

export default function AppBtns() {

    const sayHello = () => {
        alert("Hello From Parent!")
    }

  return (
    <div>
        <h1>Parent Component</h1>
        <Button onClick = {sayHello}/>
        {/* hey Button component, im giving you a prop called onClick and its value is the seyHello() function */}
        
    </div>
    // onClick -> is a prop
    // {sayHello} -> is function
  )


  // 1. parent has function: sayHello()
  // 2. parent passes it to child: <Button onClick={satHello}/>
  // 3. Child receives it: function Button({onClick})
  // 4. User clicks button -> parent's funtion runs.
  // 5. user clicks button -> parent's function runs.


  // You can name the prop anything:
  // the prop name is you choice.
  // <Button onClick={sayHello}/>
  //can be:
  // <Button handleClick={sayHello}/>
  // can be:
  // <Button doSomething={sayHello}/>

  // Theory: Why use function props?
  // in React, data flows down (parent to child via props).
  // but what if child needs to tell parent something?

  // Examples:
  // form input need to tell parent what user typed
  // modal needs to tell parent 'close me'
  // list item needs to tell parent 'i was clicked'
  // child component needs to tell parent "update you state"
  // solution: parent gives child function. child calls it to send back up.

  // ______________________________________________________________
  // Regular Props (Data Down):
  // porpuse:
  // Give child infirmation to dispaly, Flow: one-way (parent -> child) child can: read and display child cannot change the data.
  
  // real world example:
  // display a users name
  // show a product price
  // display an image
  // ______________________________________________________________

  // Function props:
  // <Child onUpdate={handleUpdate} />


// 🎯 When to Use Each:
// Use Regular Props When:
// ✅ Child just needs to display data
// ✅ Child doesn't need to change anything
// ✅ One-way flow is enough


}
