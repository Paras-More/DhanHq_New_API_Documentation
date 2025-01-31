import React from "react";
import PlaceOrderTypeA from "./PlaceOrderTypeA";
import ModifyOrderTypeA from "./ModifyOrderTypeA";
import CancelOrderTypeA from "./CancelOrderTypeA";
import OrderBookTypeA from "./OrderBookTypeA";
import CancelAllTypeA from "./CancelAllTypeA";
import IndiviualOrderDetailsTypeA from "./IndiviualOrderDetailsTypeA";
import DynamicTable from "../../../Common_Components/DynamicTable";
import TradeHistoryTypeA from "./TradeHistoryTypeA";
function AllOrdersTypeA() {
  const data = [
    {
      "method": "POST",
      "path": "http://ntasc.mirae.com/typea/orders/{variety}",
      "description": "Place a new order"
    },
    {
      "method": "PUT",
      "path": "https://ntasc.mirae.com/typea/orders/regular/{OrderID}",
      "description": "Modify a pending order"
    },
    {
      "method": "DELETE",
      "path": "https://ntasc.mirae.com/typea/orders/regular/{OrderID} ",
      "description": "Cancel a pending order"
    },
    {
      "method": "POST",
      "path": "https://ntasc.mirae.com/typea/orders/cancelall ",
      "description": "Cancel all pending order"
    },
    {
      "method": "GET",
      "path": "https://ntasc.mirae.com/typea/orders",
      "description": "View all the existing orders."
    },    
    {
      "method": "GET",
      "path": "http://ntasc.mirae.com/typea/trades",
      "description": "This endpoint returns a list of all trades generated upon the execution of orders for that day."
    },    
    {
      "method": "GET",
      "path": "http://ntasc.mirae.com/typea/order/details",
      "description": "View the status of individual order"
    },    
  ]

  return (
    <div className="flex flex-col gap-6">
      <h1 className="content-heading-font">Orders</h1>
      {/* Order API table */}
      <div className="flex flex-col gap-4">
        <p>
          The order APIs let you place orders of different varities, modify and
          cancel pending orders, retrieve the daily order and more.
        </p>
        <DynamicTable data={data} />
      </div>
      <div className="flex flex-col gap-10">
        <PlaceOrderTypeA />
        <ModifyOrderTypeA />
        <CancelOrderTypeA />
        <CancelAllTypeA />
        <OrderBookTypeA />
        <TradeHistoryTypeA />
        <IndiviualOrderDetailsTypeA />
      </div>
    </div>
  );
}

export default AllOrdersTypeA;
