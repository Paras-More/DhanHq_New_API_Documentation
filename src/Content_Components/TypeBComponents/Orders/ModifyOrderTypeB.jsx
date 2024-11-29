import React from 'react'
import CopyBox from '../../../Common_Components/CopyBox'
import NewJsonViewer from '../../../Common_Components/NewJsonViewer'
function ModifyOrderTypeB() {

    const ModifyOrderCurlData = `
    curl --location --request PUT 'http://localhost:18463/Agl/orders/regular/1191241106101' \\
  --header 'X-Mirae-Version: 1' \\
  --header 'Authorization: Bearer access_token \\
  --header 'Content-Type: application/json' \\
  --data '{
    "variety": "NORMAL",
    "tradingsymbol": "ACC-EQ",
    "symboltoken": "22",
    "exchange": "NSE",
    "transactiontype": "BUY",
    "orderid": "1191241106101",
    "ordertype": "MARKET",
    "quantity": "15",
    "producttype": "DELIVERY",
    "duration": "DAY",
    "price": "2240",
    "triggerprice": "0",
    "disclosedquantity": "",
    "modqty_remng": "0"
}'
`


    const SuccessResponseJson ={
      "status": true,
      "message": "SUCCESS",
      "errorcode": "",
      "data": {
          "orderid": " 1191241106101",
          "uniqueorderid": ""
      }
  }
  

    const FailureValidJson = {
      "status": false,
      "message": "Enter valid trigger price.",
      "errorcode": "400",
      "data": null
  }
  

    const FailureOrderIdJson = {
      "status": false,
      "message": "Order is Cancelled.Kindly refresh your OrderBook",
      "errorcode": "RS-0034",
      "data": null
  }
  


  return (
    <div className='flex flex-col gap-6 mt-10'>
    {/* <h1>Place Order</h1> */}
    <div className='flex flex-col gap-3'>
      <ol className='list-inside'>
        <li className="font-bold text-xl">2. Modify Order</li>
      </ol>
      <p>
        URL :
        <a
          className="text-customBlueFont"
          href="https://ntasc.mirae.com/zrd/orders/regular"
        >
          https://nTasc.mirae.com/agl/orders/regular/&#10100;OrderID&#10101;
        </a>
      </p>
      <p>
        Method -<span className="font-bold"> PUT</span>
      </p>
    </div>

    {/* Description  Details Section */}
    <div>
      <p>
        <span className="font-bold">Description -</span>This endpoint allows users to update/modify an existing order by
        specifying the order ID and providing the updated order details.
      </p>
    </div>

    {/* Postman Curl command Details Section */}
    <div>
      <p className="font-bold">Postman cURL Command -</p>
      <CopyBox copyContent={ModifyOrderCurlData} />
    </div>

     {/* Request Header Section */}
     <div>
      <h1 className="font-bold">Request Headers – </h1>
      <p className="indent-14">
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
          <span className="font-semibold">Content-Type:</span> Indicated the media type of the resource. For this request, it is set to <span className='text-customBlueFont'>application/json</span>, which is used for submiting form data through body
        </li>
      </ul>
    </div>

    {/* Request Body Details Section */}
    <div>
      <p>
        <span className="font-bold">Request Body - </span>The   body   of   the   request   must   be   URL-encoded   and   include   the   following
        parameters:
      </p>
      <ul className="list-inside list-disc indent-8 py-2">
        <li>variety </li>
        <li>tradingsymbol </li>
        <li>symboltoken </li>
        <li>exchange </li>
        <li>transactiontype </li>
        <li>orderid </li>
        <li>ordertype </li>
        <li>quantity </li>
        <li>producttype </li>
        <li>duration </li>
        <li>price</li>
        <li>triggerprice</li>
        <li>disclosedquantity</li>
        <li>modqty_remng</li>
        <li></li>
      </ul>
    </div>

    {/* Path Parameter */}
    <div>
        {/* <p> */}
            <p className="font-bold">Path Parameter -</p>
            <ul className='list-inside list-disc px-8'>
                <li>order_id: The unique identifier of the order to be updated or modified</li>
            </ul>
        {/* </p> */}
    </div>


    {/* Request Response -  Details Section  */}
    <div>
      <p className="font-bold">Request Response -</p>
      <p className='py-3'>
        The response of the request will be based on authentication outcome.
      </p>
      <div>
        <ul className="list-outside list-disc px-6 flex flex-col gap-6">
          {/* Success Json View repsonse */}
          <li>
            {" "}
            <span className="font-semibold">Success (HTTP Status 200): </span>
            On successful order update, the server returns a
            JSON object containing the order ID and status.
          </li>
          <NewJsonViewer data={SuccessResponseJson} />

          <li>
            {" "}
            <span className="font-semibold">Failure (HTTP Status 401): </span>
            : If the order fails due to invalid parameters, 
            authentication issues, or other errors, the server will return an error 
            message with below json format.
          </li>
          <NewJsonViewer data={FailureValidJson} />

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

export default ModifyOrderTypeB