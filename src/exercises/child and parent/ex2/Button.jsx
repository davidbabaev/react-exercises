import React from 'react'

export default function Button({onClick}) {
  // {onClick} -> recieve prop
  // this must  match ther prop name from step 2.
  // from here:
  // <Button onClick = {sayHello}/>
  return <button onClick={onClick}>Click Me</button>
  // first onClick -> HTML button onClick
  // second {onClick} -> Your prop variable

  // onClick #1 (left side): HTML attribute (RESERVED WORD - must be "onClick")
  // onClick #2 (right side): Your prop variable (can be ANY name you choosed before inside the parent have to be the same as you chooses in the parent)

}
