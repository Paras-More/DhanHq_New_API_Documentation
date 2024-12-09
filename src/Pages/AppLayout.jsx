import React, { useEffect } from 'react';
import "./Main.css"
import Router from '../Routes/Router';
import LeftSideBarWeb from './LeftSideBarWeb';
import LeftSideBarMob from './LeftSideBarMob';
import RightSideBar from './RightSideBar';  
import CenterContainer from './CenterContainer';
import Navbar from '../Common_Components/Navbar';
function  AppLayout() {

  return (  
    <>
      <div className='bg-white  flex flex-col items-center justify-center'>
        {/* This Below Div will only be visible above 995px width screen */}
        {console.log("render")}
        <Navbar/>
        <div className='m-auto max-w-full flex flex-nowrap shrink-1 gap-4 bg-white px-4 overflow-y-scroll overflow-hidden pt-7'style={{ maxHeight: "100vh" }} >
           {/* Left Side Bar */}
           {/* For Webdevices for above 1205px other wise hidden*/}
                 <LeftSideBarWeb/>  

          {/* For Mobile for Below 768px I have added left sidebar in Navbar */}

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

export default AppLayout;
