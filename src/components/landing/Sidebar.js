import React, { useEffect, useState } from 'react';

import { Link } from "react-router-dom";

//bootstrap
import {Tooltip, OverlayTrigger, Image } from "react-bootstrap";

//styles
import "./styles/sidebar.scss";

//images
import homeIcon from "./styles/img/home.png";
import profileIcon from "./styles/img/profile.png";
import searchIcon from "./styles/img/search.png";
import graphIcon from "./styles/img/graph.png";
import bookmarkIcon from "./styles/img/bookmark.png";

//main sidebar listgroup array
import {listGroup} from "./listGroupItems/listGroupItem";
const MainSidebarListGroup = listGroup;


const Sidebar = ({}) => {

    const [windowSize , setWindowSize] = useState(window.innerWidth);
    // const [windowSize , setWindowSize] = useState(499);


    useEffect(()=>{
        console.log(windowSize);
    },[])
    
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

    return (
        <>
            {windowSize > 500 ? 
                <div className='largeNavbar' id='mainSidebar'>
                    <ul>
                        {MainSidebarListGroup.map(item => 
                            <OverlayTrigger
                            placement="top"
                            delay={{ show: 250, hide: 100 }}
                            overlay={renderTooltip(item.name)}
                            onEntering={entering}
                            key={item.key}
                            >
                                <Link to={item.link}>
                                    <li >
                                        <Image src={item.img} alt="sidebar list icons" />
                                    </li>
                                </Link>
                            </OverlayTrigger>
                        )}
                    </ul>
                </div>
                :
                <div className='smallNavbar'>
                    <ul>
                        <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 100 }}
                        overlay={renderTooltip("حساب کاربری")}
                        onEntering={entering}
                        >
                            <Link to="/pishkhan/not-available">
                                <li >
                                    <Image src={profileIcon} alt="icon" />
                                </li>
                            </Link>
                        </OverlayTrigger>
                        <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 100 }}
                        overlay={renderTooltip("آمار")}
                        onEntering={entering}
                        >
                            <Link to="/pishkhan/not-available">
                                <li >
                                    <Image src={graphIcon} alt="icon" />
                                </li>
                            </Link>
                        </OverlayTrigger>
                        
                        <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 100 }}
                        overlay={renderTooltip("جستوجو")}
                        onEntering={entering}
                        >
                            <Link to="/pishkhan/not-available">
                                <li >
                                    <Image src={searchIcon} alt="icon" />
                                </li>
                            </Link>
                        </OverlayTrigger>
                        <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 100 }}
                        overlay={renderTooltip("ذخیره شده ها")}
                        onEntering={entering}
                        >
                            <Link to="/pishkhan/not-available">
                                <li >
                                    <Image src={bookmarkIcon} alt="icon" />
                                </li>
                            </Link>
                        </OverlayTrigger>
                        <OverlayTrigger
                        placement="top"
                        delay={{ show: 250, hide: 100 }}
                        overlay={renderTooltip("خانه")}
                        onEntering={entering}
                        >
                            <Link to="/pishkhan/openBankingList">
                                <li >
                                    <Image src={homeIcon} alt="icon" />
                                </li>
                            </Link>
                        </OverlayTrigger>
                        
                    </ul>
                </div>
        
            }
        </>
    );
};

export default Sidebar;