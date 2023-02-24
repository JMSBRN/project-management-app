import React from 'react';
import { Link } from 'react-router-dom';
import { LogoWrapper } from './Logo.style';

const Logo = () => {
  return (
    <Link data-testid="logo" to={'/'}>
      <LogoWrapper />
    </Link>
  );
};

export default Logo;
