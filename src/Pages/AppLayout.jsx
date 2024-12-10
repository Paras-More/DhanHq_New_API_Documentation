import React, { useEffect } from 'react';
import "./Main.css"
import Router from '../Routes/Router';
import LeftSideBarWeb from './LeftSideBarWeb';
import LeftSideBarMob from './LeftSideBarMob';
import RightSideBar from './RightSideBar';  
import CenterContainer from './CenterContainer';
import { useRef } from 'react';
import Navbar from '../Common_Components/Navbar';
function  AppLayout() {

  return (  
    <>
      <div className='bg-white min-h-[100vh] flex flex-col items-center justify-center'>
        {/* This Below Div will only be visible above 995px width screen */}
        {console.log("render")}
        <Navbar/>
      <div className='w-full h-[90vh] overflow-y-auto'>
      <div className=' max-w-[930px] mx-auto flex flex-nowrap shrink-1 gap-4 bg-green-200 px-4 pt-7 relative'>
           {/* Left Side Bar */}
           {/* For Webdevices for above 1205px other wise hidden*/}
                 <LeftSideBarWeb/>  

          {/* For Mobile for Below 768px I have added left sidebar in Navbar */}

          {/* Center Container */}
                 <CenterContainer/>

          {/* Right SideBar */}
            {/* <RightSideBar/> */}
        </div>
      </div>

        {/* This below Div will be visible for mobile devices */}
      </div>
    </>
  );
}

export default AppLayout;
