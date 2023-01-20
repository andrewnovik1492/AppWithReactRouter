import axios from 'axios';

export const getPostsList = async () => {
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/posts')
    return data
}