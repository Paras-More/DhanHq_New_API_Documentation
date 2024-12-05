import React, { useEffect, useState } from 'react'
import { useContext } from 'react';
import { SelectTypeContext } from '../Context/SelectType';
function LeftSideBarMob() {

  const {showMenu,setShowMenu} = useContext(SelectTypeContext)


    useEffect(()=>{
      

    },[showMenu])

  return (
    <>
        {
          showMenu && <div className='w-full text-2xl fixed top-0 right-0 left-0 bottom-0 bg-[#6b72808f]'>

             {
              <div className='h-full'>
                      
                      <div className='bg-white w-[50%] h-full'>
                      <div className='top-4 left-7'>
                        <div className='pt-4 pl-7'>
                          <svg onClick={()=>setShowMenu(!showMenu)}
                              xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M9 15 3 9m0 0 6-6M3   9h12a6 6 0 0 1 0 12h-3" />
                          </svg> 
                        </div>
                        {/*  */}
                      </div>

                            <p>asdasdadasdasdasd</p>
                      </div>  
               </div>
              }
               </div>
        }
    </>
  )
}

export default LeftSideBarMob