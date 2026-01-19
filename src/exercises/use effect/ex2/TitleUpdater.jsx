import React, { useEffect, useState } from 'react'

export default function TitleUpdater() {

    const [count, setCount] = useState(0);
    const countIt = () => {
        setCount(count + 1)
    }

    useEffect(() => {
        document.title = `Count: ${count}`;
    },[count])
    

  return (
    <div>
        <button
            onClick={countIt}
        >+1</button>
        <p>Count: {count}</p>
    </div>
  )


  //without dependency array:
// runs when component first loaded
// runs when count changes
// runs when any sate changes
// runs when component re-render for any reason
// pronlem: wasteful! runs too many times

// with dependency array:
// runs when component first loaded
// runs when count changes
// does not run when other things change
//better performance!


}
