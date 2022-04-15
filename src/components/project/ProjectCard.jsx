import React from 'react'
import * as styles from './css/ProjectCard.css.jsx'

export default function ProjectCard({ srcImage, text }) {
  return (
    <styles.Container bgImage={srcImage}>
        <p>
            {text}
        </p>
    </styles.Container>
  )
}
