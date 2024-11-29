import React from 'react'
import CopyBox from '../../../Common_Components/CopyBox'
import NewJsonViewer from '../../../Common_Components/NewJsonViewer'

function PlaceOrderTypeB() {

    const PlaceOrdercURLData = `
    curl --location 'http://localhost:18463/Agl/orders/regular' \\
    --header 'X-Mirae-Version: 1' \\
    --header 'Authorization: Bearer access_token' \\
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
          "status": true,
          "message": "SUCCESS",
          "errorcode": "",
          "data": {
              "script": "ACC-EQ",
              "orderid": "1191241106101",
              "uniqueorderid": ""
          }
      }
      
    
        const FailureInvalidOrderTypeJson ={
          "status": false,
          "message": "Invalid order type. valid product types allowed are MARKET, STOPLOSS_MARKET, STOPLOSS_LIMIT and LIMIT.",
          "errorcode": "400",
          "data": null
      }
      
    
        const FailureMarketCloseJson = {
          "status": false,
          "message": "RMS:1141241105101:NSE,EQUITY,22,ACC,INTRADAY,,EQ,SATYA,B,1,I,22,ACC,INTRADAY,89.44995,FUND LIMIT INSUFFICIENT,AVAILABLE FUND=0,ADDITIONAL REQUIRED FUND=572.36,CALCULATED MARGIN FOR ORDER=572.36",
          "errorcode": "RS-0111",
          "data": null
      }
      

        
  return (
    <div className='flex flex-col gap-6 mt-10'>
      {/* <h1>Place Order</h1> */}
      <div className='flex flex-col gap-3'>
        <ol className='list-inside'>
          <li className="font-bold text-xl">1. Place Order</li>
        </ol>
        <p>
          URL :
          <a
            className="text-customBlueFont"
            href="https://ntasc.mirae.com/zrd/orders/regular"
          >
            https://nTasc.mirae.com/agl/orders/regular 
          </a>
        </p>
        <p>
          Method -<span className="font-bold"> POST</span>
        </p>
      </div>

       {/* Postman Curl command Details Section */}
       <div>
        <p className="font-bold">Postman cURL Command -</p>
        <CopyBox copyContent={PlaceOrdercURLData} />
      </div>

       {/* Request Body Details Section */}
      <div>
        <p>
          <span className="font-bold">Request Body - </span>The body of the
          request must be URL-encoded and include the following parameters:
        </p>
        <ul className="list-inside list-disc indent-8 py-2">
          <li>variety</li>
          <li>tradingsymbol</li>
          <li>exchange</li>
          <li>transactiontype </li>
          <li>ordertype</li>
          <li>quantity</li>
          <li>producttype </li>
          <li>price </li>
          <li>triggerprice </li>
          <li>squareoff</li>
          <li>stoploss</li>
          <li>trailingStopLoss</li>
          <li>disclosedquantity</li>
          <li>uration</li>
          <li>ordertag</li>
        </ul>
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
          </ul>
        </div>
      </div>

      {/* Request Header Section */}
      <div>
        <h1 className="font-bold">Request Headers – </h1>
        <p className="indent-14">
          <span>
            <span className="font-bold">Key:</span> X-Mirae-Version ,{" "}
          </span>
          <span>
            <span className="font-bold">Value</span>: 1
          </span>
        </p>
      </div>

      {/* Request Header Details Section */}
      <div>
        <ul>
          <li>
            <span className="font-semibold">X-Mirae-Version:</span> Specifies
            the version of the API being used. In this case, it is set to 1
          </li>
          <li>
            <span className="font-semibold">Authorization:</span> A token-based
            authentication header. The format is token api_key:access_token
          </li>
          <li>
            <span className="font-semibold">Content-Type:</span>A token-based authentication header. The format is token api_key:access_token.
            Content-Type: For this request, it is set to <span className='text-customBlueFont'>application/json</span>, which is used for submiting form data through body

          </li>
        </ul>
      </div>

      {/* Description  Details Section */}
      <div>
        <p>
          <span className="font-bold">Description -</span>This endpoint allows
          users to place a regular trading order in the specified market. Users
          must provide relevant order details such as the trading symbol,
          exchange, transaction type, and other order specifics.
        </p>
      </div>

    </div>
  );
}

export default PlaceOrderTypeB
