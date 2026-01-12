import { useState } from "react";

function useToggle() {
    const [isOn, setIsOn] = useState(false);
    // toggle from false to true, and back from true to false.. each set call
    const toggle = () => setIsOn(!isOn)

    return [isOn, toggle];
}

export default useToggle;