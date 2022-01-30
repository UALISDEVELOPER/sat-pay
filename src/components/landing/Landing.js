import React, { useState, useEffect } from 'react';

import {Switch, Route} from "react-router-dom"

//bootstrap
import { Container, Row} from "react-bootstrap"

//components
import Header from './Header';
import Sidebar from './Sidebar';
import NotAvailable from './NotAvailable';

//openBanking components
import OpenBankingList from './openBankingComponents/OpenBankingList';
import IbanInquiry from './openBankingComponents/IbanInquiry';
import BackCheques from './openBankingComponents/BackCheques';

//styles
import "./styles/landing.scss";

const Landing = () => {

    return (
        <>
            <Header/>
            <Container className='main-container' fluid>
                <div className='main-content'>
                    <Switch>
                        <Route path="/pishkhan/back-cheques-inquiry" component={BackCheques}/>
                        <Route path="/pishkhan/iban-inquiry" component={IbanInquiry}/>
                        <Route path="/pishkhan/not-available" component={NotAvailable}/>
                        {/* ********services pages upto here******** */}

                        <Route path="/pishkhan/dashboardList" component={NotAvailable}/>
                        <Route path="/pishkhan/organizationalCreditList" component={NotAvailable}/>
                        <Route path="/pishkhan/socialSecurityList" component={NotAvailable}/>
                        <Route path="/pishkhan/openBankingList" component={OpenBankingList}/>
                        <Route path="/pishkhan/postOfficeList" component={NotAvailable}/>
                        <Route path="/pishkhan/validationList" component={NotAvailable}/>
                        <Route path="/pishkhan/cardIssuanceList" component={NotAvailable}/>
                        <Route path="/pishkhan/walletList" component={NotAvailable}/>
                        <Route path="/pishkhan/leasingList" component={NotAvailable}/>
                        <Route path="/pishkhan/fishingCheckList" component={NotAvailable}/>
                        <Route path="/pishkhan/billAndChargeList" component={NotAvailable}/>
                        {/* ********List of services pages upto here******** */}
                    </Switch>
                </div>
            </Container>
            <Row className="justify-content-center">
                <Sidebar/>
            </Row>
        </>
    );
};

export default Landing;