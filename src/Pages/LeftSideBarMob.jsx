import React, { useEffect, useState } from 'react'

function LeftSideBarMob() {
  const [ShowMenu,setShowMenu] = useState(false)


    useEffect(()=>{
    },[])

  return (
    <div className={`bg-red-700 ${ShowMenu ? "flex" :"hidden"}   xl:hidden h-[100vh] w-[6/12] fixed top-0`}>
        
    </div>
  )
}

export default LeftSideBarMob