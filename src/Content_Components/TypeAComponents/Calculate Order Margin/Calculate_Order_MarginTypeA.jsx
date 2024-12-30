import React from 'react'
import CopyBox from '../../../Common_Components/CopyBox'
import NewJsonViewer from '../../../Common_Components/NewJsonViewer'
import DynamicTable from '../../../Common_Components/DynamicTable'
function Calculate_Order_MarginTypeA() {

  const data = [
    {
      "method": "POST",
      "path": "https://ntasc.mirae.com/typea/margins/orders",
      "description": "This endpoint allows users to retrieve a list of their trading orders. Users can view all their existing orders."
    },
  ]

const COMCurlData =`curl --location 'http://ntasc.mirae.com/typea/margins/orders' \\
    --header 'X-Mirae-Version: 1' \\
    --header 'Authorization: token api_key:access_token' \\
    --header 'Content-Type: application/json' \\
    --data '{
        "exchange": "NSE",
        "tradingsymbol": "INFY",
        "transaction_type": "BUY",
        "variety": "regular",
        "product": "CNC",
        "order_type": "MARKET",
        "quantity": 1,
        "price": 0,
        "trigger_price": 0
}`  

const requestBodyJson ={
    "exchange": "NSE",
    "tradingsymbol": "INFY",
    "transaction_type": "BUY",
    "variety": "regular",
    "product": "CNC",
    "order_type": "MARKET",
    "quantity": 1,
    "price": 0,
    "trigger_price": 0
}

const SuccessResponseJson = {
  "status": "success",
  "data": {
      "type": "equity",
      "tradingsymbol": "INFY",
      "exchange": "NSE",
      "span": 0,
      "exposure": 0,
      "option_premium": 0,
      "additional": 1699.37,
      "bo": 0,
      "cash": 0,
      "var": 0,
      "pnl": {
          "realised": 0,
          "unrealised": 0
      },
      "leverage": 0,
      "charges": {
          "transaction_tax": 0,
          "transaction_tax_type": "stt",
          "exchange_turnover_charge": 0,
          "sebi_turnover_charge": 0,
          "brokerage": 80.92,
          "stamp_duty": 0,
          "gst": {
              "igst": 0,
              "cgst": 0,
              "sgst": 0,
              "total": 0
          },
          "total": 80.92
      },
      "total": 1699.37
  }

}

const FailureInputJson = {
  "status": "error",
  "message": "Incorrect auth. Please try again.",
  "error_type": "InputException",
  "data": null
}
const FailureInvalidAPIKey ={
  "status": "error",
  "message": "API is suspended/expired for use. Please check your API subscription and try again.",
  "data": null
}

  return (
    <div className='flex flex-col gap-6'>
    {/* <h1>Place Order</h1> */}
    <h1 className="content-heading-font">Calculate Order Margin</h1>
    <div className='mt-4'>
                 <DynamicTable data={data}/>
              </div>
    <div className='flex flex-col gap-3'>
      <ol className='list-inside'>
        <li className="font-bold text-xl">Calculate Order Margin</li>
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
      <dl class="pl-4">
        <div class="flex">
          <dt class="font-semibold min-w-[120px]">X-Mirae-Version :</dt>
          <dd>Specifies the version of the API being used. In this case, it is set to 1.</dd>
        </div>
        <div class="flex">
          <dt class="font-semibold min-w-[120px]">Authorization :</dt>
          <dd>A token-based authentication header. The format is token api_key:access_token.</dd>
        </div>
        <div class="flex">
          <dt class="font-semibold min-w-[120px]">Content-Type :</dt>
          <dd>
            Indicated the media type of the resource. For this request, it is set to <a className='mstockNavFont' href='application/x-www-form-urlencoded'> application/x-www-form-urlencoded</a>, which is used for submiting form data.
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
      <CopyBox copyContent={COMCurlData} />
    </div>

    {/* Request Body Details Section */}
    <div className='flex flex-col gap-2'>
    <p className="font-bold">Request Body-</p>
    <NewJsonViewer data={requestBodyJson}/>
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
            On successful request execution, server will
            return the below json formated data.
          </li>
          <NewJsonViewer data={SuccessResponseJson} />


          <li>
            {" "}
            <span className="font-semibold">
            Failure (HTTP Status 200):{" "}
            </span>{" "}
            If authentication fails, the server will return an
            error message
          </li>
          <NewJsonViewer data={FailureInputJson} />

          <li>
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

export default Calculate_Order_MarginTypeA