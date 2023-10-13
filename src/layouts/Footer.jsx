import React from "react";
import * as styles from "./css/Footer.css.jsx";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagramSquare,
  FaLinkedin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <styles.Container>
      <styles.IconsContainer>
        <a
          href="https://www.facebook.com/profile.php?id=100036650766393"
          target="_blank"
        >
          <FaFacebookSquare className="icon" />
        </a>
        <a href="https://www.instagram.com/dev.eriick/" target="_blank">
          <FaInstagramSquare className="icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/developer-erick-balbino/"
          target="_blank"
        >
          <FaLinkedin className="icon" />
        </a>
        <a href="https://github.com/ErickBalbino" target="_blank">
          <FaGithubSquare className="icon" />
        </a>
      </styles.IconsContainer>
    </styles.Container>
  );
}
