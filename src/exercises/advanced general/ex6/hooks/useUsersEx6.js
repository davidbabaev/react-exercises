import { useEffect, useState } from "react";

 function useUsersEx6() {

    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(false)

    const fetchUsers = async () => {
        setLoading(true)
        try{
            const response = await fetch('https://randomuser.me/api/?results=30&seed=abc');
            const data = await response.json()
            setUsers(data.results);
            localStorage.setItem('cachedUsers', JSON.stringify(data.results))
        }
        catch (err){
            console.log(err);
        }
        setLoading(false)
    }

    useEffect(() => {
        const cached = JSON.parse(localStorage.getItem('cachedUsers'))

        if(cached){
            setUsers(cached)
        } else{
            fetchUsers();
        }
    }, [])

  return {users, loading}
}

export default useUsersEx6;
