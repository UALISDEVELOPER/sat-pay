import React from 'react';

//bootstrap
import {Container , Row ,Image} from "react-bootstrap"

//styles
import "./styles/header.scss";

//images
import menuIcon from "./styles/img/menu.png";
import userIcon from "./styles/img/account.png";

const Header = () => {
    return (
        <Container className='header' fluid>
            <Row>
                <div>
                    <div className='sidebar-button'>
                        <Image src={menuIcon} alt="sidebar button icon"/>
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