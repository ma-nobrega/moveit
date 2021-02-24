import React, { useEffect, useState } from 'react';

import { Container, CountdownButton } from './styles';

let countdownTimeout: NodeJS.Timeout;

const Countdown: React.FC = () => {
  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;
  const [minuteLeft, minuteRight] = String(minutes).padStart(2, '0').split('');
  const [secondLeft, secondRight] = String(seconds).padStart(2, '0').split('');

  function startCountdown() {
    setIsActive(true);
  }

  function resetCountdown() {
    clearTimeout(countdownTimeout)
    setIsActive(false);
    setTime(0.1 * 60)
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    }
    else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time]);

  return (
    <div>
      <Container>
        <div>
          <span>{minuteLeft}</span>
          <span>{minuteRight}</span>
        </div>
        <span>:</span>
        <div>
          <span>{secondLeft}</span>
          <span>{secondRight}</span>
        </div>
      </Container>
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
                <img src="icons/close.svg" alt="start" />
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
    </div >
  );
}

export default Countdown;
