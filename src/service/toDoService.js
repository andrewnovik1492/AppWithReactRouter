import axios from "axios";

export const getToDo = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/todos')
    return data
}
