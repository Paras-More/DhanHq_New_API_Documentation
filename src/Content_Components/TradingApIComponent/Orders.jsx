import React from 'react'
import SwitchTabComponent from '../../Common_Components/SwitchTabComponent';
import DynamicTable from '../../Common_Components/DynamicTable';
import PlaceOrder from '../TypeAComponents/Orders/PlaceOrderTypeA';
import ModifyOrderTypeA from '../TypeAComponents/Orders/ModifyOrderTypeA';
import CancelOrderTypeA from '../TypeAComponents/Orders/CancelOrderTypeA';
import OrderBookTypeA from '../TypeAComponents/Orders/OrderBookTypeA';
function Orders() {

  const data = [
    {
      "method": "POST",
      "path": "https://ntasc.mirae.com/zrd/orders/regular",
      "description": "Place a new order"
    },
    {
      "method": "PUT",
      "path": "/orders/{order-id}",
      "description": "Modify a pending order"
    },
    {
      "method": "DELETE",
      "path": "/orders/{order-id}",
      "description": "Cancel a pending order"
    },
    {
      "method": "POST",
      "path": "/orders/slicing",
      "description": "Slice order into multiple legs over freeze limit"
    },
    {
      "method": "GET",
      "path": "/orders",
      "description": "Retrieve the list of all orders for the day"
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
          {/* Order Placement API details Section */}
            <div className='flex flex-col gap-10'>
              {/* <h1>Place Order</h1> */}
                <PlaceOrder/>
                <ModifyOrderTypeA/>
                <CancelOrderTypeA/>
                <OrderBookTypeA/>
            </div>
    </div>
  )
}

export default Orders