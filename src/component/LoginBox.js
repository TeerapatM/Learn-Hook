import React from 'react'
import { useState, useEffect, useContext } from 'react' 
import { AuthContext } from './Home'


const user = {username: "nervermmy", fullname: "Teerapat Matoum"}

function LoginBox() {

    const {authState, dispatch} = useContext(AuthContext)
    //const [auth, setauth] = useState()

    function handleLogin() {
        dispatch({type: "LOGIN", payload: user})
    }

    function handleLogout() {
        dispatch({type: "LOGOUT"})
    }
    
    if(authState == null){
        return(
            <div>
               <div class="mb-3 mx-3">
                    <label for="username" class="form-label fw-bold">Username</label>
                    <input type="" class="form-control" id="username" placeholder=""/>
                </div>
                <div class="mb-3 mx-3">
                    <label for="fullname" class="form-label fw-bold">Full name</label>
                    <input type="" class="form-control" id="fullname" placeholder=""/>
                </div> 
                <div className="row d-flex justify-content-center mx-3 mt-4">
                    <button className="btn btn-primary py-1" onClick={handleLogin}>Login</button>
                </div>
            </div>
            
        )
    }

    return (
        <div>
            <div className="mx-5 my-2 fw-bold">USERNAME : {authState.username}</div>
            <div className="mx-5 my-2 fw-bold">FULL NAME : {authState.fullname}</div>
            <div className="row d-flex justify-content-center mx-3 mt-4">
                <button className="btn btn-primary py-1" onClick={handleLogout}>Logout</button>
            </div>
        </div>
    )
}

export default LoginBox
 