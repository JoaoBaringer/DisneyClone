import React from 'react'
import './css/login.css'
import login_logo from './imgs/disney-logo.png'

const Login = () => {
    return (
        <div id='login'>

            <form id='login-form'>

                <div id='login-logo'>
                    <img alt='Disney-Logo' src={login_logo} />
                </div>

                <div id='login-infos'>
                    <h3>Log in with your email</h3>
                    <div id='fieldset-login'>
                        <input id='email' type='email' autoComplete='on' placeholder='Email'></input>
                        <input id='password' type='password' autoComplete='on' placeholder='Password'></input>
                        <button type='submit'>CONTINUE</button>
                    </div>

                    <div id='sign-up'>
                        <h4>New to Disney+? <a href='/signup'>Sign up</a></h4>
                    </div>

                </div>

            </form>

            <footer id='Footer'>
                
                <div id='Footer-image'>
                    <img alt='Logo-footer' src={login_logo} />
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

export default Login