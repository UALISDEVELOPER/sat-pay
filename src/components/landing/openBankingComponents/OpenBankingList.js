import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"


//bootstrap
import {Container, Row, Col , Image} from "react-bootstrap"

//styles
import "./styles/openBankingList.scss";

//images
import satpayLogo from "./styles/img/satpay-logo.png";

import openBanking from "../styles/img/open-banking.svg";


const OpenBankingList = () => {

    return (
        <Container fluid="md" className="justify-content-center hello">
            <Row>
                <Col lg={2}></Col>
                <Col lg={8} className='openBanking-row'>
                    <Row>
                        <Image className='satpay-logo' src={satpayLogo} alt='satpay logo'/>
                    </Row>
                    <Row className="justify-content-center servicesRow">
                        <Col xs={4}>
                            <div className='servicesDiv'>
                                <Image src={openBanking} alt='openBanking'/>
                                <p>شماره حساب به شماره شبا</p>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <Link to="/pishkhan/iban-inquiry">
                                <div className='servicesDiv'>
                                    <Image src={openBanking} alt='openBanking'/>
                                    <p>شماره کارت به شماره شبا</p>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={4}>
                            <div className='servicesDiv'>
                                <Image src={openBanking} alt='openBanking'/>
                                <p>شماره کارت به شماره حساب</p>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <Link to="/pishkhan/back-cheques-inquiry">
                                <div className='servicesDiv'>
                                    <Image src={openBanking} alt='openBanking'/>
                                    <p>استعلام چک برگشتی</p>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={4}>
                            <div className='servicesDiv'>
                                <Image src={openBanking} alt='openBanking'/>
                                <p>استعلام وام گیرنده</p>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className='servicesDiv'>
                                <Image src={openBanking} alt='openBanking'/>
                                <p>استعلام خلافی خودرو</p>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className='servicesDiv'>
                                <Image src={openBanking} alt='openBanking'/>
                                <p>لیست استعلام ها</p>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className='servicesDiv'>
                                <Image src={openBanking} alt='openBanking'/>
                                <p>ثبت نام کد مالیاتی</p>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className='servicesDiv'>
                                <Image src={openBanking} alt='openBanking'/>
                                <p>استعلام کد مالیاتی</p>
                            </div>
                        </Col>
                        <Col xs={4}>
                            <div className='servicesDiv'>
                                <Image src={openBanking} alt='openBanking'/>
                                <p>انطباق کد ملی و شماره شبا</p>
                            </div>
                        </Col>
                    </Row>
                </Col>
                <Col md={2}></Col>
            </Row>
        </Container>
    );
};

export default OpenBankingList;