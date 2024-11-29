import React from 'react'
import CopyBox from '../../../Common_Components/CopyBox'
import NewJsonViewer from '../../../Common_Components/NewJsonViewer'
function ModifyOrderTypeA() {

    const ModifyOrderCurlData = `curl --location --request PUT 
'http://localhost:18463/zrd/orders/regular/1131241001100' \\
--header 'X-Mirae-Version: 1' \\
--header 'Authorization: token api_key:access_token' \\
--header 'Content-Type: application/x-www-form-urlencoded' \\
--data-urlencode 'tradingsymbol=INFY' \\
--data-urlencode 'order_type=LIMIT' \\
--data-urlencode 'quantity=20' \\
--data-urlencode 'price=1255' \\
--data-urlencode 'validity=DAY' \\
--data-urlencode 'exchange=NSE' \\
--data-urlencode 'trigger_price=1230' \\
--data-urlencode 'disclosed_quantity=0' \\
--data-urlencode 'transaction_type=BUY' \\
--data-urlencode 'product=MIS' \\
--data-urlencode 'modqty_remng=2'`


    const SuccessResponseJson ={
        "status": "success",
        "data": {
            "order_id": "1131241001100"
        }
    }

    const FailureTokenJson = {
        "status": "error",
        "message": "Invalid request. Please try again.",
        "error_type": "TokenException",
        "data": null
    }

    const FailureInputJson = {
        "status": "error",
        "message": "Order Does not Exsist.Need to refresh orderbook / relogin in application ",
        "error_type": "InputException",
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
          https://ntasc.mirae.com/zrd/orders/regular/&#10100;OrderID&#10101;
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
          <span className="font-semibold">Content-Type:</span> Indicated the media type of the resource. For this request, it is set to <a className='text-customBlueFont' href='application/x-www-form-urlencoded'> application/x-www-form-urlencoded</a>, which s used for submiting form data.
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
        <li>tradingsymbol</li>
        <li>order_type</li>
        <li>quantity</li>
        <li>price</li>
        <li>validity</li>
        <li>exchange</li>
        <li>trigger_price</li>
        <li>disclosed_quantity</li>
        <li>transaction_type</li>
        <li>product</li>
        <li>modqty_remng</li>
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
          <NewJsonViewer data={FailureTokenJson} />

          <li>
            {" "}
            <span className="font-semibold">
            Failure (HTTP Status 200):{" "}
            </span>{" "}
            : If orderid does not exist then server will return
            below json reponse.
          </li>
          <NewJsonViewer data={FailureInputJson} />
        </ul>
      </div>
    </div>

  </div>
  )
}

export default ModifyOrderTypeA