import React from 'react'
import PlaceOrderTypeA from './PlaceOrderTypeA'
import ModifyOrderTypeA from './ModifyOrderTypeA'
import CancelOrderTypeA from './CancelOrderTypeA'
import OrderBookTypeA from './OrderBookTypeA'
import DynamicTable from '../../../Common_Components/DynamicTable'
function AllOrdersTypeA() {

  const data = [
    {
      "method": "POST",
      "path": "https://ntasc.mirae.com/typea/orders/{variety}",
      "description": "Place a new order"
    },
    {
      "method": "PUT",
      "path": "https://ntasc.mirae.com/typea/orders/{variety}/❴OrderID❵",
      "description": "Modify a pending order"
    },
    {
      "method": "DELETE",
      "path": "https://ntasc.mirae.com/typea/orders/{variety}/❴OrderID❵",
      "description": "Cancel a pending order"
    },
    {
      "method": "GET",
      "path": "https://ntasc.mirae.com/typea/orders",
      "description": "View all the existing orders."
    },    
  ]
  
  return (
    <div className='flex flex-col gap-6'>
        <h1 className="content-heading-font">Orders</h1>
        {/* Order API table */}
            <div className='flex flex-col gap-4'>
              <p>The order APIs let you place orders of different varities, modify and cancel pending orders, retrieve the daily order and more.</p>
                        <DynamicTable data={data}/>
                </div>
            <div className='flex flex-col gap-10'>
                    <PlaceOrderTypeA/>
                    <ModifyOrderTypeA/>
                    <CancelOrderTypeA/>
                    <OrderBookTypeA/>
            </div>
    </div>
  )
}

export default AllOrdersTypeA