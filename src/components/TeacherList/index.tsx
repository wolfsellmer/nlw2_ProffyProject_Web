import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';
import './style.css';


function TeacherItem(){
    return(
        <article className="teacher-item">
                    <header>
                        <img src="https://media-exp1.licdn.com/dms/image/C4D03AQE-_ajVNSdWUg/profile-displayphoto-shrink_200_200/0?e=1602115200&v=beta&t=KBgJGPE8sk9UHltfP1QL9qfi0fN4fFgrNXqdIkZjB-Y" alt="Wolf Sellmer"/>
                        <div>
                            <strong>Wolf Sellmer</strong>
                            <span>Português</span>
                        </div>
                    </header>
                    <p>
                    As vezes não sei nem onde eu tô, 
                    <br/><br/> 
                    Eu ensino a galera como não se perder na vida, com lições geográficas simples pra você nunca mais precisar de mapa na sua bela vida.
                    </p>
                    <footer>
                        <p>
                            Preço/Hora 
                            <strong>R$80,00</strong>
                        </p>
                        <button type="button">
                            <img src={whatsappIcon} alt="Whatsapp"/>
                            Entrar em contato
                        </button>
                    </footer>
                </article>
    )
}

export default TeacherItem
