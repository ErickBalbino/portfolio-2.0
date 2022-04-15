import React from 'react'
import * as styles from './css/Home.css.jsx'

import ProjectCard from '../project/ProjectCard'

export default function Home() {
  return (
    <styles.Container>
      <styles.Introduction>
        <styles.TextWrapper>
          <h1>Welcome to my world!</h1>

          <p>
            Olá, meu nome é Erick, sou desenvolvedor front-end, esse é meu portfólio, seja bem-vindo <span id='underline'>_</span>
          </p>
        </styles.TextWrapper>

        <styles.Image>
          <img src="/assets/images/desenvolvedor.png" alt="imagem de um desenvolvedor codando" />
        </styles.Image>
      </styles.Introduction>

      <styles.Projects>
        <h1>Projetos</h1>

        <ProjectCard srcImage='jogo-da-velha.jpeg' text='Jogo da velha desenvolvido pela linguagem JavaScript!' />
      </styles.Projects>
    </styles.Container>
  )
}
