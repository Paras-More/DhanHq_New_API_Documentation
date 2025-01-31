import React from 'react'
import PlaceOrderTypeB from './PlaceOrderTypeB'
import ModifyOrderTypeB from './ModifyOrderTypeB'
import CancelOrderTypeB from './CancelOrderTypeB'
import OrderBookTypeB from './OrderBookTypeB'
import CancelAllTypeB from './CancelAllTypeB'
import DynamicTable from '../../../Common_Components/DynamicTable'
import IndiviualOrderDetailsTypeB from './IndiviualOrderDetailsTypeB'
import TradeHistoryTypeB from './TradeHistoryTypeB'
function AllOrdersTypeB() {

    const data = [
        {
          "method": "POST",
          "path": "https://ntasc.mirae.com/typeb/orders/regular",
          "description": "Place a new order"
        },
        {
          "method": "PUT",
          "path": "https://ntasc.mirae.com/typeb/orders/regular/{OrderID}",
          "description": "Modify a pending order"
        },
        {
          "method": "DELETE",
          "path": "https://ntasc.mirae.com/typeb/orders/regular/{OrderID} ",
          "description": "Cancel a pending order"
        },
        {
          "method": "POST",
          "path": "https://ntasc.mirae.com/typeb/orders/cancelall ",
          "description": "Cancel all pending order"
        },
        {
          "method": "GET",
          "path": "https://ntasc.mirae.com/typeb/orders",
          "description": "View all the existing orders."
        },    
        {
          "method": "GET",
          "path": "http://ntasc.mirae.com/typeb/trades",
          "description": "This endpoint returns a list of all trades generated upon the execution of orders for that day."
        },    
        {
          "method": "GET",
          "path": "http://ntasc.mirae.com/typeb/order/details",
          "description": "View the status of individual order"
        },    
      ]

  return (
    <div>
        {/* Order API table */}
            <div className='flex flex-col gap-4'>
            <h1 className="content-heading-font">Orders</h1>

              <p>The order APIs let you place orders of different varities, modify and cancel pending orders, retrieve the daily order and more.</p>
                    <div className='mt-4'>
                        <DynamicTable data={data}/>
                    </div>
                </div>
            <div className='flex flex-col gap-7'>
                    <PlaceOrderTypeB/>
                    <hr></hr>
                    <ModifyOrderTypeB/>
                    <hr></hr>
                    <CancelOrderTypeB/>
                    <hr></hr>
                    <CancelAllTypeB/>
                    <hr></hr>
                    <OrderBookTypeB/>
                    <hr></hr>
                    <TradeHistoryTypeB/>
                    <hr></hr>
                    <IndiviualOrderDetailsTypeB/>
            </div>
    </div>

  )
}

export default AllOrdersTypeB