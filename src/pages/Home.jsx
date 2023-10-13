import React, { useState } from "react";
import * as styles from "./css/Home.css.jsx";
import { FaFilePdf, FaFileArchive } from "react-icons/fa";
import Fade from "react-reveal/Fade";
import { HashLink } from "react-router-hash-link";

import ProjectCard from "../project/ProjectCard";

export default function Home() {
  {
    /* VALIDAÇÃO MASCARA EMAIL */
  }
  const [isEmailValid, setIsEmailValid] = useState(true);

  const emailRegex = /\S+@\S+\.\S+/;

  const validateEmail = (event) => {
    const email = event.target.value;

    if (emailRegex.test(email)) {
      setIsEmailValid(true);
    } else {
      setIsEmailValid(false);
    }

    if (email.length == "") {
      setIsEmailValid(true);
    }
  };
  {
    /* VALIDAÇÃO MASCARA EMAIL */
  }

  return (
    <styles.Container>
      <styles.Introduction>
        <Fade left duration={1500}>
          <styles.TextWrapper>
            <h1>Welcome to my world!</h1>

            <Fade bottom delay={1500} duration={2000}>
              <p>
                Olá, meu nome é Erick, sou desenvolvedor de software, <br /> esse é meu
                portfólio, seja bem-vindo <span id="underline">_</span>
              </p>
            </Fade>
          </styles.TextWrapper>
        </Fade>

        <styles.Image>
          <img
            src="/assets/images/desenvolvedor.png"
            alt="imagem de um desenvolvedor codando"
            id="coder"
          />
        </styles.Image>
      </styles.Introduction>

      <styles.Technologies id="tecnologias">
        <h1>Tecnologias</h1>

        <Fade left duration={1500}>
          <styles.TechnologiesContainer>
            <div className="tecnologias__container__tecnologia">
              <h3>Front-End</h3>
              <div className="tecnologia">
                <div className="linha__azul">
                  <span>HTML5</span>
                </div>
                <img src="/assets/images/html5.png" alt="icone html5" />
              </div>

              <div className="tecnologia__reverse">
                <div className="linha__azul__reverse">
                  <span>CSS3</span>
                </div>
                <img src="/assets/images/css3.png" alt="icone css3" />
              </div>

              <div className="tecnologia">
                <div className="linha__azul">
                  <span>JavaScript</span>
                </div>
                <img
                  src="/assets/images/javascript.jpg"
                  alt="icone javascript"
                />
              </div>

              <div className="tecnologia__reverse">
                <div className="linha__azul__reverse">
                  <span>Bootstrap</span>
                </div>
                <img
                  src="/assets/images/bootstrap.png"
                  alt="icone bootstrap"
                  id="bootstrap"
                />
              </div>

              <div className="tecnologia">
                <div className="linha__azul">
                  <span>React</span>
                </div>
                <img src="/assets/images/react.png" alt="icone react" />
              </div>
            </div>
            <div className="tecnologias__container__tecnologia">
              <h3>Back-End/Banco de Dados</h3>
              <div className="tecnologia">
                <div className="linha__azul">
                  <span>Python</span>
                </div>

                <img
                  src="/assets/images/python.png"
                  alt="icone python3"
                  id="python"
                />
              </div>

              <div className="tecnologia__reverse">
                <div className="linha__azul__reverse">
                  <span>PHP</span>
                </div>

                <img src="/assets/images/php.png" alt="icone php" id="php" />
              </div>

              <div className="tecnologia">
                <div className="linha__azul">
                  <span>MySQL</span>
                </div>

                <img
                  src="/assets/images/mysql.png"
                  alt="icone mysql"
                  id="mysql"
                />
              </div>
            </div>

            <div className="tecnologias__container__tecnologia">
              <h3>Outras Tecnologias</h3>
              <div className="tecnologia">
                <div className="linha__azul">
                  <span>Git</span>
                </div>

                <img src="/assets/images/git.png" alt="icone git" id="git" />
              </div>

              <div className="tecnologia__reverse">
                <div className="linha__azul__reverse">
                  <span>Docker</span>
                </div>

                <img
                  src="/assets/images/docker.png"
                  alt="icone docker"
                  id="docker"
                />
              </div>

              <div className="tecnologia">
                <div className="linha__azul">
                  <span>Wordpress</span>
                </div>

                <img
                  src="/assets/images/wordpress.png"
                  alt="icone wordpress"
                  id="wordpress"
                />
              </div>
            </div>
          </styles.TechnologiesContainer>
        </Fade>
      </styles.Technologies>

      <styles.Sobre id="sobre">
        <h1>Sobre</h1>

        <styles.SobreContainer>
          <div className="image__container">
            <h3>Já que chegou até aqui, deixa eu me apresentar!</h3>

            <img
              src="/assets/images/imagem-erick.jpeg"
              alt="imagem erick balbino da silva"
            />
          </div>

          <Fade bottom top={1500}>
            <div className="text__container">
              <p>
                Desenvolvo software desde os 15 anos, quando conheci minha
                primeira linguagem de programação Pascal, não foi amor a
                primeira vista, longe disso, mas todos aqueles comandos e erros
                seguidos de estresse me intrigaram e me fizeram ser quem eu sou
                hoje. Estou sempre aberto a novas oportunidades e desafios
                <span id="underline">_</span>
              </p>
            </div>
          </Fade>
        </styles.SobreContainer>
      </styles.Sobre>

      <styles.Curriculo id="curriculo">
        <h1>Currículo</h1>

        <Fade>
          <styles.CurriculoContainer>
            <a
              href="/assets/images/curriculo_erick.pdf"
              download="curriculo_erick.pdf"
              type="application/pdf"
              id="pdf"
            >
              Abrir como PDF <FaFilePdf className="icon" />
            </a>

            <a
              href="/assets/images/curriculo_erick.zip"
              download="curriculo_erick.zip"
              type="application/zip"
              id="zip"
            >
              Abrir como ZIP <FaFileArchive className="icon" />
            </a>
          </styles.CurriculoContainer>
        </Fade>
      </styles.Curriculo>

      <styles.FormContainer id="contato">
        <div className="formWrapper__container">
          <form
            action="https://formsubmit.co/308e7b02f3b9c1b2c1731a758243e366"
            method="POST"
          >
            <fieldset>
              <input
                type="text"
                name="nome"
                id="nome"
                placeholder="Insira seu nome"
                required
              />

              <input
                type="email"
                name="email"
                id="email"
                placeholder="Insira seu e-mail"
                onChange={validateEmail}
                style={!isEmailValid ? { border: "1px solid #750101" } : {}}
                required
              />

              <input
                type="text"
                name="assunto"
                id="assunto"
                placeholder="Assunto da mensagem"
                required
              />

              <textarea
                name="messagem"
                id="messagem"
                placeholder="Digite a mensagem..."
                required
              />
            </fieldset>

            {/* INPUTS DE CONTROLE */}
            <input
              type="hidden"
              name="_subject"
              value="Novo contato do portfólio!"
            />

            <input
              type="hidden"
              name="_autoresponse"
              value="Sua mensagem foi enviada para Erick Balbino! Em breve irei responder ela."
            />

            <input type="hidden" name="_template" value="box" />
            {/* INPUTS DE CONTROLE */}

            <div className="button__container">
              <input
                type="submit"
                value="Enviar Mensagem"
                style={
                  !isEmailValid
                    ? { pointerEvents: "none", backgroundColor: "#5d5d5d" }
                    : { pointerEvents: "all" }
                }
              />
            </div>
          </form>

          <div className="formImagem__container"></div>
        </div>
      </styles.FormContainer>
    </styles.Container>
  );
}
