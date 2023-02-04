import React from "react";
import {useLoaderData} from 'react-router-dom'

function ToDOs() {
    const toDo = useLoaderData();
    const toDoList = toDo.map((toDo) => {
        return (
            <li key={toDo.id}>
                <p>
                    {toDo.title}
                </p>
            </li>
        )
    })
    return (
        <div>{toDoList}</div>
    )
}

export default ToDOs