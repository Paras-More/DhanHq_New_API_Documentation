import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'    

function LeftSideBarMob() {

    const ShowMenu = useSelector(store=>store.ClickStatus.ShowMenu);


    useEffect(()=>{
        console.log("lone 10",ShowMenu);
    },[ShowMenu])

  return (
    <div className={`bg-red-700 ${ShowMenu ? "flex" :"hidden"}   xl:hidden h-[100vh] w-[6/12] fixed top-0`}>
 
    </div>
  )
}

export default LeftSideBarMob