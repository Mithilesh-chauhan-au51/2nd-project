import logo from './logo.svg';
import './App.css';

import { GoogleOAuthProvider } from '@react-oauth/google';

import Messenger from './components/Messenger'
import AccountProvider from './context/AccountProvider';

function App() {

  const clientId = '578340348182-q9bm8l9hbp33flk0bssc91j3ceddklf9.apps.googleusercontent.com'
  return (
    <GoogleOAuthProvider clientId={clientId}>
      
      <AccountProvider>
        <Messenger/>
      </AccountProvider>
    </GoogleOAuthProvider> 
  );
}

export default App;
