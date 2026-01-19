import { useState } from "react";

function useToggleAdvanced(initialValue) {
    const [isOn, setIsOn] = useState(initialValue);

    const toggle = () => setIsOn(!isOn);
    const setTrue = () => setIsOn(true);
    const setFalse = () => setIsOn(false);

    return [isOn, toggle, setTrue, setFalse];
}

export default useToggleAdvanced;