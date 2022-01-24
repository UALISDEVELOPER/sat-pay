import React from 'react';

//react-router-dom
import { Switch, Route } from 'react-router-dom';

//bootstrap
import {Container} from "react-bootstrap"

//styles
import "./styles/app.scss"

//components
import MobileLogin from './components/auth/MobileLogin';
import UsernameLogin from './components/auth/UsernameLogin';
import Landing from './components/landing/Landing';

// import IbanInquiry from './components/landing/openBankingComponents/IbanInquiry';


const App = () => {
  return (
    <Container className='mainContainer' fluid>
        <Switch>
            <Route path="/pishkhan" component={Landing}/>
            <Route path="/login-by-username" component={UsernameLogin}/>
            {/* <Route path="/iban-inquiry" component={IbanInquiry}/> */}
            <Route path="/" component={MobileLogin}/>
        </Switch>
    </Container>
  );
};

export default App;
