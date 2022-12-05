import React from 'react';
import { AutorLink, Autors, FooterWrapper, LogoSchool } from './Footer.style';

const Footer = () => {
  return (
    <FooterWrapper>
      <LogoSchool href="https://rs.school/react/" />
      <Autors>
        <AutorLink href="https://github.com/alexshishkov">Alexey Shishkov</AutorLink>
        <AutorLink href="https://github.com/JMSBRN">Aleksandr Zakhavai</AutorLink>
        <AutorLink href="https://github.com/botino-k">botino-k</AutorLink>
      </Autors>
      © 2022. React 2022Q3
    </FooterWrapper>
  );
};

export default Footer;
