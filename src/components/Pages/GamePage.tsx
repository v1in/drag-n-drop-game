import {nanoid} from 'nanoid';
import {FC, useEffect, useRef, useState} from 'react';
import Card from '../Card/Card';
import Container from '../Container';
import Draggable from '../Draggable/Draggable';
import HeaderInfo from '../HeaderInfo';
import Toaster from '../Toaster';
import {DraggableData} from '../../data/Data';
import {getShuffle} from '../utils';

const shuffledData = getShuffle(DraggableData);

const GamePage: FC = () => {
  const [hitCount, setHitCount] = useState(1);
  const [timer, setTimer] = useState(0);
  const [countdown, setCountdown] = useState(10);
  const [name, setName] = useState('');
  const [winToaster, setWinToaster] = useState(false);
  const winTimerId = useRef<any>(0);
  const countdownTimerId = useRef<any>(0);

  const onStartHandler = () => {
    if (winTimerId.current) {
      return;
    }
    winTimerId.current = setInterval(() => setTimer((plus) => plus + 1), 1000);
  };

  const onStopHandler = () => {
    clearInterval(winTimerId.current);
    winTimerId.current = 0;
  };

  const startCountdown = () => {
    if (countdownTimerId.current) {
      return;
    }
    countdownTimerId.current = setInterval(
      () => setCountdown((minus) => minus - 1),
      1000,
    );
  };

  const stopCountdown = () => {
    clearInterval(countdownTimerId.current);
    countdownTimerId.current = 0;
    setWinToaster(false);
    setTimeout(() => {
      window.location.reload();
    }, 200);
  };

  useEffect(() => {
    if (countdown === 0) {
      stopCountdown();
    }
  }, [countdown]);

  useEffect(() => {
    return () => clearInterval(winTimerId.current);
  }, []);

  // shows the toaster with score information and then starts the Countdown
  const onDropHandler = () => {
    setHitCount(hitCount + 1);
    if (hitCount >= 5) {
      onStopHandler();
      setTimeout(() => {
        setWinToaster(true);
      }, 500);
      setTimeout(() => {
        startCountdown();
      }, 1500);
    }
  };

  // Get typed name from the first screen
  const myName = localStorage.getItem('name');

  useEffect(() => {
    const nameParsed = JSON.parse(myName || '');
    setName(nameParsed);
  }, [myName]);

  return (
    <>
      <HeaderInfo youName={name} youScore={timer} />
      <Container>
        {shuffledData.map((el) => (
          <Draggable
            key={el.id}
            targetKey={el.target}
            image={el.image}
            onDragStart={onStartHandler}
            onDrop={onDropHandler}
            disappear
            classes={el.class}
          />
        ))}
      </Container>
      <p className='custom-p is-fluid mt-6 mb-6 has-text-left'>
        ... and drop them here to make the logo great again!
      </p>
      <Container>
        <Card targetKey='1_Z' />
        <Card targetKey='2_O' />
        <Card targetKey='3_O' />
        <Card targetKey='4_V' />
        <Card targetKey='5_U' />
      </Container>

      {winToaster && (
        <Toaster
          isOpen={winToaster}
          isText={[
            'Your score is ',
            <b
              key={nanoid(4)}
              className='has-text-weight-bold is-size-6 m-1 has-text-dark'>
              {timer}
            </b>,
            ' seconds! Congratulations 🎉 🎉 🎉',
          ]}
          onClick={() => setWinToaster(false)}>
          {(countdown || countdown > 0) && (
            <div>
              <hr />
              Game will be restarted in:
              <b style={{display: 'inline-block', width: 20}}>{countdown}</b>
            </div>
          )}
        </Toaster>
      )}
    </>
  );
};

export default GamePage;
