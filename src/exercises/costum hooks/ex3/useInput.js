import { useState } from "react";


function useInputSec(){
    const [value, setValue] = useState('');
    return [value, setValue];
}

export default useInputSec;