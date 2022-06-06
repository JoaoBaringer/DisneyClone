import React from 'react'
import './css/Footer.css'
import DisneyLogo from './imgs/disney-logo.png'

const Footer = () => {
    return (
        <div id='Footer'>

            <div id='Footer-image'>
                <img src={DisneyLogo} />
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

        </div>
    )
}

export default Footer