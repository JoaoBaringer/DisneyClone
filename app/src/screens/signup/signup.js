import React from 'react';
import './css/signup.css';
import signup_logo from './imgs/disney-logo.png';
import { useState } from 'react';
import Footer from '../../components/Footer/Footer';

const SignUp = () => {
    const INITIAL_VALUES = {
        username: "",
        email: "",
        password: ""
    }

    const [values, setvalues] = useState(INITIAL_VALUES)
   

    const handleSubmit = (e) => {
        e.preventDefault();

        const EmailregEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        const PasswordregEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if (EmailregEx.test(values.email) && PasswordregEx.test(values.password)) {
            console.log('ok')
        } else {
            alert('Password,Email or Username is invalid');
        }

    }

    return (
        <div id='SignUp'>

            <form onSubmit={handleSubmit} id='SignUp-form'>

                <div id='SignUp-logo'>
                    <img alt='Disney-logo' src={signup_logo} />
                </div>

                <div id='SignUp-infos'>
                    <h3>Sign Up with your email</h3>
                    <div id='fieldset-SignUp'>
                        <input id='username' required={true} autoComplete='on' onChange={(e) => setvalues({ ...values, username: e.target.value })} type='text' placeholder='Username'></input>
                        <input id='email' required={true} onChange={(e) => setvalues({ ...values, email: e.target.value })} autoComplete='on' type='email' placeholder='Email'></input>
                        <input className='password' required={true} onChange={(e) => setvalues({ ...values, password: e.target.value })} autoComplete='on' type='password' placeholder='Password'></input>
                        <button type='submit'>CONTINUE</button>
                    </div>

                    <div id='sign-up'>
                        <h4>New to Disney+? <a href='/login'>Login</a></h4>
                    </div>

                </div>

            </form>

            <Footer />

        </div>
    )
}

export default SignUp