import React, { useEffect } from 'react'
import "./Main.css"
import { Outlet,useLocation} from 'react-router-dom'
import { useRef } from 'react';

function CenterContainer() {

  return (
<section className='max-w-[full] md:max-w-[736px] overflow-x-auto overflow-hidden flex-shrink-1 mb-10 changeScrollTop'>
  {console.log("Center Container render")}    
    <Outlet/>
 </section>
  )
}

export default CenterContainer