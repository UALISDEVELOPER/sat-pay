import React, { useEffect } from 'react';

//bootstrap
import {Tooltip, OverlayTrigger, Image } from "react-bootstrap"


//styles
import "./styles/sidebar.scss";

//images
import dashboard from "./styles/img/dashboard.png";
import organizationalCredit from "./styles/img/Organizational-credit.svg";
import socialSecurity from "./styles/img/Social-Security.png"
import openBanking from "./styles/img/open-banking.svg";
import postOffice from "./styles/img/post-office.png";
import validation from "./styles/img/validation.png";
import cardIssuance from "./styles/img/Card-issuance.png";
import wallet from "./styles/img/wallet.svg";
import leasing from "./styles/img/leasing.png";
import fishingCheck from "./styles/img/Fishing-check.png";
import billAndCharge from "./styles/img/Bills-and-charges.png";
import logout from "./styles/img/logout.png";



const Sidebar = ({sidebarExpand ,setSidebarExpand}) => {
    const renderTooltip = (props) => (
        <Tooltip id="button-tooltip" {...props}>
           {props}
        </Tooltip>
      );
    //this function render tooltips in sidebar

    const entering = (e)=>{
        e.children[1].style.backgroundColor = '#ddd';
        e.children[1].style.border = '2px solid #000';
        e.children[1].style.borderRadius = '10px';
        e.children[1].style.color = '#000';
        e.children[1].style.fontSize = '15px';
    }
    //this function is for changing tooltips styles


    useEffect(()=>{
        const sidebar = document.getElementById("expand");
        if(sidebarExpand){
            sidebar.removeAttribute("class");
            sidebar.classList.add("sidebar-expand-true")
        }else{
            sidebar.removeAttribute("class");
            sidebar.classList.add("sidebar-expand-false")
        }
    },[sidebarExpand])

    //following useEffect expand and contract the sidebar
    
    const changeSidebarExpand = () =>{
        setSidebarExpand(true);
    }

    return (
        <>
            <div className='sidebar d-sm-none d-md-block d-none d-sm-block'>
                <ul>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltip("داشبورد")}
                        onEntering={entering}
                    >
                        <li onClick={changeSidebarExpand}>
                            <Image src={dashboard} alt="sidebar list icons"/>
                        </li>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltip("اعتبار سازمانی")}
                        onEntering={entering}
                    >
                        <li onClick={changeSidebarExpand}>
                            <Image src={organizationalCredit} alt="sidebar list icons"/>
                        </li>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltip("تامیین اجتماعی")}
                        onEntering={entering}
                    >
                        <li onClick={changeSidebarExpand}>
                            <Image src={socialSecurity} alt="sidebar list icons"/>
                        </li>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltip("بانکداری باز")}
                        onEntering={entering}
                    >
                        <li onClick={changeSidebarExpand}>
                            <Image src={openBanking} alt="sidebar list icons"/>
                        </li>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltip("اداره پست")}
                        onEntering={entering}
                    >
                        <li onClick={changeSidebarExpand}>
                            <Image src={postOffice} alt="sidebar list icons"/>
                        </li>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltip("اعتبار سنجی")}
                        onEntering={entering}
                    >
                        <li onClick={changeSidebarExpand}>
                            <Image src={validation} alt="sidebar list icons"/>
                        </li>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltip("صدور کارت")}
                        onEntering={entering}
                    >
                        <li onClick={changeSidebarExpand}>
                            <Image src={cardIssuance} alt="sidebar list icons"/>
                        </li>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltip("کیف پول")}
                        onEntering={entering}
                    >
                        <li onClick={changeSidebarExpand}>
                            <Image src={wallet} alt="sidebar list icons"/>
                        </li>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltip("فروش اقساطی")}
                        onEntering={entering}
                    >
                        <li onClick={changeSidebarExpand}>
                            <Image src={leasing} alt="sidebar list icons"/>
                        </li>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltip("چک صیادی")}
                        onEntering={entering}
                    >
                        <li onClick={changeSidebarExpand}>
                            <Image src={fishingCheck} alt="sidebar list icons"/>
                        </li>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltip("قبوض و شارژ")}
                        onEntering={entering}
                    >
                        <li onClick={changeSidebarExpand}>
                            <Image src={billAndCharge} alt="sidebar list icons"/>
                        </li>
                    </OverlayTrigger>
                    <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltip("خروج از حساب")}
                        onEntering={entering}
                    >
                        <li onClick={changeSidebarExpand}>
                            <Image src={logout} alt="sidebar list icons"/>
                        </li>
                    </OverlayTrigger>
                </ul>
            </div>
            <div className='sidebar-expand-false' id='expand'>

            </div>
        </>
    );
};

export default Sidebar;