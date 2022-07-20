import React from 'react'
import './css/Footer.css'
import DisneyLogo from './imgs/disney-logo.png'

const Footer = () => {
    return (
        <div id='footer'>
            <img src={DisneyLogo} />
            <div id='texts'>
                <div className='item-footer'>
                    <p>Política de privacidade</p>
                    <p>Proteção de dados no Brasil</p>
                    <p>Contrato de assinatura</p>
                </div>
                <div className='item-footer'>
                    <p>Ajuda</p>
                    <p>Dispositivos Móveis</p>
                    <p>Sobre o Disney+</p>
                    <p>Anúncios personalizados</p>
                </div>
                <div className='item-footer'>
                    <p>
                        Disney+ é um serviço pago, baseado em assinatura e sujeito a termos e condições. O serviço Disney+ é comercializado por The Walt Disney Company(Brasil)Ltda, World Trade Center, Av das Nações Unidas, 12.551, 12.555, 12.559, Piso 10, São Paulo/SP - CEP 04578-903, Brasil e CNPJ/M 73.042.962/0004-20
                    </p>
                </div>
                <div className='item-footer'>
                    <p>© Disney. Todos os direitos reservados.</p>

                </div>
            </div>
        </div>
    )
}

export default Footer