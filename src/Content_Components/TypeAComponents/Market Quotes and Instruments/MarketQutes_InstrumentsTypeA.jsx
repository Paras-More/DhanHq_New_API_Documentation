import React from "react";
import OHLCDataTypeA from "./OHLCDataTypeA";
import LTPDataTypeA from "./LTPDataTypeA";
import InstrumentTypeA from "./InstrumentTypeA";
import DynamicTable from "../../../Common_Components/DynamicTable";

function MarketQutes_InstrumentsTypeA() {
  const data = [
    {
      method: "GET",
      path: "	https://ntasc.mirae.com/typea/instruments/quote",
      description: "View OHLC and LTP market data"
    },
    {
      method: "GET",
      path: "https://ntasc.mirae.com/typea/instruments/OpenAPIScripMaster",
      description: "Provides the consolidated,csv formatted list of instruments ",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="content-heading-font">Market Quote and Instrument</h1>
      <div className="mt-4">
        <DynamicTable data={data} />
      </div>
      <div className="flex flex-col gap-10">
        <OHLCDataTypeA />
        <hr></hr>
        <LTPDataTypeA />
        <hr></hr>
        <InstrumentTypeA />
      </div>
    </div>
  );
}

export default MarketQutes_InstrumentsTypeA;
