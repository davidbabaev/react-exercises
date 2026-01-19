import React from 'react'

export default function ColorsApp({onColorPick}) {
    // Child - the recomend work flow is starting from the child code writing 
  return (
    <div>
        <button
            onClick={() => onColorPick('red')}
            style={{backgroundColor: 'red', color: 'white'}}
        >
            Red
        </button>
        <button
            onClick={() => onColorPick('blue')}
            style={{backgroundColor: 'blue', color: 'white'}}
        >
            Blue
        </button>
        <button
            onClick={() => onColorPick('green')}
            style={{backgroundColor: 'green', color: 'white'}}
        >
            Green
        </button>
    </div>
  );
}
