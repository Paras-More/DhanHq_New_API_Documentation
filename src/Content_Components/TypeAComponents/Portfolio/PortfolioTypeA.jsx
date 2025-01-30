import React from "react";
import Net_PositionTypeA from "./Net_PositionTypeA";
import Holdings_TypeA from "./Holdings_TypeA";
import DynamicTable from "../../../Common_Components/DynamicTable";
import PositionConversionTypeA from "./PositionConversionTypeA";
function PortfolioTypeA() {
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
      <h1 className="content-heading-font">Portfolio</h1>
      <div className="mt-4">
        <DynamicTable data={data} />
      </div>
      <div className="flex flex-col gap-10">
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
