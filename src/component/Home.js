import React, { createContext, useReducer } from 'react'
import LoginArea from './LoginArea'

//const user = {username: "nervermmy", fullname: "Teerapat Matoum"}


function reducer(state, action){
    if(action.type == "LOGIN"){
        //return action.payload
        return ({username: "My", fullname:"Teerapat"})
    }
    if(action.type == "LOGOUT"){
        return null
    }
    return state
}

const AuthContext = React.createContext()

function Home() {

    const [authState, dispatch] = useReducer(reducer, null)

    return (
        <AuthContext.Provider value={{authState, dispatch}}>
            <LoginArea/>
        </AuthContext.Provider>
    )
}

export { AuthContext }
export default Home
