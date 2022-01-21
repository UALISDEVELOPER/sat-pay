import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import {BrowserRouter} from "react-router-dom"

//bootstrap
import 'bootstrap/dist/css/bootstrap.rtl.min.css';
import { ThemeProvider } from 'react-bootstrap';

//styles
// import "./styles/index.scss"


ReactDOM.render(
    <BrowserRouter>
        <ThemeProvider dir="rtl" lang="fa">
          <App />
        </ThemeProvider>
    </BrowserRouter>
    ,
  document.getElementById('root')
);

