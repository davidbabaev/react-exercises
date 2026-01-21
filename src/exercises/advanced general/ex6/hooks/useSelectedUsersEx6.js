import { useCallback, useEffect, useState } from "react";

 function useSelectedUsersEx6() {

    const [selectedUsers, setSelectedUsers] = useState([])
    
    const selectHandle = useCallback((user) => {
        const include = selectedUsers.some
        (sel => sel.userId === user.userId)
        
        if(!include){
            setSelectedUsers([...selectedUsers, user])
        }
    }, [selectedUsers])
    
    const handleRemove = useCallback((selected) => {
        const include = selectedUsers.some
        (sel => sel.userId === selected.userId)

        if (include) {
            setSelectedUsers(selectedUsers.filter
                (sel => sel.userId !== selected.userId))
        }
    }, [selectedUsers])

    useEffect(() => {
        const savedSelected = JSON.parse
        (localStorage.getItem('selectedUsers'))
        if(savedSelected){
            setSelectedUsers(savedSelected)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem
        ('selectedUsers', JSON.stringify(selectedUsers))
    }, [selectedUsers])

  return {selectedUsers, selectHandle, handleRemove}
}

export default useSelectedUsersEx6;
