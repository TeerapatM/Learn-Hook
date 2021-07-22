import React, { createContext, useReducer } from 'react'
import FetchUser from './FetchUser'
import LoginArea from './LoginArea'
import Register from './Register'

//const user = {username: "nervermmy", fullname: "Teerapat Matoum"}


function reducer(state, action){
    
    switch (action.type) {
        case "LOGIN":
            return action.payload
        case "LOGOUT":
            return null
    
        default:
            break;
    }
}

const AuthContext = React.createContext()

function Home() {

    const [authState, dispatch] = useReducer(reducer, null)

    return (
        <AuthContext.Provider value={{authState, dispatch}}>
            <div className="row justify-content-center">
                <LoginArea/>
                <Register/>
                <FetchUser/>
            </div>
        </AuthContext.Provider>
    )
}

export { AuthContext }
export default Home
