import React from 'react'

 function ChildCallback({handleCount}) {

    console.log('child rendered');
    
  return (
    <div>
        <button onClick={handleCount}>Click</button>
        <button onClick={
            () => {console.log('click');
            }
        }>Click2</button>
    </div>
  )
}

export default React.memo(ChildCallback)
// without react.memo the children component rerendered on the prop btn clicks
// parent re-renders
// child re-renders

// with react.memo
// parent rerenders
// no child log