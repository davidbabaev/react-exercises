import { useState } from "react";

function useLocalStorage2(key, initialValue) {


  // im not sure where to use getItem or setItem?
  
  const saved = localStorage.getItem(key)
  // setlocal storage
  const savedValue =  saved ? JSON.parse(saved) : initialValue;
  
  const [value, setValue] = useState(savedValue)
  
  // function updateValue with (newValue) parameter
  const updateValue = (newValue) => {
    setValue(newValue);
    // get local storage if exist
    localStorage.setItem(key, JSON.stringify(newValue));
  }

  return [value, updateValue];
}

export default useLocalStorage2;
