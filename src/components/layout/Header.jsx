import React from 'react'
import { HashLink } from 'react-router-hash-link'
import * as styles from './css/Header.css.jsx'
import { FaMobile, FaMobileAlt, FaRegWindowClose, FaSlidersH } from 'react-icons/fa'

export default function Header() {

  const openMenu = () => {
    document.getElementById('sidebar').style.transform = 'translate(0, 1%)'
  }

  const closeMenu = () => {
    document.getElementById('sidebar').style.transform = 'translate(0, -100%)'
  }

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
                        <HashLink smooth to='/#projetos' className='item__list list__blue'>
                            Projetos
                        </HashLink>
                    </li>

                    <li>
                        <HashLink smooth to='/#tecnologias' className='item__list list__blue'>
                            Tecnologias
                        </HashLink>
                    </li>

                    <li>
                        <HashLink smooth to='/#sobre' className='item__list list__blue'>
                            Sobre Mim
                        </HashLink>
                    </li>

                    <li>
                        <HashLink smooth to='/#curriculo' className='item__list list__blue'>
                            Curriculo
                        </HashLink>
                    </li>

                    <li>
                        <HashLink smooth to='/#contato' className='item__list' id='button__contato'>
                            Contato
                        </HashLink>
                    </li>
                </ul>
            </nav>
        </styles.Menu>

        <styles.Sidebar>
            <FaSlidersH className='icon__menu' onClick={openMenu} />

            <styles.SidebarContainer id='sidebar'>
                <styles.SidebarHeader>
                    <img src="/assets/images/logo.png" alt="logo portfolio erick balbino" />

                    <FaRegWindowClose className='icon__minimize' onClick={closeMenu} />    
                </styles.SidebarHeader>

                <nav>
                    <ul>
                        <HashLink smooth to='/#projetos' onClick={closeMenu}>
                            <li>Projetos</li>
                        </HashLink>

                        <HashLink smooth to='/#tecnologias' onClick={closeMenu}>
                            <li>Tecnologias</li>
                        </HashLink>

                        <HashLink smooth to='/#sobre' onClick={closeMenu}>
                            <li>Sobre mim</li>
                        </HashLink>

                        <HashLink smooth to='/#curriculo' onClick={closeMenu}>
                            <li>Curriculo</li>
                        </HashLink>

                        <HashLink smooth to='/#contato' onClick={closeMenu}>
                            <li id='button__contato'>
                                Contato
                                <FaMobileAlt className='icone__celular' />
                            </li> 
                        </HashLink>
                    </ul>
                </nav>
            </styles.SidebarContainer>
        </styles.Sidebar>
    </styles.Container>
  )
}
