import { useCallback, useEffect, useState } from "react"

export default function useSelectedRecall4Day2() {

    const[selectedUsers, setSelectedUsers] = useState([]);

    const handleSelect = useCallback((user) => {
        const include = selectedUsers.some(sel => sel.id === user.id);

        if(!include){
            setSelectedUsers([...selectedUsers, user]);
        }
    }, [selectedUsers])

    const handleRemove = useCallback((select) => {
        const updated = selectedUsers.filter(sel => sel.id !== select.id);
        setSelectedUsers(updated)
    }, [selectedUsers])

    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('selectedUsers'))
        if(saved){
            setSelectedUsers(saved);
        }
    }, [])

    useEffect(() => {
        localStorage.setItem('selectedUsers' ,JSON.stringify(selectedUsers))
    }, [selectedUsers])

  return{selectedUsers, handleSelect ,handleRemove}
}
