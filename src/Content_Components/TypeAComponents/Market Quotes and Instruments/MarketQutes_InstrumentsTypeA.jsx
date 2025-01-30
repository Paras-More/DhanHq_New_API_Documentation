import React from "react";
import OHLCDataTypeA from "./OHLCDataTypeA";
import LTPDataTypeA from "./LTPDataTypeA";
import InstrumentTypeA from "./InstrumentTypeA";
import DynamicTable from "../../../Common_Components/DynamicTable";

function MarketQutes_InstrumentsTypeA() {
  const data = [
    {
      method: "POST",
      path: "https://ntasc.mirae.com/typea/orders/{variety}",
      description: "Place a new order",
    },
    {
      method: "PUT",
      path: "https://ntasc.mirae.com/typea/orders/{variety}/❴OrderID❵",
      description: "Modify a pending order",
    },
    {
      method: "DELETE",
      path: "https://ntasc.mirae.com/typea/orders/{variety}/❴OrderID❵",
      description: "Cancel a pending order",
    },
    {
      method: "GET",
      path: "https://ntasc.mirae.com/typea/orders",
      description: "View all the existing orders.",
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
