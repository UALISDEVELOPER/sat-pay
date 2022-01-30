import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"


//bootstrap
import {Container, Row, Col , Image} from "react-bootstrap"

//styles
import "./styles/openBankingList.scss";

//images
import satpayLogo from "./styles/img/satpay-logo.png";

import dashboard from "../styles/img/dashboard.png";
import organizationalCredit from "../styles/img/Organizational-credit.svg";
import socialSecurity from "../styles/img/Social-Security.png"
import openBanking from "../styles/img/open-banking.svg";
import postOffice from "../styles/img/post-office.png";
import validation from "../styles/img/validation.png";
import cardIssuance from "../styles/img/Card-issuance.png";
import wallet from "../styles/img/wallet.svg";
import leasing from "../styles/img/leasing.png";
import fishingCheck from "../styles/img/Fishing-check.png";
import billAndCharge from "../styles/img/Bills-and-charges.png";


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
                        <Col xs={6}>
                            <div className='servicesDiv'>
                                <p>تبدیل شماره حساب به شماره شبا</p>
                                <Image src={openBanking} alt='openBanking'/>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <Link to="/pishkhan/iban-inquiry">
                                <div className='servicesDiv'>
                                    <p>تبدیل شماره کارت به شماره شبا</p>
                                    <Image src={openBanking} alt='openBanking'/>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={6}>
                            <Link to="/pishkhan/back-cheques-inquiry">
                                <div className='servicesDiv'>
                                    <p>استعلام چک برگشتی</p>
                                    <Image src={openBanking} alt='openBanking'/>
                                </div>
                            </Link>
                        </Col>
                        <Col xs={6}>
                            <div className='servicesDiv'>
                                <p>استعلام وام گیرنده</p>
                                <Image src={openBanking} alt='openBanking'/>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div className='servicesDiv'>
                                <p>استعلام خلافی خودرو</p>
                                <Image src={openBanking} alt='openBanking'/>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div className='servicesDiv'>
                                <p>لیست استعلام ها</p>
                                <Image src={openBanking} alt='openBanking'/>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div className='servicesDiv'>
                                <p>ثبت نام کد مالیاتی</p>
                                <Image src={openBanking} alt='openBanking'/>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div className='servicesDiv'>
                                <p>استعلام کد مالیاتی</p>
                                <Image src={openBanking} alt='openBanking'/>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div className='servicesDiv'>
                                <p>انطباق کد ملی و شماره شبا</p>
                                <Image src={openBanking} alt='openBanking'/>
                            </div>
                        </Col>
                        <Col xs={6}>
                            <div className='servicesDiv'>
                                <p>تبدیل شماره کارت به شماره حساب</p>
                                <Image src={openBanking} alt='openBanking'/>
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