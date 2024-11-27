import React, { useEffect } from 'react';
import "./Main.css"
import { BrowserRouter } from 'react-router-dom';
import Router from '../Routes/Router';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import LeftSideBarWeb from './LeftSideBarWeb';
import LeftSideBarMob from './LeftSideBarMob';
import RightSideBar from './RightSideBar';  
import CenterContainer from './CenterContainer';
import { useSelector } from 'react-redux';


function  Main() {



  return (
    <>
      <div className='bg-white  border-black flex items-center justify-center' style={{ maxHeight: 'calc(100vh - 67.6px)' }}>
        {/* This Below Div will only be visible above 995px width screen */}
        {console.log("render")}
        
        <div className='m-auto  flex flex-nowrap gap-4 bg-blue-600 bg-white px-4 overflow-y-scroll overflow-hidden pt-10' style={{ maxHeight: 'calc(100vh - 67.6px)' }}>
           {/* Left Side Bar */}
           {/* For Webdevices for above 1205px other wise hidden*/}
                 <LeftSideBarWeb/>       
          {/* For Webdevices for above 1205px other wise hidden*/}
               <LeftSideBarMob/>

          {/* Center Container */}
                 <CenterContainer/>

          {/* Right SideBar */}
            {/* <RightSideBar/> */}
        </div>

        {/* This below Div will be visible for mobile devices */}
      </div>
    </>
  );
}

export default Main;
