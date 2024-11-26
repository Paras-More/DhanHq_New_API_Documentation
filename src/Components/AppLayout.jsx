import React from 'react';
import "./Main.css"
import { BrowserRouter } from 'react-router-dom';
import Router from '../Routes/Router';
import { Link } from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import LeftSideBar from './LeftSideBar';
function  Main() {
  return (
    <>
      <div className='bg-slate-500 border-2 border-black flex items-center justify-center' style={{ maxHeight: 'calc(100vh - 67.6px)' }}>
        {/* This Below Div will only be visible above 995px width screen */}
        {console.log("render")}
        
        <div className='m-auto border-2 hidden md:flex flex-nowrap gap-4 bg-blue-600 overflow-y-scroll overflow-hidden pt-10' style={{ maxHeight: 'calc(100vh - 67.6px)' }}>
           {/* Left Side Bar */}
          <LeftSideBar/>       

          {/* Center Container */}
          <section className='bg-yellow-300 w-customLarge flex-shrink-0 overflow-y-scroll Center_content_div'>
              <Outlet/>
           </section>
          {/* Right Container */}
          <aside className='bg-green-500 w-customSmall flex-shrink-0 lg:flex hidden'>
            <p>green</p>
          </aside>
        </div>

        {/* This below Div will be visible for mobile devices */}
      </div>
    </>
  );
}

export default Main;
