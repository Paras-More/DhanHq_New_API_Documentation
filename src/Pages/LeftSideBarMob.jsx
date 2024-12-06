import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { SelectTypeContext } from '../Context/SelectType';
function LeftSideBarMob() {

  const {showMenu,setShowMenu} = useContext(SelectTypeContext)


    useEffect(()=>{
      

    },[showMenu])

    function handleLinkCLick(e){
      e.stopPropagation();

    }

    function handleParentClick(e){ 
      // If user clicks on background grey portion then menu will be closed       
      setShowMenu(!showMenu)
    }

  return (
    <>
        {
          showMenu && <div onClick={handleParentClick} className='w-full xl:hidden text-2xl fixed top-0 right-0 left-0 bottom-0 bg-[#6b72808f]'>
             {
              <div className='h-full w-[17.125rem] px-2 py-4 bg-green-500'>
                      
                    <div onClick={handleLinkCLick} className=' h-full'>
                      <div className='bg-white flex flex-col items-start justify-center py-[1.75rem] px-[1rem] min-h-[7rem] max-h-[7rem]'>
                        <div className='h-[3.5rem] w-[12.875rem]'>
                          <img src='https://www.mstock.com/content/images/mirae-logo.svg' className='h-[3.5rem] w-[7.875rem]'></img>
                        </div>
                        <div>
                            <p>API Documentation</p>
                        </div>
                        {/* Back button SVG DIV */}
                        {/* <div className='pt-4 pl-7 bg-slate-300'>
                          <svg onClick={()=>setShowMenu(!showMenu)}
                              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3   9h12a6 6 0 0 1 0 12h-3" />
                          </svg> 
                        </div> */}
                      </div>
                      {/* <div className='bg-red-500 mt-5'>
                        <p>paras More</p>
                      </div>       */}
                    </div>  
               </div>
              }
               </div>
        }
    </>
  )
}

export default LeftSideBarMob