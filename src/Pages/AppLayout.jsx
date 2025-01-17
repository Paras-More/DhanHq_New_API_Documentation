import React, { useEffect } from "react";
import "./Main.css";
import LeftSideBarWeb from "./LeftSideBarWeb";
import RightSideBar from "./RightSideBar";
import CenterContainer from "./CenterContainer";
import Navbar from "../Common_Components/Navbar";
import { useLocation } from "react-router-dom";
function AppLayout() {
  const location = useLocation();
  // const currentRef = useRef(null)

  useEffect(() => {
    const container = document.querySelector(".changeScrollTop");
    if (container) {
      container.scrollTop = 0; // Reset the scroll position of the container to the top.
    }
  }, [location]); // Runs whenever the route (location) changes.

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        {/* This Below Div will only be visible above 995px width screen */}
        {console.log("render")}
        <Navbar />
        <div className="w-full max-h-[90vh] overflow-y-auto changeScrollTop">
          <div className=" md:max-w-[70vw] max-w-full bg-white mx-auto flex flex-nowrap shrink-1 gap-8 px-4  pt-7 relative">
            {/* Left Side Bar */}
            {/* For Webdevices for above 1205px other wise hidden*/}
            <LeftSideBarWeb />

            {/* For Mobile for Below 768px I have added left sidebar in Navbar */}

            {/* Center Container */}
            <CenterContainer />

            {/* Right SideBar */}
            {/* <div className='max-w-full '>
            <RightSideBar/>
            </div> */}
          </div>
        </div>

        {/* This below Div will be visible for mobile devices */}
      </div>
    </>
  );
}

export default AppLayout;
