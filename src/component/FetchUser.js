import React from 'react'
import { useState, useEffect, useReducer } from 'react' 
import useFetch from './useFetch'

function FetchUser() {


    const data = useFetch("https://jsonplaceholder.typicode.com/users")

    function reducer(state, action) {
        switch (action.type) {
            case "fetch":
                console.log(data);
                return data 
            case "delete":
                return null
            default:
                break;
        }
    }
    
    const [userState, dispatch] = useReducer(reducer, null)

    return (
        <div>
            <button className="m-3" onClick={()=>dispatch({type: "fetch"})}>fetch</button>
            <button className="m-3" onClick={()=>dispatch({type: "delete"})}>delete</button>
            <ul>
                {userState ? userState.map(user => (<li key={user.id}>{user.name}</li>))
                : null
                }
                
            </ul>
        </div>
    )
}

export default FetchUser
