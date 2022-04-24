import React from 'react'
import * as styles from './css/Home.css.jsx'
import { FaFilePdf, FaFileArchive } from 'react-icons/fa'
import Fade from 'react-reveal/Fade'
import { HashLink } from 'react-router-hash-link'

import ProjectCard from '../project/ProjectCard'

export default function Home() {
  return (
    <styles.Container>
      <styles.Introduction>
        <Fade left duration={1500}>
          <styles.TextWrapper>
            <h1>Welcome to my world!</h1>

            <Fade bottom delay={1500} duration={2000}>
              <p>
                Olá, meu nome é Erick, sou desenvolvedor front-end, esse é meu portfólio, seja bem-vindo <span id='underline'>_</span>
              </p>
            </Fade>
          </styles.TextWrapper>
        </Fade>

        <styles.Image>
          <img src='/assets/images/desenvolvedor.png' alt='imagem de um desenvolvedor codando' id='coder' />
        </styles.Image>
      </styles.Introduction>

      <styles.Projects id='projetos'>
        <h1>Projetos</h1>

        <Fade right duration={1500}>
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
          </styles.ProjectsWrapper>
        </Fade>

        <styles.ButtonContainer>
          <HashLink smooth to='/projects#start'>
            <button>
              Ver todos
            </button>
          </HashLink>
        </styles.ButtonContainer>
      </styles.Projects>

      <styles.Technologies id='tecnologias'>
        <h1>Tecnologias</h1>

        <Fade left duration={1500}>
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
        </Fade>
      </styles.Technologies>

      <styles.Sobre id='sobre'>
        <h1>Sobre</h1>

        <styles.SobreContainer>
          <div className='image__container'>
            <h3>Já que chegou até aqui, deixa eu me apresentar!</h3>

            <img src='/assets/images/profile-picture.jpg' alt='imagem erick balbino da silva' />
          </div>

          <Fade bottom top={1500}>
            <div className='text__container'>
              <p>
                Me chamo Erick, moro em Sobral-CE e atualmente sou desenvolvedor Front-End, tudo começou aos 15 anos, quando conheci minha primeira linguagem de programação Pascal, não foi amor a primeira vista, longe disso, mas todos aqueles comandos e erros seguidos de estresse me intrigaram e me fizeram ser quem eu sou hoje, um cara apaixonado por tecnologia e programação. <span id='underline'>_</span>
              </p>
            </div>
          </Fade>
        </styles.SobreContainer>
      </styles.Sobre>

      <styles.Curriculo id='curriculo'>
        <h1>Currículo</h1>

        <Fade>
          <styles.CurriculoContainer>
            <a 
              href='/assets/images/curriculo.pdf' download='curriculo.pdf' 
              type='application/pdf' 
              id='pdf'
            >
              Abrir como PDF <FaFilePdf className='icon' />
            </a>

            <a 
              href='/assets/images/curriculo.zip' download='curriculo.zip' 
              type='application/zip' 
              id='zip'
            >
              Abrir como ZIP <FaFileArchive className='icon' />
            </a>
          </styles.CurriculoContainer>
        </Fade>
      </styles.Curriculo>

      <styles.FormContainer id='contato'>
        <div className='formWrapper__container'>
          <form action="">
            <fieldset>
              <input
                type="text"
                name='nome'
                id='nome'
                placeholder='Insira seu nome'
              />
              <input
                type="email"
                name='email'
                id='email'
                placeholder='Insira seu e-mail'
              />
              <input
                type="text"
                name='assunto'
                id='assunto'
                placeholder='Assunto da mensagem'
              />
              <textarea
                name="messagem"
                id="messagem"
                placeholder='Digite a mensagem...'
              />
            </fieldset>

            <div className='button__container'>
              <input type="submit" value="Enviar Mensagem" />
            </div>
          </form>

          <div className='formImagem__container'>

          </div>
        </div>
      </styles.FormContainer>
    </styles.Container>
  )
}
