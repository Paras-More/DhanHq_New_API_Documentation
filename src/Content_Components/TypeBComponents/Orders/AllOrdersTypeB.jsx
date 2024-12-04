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
          "path": "https://nTasc.mirae.com/agl/orders/regular",
          "description": "Place a new order"
        },
        {
          "method": "PUT",
          "path": "https://nTasc.mirae.com/agl/orders/regular/{OrderID}",
          "description": "Modify a pending order"
        },
        {
          "method": "DELETE",
          "path": "https://nTasc.mirae.com/agl/orders/regular/{OrderID} ",
          "description": "Cancel a pending order"
        },
        {
          "method": "GET",
          "path": "https://nTasc.mirae.com/agl/orders",
          "description": "View all the existing orders."
        },    
      ]

  return (
    <div>
        <h1 className="content-heading-font  py-6">Orders</h1>
        {/* Order API table */}
            <div>
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