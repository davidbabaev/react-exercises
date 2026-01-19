import { useAuthEx6 } from "../providers/AuthProviderEx6";
import useUsersEx6 from "./useUsersEx6";


function useAllUsersEx6() {
    const{users: apiUsers, loading} = useUsersEx6();
    const{registeredUsers} = useAuthEx6();

    // combine both arrays
    const allUsers = [...apiUsers, ...registeredUsers];

    return{allUsers, loading}
}

export default useAllUsersEx6;
