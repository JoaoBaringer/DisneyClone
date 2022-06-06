import React from 'react'
import './css/signup.css'
import signup_logo from './imgs/disney-logo.png'
import createUser from '../Validations/SignUpValidations'

const SignUp = () => {
    return (
        <div id='SignUp'>

            <form onSubmit={createUser} id='SignUp-form'>

                <div id='SignUp-logo'>
                    <img alt='Disney-logo' src={signup_logo} />
                </div>

                <div id='SignUp-infos'>
                    <h3>Sign Up with your email</h3>
                    <div id='fieldset-SignUp'>
                        <input id='username' type='text' placeholder='Username'></input>
                        <input id='email' type='email' placeholder='Email'></input>
                        <input id='password' type='password' placeholder='Password'></input>
                        <input id='password' type='password' placeholder='Repeat password'></input>
                        <button type='submit'>CONTINUE</button>
                    </div>

                    <div id='sign-up'>
                        <h4>New to Disney+? <a href='/login'>Login</a></h4>
                    </div>

                </div>

            </form>
        </div>
    )
}

export default SignUp