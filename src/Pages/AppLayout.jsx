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
      <div className='bg-white  border-black flex flex-col items-center justify-center'>
        {/* This Below Div will only be visible above 995px width screen */}
        {console.log("render")}
        <Navbar/>
        <div className='m-auto   flex flex-nowrap gap-4 bg-white px-4 overflow-y-scroll overflow-hidden pt-10' style={{ maxHeight: "100vh" }}>
           {/* Left Side Bar */}
           {/* For Webdevices for above 1205px other wise hidden*/}
                 <LeftSideBarWeb/>       
          {/* For Webdevices for above 1205px other wise hidden*/}
               
               {/* <LeftSideBarMob/> */}

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
