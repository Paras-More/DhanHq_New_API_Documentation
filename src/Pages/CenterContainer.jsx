import React, { useEffect } from 'react'
import "./Main.css"
import { Outlet } from 'react-router-dom'

function CenterContainer() {

  return (
<section className='bg-white w-customLarge flex-shrink-1 overflow-y-scroll mb-10 Center_content_div'>
{console.log("Center Container render")}    
    <Outlet/>
 </section>
  )
}

export default CenterContainer