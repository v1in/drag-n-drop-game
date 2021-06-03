import {FC, useContext} from 'react';
import {UserContext} from './UserContext';

const Name: FC = () => {
  const {name} = useContext(UserContext);
  return (
    <div className='block has-text-left p-3 m-0'>
      <div className='is-size-4 has-text-weight-bold mb-2'>
        Good luck: <span className='is-capitalized'>{name}!</span>
      </div>
      <p className='custom-p'>Pick up the right cards</p>
    </div>
  );
};

export default Name;
