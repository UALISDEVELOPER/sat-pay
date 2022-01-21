import React, { useEffect, useState } from 'react';

//bootstrap
import {Container , Row ,Image} from "react-bootstrap"

//styles
import "./styles/header.scss";

//images
import menuIcon from "./styles/img/menu.png";
import closeIcon from "./styles/img/close.png"
import userIcon from "./styles/img/account.png";

const Header = ({callFunc, sidebarExpand}) => {

    const [toggleMenuIcon , setToggleMenuIcon] = useState(menuIcon);
    useEffect(()=>{
        sidebarExpand ? setToggleMenuIcon(closeIcon) : setToggleMenuIcon(menuIcon)  
    },[sidebarExpand])

    return (
        <Container className='header' fluid>
            <Row>
                <div>
                    <div className='sidebar-button' onClick={callFunc}>
                        <Image src={toggleMenuIcon} alt="sidebar button icon"/>
                    </div>
                    
                    <div className='userDiv'>
                        <p> HAMID HAMEDI  <Image src={userIcon} alt="user icon"/></p>
                    </div>
                    <div className='creditDiv'>
                        <p>اعتبار شما: 8888 تومان</p>
                    </div>
                </div>
            </Row>
        </Container>
    );
};

export default Header;