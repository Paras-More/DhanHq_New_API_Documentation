import React from 'react'
import NewJsonViewer from '../../../Common_Components/NewJsonViewer'
import CopyBox from '../../../Common_Components/CopyBox'
import DynamicTable from '../../../Common_Components/DynamicTable'

function CancelOrderTypeB() {

    const CancelOrderCurlData = `
    curl --location --request DELETE 'http://localhost:18463/Agl/orders/regular/1112241106105' \\
    --header 'X-Mirae-Version: 1' \\
    --header 'Authorization: Bearer access_token \\
    --header 'Content-Type: application/json' \\
    --data '{
    "variety": "NORMAL",
    "tradingsymbol": "ACC-EQ",
    "symboltoken": "35593",
    "exchange": "NFO",
    "transactiontype": "BUY",
    "orderid": "1112241106105",
    "ordertype": "MARKET",
    "quantity": "10",
    "producttype": "DELIVERY",
    "duration": "DAY",
    "price": "2240",
    "triggerprice": "0",
    "disclosedquantity": "",
    "modqty_remng": "0"
}'
`

const SuccessResponseJson = {
  "status": "true",
  "message": "SUCCESS",
  "errorcode": "",
  "data": {
      "orderid": "201020000000080",
      "uniqueorderid": ""
  }
}


const FailureOrderIdJson = {
  "status": "false",
  "message": "Order is Cancelled.Kindly refresh your OrderBook",
  "errorcode": "RS-00093",
  "data": null
}
const requestParameter = [
  {
    "Field":"variety",
    "Type":"string",
    "Description":"pending ---"
  },
  {
    "Field":"tradingsymbol",
    "Type":"string",
    "Description":"Refer Trading Symbol in Tables"
  },
  {
    "Field":"symboltoken",
    "Type":"string",
    "Description":"pending ---"
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
    "Field":"orderid",
    "Type":"string",
    "Description":"order specific ID which needs to be cancelled"
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
    "Description":"Product +________________ type <code class='highlighter'>CNC</code> <code class='highlighter'>INTRADAY</code> <code class='highlighter'>MARGIN</code> <code class='highlighter'>MTF</code> <code class='highlighter'>CO</code> <code class='highlighter'>BO</code>"
  },
  {
    "Field":"duration",
    "Type":"string",
    "Description":"Regular Order Immediate or Cancel"
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
    "Field":"disclosedquantity",
    "Type":"string",
    "Description":"Number of shares visible (Keep more than 30% of quantity)"
  },
  {
    "Field":"modqty_remng",
    "Type":"string",
    "Description":"Quantity of shares in order that needs to be modified"
  },

]

  return (
<div className='flex flex-col gap-6 mt-10'>
    {/* <h1>Place Order</h1> */}
    <div className='flex flex-col gap-3'>
      <ol className='list-inside'>
        <li className="font-bold text-xl">3. Cancel Order</li>
      </ol>
      <p>
        URL :
        <a
          className="mstockNavFont"
          href="https://ntasc.mirae.com/agl/orders/regular/{OrderID}"
        >
           https://nTasc.mirae.com/agl/orders/regular/&#10100;OrderID&#10101;
        </a>
      </p>
      <p>
        Method -<span className="font-bold"> DELETE</span>
      </p>
    </div>
    
    {/* Description  Details Section */}
    <div>
      <p>
        <span className="font-bold">Description -</span>This endpoint allows users to delete an existing order specified by
        the order ID. Deleting an order will cancel the specified order.
      </p>
    </div>

    {/* Postman Curl command Details Section */}
    <div>
      <p className="font-bold">Postman cURL Command -</p>
      <CopyBox copyContent={CancelOrderCurlData} />
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
          <span className="font-semibold">Content-Type:</span> Indicated the media type of the resource. For this request, it is set to <span className='mstockNavFont'>application/json</span>, which s used for submiting form data through body.
        </li>
      </ul>
    </div>

    {/* Path Parameter */}
    <div>
            <p className="font-bold">Path Parameter -</p>
            <DynamicTable data={[{"Field":"order_id","Description":"The unique identifier of the order to be updated or modified"}]}/>
    </div>

    {/* Request Body Details Section */}
    <div>
      <p>
        <span className="font-bold">Request Body - </span>The   body   of   the   request   must   be   URL-encoded   and   include   the   following
        parameters:
      </p>

      <DynamicTable data={requestParameter}/>
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
            : If orderid does not exist then server will return
            below json reponse.
          </li>
          <NewJsonViewer data={FailureOrderIdJson} />
        </ul>
      </div>
    </div>

</div>
  )
}

export default CancelOrderTypeB