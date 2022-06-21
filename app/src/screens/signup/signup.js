import React from 'react'
import './css/signup.css'
import signup_logo from './imgs/disney-logo.png'
import createUser from '../../Validations/SignUpValidations'

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
                        <input id='username' autoComplete='on' type='text' placeholder='Username'></input>
                        <input id='email' autoComplete='on' type='email' placeholder='Email'></input>
                        <input className='password' autoComplete='on' type='password' placeholder='Password'></input>
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