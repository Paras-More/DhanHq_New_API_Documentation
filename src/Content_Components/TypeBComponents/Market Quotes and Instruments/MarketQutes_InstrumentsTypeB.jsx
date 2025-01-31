import React from "react";
import OHLCDataTypeB from "./OHLCDataTypeB";
import LTPDataTypeB from "./LTPDataTypeB";
import InstrumentTypeB from "./InstrumentTypeB";
import DynamicTable from "../../../Common_Components/DynamicTable";

function MarketQutes_InstrumentsTypeB() {
  const data = [
    {
      method: "GET",
      path: "	https://ntasc.mirae.com/typeb/agl/instruments/quote",
      description: "View OHLC and LTP market data"
    },
    {
      method: "GET",
      path: "https://ntasc.mirae.com/typeb/instruments/OpenAPIScripMaster",
      description: "Provides the consolidated,csv formatted list of instruments ",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="content-heading-font">Market Quote and Instrument</h1>
      <div className="mt-4">
        <DynamicTable data={data} />
      </div>
      <div className="flex flex-col gap-7">
        <OHLCDataTypeB />
        <hr></hr>
        <LTPDataTypeB />
        <hr></hr>
        <InstrumentTypeB />
      </div>
    </div>
  );
}

export default MarketQutes_InstrumentsTypeB;
