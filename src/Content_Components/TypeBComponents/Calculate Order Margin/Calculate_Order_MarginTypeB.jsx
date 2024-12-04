import React from 'react'
import CopyBox from '../../../Common_Components/CopyBox'
import NewJsonViewer from '../../../Common_Components/NewJsonViewer'
import DynamicTable from '../../../Common_Components/DynamicTable'

function Calculate_Order_MarginTypeB() {


const COMCurlData =`
curl --location 'http://localhost:18463/Agl/margins/orders' \\
--header 'X-Mirae-Version: 1' \\
--header 'Authorization: Bearer access_token \\
--header 'Content-Type: application/json' \\
--data '{
    "exchange": "NSE",
    "qty": "10",
    "price": "2240",
    "productType": "DELIVERY",
    "token": "22",
    "tradeType": "BUY",
    "triggerPrice": 0
}'
`  

const requestBodyJson ={
  "exchange": "NSE",
  "qty": "10",
  "price": "2240",
  "productType": "DELIVERY",
  "token": "22",
  "tradeType": "BUY",
  "triggerPrice": 0
}


const SuccessResponseJson = {
  "status": "true",
  "message": "SUCCESS",
  "errorcode": null,
  "data": {
      "totalMarginRequired": 22400,
      "marginComponents": {
          "netPremium": 0,
          "spanMargin": 0,
          "marginBenefit": 0,
          "deliveryMargin": 0,
          "nonNFOMargin": 0,
          "totOptionsPremium": 0
      },
      "marginBreakup": [
          {
              "exchange": "NSE",
              "productType": "DELIVERY",
              "totalMarginRequired": 0
          }
      ],
      "optionsBuy": {
          "totOptionsPremium": 0,
          "optionDetails": [
              {
                  "exchange": "NSE",
                  "productType": "DELIVERY",
                  "token": "22",
                  "lotMultiplier": 10,
                  "optionPremium": 0
              }
          ]
      }
  }
}

const data = [
  {
    "method": "POST",
    "path": "https://nTasc.mirae.com/agl/margins/orders",
    "description": "This endpoint allows users to retrieve a list of their trading orders. Users can view all their existing orders."
  },
]


const FailureInputJson = {
  "status": "false",
  "message": "Invalid request. Please try again.",
  "errorcode": "400",
  "data": null
}


  return (
    <div className='flex flex-col gap-6 mt-10'>
    {/* <h1>Place Order</h1> */}
    <h1 className="content-heading-font">Calculate Order Margin</h1>
                   <div className='mt-4'>
                        <DynamicTable data={data}/>
                    </div>
    <div className='flex flex-col gap-3'>
      <ol className='list-inside'>
        <li className="font-bold text-xl">Calculate Order Margin</li>
      </ol>
      <p>
        URL :
        <a
          className="mstockNavFont"
          href="https://nTasc.mirae.com/agl/margins/orders"
        >
          https://nTasc.mirae.com/agl/margins/orders
        </a>
      </p>
      <p>
        Method -<span className="font-bold"> POST</span>
      </p>
    </div>
    
    {/* Description  Details Section */}
    <div>
      <p>
        <span className="font-bold">Description -</span>This endpoint allows users to retrieve a list of their trading orders.
        Users can view all their existing orders.
      </p>
    </div>

    {/* Postman Curl command Details Section */}
    <div>
      <p className="font-bold">Postman cURL Command -</p>
      <CopyBox copyContent={COMCurlData} />
    </div>
    
    {/* Request Header Section */}
    <div>
      <h1 className="font-bold">Request Headers – </h1>
      <p className="py-1">
        <span>
          <span className="font-bold">Key:</span> X-Mirae-Version: ,{" "}
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
          <span className="font-semibold">Authorization:</span> A token-based authentication header. The format is token 
          api_key:access_token.
        </li>
        <li>
          <span className="font-semibold">Content-Type:</span> Indicates the media type of the resource being sent. For this request, it is set to application/json.
        </li>
      </ul>
    </div>

    {/* Request Body Details Section */}
    <div>
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
        </ul>
      </div>
    </div>

    </div>
  )
}

export default Calculate_Order_MarginTypeB