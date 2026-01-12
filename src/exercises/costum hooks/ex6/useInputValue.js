import { useState } from "react";

function useInputValue(initialValue){
    const [value, setValue] = useState(initialValue);

    const handleChange = (e) => setValue(e.target.value);

    const reset = () => {
        setValue(initialValue);
    }

    return [value, handleChange, reset];



}

export default useInputValue;