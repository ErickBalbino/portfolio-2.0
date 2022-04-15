import React from 'react'
import * as styles from './css/ProjectCard.css.jsx'
import { Link } from 'react-router-dom'

export default function ProjectCard({ link, srcImage, text }) {
  return (
    <styles.Container bgImage={srcImage}>
        <a 
          href={link}
          target='_blank'
          className="link__container"
        >
          <p>
              {text}
          </p>
        </a>
    </styles.Container>
  )
}
