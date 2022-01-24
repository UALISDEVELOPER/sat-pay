import React from 'react';

//axios
import axios from "axios"

//bootstrap
import {Container, Row, Col , Image ,Button ,Form} from "react-bootstrap"

//styles
import "./styles/iban.scss";

//images
import satpayLogo from "./styles/img/satpay-logo.png";

const IbanInquiry = () => {
    return (
        <Container className='ibanContainer' fluid>
            <Row>
                <Col md={3}></Col>
                <Col md={5}>
                    <div className='iban-div'>
                        <Row className='heading'>
                            <Col xs className='priceDiv'>
                                <p>300تومان</p>
                            </Col>
                            <Col xs className='subjectDiv'>
                                <p>سرویس استعلام شماره شبا</p>
                            </Col>
                        </Row>
                        <Row className='imageDiv'>
                            <Image src={satpayLogo} alt="satpay logo"/>
                        </Row>
                        <Row className='textDiv'>
                            <p>سامانه جامع اعتبار سنجی ست پی</p>
                        </Row>
                        <Row className='subjectDiv'>
                            <p>: شماره شبا </p>
                        </Row>
                        <Row>
                            <Form.Control type="text" placeholder="IR **** **** **** **** **** ****" />
                        </Row>
                        <Row className='buttonDiv'>
                            <Col>
                                <Button>استعلام</Button>
                            </Col>
                        </Row>
                    </div>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    );
};

export default IbanInquiry;