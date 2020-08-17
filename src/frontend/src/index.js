import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import Signup from './pages/signup';
import * as apicalls from './api/apicalls'

const actions={

  postSignUp:apicalls.signup
}
ReactDOM.render(
  <React.StrictMode>
    
   <Signup actions={actions}/>
    
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
