import { useState } from "react";
import { preconnect } from "react-dom";

function useCounterAdvanced(initialValue, min, max){
    const [count, setCount] = useState(initialValue);

    const increment = () => {
        if(count < max) {
            setCount((prev) => prev + 1);
        }
    };

    const decrement = () => {
        if(count > min) {
            setCount((prev) => prev - 1);
        }
    };

    const reset = () => setCount(initialValue);
    return [count, increment, decrement, reset];
}

export default useCounterAdvanced;