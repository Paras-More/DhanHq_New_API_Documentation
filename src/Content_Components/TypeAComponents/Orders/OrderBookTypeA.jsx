import React from 'react'
import CopyBox from '../../../Common_Components/CopyBox'
import NewJsonViewer from '../../../Common_Components/NewJsonViewer'
import DynamicTable from '../../../Common_Components/DynamicTable'

function OrderBookTypeA() {
   
   const orderBookCurlData = `curl --location 'http://ntasc.mirae.com/typea/orders' \\
    --header 'X-Mirae-Version: 1' \\
    --header 'Authorization: token api_key:access_token'`

  const SuccessResponseJson = {
    "status": "success",
    "data": [
        {
            "placed_by": "SATYA",
            "order_id": "1151240930103",
            "exchange_order_id": "0",
            "parent_order_id": null,
            "status": "Rejected",
            "status_message": 
"RMS:1151240930103:NSE,EQUITY,1594,INFY,INTRADAY,,EQ,SATYA,B,10,I,1250.00000,FUND LIMIT INSUFFICIENT,AVAILABLE FUND=0,ADDITIONAL REQUIRED FUND=3125,CALCULATED MARGIN FOR ORDER=3125",
            "status_message_raw": null,
            "order_timestamp": "30-09-2024 15:45:46",
            "exchange_update_timestamp": null,
            "exchange_timestamp": null,
            "variety": null,
            "modified": "false",
            "exchange": "NSE",
            "tradingsymbol": "INFY",
            "instrument_token": 1594,
            "order_type": "LIMIT",
            "transaction_type": "BUY",
            "validity": "DAY",
            "product": "INTRADAY",
            "quantity": 10,
            "disclosed_quantity": 0,
            "price": 1250,
            "trigger_price": 0,
            "average_price": 0,
            "filled_quantity": 0,
            "pending_quantity": 0,
            "cancelled_quantity": 0,  
            "market_protection": 0,
            "meta": {
                "demat_consent": "physical"
            },
            "tag": [],
            "guid": ""
        },
        {
            "placed_by": "SATYA",
            "order_id": "1161240930100",
            "exchange_order_id": "0",
            "parent_order_id": null,
            "status": "Rejected",
            "status_message": 
"RMS:1161240930100:NSE,EQUITY,22,ACC,INTRADAY,,EQ,SATYA,B,10,I,2320.39990,FUND LIMIT INSUFFICIENT,AVAILABLE FUND=0,ADDITIONAL REQUIRED FUND=5801,CALCULATED MARGIN FOR ORDER=5801",
            "status_message_raw": null,
            "order_timestamp": "30-09-2024 10:54:37",
            "exchange_update_timestamp": null,
            "exchange_timestamp": null,
            "variety": null,
            "modified": "false",
            "exchange": "NSE",
            "tradingsymbol": "ACC",
            "instrument_token": 22,
            "order_type": "MARKET",
            "transaction_type": "BUY",
            "validity": "DAY",
            "product": "INTRADAY",
            "quantity": 10,
            "disclosed_quantity": 0,
            "price": 0,
            "trigger_price": 0,
            "average_price": 0,
            "filled_quantity": 0,
            "pending_quantity": 0,
            "cancelled_quantity": 0,
            "market_protection": 0,
            "meta": {
                "demat_consent": "physical"
            },
            "tag": [],
            "guid": ""
        }
    ]
}
const FailureInvalidAPIKey ={
  "status": "error",
  "message": "API is suspended/expired for use. Please check your API subscription and try again.",
  "data": null
}

  const VersionExpensionJson ={
    "status": "error",
    "message": "Please provide valid api version.",
    "error_type": "VersionException",
    "data": null
  }

  const pathParameter = [
    {
      "Field":"order_id",
      "Type":"string",
      "Description":"The unique identifier of the order to be cancel."
    },
  ]


  return (
    <div className='flex flex-col gap-6 mt-10'>
    {/* <h1>Place Order</h1> */}
    <div className='flex flex-col gap-3'>
      <ol className='list-inside'>
        <li className="font-bold text-xl">Order Book</li>
      </ol>
    </div>
    
    {/* Description  Details Section */}
    <div>
      <p>
       This endpoint allows users to retrieve a list of their trading orders.
        Users can view all their existing orders.
      </p>
    </div>

    
    {/* Request Header Details Section */}
    <div className='flex flex-col gap-2'>
    <span className="font-bold">Request Headers -</span>
      <ul>
        <li>
          <span className="font-semibold">X-Mirae-Version:</span> Specifies
          the version of the API being used. In this case, it is set to 1
        </li>
        <li>
          <span className="font-semibold">Authorization:</span> A token-based authentication header. The format is token 
          api_key:access_token.
        </li>
        <li>
          <span className="font-semibold">Content-Type:</span> Indicated the media type of the resource. For this request, it is set to <a className='mstockNavFont' href='application/x-www-form-urlencoded'> application/x-www-form-urlencoded</a>, which s used for submiting form data.
        </li>
      </ul>
    </div>

    {/* Postman Curl command Details Section */}
    <div className='flex flex-col gap-2'>
      <p className="font-bold">Postman cURL Command -</p>
      <CopyBox copyContent={orderBookCurlData} />
    </div>

    {/* Request Body Details Section */}
    <div className='flex flex-col gap-2'>
      <p>
        <span className="font-bold">Request Body - </span>This endpoint does not require a request body or additional parameters in the
        query string for the retrieval of orders.
      </p>
      
    </div>

    {/* Request Response -  Details Section  */}
    <div>
      <p className="font-bold">Response Structure-</p>
      <p className='py-3'>
        The response of the request will be based on authentication outcome.
      </p>
      <div>
        <ul className="list-outside list-disc px-6 flex flex-col gap-6">
          {/* Success Json View repsonse */}
          <li>
            {" "}
            <span className="font-semibold">Success (HTTP Status 200): </span>
            On successful order deletion, the server returns
            a JSON object containing the order ID and status.
          </li>
          <NewJsonViewer data={SuccessResponseJson} />


          <li>
            {" "}
            <span className="font-semibold">
            Failure (HTTP Status 200):{" "}
            </span>{" "}
            :  If authentication fails, the server will return an
error message
          </li>
          <NewJsonViewer data={VersionExpensionJson} />

          <li>
              {" "}
              <span className="font-semibold">
                Failure (HTTP Status 400):{" "}
              </span>{" "}
              If the API Key is Invalid or expired. 
            </li>
            <NewJsonViewer data={FailureInvalidAPIKey} />
        </ul>
      </div>
    </div>

</div>
  )
}

export default OrderBookTypeA