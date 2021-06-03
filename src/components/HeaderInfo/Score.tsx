import {FC, useContext} from 'react';
import Timer from '../Timer/Timer';
import {UserContext} from './UserContext';

const Score: FC = () => {
  const {score} = useContext(UserContext);
  return (
    <div className='block p-3 is-flex is-flex-direction-column'>
      <Timer counter={score} />
      <p className='has-text-right custom-p'>The faster the best!</p>
    </div>
  );
};

export default Score;
