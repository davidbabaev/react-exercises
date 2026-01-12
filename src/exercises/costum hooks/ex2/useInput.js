// import { useState } from "react";
// create costum use hook
// export function useInput(initialValue) {
    // const [value, setValue] = useState(initialValue);
    // why we use initialValue parameter:
    // to make it flexible
    // what if you want to start with 'jhon'?
    // const name = useInput(); // can't do it always starts empty.

    // const [value, setValue] = useState(initialValue); -> start with whatever you pass

    // usage:
    // const name - useInput('Jhon'); -> starts with 'Jhon'
    // const age - useInput('25'); -> starts with '25'

    // const handleChange = (e) => {
    //     setValue(e.target.value);
    // };

    // const reset = () => {
    //     setValue(initialValue);
    // };

    // this create an object like:
    // value: whatever the curretn value is
    // onChange: function that changes the value
    // reset: fucntion that resets to initial value

    // return {
    //     value, // same as value: value -> only because it's same name
    //     onChange: handleChange,
    //     reset // same as reset: reset -> only because it's same name
    // }
    // called it value, becuse input needs 'value' prop
    // called onChange because input need 'onChange' prop
    // called reset because it reset the value
// }

import { useState } from "react";
// get useState from react (regular).

function useInput() {
// create a function called useInput
// () means no parameters (for now);

    const [value, setValue] = useState('');
    //      ↑         ↑
    //   Current   Function to
    //    value    change value
    // create state (exectly like you normally do!)

    return [value, setValue];
    //        ↑        ↑
    //    Give back both things
    // 

}

export default useInput
// let others files use this function
