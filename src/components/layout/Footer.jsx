import React from 'react'
import * as styles from './css/Footer.css.jsx'
import { FaFacebookSquare, FaGithubSquare, FaInstagramSquare, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  return (
    <styles.Container>
        <styles.IconsContainer>
            <FaFacebookSquare className='icon' />
            <FaInstagramSquare className='icon' />
            <FaLinkedin className='icon' />
            <FaGithubSquare className='icon' />
        </styles.IconsContainer>
    </styles.Container>
  )
}
