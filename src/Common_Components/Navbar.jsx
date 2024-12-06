import React, { useContext, useEffect } from 'react'
import { SelectTypeContext } from '../Context/SelectType'
import LeftSideBarMob from '../Pages/LeftSideBarMob'
function Navbar() {
  const {showMenu,setShowMenu} = useContext(SelectTypeContext)


  useEffect(()=>{

    
  },[showMenu])
 


  return (
    <nav className="w-full bg-white border-b-2 lg:px-40 lg:py-2 px-8 py-1  flex items-center justify-between flex-wrap sticky top-0  z-50">
               <div className='flex items-center justify-between w-full'>
               <div className='md:hidden'>
                  {
                    !showMenu && <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="size-6"
                    onClick={()=>setShowMenu(!showMenu)}>
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                    />
                    </svg> 
                  }



                </div>
              <div className='flex gap-20 items-center justify-between h-[45px]'>
                    <img src='https://www.mstock.com/content/images/mirae-logo.svg' className='hidden md:block h-[45px]'></img>
                    <span className='mstockNavFont text-xl'>API Documentation</span>        
              </div> 
              </div>  
              <LeftSideBarMob/>
  </nav>

  )
}

export default Navbar