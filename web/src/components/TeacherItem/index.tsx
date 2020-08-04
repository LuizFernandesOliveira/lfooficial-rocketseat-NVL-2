import React from 'react'

import './styles.css'

import WhatsappIcon from '../../assets/images/icons/whatsapp.svg'

function TeacherItem(){
    return (
        <article className="teacher-item">
                    <header>
                        <img src="" alt="" />
                        <div>
                            <strong>Luiz Fernandes de Oliveira</strong>
                            <span>Matemática</span>
                        </div>
                    </header>
                    <p>
                        Este é o espaço para o professor
                    </p>
                    <footer>
                        <p>
                            Preço/hora
                            <strong>R$ 80,00</strong>
                        </p>
                        <button type="button">
                            <img src={WhatsappIcon} alt="WhatsApp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}
export default TeacherItem