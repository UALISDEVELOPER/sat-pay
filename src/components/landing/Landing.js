import React, { useState } from 'react';

//bootstrap
import { Col, Row , Container} from "react-bootstrap"

//components
import Header from './Header';
import Sidebar from './Sidebar';

//styles
import "./styles/landing.scss";

const Landing = () => {

    const [sidebarExpand, setSidebarExpand] = useState(false);
    const expandSidebar = ()=>{
        if (sidebarExpand){
            setSidebarExpand(false)
        }else{
            setSidebarExpand(true)
        }
    }
    // following function help to expand and contract the sidebar

    return (
        <>
            <Header callFunc={expandSidebar} sidebarExpand={sidebarExpand}/>
            <Sidebar sidebarExpand={sidebarExpand} setSidebarExpand={setSidebarExpand} />
            <Container className='main-container' fluid>
                <Row>
                    <Col  className='main-content'>
                        <Row>

                        </Row>
                    </Col>
                </Row>
            </Container>
        </>
    );
};

export default Landing;