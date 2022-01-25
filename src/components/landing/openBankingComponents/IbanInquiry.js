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
    //     const IbanNumber = {
    //         // "iban": data.ibanNum
    //         "iban": "IR320160000000000147234782"
    //         };
    //     axios.post("https://micro.satpay.ir/api/open-banking/v1/iban/inquiry", IbanNumber)
    //         .then(response => console.log(response))
    //----------------------------
    // fetch('https://micro.satpay.ir/api/oauth/refresh-token', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //         "refreshAPIkey":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWYwMmEyNTdjYmIxYTAwMTkxOTY1ZmQiLCJ1c2VyTmFtZSI6IkFsaS1HaG9yYmFuaTAzIiwiSVAiOlsiNS4yMTcuMjUyLjIyOCJdLCJlbWFpbCI6IjAzYWxpZ2hvcmJhbmlAZ21haWwuY29tIiwicm9sZSI6ImRldmVsb3BlciIsImFwcE5hbWUiOiJzYXRwYXktdGVzdCIsImlhdCI6MTY0MzEyOTc4NiwiZXhwIjoyNDIwNzI5Nzg2fQ.tYQ3vh0leS8QnvvvR4J8B_KE8-l4EV3-4bN4dc9XvR8"
    //     }),
    //     headers: {
    //         'Content-type': 'application/json; charset=UTF-8',
    //     },
    // })
    // .then((response) => response.json())
    // .then((json) => console.log(json));
        fetch('https://micro.satpay.ir/api/open-banking/v1/card-iban/convert', {
            method: 'POST',
            body: JSON.stringify({
                card : 6104337422405355
              }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'apikey' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWYwMmEyNTdjYmIxYTAwMTkxOTY1ZmQiLCJ1c2VyTmFtZSI6IkFsaS1HaG9yYmFuaTAzIiwiSVAiOlsiNS4yMTcuMjUyLjIyOCJdLCJlbWFpbCI6IjAzYWxpZ2hvcmJhbmlAZ21haWwuY29tIiwicm9sZSI6ImRldmVsb3BlciIsImFwcE5hbWUiOiJzYXRwYXktdGVzdCIsImlhdCI6MTY0MzEyOTc4NiwiZXhwIjoxNjQzNTYxNzg2fQ.qLSvUhvZUjrWWX2OsW4e9Jg7RLktN1XN9kZTTiNdhe8' ,
                'appname' : 'satpay-test'
            },
            
        })
        .then((response) => response.json())
        .then((json) => console.log(json));
    }



    return (
        <Container className='openBankingContainer' fluid>
            <Row>
                <Col md={3}></Col>
                <Col md={6}>
                    <div className='openBanking-div'>
                        <Row className='heading'>
                            <Col xs={4} className='priceDiv'>
                                <p>۳۰۰ تومان</p>
                            </Col>
                            <Col xs={8} className='subjectDiv'>
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