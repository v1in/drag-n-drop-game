import {FC, useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom';
import {GAME_PAGE} from '../constans';
import WelcomeForm from '../WelcomeForm';

const HomePage: FC = () => {
  const [name, setName] = useState('');
  const history = useHistory();

  // Set name to localStorage
  useEffect(() => {
    localStorage.setItem('name', JSON.stringify(name));
  }, [name]);

  const onSubmit = (e) => {
    e.preventDefault();
    setName(name);
    history.push(GAME_PAGE);
    e.target.value = '';
  };

  return (
    <>
      <div className='block' style={{width: 400}}>
        <WelcomeForm
          label='Hello friend, tell me your name...'
          buttonText="Let's go!"
          value={name}
          onChange={(e) => setName(e.target.value)}
          onSubmit={onSubmit}
        />
      </div>
    </>
  );
};

export default HomePage;
