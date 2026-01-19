import React, { useCallback, useEffect, useState } from 'react'

export default function useSelectedRecall3Day2() {

    // state for saving selectedUsers with []
    const[selectedUsers, setSelectedUsers] = useState([]);

    // function for handle select button inside users list
    const handleSelect = useCallback((user) => {
        const include = selectedUsers.some(sel => sel.id === user.id);
        
        if(!include){
            setSelectedUsers([...selectedUsers, user])
        }
    }, [selectedUsers])


    // function for handle remove from selected list, remove from the selected state list
    const handleRemove = useCallback((select) => {
        const updated = selectedUsers.filter(sel => sel.id !== select.id) 
        setSelectedUsers(updated)
        
        // Unnecessary if statement:
        // the filter always run an array (even if empty), so the if(updated) check isn't needed - just set it directly.
        // if(updated){
        //     setSelectedUsers(updated)
        // }
    }, [selectedUsers])

    
    // useEffect that will run first of all on mount and show the local saved list if exist
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('selectedUsers'))

        if(saved){
            setSelectedUsers(saved);
        }
    }, [])
    
    // useEffect that handle selectedUsers changing with [selectedUsers] dependency
    // this will set in the localStorage what we need and also set in the state this new updated list
    useEffect(() => {
        // const updated = localStorage.setItem('selectedUsers',JSON.stringify(selectedUsers))
        localStorage.setItem('selectedUsers',JSON.stringify(selectedUsers))
        
        // this is a critical bug, 
        // lcoalStorage setItem() returns undefined, not the data.
        // and you don't need to setSelectedUsers here at all, the state is already changed,
        // which is what triggered this effect.
        // your'e just saving to localStorage
        // setSelectedUsers(updated) // <- this is a problem!
    }, [selectedUsers])

  return{selectedUsers, handleSelect, handleRemove}
}
