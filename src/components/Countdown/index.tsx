import React, { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountdownContext';
import { Container, Timer, CountdownButton } from './styles';

import {FiX} from 'react-icons/fi'

const Countdown: React.FC = () => {
  const {
    minutes,
    seconds,
    hasFinished,
    isActive,
    resetCountdown,
    startCountdown
  } = useContext(CountdownContext);

  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  return (
    <Container>
      <Timer>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Timer>
      {hasFinished ? (
        <CountdownButton
          disabled
        >
          Ciclo encerrado
        </CountdownButton>
      ) : (
          <>
            { isActive ? (
              <CountdownButton
                type="button"
                onClick={resetCountdown}
                className="active"
              >
                Abandonar ciclo
                <FiX />
              </CountdownButton>
            ) : (
                <CountdownButton
                  type="button"
                  onClick={startCountdown}
                >
                  Iniciar um ciclo
                  <img src="icons/play_arrow.svg" alt="start" />
                </CountdownButton>
              )
            }
          </>
        )}
    </Container >
  );
}

export default Countdown;
