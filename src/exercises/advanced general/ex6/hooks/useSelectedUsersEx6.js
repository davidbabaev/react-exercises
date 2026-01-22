import { useCallback, useEffect, useState } from "react";
import { useAuthEx6 } from "../providers/AuthProviderEx6";

 function useSelectedUsersEx6() {

    // 1. get user
    // 2. create variable const userKey = user ? `dsgsd_${user.userId}` : null;
    // 3. if(!userKey){setSelectedUsers(prev => [...prev, user])} else{return prev}
    // 4. [selectedUsers, userKey]
    // 5. useEffect 1 - id(!userKey) return; in the beginning of the function load we load from the localStorage the userKey key
    // 6. useEffect 2 - id(!userKey) return; in the beginning of the function save/ change - we save of change the userkey key to local storage.

    const [selectedUsers, setSelectedUsers] = useState([])

    const {user} = useAuthEx6();

    const selectedUserStorageKey = user ? `selectedUsers${user.userId}` : null;
    
    const selectHandle = useCallback((user) => {
        const include = selectedUsers.some(sel => sel.userId === user.userId);
        
        if(!include){
            setSelectedUsers(prev => [...prev, user])
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
