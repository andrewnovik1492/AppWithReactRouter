import axios from "axios";

export const getAlbums = async () => {
    
    const {data} = await axios.get('https://jsonplaceholder.typicode.com/albums')
    return data

}