import React from 'react';
import './css/signup.css';
import signup_logo from './imgs/disney-logo.png';
import { useState } from 'react';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const HandleEmailChange = (e) => {
        setEmail(e.target.value)
    }

    const HandlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const EmailregEx = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/;
        const PasswordregEx = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;

        if (EmailregEx.test(email) && PasswordregEx.test(password)) {
            console.log("Email and Password is valid");
        } else {
            console.log('Password or Email is invalid');
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
                        <input id='username' required={true} autoComplete='on' type='text' placeholder='Username'></input>
                        <input id='email' required={true} value={email} onChange={HandleEmailChange} autoComplete='on' type='email' placeholder='Email'></input>
                        <input className='password' required={true} value={password} onChange={HandlePasswordChange} autoComplete='on' type='password' placeholder='Password'></input>
                        <button type='submit'>CONTINUE</button>
                    </div>

                    <div id='sign-up'>
                        <h4>New to Disney+? <a href='/login'>Login</a></h4>
                    </div>

                </div>

            </form>

            <footer id='Footer'>

                <div id='Footer-image'>
                    <img alt='Logo-footer' src={signup_logo} />
                </div>

                <div className='texts'>
                    <p>Política de Privacidade</p>
                    <p>Proteção de Dados no Brasil</p>
                    <p>Contrato de assinatura</p>
                </div>

                <div className='texts'>
                    <p>Ajuda</p>
                    <p>Dispositivos Compatíveis</p>
                    <p>Sobre o Disney+</p>
                    <p>Aúncios personalizados</p>
                </div>

                <div className='texts'>
                    <p>
                        Disney+ é um serviço pago, baseado em assinatura e sujeito a termos e condições. O serviço Disney+ é comercilizado por The Walt Disney Company(Brasil)Ltda., World Trade Center, Av. Das Nações Unidas, 12.551, 12.555, 12.559, Piso 10, São Paulo/SP - CEP 04578-903, Brasil e CNPJ/M 73.042.962/0004-20
                    </p>
                </div>

                <div className='texts'>
                    <p>
                        Disney. Todos os direitos reservados.
                    </p>
                </div>
            </footer >

        </div>
    )
}

export default SignUp