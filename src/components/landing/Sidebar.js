import React, { useEffect, useState } from 'react';

import { Link , useHistory} from "react-router-dom";

//sidebar internal dashboard list
import {dashboardList} from "./listGroupItems/InternalList";

//bootstrap
import {Tooltip, OverlayTrigger, Image } from "react-bootstrap";

//styles
import "./styles/sidebar.scss";

//sidebar listgroup array
import {listGroup} from "./listGroupItems/listGroupItem";
const MainSidebarListGroup = listGroup;


const Sidebar = ({sidebarExpand ,setSidebarExpand, callFunc}) => {

    const [chosenList, setChoseList] = useState(dashboardList);
    

    const history = useHistory();
    useEffect(()=>{
        chosenList==="logout" && console.log("akshdkjasj");
    },[chosenList]);

    //////
    // const [mainSidebarListGroup , setMainSidebarListGroup] = useState(listGroup);
    
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
        const expandedSidebar = document.getElementById("expand");
        const mainSidebar = document.getElementById("mainSidebar") ;
        // const [mainSidebarWidth, setMainSidebarWidth] = useState( document.getElementById("mainSidebar").style.width="0px");
        if(sidebarExpand ){
            expandedSidebar.removeAttribute("class");
            expandedSidebar.classList.add("sidebar-expand-true");
            mainSidebar.classList.add("mainSidebar-xs");
        }else{
            expandedSidebar.removeAttribute("class");
            expandedSidebar.classList.add("sidebar-expand-false");
            mainSidebar.classList.remove("mainSidebar-xs");
        }
    },[sidebarExpand])

    //following useEffect expand and contract the sidebar
    
    // const changeSidebarExpand = () =>{
    //     sidebarExpand && callFunc
    // }
    //onclick on li in sidebar , sidebar will expand

    return (
        <>
            <div className='sidebar-expand-false' id='expand'>
                <ul>
                    {chosenList.map(item =>
                        <li key={item.key}>
                            <Link to={item.link}>
                                {item.name}
                            </Link>
                        </li>    
                    )}
                </ul>
            </div>
            <div className='sidebar' id='mainSidebar'>
                <ul>
                    {MainSidebarListGroup.map(item => 
                        <OverlayTrigger
                        placement="left"
                        delay={{ show: 250, hide: 250 }}
                        overlay={renderTooltip(item.name)}
                        onEntering={entering}
                        key={item.key}
                        >
                            <div onClick={()=> !sidebarExpand && callFunc()} >
                                <li onClick={()=> setChoseList(item.onClick)} >
                                    <Image src={item.img} alt="sidebar list icons" />
                                </li>
                            </div>
                        </OverlayTrigger>
                    )}
                </ul>
            </div>
        </>
    );
};

export default Sidebar;