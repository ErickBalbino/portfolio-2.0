import React from 'react'
import * as styles from './css/Projects.css.jsx'

import ProjectCard from '../project/ProjectCard'

export default function Projects() {
  return (
    <styles.Container id='start'>
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
        link='https://grupo-marlove.000webhostapp.com/'
      />

      <ProjectCard
        srcImage='bloco-de-tarefas.png'
        text='Bloco de tarefas desenvolvido com React, HTML e CSS'
        link='https://bloco-de-tarefas.vercel.app/'
      />

      <ProjectCard
        srcImage='tesla-clone.png'
        text='Clone da empresa Tesla desenvolvido com React e styled-components'
        link='https://tesla-clone-six-gamma.vercel.app/'
      />

      <ProjectCard
        srcImage='web-whatsapp.jpeg'
        text='Clone do web whatsapp feito com HTML e CSS, responsivo apenas para desktop!'
        link='https://erickbalbino.github.io/clone-whatsapp/'
      /> 

      <ProjectCard
        srcImage='costs.png'
        text='Plataforma de criação e gerenciamento de projetos desenvolvido com React'
        link='https://costs-pi.vercel.app/'
      />

      <ProjectCard
        srcImage='disney-plus-clone.png'
        text='Clone da Disney Plus desenvolvido com React e styled-components'
        link='https://disney-plus-clone-ten-sigma.vercel.app/'
      />

      <ProjectCard
        srcImage='clone-360xart.png'
        text='Clone da 360xart desenvolvido com React e styled-components'
        link='https://clone-360xart.vercel.app/'
      />
    </styles.Container>
  )
}
