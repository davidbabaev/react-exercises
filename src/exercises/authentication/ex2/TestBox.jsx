import React from 'react'
import Box from './Box'

export default function TestBox() {
  return (
    <div>
        <Box>
            <h1>I am title</h1>
        </Box>

        <Box>
            <p>Hello!</p>
            <p>Hello world!</p>
        </Box>

        <Box>
            <button>Click</button>
        </Box>
    </div>
  )
}

// you have one Box component. but you used it three times with diffrent content:
// Box doesn't know what you'll put inside. it just wraps it with a blue border.
// now compare (hardcoded):
// function BoxWithTitle() {
//     return <div><h1>i am title</h1></div>
// }

// function BoxWithpar() {
//     return <div><p>par</p></div>
// }

// function BoxWithTitle() {
//     return <div><button>Click</button></div>
// }

// with children (flexible)
// onw component use it for anything:
        // <Box>
        //     <h1>I am title</h1>
        // </Box>

        // <Box>
        //     <p>Hello!</p>
        //     <p>Hello world!</p>
        // </Box>

        // <Box>
        //     <button>Click</button>
        // </Box>
