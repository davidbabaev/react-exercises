// create the custom hook, that track the browser window size and updates when the window is resize


// the hook should:
// 1. Track the window width
// 2. Update the window height
// 3. Ipdate when the user resizes the browser window
// 4. Return both width and height.

// Hint: you need:
// useState for storing width and height
// window.innerWidth and window.innerheight to get window size
// an event listener for 'resize' event


// how the value will be updated? 
// should the user have to click a btn to check the size? -> NO
// should it updated automatically when they resize? -> Yes
// you need the window size to update itself when the window resizes

// we don't need two seperate functions for width and heigth, they always change together
// we need one function to update both

import { useState } from "react";

function useWindowSize(){

    const[height, setHeight] = useState(window.innerHeight)
    const[width, setWidth] = useState(window.innerWidth)

    const handleSize = () => {
        setHeight(window.innerHeight)
        setWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleSize);



    return[height, width, handleSize]
}

export default useWindowSize;