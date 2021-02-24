import React from 'react';

import { Container, NotActive, Active, ChallengeButton } from './styles';

const ChallengeBox: React.FC = () => {
  const hasActiveChallenge = true;

  return (
    <Container>
      {hasActiveChallenge ? (
        <Active>
          <header>Ganhe 400 xp</header>
          <main>
            <img src="icons/body.svg" alt="Imagem do desafio" />
            <strong>Novo desafio</strong>
            <p>Levante e faça uma caminhada de 3 minutos.</p>
          </main>
          <footer>
            <ChallengeButton className="failed" type="button" >
              Falhei
            </ChallengeButton>
            <ChallengeButton className="succeeded" type="button" >
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
