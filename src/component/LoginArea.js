import React, { useContext } from 'react'
import LoginBox from './LoginBox'
import '../style/login-area.css'
import { AuthContext } from './Home'

function LoginArea() {

    const auth = useContext(AuthContext)


    return (
        <div className="container-fluid d-flex justify-content-center">
            <div className="login-box">
                <div className="fw-bold text-center pb-3">Login Page</div>
                <LoginBox/>
                
                
            </div>
        </div>
        
    )
}

export default LoginArea
