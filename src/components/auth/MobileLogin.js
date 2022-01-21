import React from 'react';

//react-router-dom
import {Link} from "react-router-dom"

//bootstrap
import {Container, Row, Col , Image ,Button ,Form} from "react-bootstrap"

//styles
import "./styles/mobileLogin.scss"

//images
import satpayLogo from "./styles/img/satpay-logo.png";
import smartPhone from "./styles/img/smartphone.png";

const MobileLogin = () => {
    return (
        <Container className='mobileLoginContainer' fluid>
            <Row>
                <Col md></Col>
                <Col md>
                    <div className='mobileLoginDiv'>
                        <Image alt="sat pay logo" src={satpayLogo} className='satpayLogo'/>
                        <div className='line-seperator'>
                             <p>سامانه جامع اعتبار سنجی ست پی</p>
                        </div>
                        <div className='inputDiv'>
                            <Row>
                                <Image alt="smart phone icon" src={smartPhone}/>
                                <Form.Control type="text" placeholder="موبایل" className='input' maxLength={12} />
                            </Row>
                        </div>
                        <div className='button-div'>
                            <Button>تایید موبایل</Button>
                        </div>
                        <div className='para-div'>
                            <Link className='username-button' to="/login-by-username">ورود با نام کاربری</Link>
                        </div>
                    </div>
                </Col>
                <Col md></Col>
            </Row>
        </Container>
    );
};

export default MobileLogin;