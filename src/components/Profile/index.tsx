import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import ExperienceBar from '../ExperienceBar';

import { Container, Image, Experience, Level } from './styles';

const Profile: React.FC = () => {
  const { level } = useContext(ChallengesContext);
  return (
    <Container>
      <Image>
        <img src="https://github.com/ma-nobrega.png" alt="Matheus Nobrega" />
      </Image>
      <Experience>
        <div>
          <strong>Matheus Nobrega</strong>
          <Level>
            <p>
              <img src="icons/level.svg" alt="level" />
            Level {level}
            </p>
          </Level>
        </div>
        <ExperienceBar />
      </Experience>
    </Container>
  );
}

export default Profile;
