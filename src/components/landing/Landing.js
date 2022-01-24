import React, { useState, useEffect } from 'react';

//bootstrap
import { Col, Row , Container} from "react-bootstrap"

//components
import Header from './Header';
import Sidebar from './Sidebar';

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
                <Row>
                    <Col id='main-content' className='main-content'>
                        <Row>
                            
                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Landing;