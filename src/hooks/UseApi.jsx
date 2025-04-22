import axios from "axios";
import { useEffect, useState } from "react";

const UseApi = (url) => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const getUser = async () => {
        try {
            setLoading(true)
            const {data} = await axios.get(url); 
            setUsers(data)
        } catch (error) {
            setError(error?.message);
            // console.log(error);
            
        } finally {
            setLoading(false); 
        }
    }
    useEffect(() => {
        getUser()
    }, [])
    return { users, loading, error };
}
export default UseApi;