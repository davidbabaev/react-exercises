import { useCallback, useEffect, useState } from "react"

export default function useSelectedRecall5Day3() {

    const[selectedUsers, setSelectedUsers] = useState([]);

    const handleSelect = useCallback((user) => {
        const include = selectedUsers.some(sel => sel.login.uuid === user.login.uuid)

        if(!include){
            setSelectedUsers([...selectedUsers, user])
        }
        
    }, [selectedUsers])

    const handleRemove = useCallback((select) => {
        const removed = selectedUsers.filter(sel => sel.login.uuid !== select.login.uuid) 
        setSelectedUsers(removed)

    }, [selectedUsers])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('selectedUsers'))
        if(saved){
            setSelectedUsers(saved)
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('selectedUsers', JSON.stringify(selectedUsers))
    }, [selectedUsers])

  return{selectedUsers, handleSelect, handleRemove}
}
