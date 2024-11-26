import React from 'react'
import { Link } from 'react-router-dom'

function LeftSideBar() {

   

  return (
    <aside className='bg-white w-customSmall flex-shrink-0 xl:flex flex-col hidden gap-4 '>
        {console.log("RENDER")}
    <div>
      <h1 className="font-bold mb-1">Ver 2.0 / API Documentation</h1>
      <ul className='indent-1 flex flex-col'>
      <Link to="/">Introduction</Link>
      <Link to="/Release">Release</Link>
      </ul>
    </div>

    <div>
      <h1 className="font-bold mb-1">Trading API's</h1>
      <ul className='indent-3 flex flex-col'>
        <Link to="/orders">Orders</Link>
        <Link to="/forever">Forever Order</Link>
        <Link to="/Release">Release Order</Link>
        <Link to="/Portfolio">Portfolio</Link>
        <Link to="/edis">EDIS</Link>
        <Link to="traders-control">Trader's Control</Link>
        <Link to="/funds">Funds</Link>
        <Link to="/statement">Statement</Link>
        <Link to="/postback">Postback</Link>
        <Link to="/live-order-update">Live Order Update</Link>
      </ul>
    </div>

    <div>
      <h1 className="font-bold mb-1">Data APIs</h1>
      <ul className='indent-3 flex flex-col'>
    
        <Link to="/statement">Market Quote</Link>
        <Link to="/postback">Live Market Feed</Link>
        <Link to="/historical-data">Historical Data</Link>
      </ul>
    </div>

    <div>
      <ul className='indent-3'>
        <li>Annexure</li>
        <li>Instrument List</li>
      </ul>
    </div>


    
    

  </aside>       
  )
}

export default LeftSideBar