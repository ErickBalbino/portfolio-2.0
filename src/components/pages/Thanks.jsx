import React from 'react'
import * as styles from './css/Thanks.css.jsx'

export default function Thanks() {
  return (
    <styles.Container>
        <styles.TextContainer>
            <img 
                src="/assets/images/video_obrigado.gif" alt="video obrigado pelo envio da mensagem"
            />

            <div className='text__wrapper'>
                <h1>
                    Obrigado pelo envio, <span>responderei o mais breve possivel!</span>
                </h1>
            </div>
        </styles.TextContainer>
    </styles.Container>
  )
}
