import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';

import { Container } from './styles';

const Profile: React.FC = () => {
  const {challegesCompleted} = useContext(ChallengesContext);
  return (
    <Container>
      <span>Desafios completos</span>
      <span>{challegesCompleted}</span>
    </Container>
  );
}

export default Profile;
