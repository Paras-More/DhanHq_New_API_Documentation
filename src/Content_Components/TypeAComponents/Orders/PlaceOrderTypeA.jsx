import React from 'react'
import CopyBox from '../../../Common_Components/CopyBox'
import NewJsonViewer from '../../../Common_Components/NewJsonViewer'
import DynamicTable from '../../../Common_Components/DynamicTable'

function PlaceOrderTypeA() {

    const PlaceOrdercURLData = `curl --location 'http://ntasc.mirae.com/typea/orders/regular' \\
    --header 'X-Mirae-Version: 1' \\
    --header 'Authorization: token api_key:access_token \\
    --header 'Content-Type: application/x-www-form-urlencoded' \\
    --data-urlencode 'tradingsymbol=INFY' \\
    --data-urlencode 'exchange=NSE' \\
    --data-urlencode 'transaction_type=BUY' \\
    --data-urlencode 'order_type=LIMIT' \\
    --data-urlencode 'quantity=10' \\
    --data-urlencode 'product=MIS' \\
    --data-urlencode 'validity=DAY' \\
    --data-urlencode 'price=1250'`
    
        const SuccessResponseJson = {
            "status": "success",
            "data": {
                "order_id": "1131241001100"
            }
        }
    
        const FailureTokenJson ={
            "status": "error",
            "message": "Invalid request. Please try again.",
            "error_type": "TokenException",
            "data": null
        }
    
        const FailureInputJson = {
            "status": "error",
            "message": "System is not connected to NSE Equity market",
            "error_type": "InputException",
            "data": null
        }

        const requestParameter = [
          {
            "Field":"tradingsymbol",
            "Type":"string",
            "Description":"Refer Trading Symbol in Tables"
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
            "Field":"product",
            "Type":"string",
            "Description":"Product type <code class='highlighter'>CNC</code> <code class='highlighter'>INTRADAY</code> <code class='highlighter'>MARGIN</code> <code class='highlighter'>MTF</code> <code class='highlighter'>CO</code> <code class='highlighter'>BO</code>"
          },
          {
            "Field":"validity",
            "Type":"string",
            "Description":"Validity of Order <code class='highlighter'>DAY</code> <code class='highlighter'>IOC</code>"
          },
          {
            "Field":"price",
            "Type":"string",
            "Description":"Price at which order is placed"
          }
        ]

        
  return (
    <div className='flex flex-col gap-6 mt-10'>
      {/* <h1>Place Order</h1> */}
      <div className='flex flex-col gap-3'>
        <ol className='list-inside'>
          <li className="font-bold text-xl">Order Placement</li>
        </ol>
        {/* <p>
          URL :
          <a
            className="mstockNavFont"
            href="https://ntasc.mirae.com/typea/orders/regular"
          >
            https://ntasc.mirae.com/typea/orders/regular
          </a>
        </p>
        <p>
          Method -<span className="font-bold"> POST</span>
        </p> */}
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
      <span className="font-bold">Request Headers -</span>
      <dl class="pl-4">
        <div class="flex">
          <dt class="font-semibold min-w-[120px]">X-Mirae-Version :</dt>
          <dd>Specifies the version of the API being used. In this case, it is set to 1.</dd>
        </div>
        <div class="flex">
          <dt class="font-semibold min-w-[120px]">Authorization :</dt>
          <dd>A token-based authentication header. The format is token api_key:access_token</dd>
        </div>
        <div class="flex">
          <dt class="font-semibold min-w-[120px]">Content-Type :</dt>
          <dd>
            For this request, it is set to
            <span class="mstockNavFont">application/x-www-form-urlencoded</span>, which is used for submitting form data.
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
      <div className='flex flex-col gap-2'>
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
              <span className="font-semibold">Failure (HTTP Status 401): </span>
              If the order fails due to invalid parameters, authentication
              issues, or other errors, the server will return an error message
              with below json format.
            </li>
            <NewJsonViewer data={FailureTokenJson} />

            <li>
              {" "}
              <span className="font-semibold">
                Failure (HTTP Status 200):{" "}
              </span>{" "}
              If market is closed or not connected to NSE then api will return
              an error message with below json format.
            </li>
            <NewJsonViewer data={FailureInputJson} />
          </ul>
        </div>
      </div>

    </div>
  );
}

export default PlaceOrderTypeA