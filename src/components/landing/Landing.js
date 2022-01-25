import React, { useState, useEffect } from 'react';

import {Switch, Route} from "react-router-dom"

//bootstrap
import { Col, Row , Container} from "react-bootstrap"

//components
import Header from './Header';
import Sidebar from './Sidebar';
import NotAvailable from './NotAvailable';

//openBanking components
import IbanInquiry from './openBankingComponents/IbanInquiry';

//styles
import "./styles/landing.scss";

const Landing = () => {

    const [sidebarExpand, setSidebarExpand] = useState(true);
    const expandSidebar = ()=>{
        if (sidebarExpand){
            setSidebarExpand(false)
        }else{
            setSidebarExpand(true)
        }
        // console.log("kjsdjkhjk");
    }
    // following function help to expand and contract the sidebar

    useEffect(()=>{
        console.log(sidebarExpand);
    })

    return (
        <>
            <Sidebar sidebarExpand={sidebarExpand} setSidebarExpand={setSidebarExpand} callFunc={expandSidebar} />
            <Header callFunc={expandSidebar} sidebarExpand={sidebarExpand}/>
            <Container className='main-container' fluid>
                <Switch>
                    <Route path="/pishkhan/iban-inquiry" component={IbanInquiry}/>
                    <Route path="/pishkhan/not-available" component={NotAvailable}/>
                </Switch>
            </Container>
        </>
    );
};

export default Landing;