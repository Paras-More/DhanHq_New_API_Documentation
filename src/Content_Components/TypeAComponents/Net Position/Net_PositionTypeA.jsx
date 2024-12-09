import React from 'react'
import CopyBox from '../../../Common_Components/CopyBox'
import NewJsonViewer from '../../../Common_Components/NewJsonViewer'
import DynamicTable from '../../../Common_Components/DynamicTable'
function Net_PositionTypeA() {

  const positionCurlData = `curl --location 'http://ntasc.mirae.com/typea/portfolio/positions' \\
    --header 'X-Mirae-Version: 1' \\
    --header 'Authorization: token api_key:access_token'`
 
  const SuccessResponseJson = {
    "status": "success",
    "data": {
        "net": [
            {
                "tradingsymbol": "YESBANK",
                "exchange": "NSE",
                "instrument_token": 11915,
                "product": "",
                "quantity": 100,
                "overnight_quantity": 0,
                "multiplier": 1,
                "average_price": 19.05,
                "close_price": 27.65,
                "last_price": 27.65,
                "value": 1905,
                "pnl": 0,
                "m2m": 860,
                "unrealised": 0,
                "realised": 0,
                "buy_quantity": 100,
                "buy_price": 19.05,
                "buy_value": 1905,
                "buy_m2m": 0,
                "sell_quantity": 0,
                "sell_price": 0,
                "sell_value": 0,
                "sell_m2m": 0,
                "day_buy_quantity": 100,
                "day_buy_price": 19.05,
                "day_buy_value": 1905,
                "day_sell_quantity": 0,
                "day_sell_price": 0,
                "day_sell_value": 0
            },
            {
                "tradingsymbol": "IDEA",
                "exchange": "NSE",
                "instrument_token": 14366,
                "product": "",
                "quantity": 4,
                "overnight_quantity": 0,
                "multiplier": 1,
                "average_price": 100,
                "close_price": 16.55,
                "last_price": 16.55,
                "value": 400,
                "pnl": 0,
                "m2m": -333.8,
                "unrealised": 0,
                "realised": 0,
                "buy_quantity": 4,
                "buy_price": 100,
                "buy_value": 400,
                "buy_m2m": 0,
                "sell_quantity": 0,
                "sell_price": 0,
                "sell_value": 0,
                "sell_m2m": 0,
                "day_buy_quantity": 4,
                "day_buy_price": 100,
                "day_buy_value": 400,
                "day_sell_quantity": 0,
                "day_sell_price": 0,
                "day_sell_value": 0
            }
        ],
        "day": null
  }}
  
  const FailureVersionJson = {
    "status": "error",
    "message": "Please provide valid api version.",
    "error_type": "VersionException",
    "data": null
}  
  const data = [
    {
      "method": "POST",
      "path": "https://ntasc.mirae.com/typea/portfolio/positions",
      "description": "retrieve a list of all existing trading orders."
    },
  ]

  return (
    <div className='flex flex-col gap-6'>
    {/* <h1>Place Order</h1> */}
    <h1 className="content-heading-font">Net Position</h1>
             <div className='mt-4'>
                 <DynamicTable data={data}/>
              </div>
    <div className='flex flex-col gap-3'>
      <ol className='list-inside'>
        <li className="font-bold text-xl">Net Position</li>
      </ol>
      {/* <p>
        URL :
        <a
          className="mstockNavFont"
          href="https://ntasc.mirae.com/typea/portfolio/positions"
        >
          https://ntasc.mirae.com/typea/portfolio/positions
        </a>
      </p>
      <p>
        Method -<span className="font-bold"> GET</span>
      </p> */}
    </div>
    
    {/* Description  Details Section */}
    <div>
      <p>
        This endpoint allows users to retrieve a list of their trading orders.
        Users can view all their existing orders
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
      </dl>
    </div>

    {/* Postman Curl command Details Section */}
    <div className='flex flex-col gap-2'>
      <p className="font-bold">cURL Command -</p>
      <CopyBox copyContent={positionCurlData} />
    </div>


    {/* Request Body Details Section */}
    <div>
      <p>
        <span className="font-bold">Request Body - </span>
      </p>
      <p>
      This endpoint does not require a request body or additional parameters in the
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
            <span className="font-semibold">Success (HTTP Status 200): </span>
            On successful retrieval, the server returns a
            JSON array of client positions.
          </li>
          <NewJsonViewer data={SuccessResponseJson} />
          {/* Failure Version Json View repsonse */}
          <li>
            <span className="font-semibold">
            Failure (HTTP Status 200):{" "}
            </span>{" "}
            If authentication fails, the server will return an
            error message
          </li>
          <NewJsonViewer data={FailureVersionJson} />
        </ul>
      </div>
    </div>

   </div>
  )
}

export default Net_PositionTypeA