import React, { useState } from 'react';

//axios
import axios from "axios"

//bootstrap
import {Container, Row, Col , Image ,Button ,Form} from "react-bootstrap"

//styles
import "./styles/iban.scss";

//images
import satpayLogo from "./styles/img/satpay-logo.png";

const IbanInquiry = () => {

    const [data, setData] = useState({
        ibanNum : "",
    })

    const changeHandler = (event) =>{
        setData({
            [event.target.name] : event.target.value
        })
        console.log(data.ibanNum);
    }

    const sendData = () =>{
        // const IbanNumber = {
        //     // "iban": data.ibanNum
        //     "iban": "IR320160000000000147234782"
        //     };
        // axios.post("https://micro.satpay.ir/api/open-banking/v1/iban/inquiry", IbanNumber)
        //     .then(response => console.log(response))
        fetch('https://micro.satpay.ir/api/open-banking/v1/iban/inquiry', {
            method: 'POST',
            body: JSON.stringify({
                "iban": "IR67 0160 0000 0000 0777 8310 55"
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'Accept' : 'application/json',
                'Authorization' : 'Bearer <token_here>'
            },
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }



    return (
        <Container className='ibanContainer' fluid>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
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
                            <Form.Control type="text" placeholder="IR **** **** **** **** **** ****" value={data.ibanNum} name='ibanNum' onChange={changeHandler}/>
                        </Row>
                        <Row className='buttonDiv'>
                            <Col>
                                <Button onClick={sendData}>استعلام</Button>
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