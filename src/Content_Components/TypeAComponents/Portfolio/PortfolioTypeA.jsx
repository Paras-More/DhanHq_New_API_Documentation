import React from "react";
import Net_PositionTypeA from "./Net_PositionTypeA";
import Holdings_TypeA from "./Holdings_TypeA";
import DynamicTable from "../../../Common_Components/DynamicTable";
import PositionConversionTypeA from "./PositionConversionTypeA";
function PortfolioTypeA() {
  const data = [
    {
      method: "GET",
      path: "http://ntasc.mirae.com/typea/portfolio/positions",
      description: "view all their existing orders",
    },
    {
      method: "GET",
      path: "http://ntasc.mirae.com/typea/portfolio/holdings",
      description: "View all holdings",
    },
    {
      method: "POST",
      path: "http://ntasc.mirae.com/typea/portfolio/convertposition",
      description: "Convert position",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      <h1 className="content-heading-font">Portfolio</h1>
      <div className="mt-4">
        <DynamicTable data={data} />
      </div>
      <div className="flex flex-col gap-7">
        <Net_PositionTypeA />
        <hr></hr>
        <Holdings_TypeA />
        <hr></hr>
        <PositionConversionTypeA />
      </div>
    </div>
  );
}

export default PortfolioTypeA;
