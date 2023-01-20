import axios from "axios";

export const getUserList = async () => {
        const {data} = await axios.get('https://jsonplaceholder.typicode.com/users');
        return data
    }

