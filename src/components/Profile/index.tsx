import React from 'react';

import { Container } from './styles';

const Profile: React.FC = () => {
  return (
    <Container>
      <img src="https://github.com/ma-nobrega.png" alt="Matheus Nobrega"/>
      <div>
        <strong>Matheus Nobrega</strong>
        <p>
          <img src="icons/level.svg" alt="level"/>
        Level 1
        </p>
      </div>
    </Container>
  );
}

export default Profile;
