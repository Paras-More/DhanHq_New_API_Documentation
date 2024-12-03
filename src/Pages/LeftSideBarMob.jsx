import React, { useEffect, useState } from 'react'

function LeftSideBarMob() {
  const [ShowMenu,setShowMenu] = useState(false)
    useEffect(()=>{
      console.log(ShowMenu);
    },[ShowMenu])

  return (
    <div className={`flex w-full x-1000 xl:hidden h-[100vh] overflow-hidden fixed top-0 left-0`}>
      
        { 
               <div className='w-full h-full z-500 text-2xl relative'>
                  {
                    ShowMenu ? <svg onClick={()=>setShowMenu(!ShowMenu)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg> : <svg onClick={()=>setShowMenu(!ShowMenu)} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                    </svg>
                  }
                  {
                    <div className='bg-gray-500 opacity-70 z-40 h-full'>
                        <p>Paras more</p>
                    </div>
                  }
               </div>
        
        }

    </div>
  )
}

export default LeftSideBarMob