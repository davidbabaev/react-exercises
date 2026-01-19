import React from 'react'

 function ChildCallBackEx({onClick}) {

    console.log('Child render');
    

  return (
    <div>
        <h2>Child Component</h2>
        <button onClick={onClick}>
            Click in Child (updates parent state)
        </button>
        
    </div>
  )
}

export default React.memo(ChildCallBackEx)
