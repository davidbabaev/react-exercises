import { useState } from "react";

function useHover(){
    const [isHovering, setIsHovering] = useState(false);
    // what: create state to track if mouse is hovering
    // start with: false (not hovering)
    const onMouseEnter = () => {
        setIsHovering(true)
        console.log('true');
    };

    // what: function that runs when mouse leave element
    // does: set hovering to false
    const onMouseleave = () => {
        setIsHovering(false)
        console.log('false');
    };

    return [isHovering, onMouseEnter, onMouseleave];
    // position 0: isHovering (true/ false)
    // position 1: onMouseEnter (function)
    // position 2: onMouseLeave (function)
}

export default useHover;