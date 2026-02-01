import { useCallback, useEffect, useState } from "react";
import { useAuthEx6 } from "../providers/AuthProviderEx6";

 function useSelectedUsersEx6() {

    const [selectedUsers, setSelectedUsers] = useState([])
    const {user} = useAuthEx6();

    const selectedUserStorageKey = user ? `selectedUsers_${user.userId}` : null;
    
    const selectHandleUser = useCallback((user) => {
        setSelectedUsers((prev) => {
            const include = prev.some(sel => sel.userId === user.userId)

            if(!include){
                return [...prev, user]
            }

            // small syntax fix:
            // the: prev = prev.... <-- is unecessary. just: prev.filter()
            return prev = prev.filter(userCard => userCard.userId !== user.userId)
        })
    }, [])
    
    const handleRemoveUser = useCallback((selectedUser) => {
        setSelectedUsers((prev) => {
            return prev.filter(sel => sel.userId !== selectedUser.userId);
        })
    }, [])

    useEffect(() => {
        if(!selectedUserStorageKey) return;

        const savedSelected = JSON.parse(localStorage.getItem(selectedUserStorageKey))
        if(savedSelected){
            setSelectedUsers(savedSelected)
        }
    }, [selectedUserStorageKey])

    useEffect(() => {
        if(!selectedUserStorageKey) return;

        localStorage.setItem(selectedUserStorageKey, JSON.stringify(selectedUsers))
    }, [selectedUsers, selectedUserStorageKey])

  return {selectedUsers, selectHandleUser, handleRemoveUser}
}

export default useSelectedUsersEx6;
