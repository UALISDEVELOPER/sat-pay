import React, { useState, useEffect } from 'react';

import {Switch, Route} from "react-router-dom"

//bootstrap
import { Col, Row , Container} from "react-bootstrap"

//components
import Header from './Header';
import Sidebar from './Sidebar';

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
                {/* <Row>
                    <Col id='main-content' className='main-content'>
                        <Row> */}
                            <Switch>
                                <Route path="/pishkhan/iban-inquiry" component={IbanInquiry}/>
                            </Switch>
                            {/* <IbanInquiry/> */}
                        {/* </Row>
                    </Col>
                </Row> */}
            </Container>
        </>
    );
};

export default Landing;