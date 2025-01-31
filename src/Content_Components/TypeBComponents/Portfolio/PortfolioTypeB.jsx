import React from "react";
import DynamicTable from "../../../Common_Components/DynamicTable";
import Holdings_TypeB from "./Holdings_TypeB";
import Net_PositionTypeB from "./Net_PositionTypeB";
import PositionConversionTypeB from "./PositionConversionTypeB";
function PortfolioTypeB() {
  const data = [
    {
      method: "GET",
      path: "http://ntasc.mirae.com/typeb/portfolio/positions",
      description: "view all their existing orders",
    },
    {
      method: "GET",
      path: "http://ntasc.mirae.com/typeb/portfolio/holdings",
      description: "View all holdings",
    },
    {
      method: "POST",
      path: "http://ntasc.mirae.com/typeb/portfolio/convertposition",
      description: "Convert position",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="content-heading-font">Portfolio</h1>
      <div className="mt-4">
        <DynamicTable data={data} />
      </div>
      <div className="flex flex-col gap-10">
        <Net_PositionTypeB />
        <hr></hr>
        <Holdings_TypeB />
        <hr></hr>
        <PositionConversionTypeB />
      </div>
    </div>
  );
}

export default PortfolioTypeB;
