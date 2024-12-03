import React from 'react'

function Navbar() {

 


  return (
    <nav className="w-full bg-white border-b-2 lg:px-40 lg:py-2 px-8 py-1  flex items-center justify-between flex-wrap sticky top-0">
             <div className='flex gap-20 items-center justify-between h-[45px]'>
                    <img src='https://www.mstock.com/content/images/mirae-logo.svg' className='h-[45px]'></img>
                    <span className='mstockNavFont'>API Documentation</span>        
                </div>
  </nav>

  )
}

export default Navbar