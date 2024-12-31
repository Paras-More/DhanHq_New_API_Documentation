import React from 'react'
import CopyBox from '../../../Common_Components/CopyBox'
import NewJsonViewer from '../../../Common_Components/NewJsonViewer'
import DynamicTable from '../../../Common_Components/DynamicTable'

function PlaceOrderTypeB() {

    const PlaceOrdercURLData = `curl --location 'http://ntasc.mirae.com/typeb/orders/regular' \\
    --header 'X-Mirae-Version: 1' \\
    --header 'Authorization: Bearer jwtToken' \\
    --header 'Content-Type: application/json' \\
    --data '{
    "variety": "NORMAL",
    "tradingsymbol": "ACC-EQ",
    "symboltoken": "22",
    "exchange": "NSE",
    "transactiontype": "BUY",
    "ordertype": "MARKET",
    "quantity": "20",
    "producttype": "DELIVERY",
    "price": "194.50",
    "triggerprice": "0",
    "squareoff": "0",
    "stoploss": "0",
    "trailingStopLoss": "",
    "disclosedquantity": "",
    "duration": "DAY",
    "ordertag": ""
    }'
`
        const SuccessResponseJson = {
          "status": "true",
          "message": "SUCCESS",
          "errorcode": "",
          "data": {
              "script": "ACC-EQ",
              "orderid": "1191241106101",
              "uniqueorderid": ""
          }
      }
    
        const FailureInvalidOrderTypeJson ={
          "status": "false",
          "message": "Invalid order type. valid product types allowed are MARKET, STOPLOSS_MARKET, STOPLOSS_LIMIT and LIMIT.",
          "errorcode": "400",
          "data": null
      }
        
        const FailureMarketCloseJson = {
          "status": "false",
          "message": "RMS:1141241105101:NSE,EQUITY,22,ACC,INTRADAY,,EQ,SATYA,B,1,I,22,ACC,INTRADAY,89.44995,FUND LIMIT INSUFFICIENT,AVAILABLE FUND=0,ADDITIONAL REQUIRED FUND=572.36,CALCULATED MARGIN FOR ORDER=572.36",
          "errorcode": "RS-0111",
          "data": null
      }
      const FailureInvalidAPIKey ={
        "status": "error",
        "message": "API is suspended/expired for use. Please check your API subscription and try again.",
        "data": null
      }


      const requestParameter = [
        {
          "Field":"variety",
          "Type":"string",
          "Description":"Variety of the order ( <code class='highlighter'>regular</code> <code class='highlighter'>amo</code> <code class='highlighter'>co</code> <code class='highlighter'>iceberg</code> <code class='highlighter'>auction</code>)"
        },
        {
          "Field":"tradingsymbol",
          "Type":"string",
          "Description":"Refer Trading Symbol in Tables"
        },
        {
          "Field":"symboltoken",
          "Type":"string",
          "Description":"Token of the contract for which modify is being sent"
        },
        {
          "Field":"exchange",
          "Type":"string",
          "Description":"Exchange name : <code class='highlighter'>NSE</code> <code class='highlighter'>BSE</code>"
        },
        {
          "Field":"transaction_type",
          "Type":"string",
          "Description":"The trading side of transaction : <code class='highlighter'>BUY</code> <code class='highlighter'>SELL</code>"
        },
        {
          "Field":"order_type",
          "Type":"string",
          "Description":"Order Type :<code class='highlighter'>LIMIT</code> <code class='highlighter'>MARKET</code> <code class='highlighter'>STOP_LOSS</code> <code class='highlighter'>STOP_LOSS_MARKET</code>"
        },
        {
          "Field":"quantity",
          "Type":"string",
          "Description":"Number of shares for the order"
        },
        {
          "Field":"producttype",
          "Type":"string",
          "Description":" Product Type <code class='highlighter'>CNC</code> <code class='highlighter'>INTRADAY</code> <code class='highlighter'>MARGIN</code> <code class='highlighter'>MTF</code> <code class='highlighter'>CO</code> <code class='highlighter'>BO</code>"
        },
        {
          "Field":"price",
          "Type":"string",
          "Description":"Price at which order is placed"
        },
        {
          "Field":"trigger_price",
          "Type":"string",
          "Description":"Price at which the order is triggered, in case of <code class='highlighter'>STOP_LOSS</code> <code class='highlighter'>STOP_LOSS_MARKET</code>"
        },
        {
          "Field":"squareoff",
          "Type":"string",
          "Description":"Auto Sqaure off"
        },
        {
          "Field":"stoploss",
          "Type":"string",
          "Description":"Stop Loss order"
        },
        {
          "Field":"trailingStopLoss",
          "Type":"string",
          "Description":"Trailing Stop Loss order"
        },
        {
          "Field":"disclosedquantity",
          "Type":"string",
          "Description":"Number of shares visible (Keep more than 30% of quantity)"
        },
        {
          "Field":"duration",
          "Type":"string",
          "Description":"Regular Order Immediate or Cancel"
        },
        {
          "Field":"ordertag",
          "Type":"string",
          "Description":"It is optional to apply to an order to identify. The length of the tag should be less than 20 characters."
        },
      ]
      

        
  return (
    <div className='flex flex-col gap-6 mt-10'>
      {/* <h1>Place Order</h1> */}
      <div className='flex flex-col gap-3'>
        <ol className='list-inside'>
          <li className="font-bold text-xl">Order Placement</li>
        </ol>
      </div>

      {/* Description  Details Section */}
      <div>
        <p>
          This endpoint allows
          users to place a regular trading order in the specified market. Users
          must provide relevant order details such as the trading symbol,
          exchange, transaction type, and other order specifics.
        </p>
      </div>

      {/* Request Header Details Section */}
      <div className='flex flex-col gap-2'>
      <span className="font-bold"> Request Headers -</span>
        <dl class="pl-4">
        <div class="flex">
          <dt class="font-semibold min-w-[120px]">X-Mirae-Version :</dt>
          <dd>Specifies the version of the API being used. In this case, it is set to 1.</dd>
        </div>
        <div class="flex">
          <dt class="font-semibold min-w-[120px]">Authorization :</dt>
          <dd>A token-based authentication header. The format is token api_key:jwtToken.</dd>
        </div>
        <div class="flex">
          <dt class="font-semibold min-w-[120px]">Content-Type :</dt>
          <dd>
          A token-based authentication header. The format is token api_key:jwtToken. Content-Type: For this request, it is set to <span className='mstockNavFont'>application/json</span>, which is used for submiting form data through body
          </dd>
        </div>
        <div class="flex">
          <dt class="font-semibold min-w-[120px]">X-PrivateKey :</dt>
          <dd>
          ay3KHeKfEJgoiYzkB/MAKg@@
          </dd>
        </div>
      </dl>
      </div>

       {/* Postman Curl command Details Section */}
       <div className='flex flex-col gap-2'>
        <p className="font-bold">cURL Command -</p>
        <CopyBox copyContent={PlaceOrdercURLData} />
      </div>

       {/* Request Body Details Section */}
      <div className='flex flex-col gap-3'>
        <p>
          <span className="font-bold">Request Body - </span>The body of the
          request must be URL-encoded and include the following parameters:
        </p>
        <DynamicTable data={requestParameter}/>
      </div>

       {/* Request Response -  Details Section  */}
       <div>
        <p className="font-bold">Response Structure -</p>
        <p className='py-3'>
          The response of the request will be based on authentication outcome.
        </p>
        <div>
          <ul className="list-outside list-disc px-6 flex flex-col gap-6">
            {/* Success Json View repsonse */}
            <li>
              {" "}
              <span className="font-semibold">Success (HTTP Status 200): </span>
              On successful order placement, the server returns a JSON object
              containing the order ID and status
            </li>
            <NewJsonViewer data={SuccessResponseJson} />

            <li>
              {" "}
              <span className="font-semibold">Failure (HTTP Status 400): </span>
              If the order fails due to invalid parameters, authentication issues, or other errors, the server will return an error message with below json format.
            </li>
            <NewJsonViewer data={FailureInvalidOrderTypeJson} />

            <li>
              {" "}
              <span className="font-semibold">
                Failure (HTTP Status 200):{" "}
              </span>{" "}
              If market is closed or not connected to NSE then api will return
              an error message with below json format.
            </li>
            <NewJsonViewer data={FailureMarketCloseJson} />

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
  );
}

export default PlaceOrderTypeB
