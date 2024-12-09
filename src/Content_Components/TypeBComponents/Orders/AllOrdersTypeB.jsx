import React from 'react'
import PlaceOrderTypeB from './PlaceOrderTypeB'
import ModifyOrderTypeB from './ModifyOrderTypeB'
import CancelOrderTypeB from './CancelOrderTypeB'
import OrderBookTypeB from './OrderBookTypeB'
import DynamicTable from '../../../Common_Components/DynamicTable'

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
          "method": "GET",
          "path": "https://ntasc.mirae.com/typeb/orders",
          "description": "View all the existing orders."
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
            <div className='flex flex-col gap-10'>
                    <PlaceOrderTypeB/>
                    <ModifyOrderTypeB/>
                    <CancelOrderTypeB/>
                    <OrderBookTypeB/>
            </div>
    </div>

  )
}

export default AllOrdersTypeB