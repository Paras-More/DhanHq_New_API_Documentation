import React, { useContext, useEffect } from 'react'
import { SelectTypeContext } from '../Context/SelectType'
import LeftSideBarMob from '../Pages/LeftSideBarMob'
import mstockLogo from "../Logo/mirae-logo.svg"

function Navbar() {
  const {showMenu,setShowMenu} = useContext(SelectTypeContext)


  useEffect(()=>{

  },[showMenu])


  return (
    <nav className="w-full h-16 bg-white border-b-2  flex items-center justify-center flex-wrap sticky top-0  z-50">
               <div className='flex bg-white px-4 items-center justify-start gap-8 m-auto max-w-[930px] w-full'>
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
                    <img src={mstockLogo} alt="mstock-logo" className='hidden md:block h-[45px]'></img>
                    <span className='mstockNavFont text-xl'>API Documentation</span>        
              </div> 
              </div>  
              <LeftSideBarMob/>
  </nav>

  )
}

export default Navbar