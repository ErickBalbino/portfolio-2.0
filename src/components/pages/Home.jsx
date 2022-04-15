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

      <styles.Projects id='projetos'>
        <h1>Projetos</h1>

        <styles.ProjectsWrapper>
          <ProjectCard
            srcImage='jogo-da-velha.jpeg'
            text='Jogo da velha desenvolvido pela linguagem JavaScript!'
            link='https://erickbalbino.github.io/jogo-da-velha'
          />

          <ProjectCard
            srcImage='arkkio.jpeg'
            text='Loja online desenvolvido com HTML, CSS e JavaScript!'
            link='https://erickbalbino.github.io/loja-arkkio'
          />

          <ProjectCard
            srcImage='historiando.jpeg'
            text='Site de história criado com HTML, CSS e JavaScript!'
            link='https://erickbalbino.github.io/historiando'
          />

          <ProjectCard
            srcImage='adocao_pet.png'
            text='Site e tela admin feito com HTML, CSS, BOOTSTRAP, JavaScript e PHP!'
            link='#'
          />

          <ProjectCard
            srcImage='bloco-de-notas.jpeg'
            text='Bloco de notas desenvolvido com React, HTML e CSS'
            link='#'
          />

          <ProjectCard
            srcImage='web-whatsapp.jpeg'
            text='Site e tela admin feito com HTML, CSS, BOOTSTRAP, JavaScript e PHP!'
          />
        </styles.ProjectsWrapper>
      </styles.Projects>
    </styles.Container>
  )
}
