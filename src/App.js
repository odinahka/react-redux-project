import { Fragment } from 'react';
import Counter from './components/Counter';
import Header from './components/Header';
import UserProfile from './components/UserProfile'
import Auth from './components/Auth';
import {useSelector} from 'react-redux';


function App() {
  const authenticated = useSelector(state => state.auth.isAuthenticated)
  return (
    <Fragment>
      <Header/>
      {!authenticated && <Auth/>}
      {authenticated && <UserProfile/>}

      <Counter/>
      </Fragment>
    
  );
}

export default App;

