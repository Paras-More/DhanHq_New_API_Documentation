import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Introduction from "../Content_Components/Introduction";
import AllOrdersTypeA from "../Content_Components/TypeAComponents/Orders/AllOrdersTypeA";
import AllOrdersTypeB from "../Content_Components/TypeBComponents/Orders/AllOrdersTypeB";
import Calculate_Order_MarginTypeA from "../Content_Components/TypeAComponents/Calculate Order Margin/Calculate_Order_MarginTypeA";
import Calculate_Order_MarginTypeB from "../Content_Components/TypeBComponents/Calculate Order Margin/Calculate_Order_MarginTypeB";
import MarketDataTypeA from "../Content_Components/TypeAComponents/Market Data/MarketDataTypeA";
import MarketDataTypeB from "../Content_Components/TypeBComponents/Market Data/MarketDataTypeB";
import Annexure from "../Content_Components/Annexure";
import NotFound from "../Pages/NotFound";
import AppLayout from "../Pages/AppLayout";
import TypeAErrors from "../Content_Components/TypeAComponents/Errors/TypeAErrors";
import TypeBErrors from "../Content_Components/TypeBComponents/Errors/TypeBErrors";
import PortfolioTypeA from "../Content_Components/TypeAComponents/Portfolio/PortfolioTypeA";
import MarketQutes_InstrumentsTypeA from "../Content_Components/TypeAComponents/Market Quotes and Instruments/MarketQutes_InstrumentsTypeA";
import HistoricalCandleTypeA from "../Content_Components/TypeAComponents/Historical Candle/HistoricalCandleTypeA";
import UserDetailsTypeA from "../Content_Components/TypeAComponents/User/UserDetailsTypeA";
import UserDetailsTypeB from "../Content_Components/TypeBComponents/User/UserDetailsTypeB";
import PortfolioTypeB from "../Content_Components/TypeBComponents/Portfolio/PortfolioTypeB";
import MarketQutes_InstrumentsTypeB from "../Content_Components/TypeBComponents/Market Quotes and Instruments/MarketQutes_InstrumentsTypeB";
import HistoricalCandleTypeB from "../Content_Components/TypeBComponents/Historical Candle/HistoricalCandleTypeB";
function Router() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="developer" element={<AppLayout />}>
            <Route index element={<Introduction />} />
            {/* Order Routes */}
            <Route path="type-a/orders" element={<AllOrdersTypeA />} />
            <Route path="type-b/orders" element={<AllOrdersTypeB />} />
            {/* Net Position Route */}
            <Route path="type-a/portfolio" element={<PortfolioTypeA />} />
            <Route path="type-b/portfolio" element={<PortfolioTypeB />} />
            {/* Calculate Order Margin route */}
            <Route
              path="type-a/calculate-order-margin"
              element={<Calculate_Order_MarginTypeA />}
            />
            <Route
              path="type-b/calculate-order-margin"
              element={<Calculate_Order_MarginTypeB />}
            />
            {/* Market Quotes and Instruments Routes */}
            <Route
              path="type-a/market-quotes-and-instruments"
              element={<MarketQutes_InstrumentsTypeA />}
            />
            <Route
              path="type-b/market-quotes-and-instruments"
              element={<MarketQutes_InstrumentsTypeB />}
            />
            {/* Historical Candle Route */}
            <Route
              path="type-a/historical-candle"
              element={<HistoricalCandleTypeA />}
            />
            <Route
              path="type-b/historical-candle"
              element={<HistoricalCandleTypeB />}
            />
            {/* Erroe Pages Routes */}
            <Route
              path="type-a/exceptions-and-error-types"
              element={<TypeAErrors />}
            />
            <Route path="type-b/error-codes" element={<TypeBErrors />} />
            {/* Login Session Routes */}
            <Route path="type-a/user" element={<UserDetailsTypeA   />} />
            <Route path="type-b/user" element={<UserDetailsTypeB />} />
            {/* Market Data Routes */}
            <Route path="type-a/market-data" element={<MarketDataTypeA />} />
            <Route path="type-b/market-data" element={<MarketDataTypeB />} />
            {/* Annexure Route */}
            <Route path="annexure" element={<Annexure />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default Router;
