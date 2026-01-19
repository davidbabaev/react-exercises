import React, { useCallback, useEffect, useState } from 'react'

export default function useSelectedRecall() {

    const [selectedUsers, setSelectedUsers] = useState([])

    // using two localstorage, set and get
    // usign two useEffects, one use effect with a dependency, of selctedUsers
    // the handleSelected have to be with a dependency

    // what i'm struggling with:
    // 1. i don't understand what each useEffect deeply need to do
    // 2. i don't understand where to put the set local?
    // 3. my thinking is wrong, im trying to remember what the code looks like in the completed file, im not trying to understand the logi flow and the roles of each part of the code. also if a do understand so handleRemove is removing i not see how to translate it to code.

    // handleSelect logic in words 
    // - someone clicks a user
    // - check: is this user already in my selected list?
    // - if NO -> add them to the list
    // - if YES - do nothing (or you could remove them - toggle behavior)


    // 4 .im i need to use remove from local in the remove function?

    // fisrt useEffect[] -> once when component mounts
    // what it does: load saved data from localStorage
    useEffect(() => {
        const saved = JSON.parse(localStorage.getItem('selectedUsers'));

        if(saved){
            setSelectedUsers(saved)
        }
    }, [])

    // second useEffect[selectedUsers] -> every time selectedUsers changes
    // save current data to localStorage
    useEffect(() => {
        localStorage.setItem('selectedUsers', JSON.stringify(selectedUsers))
    }, [selectedUsers]) // <- runs every time selectedUsers changes 


    const handleSelect = useCallback((user) => {
        const include = selectedUsers.some(sel => sel.id === user.id)
        
        if(!include){
            setSelectedUsers([...selectedUsers, user])
        }
        
    }, [selectedUsers])
    
    const handleRemove = useCallback((selected) => {
        // some() returns true/false - not useful here
        // filter() returns a new array without the removed user
        const newList = selectedUsers.filter(sel => sel.id !== user.id)
        setSelectedUsers(newList)
    }, [])


    return {selectedUsers, handleSelect, handleRemove}
}
