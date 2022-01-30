import React, { useEffect, useState }  from 'react';

//axios
import axios from "axios";

//bootstrap
import {Container, Row, Col , Image ,Button ,Form, Spinner, Accordion, Table } from "react-bootstrap"

//styles
import "./styles/backCheques.scss";

//images
import satpayLogo from "./styles/img/satpay-logo.png";

const BackCheques = () => {
    const [data, setData] = useState({
        nationalID : ""
    })

    const [fetchedData , setFetchedData] = useState({
        status : false,
        loading : false,

        name : "",
        chequeList : [],
    })

    const [serverError, setServerError] = useState(false);

    useEffect(()=>{
        console.log(fetchedData);
    })

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
        const URL = "https://micro.satpay.ir/api/open-banking/v1/back-cheques/inquiry"

        setFetchedData({loading : true})

        axios.post(URL , data , config)
            .then(response => {
                console.log(response);
                const {name , chequeList} = response.data.description.backChequesInquiry.result ;
                setFetchedData({
                    status : true,
                    loading : false,
                    
                    name : name,
                    chequeList : chequeList,
                
                
                })
                console.log(fetchedData);
                setServerError(false);
            })
            .catch(error => {
                console.log(error.message);
                setServerError(error.message)
                setFetchedData({
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
                                <p>سرویس استعلام چک برگشتی</p>
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
                                            <Accordion.Header className='itemButton'><label>{fetchedData.name}</label>نمایش لیست چک های برگشتی</Accordion.Header>
                                            <Accordion.Body className='itemBody'>
                                                <div className='tableDiv'>
                                                    <Table striped bordered hover variant="dark">
                                                        <thead>
                                                            <tr>
                                                                <th>شماره حساب</th>
                                                                <th>نام بانک</th>
                                                                <th>مبلغ</th>
                                                                <th>#</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            {fetchedData.chequeList.map(item => 
                                                            <tr key={item.id}>
                                                                <td>{item.accountNumber}</td>
                                                                <td>{item.branchDescription.split("-")[0]}</td>
                                                                <td>{item.amount}</td>
                                                                <td>1</td>
                                                            </tr>
                                                            )}
                                                        </tbody>
                                                    </Table>
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
                                    <p>: کد ملی </p>
                                </Row>
                                <Row>
                                    <Form.Control type="text" placeholder="کد ملی" value={data.nationalID} name='nationalID' maxLength={11} onChange={changeHandler}/>
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

export default BackCheques;