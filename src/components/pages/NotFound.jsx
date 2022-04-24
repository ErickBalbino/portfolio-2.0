import React from 'react'
import * as styles from './css/NotFound.css.jsx'
import { HashLink } from 'react-router-hash-link'
import { FaArrowLeft } from 'react-icons/fa'

export default function NotFound() {
  return (
    <styles.Container>
        <h1>Ops, Esta página não foi encontrada! Error 404</h1>
        
        <HashLink smooth to='/'>
            <button>
                <FaArrowLeft className='icon' />
                Voltar
            </button>
        </HashLink>
    </styles.Container>
  )
}
