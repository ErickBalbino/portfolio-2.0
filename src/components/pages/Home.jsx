import React from 'react'
import * as styles from './css/Home.css.jsx'
import { FaFilePdf, FaFileArchive } from 'react-icons/fa'

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
          <img src='/assets/images/desenvolvedor.png' alt='imagem de um desenvolvedor codando' />
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

      <styles.Technologies>
        <h1>Tecnologias</h1>

        <styles.TechnologiesContainer>
          <div className='tecnologias__container__tecnologia'>
            <h3>Front-End</h3>

            <div className='tecnologia'>
              <div className='linha__azul'>
                <span>HTML5</span>
              </div>

              <img src='/assets/images/html5.png' alt='icone html5' />
            </div>

            <div className='tecnologia__reverse'>
              <div className='linha__azul__reverse'>
                <span>CSS3</span>
              </div>

              <img src='/assets/images/css3.png' alt='icone css3' />
            </div>

            <div className='tecnologia'>
              <div className='linha__azul'>
                <span>JavaScript</span>
              </div>

              <img src='/assets/images/javascript.jpg' alt='icone javascript' />
            </div>

            <div className='tecnologia__reverse'>
              <div className='linha__azul__reverse'>
                <span>Bootstrap</span>
              </div>

              <img src='/assets/images/bootstrap.png' alt='icone bootstrap' id='bootstrap' />
            </div>

            <div className='tecnologia'>
              <div className='linha__azul'>
                <span>React</span>
              </div>

              <img src='/assets/images/react.png' alt='icone react' />
            </div>
          </div>

          <div className='tecnologias__container__tecnologia'>
            <h3>Back-End/Banco de Dados</h3>

            <div className='tecnologia'>
              <div className='linha__azul'>
                <span>Python</span>
              </div>

              <img src='/assets/images/python.png' alt='icone python3' id='python' />
            </div>

            <div className='tecnologia__reverse'>
              <div className='linha__azul__reverse'>
                <span>PHP</span>
              </div>

              <img src='/assets/images/php.png' alt='icone php' id='php' />
            </div>

            <div className='tecnologia'>
              <div className='linha__azul'>
                <span>MySQL</span>
              </div>

              <img src='/assets/images/mysql.png' alt='icone mysql' id='mysql' />
            </div>

            <div className='tecnologia__reverse'>
              <div className='linha__azul__reverse'>
                <span>PostgreSQL</span>
              </div>

              <img src='/assets/images/postgreSQL.png' alt='icone postgreSQL' id='postgresql' />
            </div>
          </div>

          <div className='tecnologias__container__tecnologia'>
            <h3>Outras Tecnologias</h3>
            <div className='tecnologia'>
              <div className='linha__azul'>
                <span>Git</span>
              </div>

              <img src='/assets/images/git.png' alt='icone git' id='git' />
            </div>

            <div className='tecnologia__reverse'>
              <div className='linha__azul__reverse'>
                <span>Docker</span>
              </div>

              <img src='/assets/images/docker.png' alt='icone docker' id='docker' />
            </div>

            <div className='tecnologia'>
              <div className='linha__azul'>
                <span>VS Code</span>
              </div>
              <img src='/assets/images/visual-studio.png' alt='icone vscode' id='vscode' />
            </div>

            <div className='tecnologia__reverse'>
              <div className='linha__azul__reverse'>
                <span>Wordpress</span>
              </div>
              <img src='/assets/images/wordpress.png' alt='icone wordpress' id='wordpress' />
            </div>
          </div>
        </styles.TechnologiesContainer>
      </styles.Technologies>

      <styles.Sobre>
        <h1>Sobre</h1>

        <styles.SobreContainer>
          <div className='image__container'>
            <h3>Já que chegou até aqui, deixa eu me apresentar!</h3>

            <img src='/assets/images/profile-picture.jpg' alt='imagem erick balbino da silva' />
          </div>

          <div className='text__container'>
            <p>
              Como disse acima, meu nome é Erick! Moro em Sobral-CE e sou um cara simples, simplesmente apaixonado por tecnologia e programação, atualmente sou um desenvolvedor front-end, mas devido aos meus esforços em busca de conhecimento, estou me tornando um desenvolvedor full-stack. No início não foi fácil, mas olhar para trás e ver tudo que eu já aprendi só me motiva mais ainda a sempre continuar evoluindo <span id='underline'>_</span>
            </p>
          </div>
        </styles.SobreContainer>
      </styles.Sobre>

      <styles.Curriculo>
        <h1>Currículo</h1>

        <styles.CurriculoContainer>
          <a href='/assets/images/curriculo.pdf' download='curriculo.pdf' type='application/pdf' id='pdf'>
            Abrir como PDF <FaFilePdf className='icon' />
          </a>

          <a href='/assets/images/curriculo.zip' download='curriculo.zip' type='application/zip' id='zip'>
            Abrir como ZIP <FaFileArchive className='icon' />
          </a>
        </styles.CurriculoContainer>
      </styles.Curriculo>
    </styles.Container>
  )
}
