import React from 'react';

//bootstrap
import {Container, Row, Col , Image ,Button} from "react-bootstrap";

//images
import satpayLogo from "./styles/img/satpay-logo.png";

//styles
import "./styles/notAvailable.scss";

const NotAvailable = () => {

    return (
        <Container fluid className='not-available-container'>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <div className='not-avaiable'>
                        <Row className='imageDiv'>
                            <Image src={satpayLogo} alt='satpay logo'/>
                        </Row>
                        <Row className='infoDiv'>
                            <p>در حال حاضر این سرویس در دسترس نمیباشد</p>
                        </Row>
                    </div>
                </Col>
                <Col md={3}></Col>
            </Row>
        </Container>
    );
};

export default NotAvailable;