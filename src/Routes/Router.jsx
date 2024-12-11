import React from 'react'
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Introduction from '../Content_Components/Introduction'
import AllOrdersTypeA from '../Content_Components/TypeAComponents/Orders/AllOrdersTypeA'
import AllOrdersTypeB from '../Content_Components/TypeBComponents/Orders/AllOrdersTypeB'
import Net_PositionTypeA from '../Content_Components/TypeAComponents/Net Position/Net_PositionTypeA'
import Net_PositionTypeB from '../Content_Components/TypeBComponents/Net Position/Net_PositionTypeB'
import Calculate_Order_MarginTypeA from '../Content_Components/TypeAComponents/Calculate Order Margin/Calculate_Order_MarginTypeA'
import Calculate_Order_MarginTypeB from '../Content_Components/TypeBComponents/Calculate Order Margin/Calculate_Order_MarginTypeB'
import GenerateSessionTypeA from '../Content_Components/TypeAComponents/Generate Session/GenerateSessionTypeA'
import GenerateSessionTypeB from '../Content_Components/TypeBComponents/Generate Session/GenerateSessionTypeB'
import LoginTypeA from '../Content_Components/TypeAComponents/Login/LoginTypeA'
import LoginTypeB from '../Content_Components/TypeBComponents/Login/LoginTypeB'
import MarketDataTypeA from '../Content_Components/TypeAComponents/Market Data/MarketDataTypeA'
import MarketDataTypeB from '../Content_Components/TypeBComponents/Market Data/MarketDataTypeB'
import Annexure from '../Content_Components/Annexure'
import NotFound from '../Pages/NotFound'
import AppLayout from '../Pages/AppLayout'

function Router() {
  return (
    <>
    <BrowserRouter>
      <Routes>
          <Route path='/' element={<AppLayout/>}>
          <Route index element={<Introduction/>}></Route>
              {/* Order Routes */}
              <Route path='/type-a/orders' element={<AllOrdersTypeA/>}></Route>
              <Route path='/type-b/orders' element={<AllOrdersTypeB/>}></Route>
              {/* Net Position Route */}
              <Route path='/type-a/net-position' element={<Net_PositionTypeA/>}></Route>
              <Route path='/type-b/net-position' element={<Net_PositionTypeB/>}></Route>
              {/* Calculate Order Margin route */}
              <Route path='/type-a/calculate-order-margin' element={<Calculate_Order_MarginTypeA/>}></Route>
              <Route path='/type-b/calculate-order-margin' element={<Calculate_Order_MarginTypeB/>}></Route>
              {/* Generate Session Routes */}
              <Route path='/type-a/generate-session' element={<GenerateSessionTypeA/>}></Route>
              <Route path='/type-b/generate-session' element={<GenerateSessionTypeB/>}></Route>
              {/* Login Session Routes */}
              <Route path='/type-a/login' element={<LoginTypeA/>}></Route>
              <Route path='/type-b/login' element={<LoginTypeB/>}></Route>
              {/* Market Data Routes */}
              <Route path='/type-a/market-data' element={<MarketDataTypeA/>}></Route>
              <Route path='/type-b/market-data' element={<MarketDataTypeB/>}></Route>
              {/* Annexure Route */}
              <Route path='/annexure' element={<Annexure/>}></Route>
          <Route path='*' element={<NotFound/>}/>
        </Route>
       </Routes>
    </BrowserRouter>

    </>
  )
}

export default Router