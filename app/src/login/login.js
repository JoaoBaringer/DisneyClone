import React from 'react'
import './css/login.css'
import login_logo from './imgs/disney-logo.png'
import createUser from '../Validations/LoginValidations'

const Login = () => {
    return (
        <div id='login'>

            <form onSubmit={createUser} id='login-form'>

                <div id='login-logo'>
                    <img alt='Disney-Logo' src={login_logo} />
                </div>

                <div id='login-infos'>
                    <h3>Log in with your email</h3>
                    <div id='fieldset-login'>
                        <input id='username' type='text' placeholder='Username'></input>
                        <input id='email' type='email' placeholder='Email'></input>
                        <input id='password' type='password' placeholder='Password'></input>
                        <button type='submit'>CONTINUE</button>
                    </div>

                    <div id='sign-up'>
                        <h4>New to Disney+? <a href='/signup'>Sign up</a></h4>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default Login