import React, { useContext, useEffect } from 'react'
import { SelectTypeContext } from '../Context/SelectType'
import LeftSideBarMob from '../Pages/LeftSideBarMob'
import mstockLogo from "../Logo/mirae-logo.svg"

function Navbar() {
  const {showMenu,setShowMenu} = useContext(SelectTypeContext)


  useEffect(()=>{

  },[showMenu])


  return (
    <nav className="w-full h-16  border-b-2  flex items-center justify-center flex-wrap sticky top-0  z-50">
               <div className='flex flex-wrap  px-4 items-center bg-white justify-between gap-8 m-auto md:max-w-[70vw] w-full'>
              
               <div className='flex items-center justify-start gap-4'>
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
                  {/* Search bar */}
              {/* <div className='md:flex items-center  bg-blue-200 gap-2 px-2 hidden'>
                  <label htmlFor='searchInput' className='cursor-pointer bg-blue-200 py-1'>
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-5">
                    <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                  </label>
                  <input id="searchInput"   type='text' placeholder='Search' className='bg-blue-200 max-w-[10.8rem] py-1 border-none focus:outline-none'/>
               </div> */}

              </div>  
              <LeftSideBarMob/>
  </nav>

  )
}

export default Navbar