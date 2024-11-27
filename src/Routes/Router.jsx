import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Introduction from '../Content_Components/Introduction'
import Portfolio from '../Content_Components/TradingApIComponent/Portfolio'
import Orders from '../Content_Components/TradingApIComponent/Orders'
import Postback from '../Content_Components/TradingApIComponent/Postback'
import Funds from '../Content_Components/TradingApIComponent/Funds'
import Release from '../Content_Components/Release'
import Traders_Control from '../Content_Components/TradingApIComponent/Traders_Control'
import Forever_Order from '../Content_Components/TradingApIComponent/Forever_Order'
import Edis from '../Content_Components/TradingApIComponent/EDIS'
import Statement from '../Content_Components/TradingApIComponent/Statement'
import Live_Order_Update from '../Content_Components/TradingApIComponent/Live_Order_Update'
import Market_Quote from '../Content_Components/DataApiComponent/Market_Quote'
import Historical_Data from '../Content_Components/DataApiComponent/Historical_Data'
import Live_Market_Feed from '../Content_Components/DataApiComponent/Live_Market_Feed'
import Annexure from '../Content_Components/Annexure'
import Instrument_List from '../Content_Components/Instrument_List'
import Navbar from '../Components/Navbar'
import Main from '../Components/AppLayout'

function Router() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
      <Routes>
          <Route path='/' element={<Main/>}>
          <Route index element={<Introduction/>}></Route>
          <Route path='/Orders' element={<Orders/>}></Route>
          <Route path='/Release' element={<Release/>}></Route>
          <Route path='/forever' element={<Forever_Order/>}></Route>
          <Route path='/Portfolio' element={<Portfolio/>}></Route>
          <Route path='/edis' element={<Edis/>}></Route>
          <Route path='/traders-control' element={<Traders_Control/>}></Route>
          <Route path='/funds' element={<Funds/>}></Route>
          <Route path='/statement' element={<Statement/>}></Route>
          <Route path='/postback' element={<Postback/>}/>
          <Route path='/market-quote' element={<Market_Quote/>}/>
          <Route path='/live-market-feed' element={<Live_Market_Feed/>}/>
          <Route path='/historic-data' element={<Historical_Data/>}/>
          <Route path='/live-order-update' element={<Live_Order_Update/>}/>
          <Route path='/annexure' element={<Annexure/>}/>
          <Route path='/instrument-list' element={<Instrument_List/>}/>
        </Route>
       </Routes>
    </BrowserRouter>

    </>
  )
}

export default Router