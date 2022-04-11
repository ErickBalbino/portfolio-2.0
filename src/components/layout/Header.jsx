import React from 'react'
import { HashLink } from 'react-router-hash-link/dist/react-router-hash-link.cjs.development'
import * as styles from './css/Header.css.jsx'

export default function Header() {
  return (
    <styles.Container id='header'>
        <styles.Logo>
            <HashLink smooth to='/#'>
                <img 
                    src="/assets/images/logo.png" 
                    alt="logo imagem dev azul portfolio erick balbino da silva" 
                />
            </HashLink>
        </styles.Logo>

        <styles.Menu>
            <nav>
                <ul>
                    <li>
                        <HashLink smooth to='/#projetos' className='item__list'>
                            Projetos
                        </HashLink>
                    </li>

                    <li>
                        <HashLink smooth to='/#tecnologias' className='item__list'>
                            Tecnologias
                        </HashLink>
                    </li>

                    <li>
                        <HashLink smooth to='/#sobre' className='item__list'>
                            Sobre Mim
                        </HashLink>
                    </li>

                    <li>
                        <HashLink smooth to='/#curriculo' className='item__list'>
                            Curriculo
                        </HashLink>
                    </li>

                    <li>
                        <HashLink smooth to='/#contato' className='item__list' id='contato'>
                            Contato
                        </HashLink>
                    </li>
                </ul>
            </nav>
        </styles.Menu>
    </styles.Container>
  )
}
