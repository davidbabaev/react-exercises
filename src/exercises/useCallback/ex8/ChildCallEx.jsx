import React from 'react'

function ChildCallEx({onClick}) {

    console.log('re-render');
    

  return (
    <div>
        <button onClick={() => onClick()}>+1</button>
        <button onClick={() => {console.log('hell');}}>Click</button>
    </div>
  )
}

export default React.memo(ChildCallEx)


// you see re-render log on every click beacuse handle click is created NEW every render.
// React.memo checks: 'dif props cahnage?'
// react compare: old onClick === new onClick?
// they are diffrent functions (same code, but diffrent reference in memory), so React.memo think props changed - child re-renders.
// fix it -> wrap handleClick with useCallback

// the syntax:

// useCallback(() => {}, [])
// actually looks like useEffect

