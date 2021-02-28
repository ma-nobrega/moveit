import React, { useContext } from 'react';
import Link from 'next/link';

import { Container } from './styles';
import { ThemeContext } from '../../contexts/ThemeContext';
import { FaRegLightbulb } from 'react-icons/fa';

const Nav: React.FC = () => {
  const {toggleTheme } = useContext(ThemeContext);

  return (
    <Container>
      <Link href="/">
        <img src="/icons/logo.svg" alt="logo moveit" />
      </Link>
      <Link href="/">
        <img src="/icons/home.svg" alt="home" />
      </Link>
      <FaRegLightbulb onClick={toggleTheme} />
    </Container>
  )
}

export default Nav;
