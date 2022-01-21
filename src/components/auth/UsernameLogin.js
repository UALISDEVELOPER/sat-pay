import React from 'react';

//react-router-dom
import {Link} from "react-router-dom"

//bootstrap
import {Container, Row, Col , Image ,Button ,Form} from "react-bootstrap";

//styles
import "./styles/userLogin.scss"

//images
import satpayLogo from "./styles/img/satpay-logo.png";
import userIcon from "./styles/img/person.png";
import lockIcon from "./styles/img/lock.png";
import doneIcon from "./styles/img/done.png";

const UsernameLogin = () => {
    return (
        <Container className='usernameLoginContainer' fluid>
            <Row>
                <Col md></Col>
                <Col md>
                    <div className='usernameLoginDiv'>
                        <Image alt="sat pay logo" src={satpayLogo} className='satpayLogo'/>
                        <div className='line-seperator'>
                             <p>سامانه جامع اعتبار سنجی ست پی</p>
                        </div>
                        <div className='inputDiv'>
                            <Row>
                                <Image alt="user icon" src={userIcon}/>
                                <Form.Control type="text" placeholder="نام کاربری" className='input' maxLength={12} />
                            </Row>
                        </div>
                        <div className='inputDiv'>
                            <Row>
                                <Image alt="lock icon" src={lockIcon}/>
                                <Form.Control type="password" placeholder="رمز عبور" className='input' maxLength={12} />
                            </Row>
                        </div>
                        <div className='button-div'>
                            <Button> <Image src={doneIcon} alt="done icon"/>ورود </Button>
                        </div>
                        <div className='para-div'>
                            <Link className='username-button' to="/">ورود با موبایل</Link>
                        </div>
                    </div>
                </Col>
                <Col md></Col>
            </Row>
        </Container>
    );
};

export default UsernameLogin;