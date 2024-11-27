import React from 'react'
import { Link } from 'react-router-dom'
import "./Main.css"
function LeftSideBarWeb() {



  return (
    <aside className='bg-white w-customSmall flex-shrink-0 xl:flex flex-col hidden gap-4  overflow-y-scroll'>
        {console.log("LeftSide bar RENDER")}
    <div>
      <h1 className="font-bold mb-1">Ver 2.0 / API Documentation</h1>
      <ul className='indent-1 flex flex-col'>
      <Link to="/"><li>Introduction</li></Link>
      <Link to="/Release"><li>Release</li></Link>
      </ul>
    </div>

    <div>
      <h1 className="font-bold mb-1">Trading API's</h1>
      <ul className='indent-3 flex flex-col'>
        <Link to="/orders"><li>Orders</li></Link>
        <Link to="/forever"><li>Forever Order</li></Link>
        <Link to="/Release"><li>Release Order</li></Link>
        <Link to="/Portfolio"><li>Portfolio</li></Link>
        <Link to="/edis"><li>EDIS</li></Link>
        <Link to="traders-control"><li>Trader's Control</li></Link>
         <Link to="/funds"><li>Funds</li></Link>
        <Link to="/statement"><li>Statement</li></Link>
        <Link to="/postback"><li>Postback</li></Link>
        <Link to="/live-order-update"><li>Live Order Update</li></Link>
      </ul>
    </div>

    <div>
      <h1 className="font-bold mb-1">Data APIs</h1>
      <ul className='indent-3 flex flex-col'>
    
        <Link to="/market-quote"><li>Market Quote</li></Link>
        <Link to="/live-market-feed"><li>Live Market Feed</li></Link>
        <Link to="/historic-data"><li>Historical Data</li></Link>
      </ul>
    </div>

    <div>
      <ul className='indent-3  flex flex-col'>
        <Link to="/annexure"><li>Annexure</li></Link>
        <Link to="/instrument-list"><li>Instrument List</li></Link>
      </ul>
    </div>
  </aside>       
  )
}


export default LeftSideBarWeb;