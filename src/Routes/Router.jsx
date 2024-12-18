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
          <Route path='developer' element={<AppLayout/>}>
          <Route index element={<Introduction/>}/>
              {/* Order Routes */}
              <Route path='type-a/orders' element={<AllOrdersTypeA/>}/>
              <Route path='type-b/orders' element={<AllOrdersTypeB/>}/>
              {/* Net Position Route */}
              <Route path='type-a/net-position' element={<Net_PositionTypeA/>}/>
              <Route path='type-b/net-position' element={<Net_PositionTypeB/>}/>
              {/* Calculate Order Margin route */}
              <Route path='type-a/calculate-order-margin' element={<Calculate_Order_MarginTypeA/>}/>
              <Route path='type-b/calculate-order-margin' element={<Calculate_Order_MarginTypeB/>}/>
              {/* Generate Session Routes */}
              <Route path='type-a/generate-session' element={<GenerateSessionTypeA/>}/>
              <Route path='type-b/generate-session' element={<GenerateSessionTypeB/>}/>
              {/* Login Session Routes */}
              <Route path='type-a/login' element={<LoginTypeA/>}/>
              <Route path='type-b/login' element={<LoginTypeB/>}/>
              {/* Market Data Routes */}
              <Route path='type-a/market-data' element={<MarketDataTypeA/>}/>
              <Route path='type-b/market-data' element={<MarketDataTypeB/>}/>
              {/* Annexure Route */}
              <Route path='annexure' element={<Annexure/>}/>
          <Route path='*' element={<NotFound/>}/>
        </Route>
       </Routes>
    </BrowserRouter>

    </>
  )
}

export default Router