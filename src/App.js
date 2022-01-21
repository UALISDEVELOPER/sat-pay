import React from 'react';

//react-router-dom
import { Switch, Route } from 'react-router-dom';

//styles
import "./styles/app.scss"

//components
import MobileLogin from './components/auth/MobileLogin';
import UsernameLogin from './components/auth/UsernameLogin';
import Landing from './components/landing/Landing';


const App = () => {
  return (
    <div className='mainContainer'>
        <Switch>
            <Route path="/landing" component={Landing}/>
            <Route path="/login-by-username" component={UsernameLogin}/>
            <Route path="/" component={MobileLogin}/>
        </Switch>
    </div>
  );
};

export default App;
