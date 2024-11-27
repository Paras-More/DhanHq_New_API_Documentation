import React from 'react'
import SwitchTabComponent from '../../Common_Components/SwitchTabComponent';
import DynamicTable from '../../Common_Components/DynamicTable';
function Orders() {

  const data = [
    {
      "method": "POST",
      "path": "/orders",
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
    {
      "method": "GET",
      "path": "/orders/{order-id}",
      "description": "Retrieve the status of an order"
    },
    {
      "method": "GET",
      "path": "/orders/external/{correlation-id}",
      "description": "Retrieve the status of an order by correlation id"
    },
    {
      "method": "GET",
      "path": "/trades",
      "description": "Retrieve the list of all trades for the day"
    },
    {
      "method": "GET",
      "path": "/trades/{order-id}",
      "description": "Retrieve the details of trade by an order id"
    }
  ]

  const orderRequestAPiDat = `
        curl --request POST \
    --url https://api.dhan.co/v2/orders \
    --header 'Content-Type: application/json' \
    --header 'access-token: JWT' \
    --data '{Request JSON}'

  `

  const requestStructure = `
        {
        "dhanClientId":"1000000003",
        "correlationId":"123abc678",
        "transactionType":"BUY",
        "exchangeSegment":"NSE_EQ",
        "productType":"INTRADAY",
        "orderType":"MARKET",
        "validity":"DAY",
        "securityId":"11536",
        "quantity":"5",
        "disclosedQuantity":"",
        "price":"",
        "triggerPrice":"",
        "afterMarketOrder":false,
        "amoTime":"",
        "boProfitValue":"",
        "boStopLossValue": ""
    }
  `


  return (
    <div>
        <h1 className="content-heading-font  py-6">Orders</h1>
        {/* Order API table */}
          <div>
              <p>The order management API lets you place a new order, cancel or modify the pending order, retrieve the order status, trade status, order book & tradebook.</p>
              <div className='mt-4'>
                  <DynamicTable data={data}/>
              </div>
          </div>
          {/* Order Placement Section */}
          <p>The order request API lets you place new orders.</p>
    </div>
  )
}

export default Orders