import {FC} from 'react';
import {HashRouter, Route} from 'react-router-dom';
import {BASE_URL, GAME_PAGE} from './components/constans';
import GamePage from './components/Pages/GamePage';
import HomePage from './components/Pages/Home';

/*
HashRouter: When we have small client side applications which doesn't need backend we can use HashRouter because when we use hashes in the URL/location bar browser doesn't make a server request.

BrowserRouter: When we have big production-ready applications which serve backend, it is recommended to use <BrowserRouter>.
*/

const App: FC = () => {
  return (
    <HashRouter basename={process.env.PUBLIC_URL}>
      <div className='root'>
        <div>
          <Route exact path={BASE_URL} component={HomePage} />
          <Route path={GAME_PAGE} component={GamePage} />
        </div>
      </div>
    </HashRouter>
  );
};

export default App;
