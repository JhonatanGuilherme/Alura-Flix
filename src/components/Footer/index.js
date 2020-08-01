import React from 'react';
import { FooterBase } from './styles';
import './Footer.css';
import GitHub from '../../assets/img/GitHub.png';
import Linkedin from '../../assets/img/Linkedin.png';

function Footer() {
  return (
    <FooterBase>
      <a href="https://www.alura.com.br/">
        <img src="https://www.alura.com.br/assets/img/alura-logo-white.1570550707.svg" alt="Logo Alura" />
      </a>
      <p>
        Orgulhosamente criado por Jhonatan Oliveira durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
        .
      </p>
      <a href="https://github.com/JhonatanGuilherme">
        <img className="GitHubIcon" src={GitHub} alt="GitHub Icon" />
      </a>
      <a href="https://www.linkedin.com/in/jhonatanguilherme/">
        <img className="LinkedinIcon" src={Linkedin} alt="Linkedin Icon" />
      </a>
    </FooterBase>
  );
}

export default Footer;
