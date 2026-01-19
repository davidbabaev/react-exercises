import { useCallback, useEffect, useState } from "react"

export default function useSelectedRecall2() {

    const[selectedUsers, setSelectedUsers] = useState([]);

    const handleSelect = useCallback((user) => {
      const include = selectedUsers.some(sel => sel.id === user.id);

      // you use include in the check instead of !include
      // we need to check if that user not already include so we can add it to the list
      if(!include){
        setSelectedUsers([...selectedUsers, user])
      }

      // you did empty dependency,
      // you need to fix that - selectedUsers because you use it inside
    }, [selectedUsers])

    const removeSelected = useCallback((selected) => {
      const newList = selectedUsers.filter(sel => sel.id !== selected.id)
      setSelectedUsers(newList);
      
      // this check isn't needed
      // the if(nreList) -> in not nnecessary:
      // if(newList){
        // setSelectedUsers(newList);
      // } 
      
    }, [selectedUsers])


    useEffect(() => {
      const savedSelect = JSON.parse(localStorage.getItem('selectedUsers'))

      if(savedSelect){
        setSelectedUsers(savedSelect)
      }
    }, [])

    useEffect(() => {
      localStorage.setItem('selectedUsers', JSON.stringify(selectedUsers))
    }, [selectedUsers])

  return{selectedUsers, handleSelect, removeSelected}
}
