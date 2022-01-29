import React, { useState } from 'react';

//axios
import axios from "axios";

//bootstrap
import {Container, Row, Col , Image ,Button ,Form, Spinner, Accordion } from "react-bootstrap"

//styles
import "./styles/iban.scss";

//images
import satpayLogo from "./styles/img/satpay-logo.png";

const IbanInquiry = () => {

    const [data, setData] = useState({
        card:"",
    })

    const [fetchedData , setFetchedData] = useState({
        status : false,
        loading : false,

        IBAN : "", 
        bankName : "",
        card : "" ,
        deposit : "",
        depositDescription : "",
        //حساب فعال است 
        depositComment : "" ,
        // پس انداز عادی
        depositOwners : "" ,
    })

    const [serverError, setServerError] = useState(false);

    const changeHandler = (event) =>{
        setData({
            [event.target.name] : event.target.value
        })
    }

    const sendData = () =>{
        const config = {
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
                'apikey' : 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWYwMmEyNTdjYmIxYTAwMTkxOTY1ZmQiLCJ1c2VyTmFtZSI6IkFsaS1HaG9yYmFuaTAzIiwiSVAiOlsiNS4yMTcuMjUyLjIyOCJdLCJlbWFpbCI6IjAzYWxpZ2hvcmJhbmlAZ21haWwuY29tIiwicm9sZSI6ImRldmVsb3BlciIsImFwcE5hbWUiOiJzYXRwYXktdGVzdCIsImlhdCI6MTY0MzEyOTc4NiwiZXhwIjoxNjQzNTYxNzg2fQ.qLSvUhvZUjrWWX2OsW4e9Jg7RLktN1XN9kZTTiNdhe8' ,
                'appname' : 'satpay-test'
            }
        }
        const URL = "https://micro.satpay.ir/api/open-banking/v1/card-iban/convert"

        setFetchedData({loading : true})

        axios.post(URL , data , config)
            .then(response => {
                console.log(response);
                const {IBAN ,bankName ,card, depositDescription, depositComment , depositOwners ,deposit} = response.data.description.cardToIban.result ;
                setFetchedData({
                    status : true,
                    loading : false,

                    IBAN : IBAN, 
                    bankName : bankName,
                    card : card ,
                    deposit :deposit,
                    depositDescription : depositDescription ,
                    //حساب فعال است 
                    depositComment :depositComment  ,
                    // پس انداز عادی
                    depositOwners : `${depositOwners[0].firstName} ${depositOwners[0].lastName}` ,
                })
                console.log(fetchedData);
                setServerError(false);
            })
            .catch(error => {
                setServerError(error.message)
                setFetchedData({
                    // status : true,
                    loading:false
                })
            })
    }

    const resetHandler = () =>{
        setFetchedData({status : false});
        setData({card: ""})
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
                                <p>سرویس استعلام شماره شبا با استفاده از شماره کارت</p>
                            </Col>
                        </Row>
                        <Row className='imageDiv'>
                            <Image src={satpayLogo} alt="satpay logo"/>
                        </Row>
                        <Row className='textDiv'>
                            <p>سامانه جامع اعتبار سنجی ست پی</p>
                        </Row>
                        {fetchedData.status ?
                            <Row>
                                <Col>
                                    <Accordion defaultActiveKey="0">
                                        <Accordion.Item eventKey="0" className='item'>
                                            <Accordion.Header className='itemButton'>نمایش اطلاعات کارت {fetchedData.card}</Accordion.Header>
                                            <Accordion.Body className='itemBody'>
                                                <div>
                                                    <p><label> {fetchedData.IBAN} </label>: شماره شبا</p>
                                                    <p><label> {fetchedData.bankName} </label>: نام بانک</p>
                                                    <p><label> {fetchedData.deposit} </label>: شماره حساب</p>
                                                    <p><label> {fetchedData.depositOwners} </label>: مالک حساب</p>
                                                </div>
                                            </Accordion.Body>
                                        </Accordion.Item>
                                    </Accordion>
                                </Col>
                                <Row className='buttonDiv'>
                                    <Col>
                                        <Button onClick={resetHandler} className='button'>بازگشت</Button>
                                    </Col>
                                </Row>
                            </Row>
                        
                        
                            :
                            <div>
                                <Row className='subjectDiv'>
                                    <p>: شماره کارت </p>
                                </Row>
                                <Row>
                                    <Form.Control type="text" placeholder="شماره کارت" value={data.card} name='card' onChange={changeHandler}/>
                                </Row>
                                <Row className='buttonDiv'>
                                    <Col>
                                        <Button onClick={sendData} className='button'>استعلام</Button>
                                    </Col>
                                </Row>
                            </div>

                        }
                    </div>
                </Col>
                <Col md={3}></Col>
            </Row>
            {fetchedData.loading&&
                <Row  className="justify-content-center">
                    <div className='loading'>
                        <Spinner animation="border" variant="primary" className='spinner' />
                        <p>لطفا منتظر بمانید</p>
                    </div>
                </Row>
            }
        </Container>
    );
};

export default IbanInquiry;