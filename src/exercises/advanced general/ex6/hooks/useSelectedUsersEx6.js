import { useCallback, useEffect, useState } from "react";

 function useSelectedUsersEx6() {

    const [selectedUsers, setSelectedUsers] = useState([])
    
    const selectHandle = useCallback((user) => {
        const include = selectedUsers.some
        (sel => sel.login.uuid === user.login.uuid)
        
        if(!include){
            setSelectedUsers([...selectedUsers, user])
        }
    }, [selectedUsers])
    
    const handleRemove = useCallback((selected) => {
        const include = selectedUsers.some
        (sel => sel.login.uuid === selected.login.uuid)

        if (include) {
            setSelectedUsers(selectedUsers.filter
                (sel => sel.login.uuid !== selected.login.uuid))
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
