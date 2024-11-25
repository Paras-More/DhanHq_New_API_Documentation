import React from 'react';
import "./Main.css"
function Main() {
  return (
    <>
      <div className='bg-slate-500 border-2 border-black flex items-center justify-center' style={{ maxHeight: 'calc(100vh - 67.6px)' }}>
        {/* This Below Div will only be visible above 995px width screen */}
        <div className='m-auto border-2 hidden md:flex flex-nowrap gap-4 bg-blue-600 overflow-y-scroll overflow-hidden pt-10' style={{ maxHeight: 'calc(100vh - 67.6px)' }}>
          <aside className='bg-white w-customSmall flex-shrink-0 xl:flex flex-col hidden gap-4 '>

            <div>
              <h1 className="font-bold mb-1">Ver 2.0 / API Documentation</h1>
              <ul className='indent-1'>
                <li>Introduction</li>
                <li>Release</li>
              </ul>
            </div>

            <div>
              <h1 className="font-bold mb-1">Trading API's</h1>
              <ul className='indent-3'>
                <li>Orders</li>
                <li>Release Order</li>
                <li>Portfolio</li>
                <li>EDIS</li>
                <li>Trader's Control</li>
                <li>Funds</li>
                <li>Statement</li>
                <li>Postback</li>
                <li>Live Order Update</li>
              </ul>
            </div>

            <div>
              <h1 className="font-bold mb-1">Data APIs</h1>
              <ul className='indent-3'>
                <li>Market Quote</li>
                <li>Live Market Feed</li>
                <li>Historical Data</li>
              </ul>
            </div>

            <div>
              <ul className='indent-3'>
                <li>Annexure</li>
                <li>Instrument List</li>
              </ul>
            </div>


            
            

          </aside>          

          <section className='bg-yellow-300 w-customLarge flex-shrink-0 overflow-y-scroll pt-[-10] Center_content_div'>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
            <p>yellow</p>
          </section>

          <aside className='bg-green-500 w-customSmall flex-shrink-0 lg:flex hidden'>
            <p>green</p>
          </aside>
        </div>

        {/* This below Div will be visible for mobile devices */}
      </div>
    </>
  );
}

export default Main;
