import React, { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountdownContext';

import { Container, NotActive, Active, ChallengeButton } from './styles';

const ChallengeBox: React.FC = () => {
  const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
  const { resetCountdown } = useContext(CountdownContext)

  function handleChallengeSucceeded() {
    completeChallenge();
    resetCountdown();
  }

  function handleChallengeFailed() {
    resetChallenge();
    resetCountdown();
  }

  return (
    <Container>
      {activeChallenge ? (
        <Active>
          <header>Ganhe {activeChallenge.amount} xp</header>
          <main>
            <img src={`icons/${activeChallenge.type}.svg`} alt="Imagem do desafio" />
            <strong>Novo desafio</strong>
            <p>{activeChallenge.description}</p>
          </main>
          <footer>
            <ChallengeButton
              className="failed"
              type="button"
              onClick={handleChallengeFailed}
            >
              Falhei
            </ChallengeButton>
            <ChallengeButton
              className="succeeded"
              type="button"
              onClick={handleChallengeSucceeded}
            >
              Completei
            </ChallengeButton>
          </footer>
        </Active>
      ) : (
          <NotActive>
            <strong>Finalize um ciclo para receber um desafio</strong>
            <p>
              <img src="icons/level-up.svg" alt="Level Up" />
              Avance de level completando desafios.
         </p>
          </NotActive >
        )
      }
    </Container >
  );
}

export default ChallengeBox;
