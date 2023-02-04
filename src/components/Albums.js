import React from 'react';
import {useLoaderData} from 'react-router-dom';
import './styles/album.scss'

function Albums(props) {
    const album = useLoaderData();
    const albumList = album.map((album) => {
        return(
            <li key={album.id}>
                {album.title}
            </li>
        )
    })
    return (
        <div className='albumList'>
            {albumList}
        </div>
    )
}

export default Albums 