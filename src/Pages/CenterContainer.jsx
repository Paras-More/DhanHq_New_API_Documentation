import React, { useEffect } from 'react'
import "./Main.css"
import { Outlet,useLocation } from 'react-router-dom'


function CenterContainer() {

  const location  = useLocation();

  useEffect(() => {
    const container = document.querySelector(".Center_content_div");
    if (container) {
      container.scrollTop = 0; // Reset the scroll position of the container to the top.
    }
  }, [location]); // Runs whenever the route (location) changes.

  return (
<section className='bg-red-400 max-w-[736px] md:min-w-[736px] flex-shrink-1 mb-10 Center_content_div'>
  {console.log("Center Container render")}    
    <Outlet/>
 </section>
  )
}

export default CenterContainer