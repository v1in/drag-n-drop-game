import {FC} from 'react';
import {UserContext} from './UserContext';
import Name from './Name';
import Score from './Score';

interface IProps {
  youName?: any;
  youScore?: number;
}

const HeaderInfo: FC<IProps> = (props) => {
  const {youName, youScore} = props;
  return (
    <UserContext.Provider value={{name: youName, score: youScore}}>
      <div className='is-fluid is-flex is-align-items-center is-justify-content-space-between mb-5'>
        <Name>{youName}</Name>
        <Score>{youScore}</Score>
      </div>
    </UserContext.Provider>
  );
};

export default HeaderInfo;
