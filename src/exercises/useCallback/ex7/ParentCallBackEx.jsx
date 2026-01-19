import React, { useCallback, useState } from 'react'
import ChildCallBackEx from './ChildCallBackEx';

export default function ParentCallBackEx() {

    const[parentCount, setParentCount] = useState(0);
    const[childCount, setChildCount] = useState(0);

    // with useCallback - function cached
    const handleChildClick = useCallback(() => {
        console.log('Child button clicked');
        setChildCount(prev => prev + 1);
    }, [])

    console.log('Parent rendered');
    

  return (
    <div>
        <h1>Parent Component</h1>
        <p>Parent Count: {parentCount}</p>
        <button onClick={() => setParentCount(parentCount + 1)}>
            Click in parent
        </button>

        <hr />
        <p>{childCount}</p>

        <ChildCallBackEx onClick = {handleChildClick}/>
    </div>
  )
}
