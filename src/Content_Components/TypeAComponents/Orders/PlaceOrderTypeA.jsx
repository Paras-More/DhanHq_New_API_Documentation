import React from "react";
import CopyBox from "../../../Common_Components/CopyBox";
import NewJsonViewer from "../../../Common_Components/NewJsonViewer";
import DynamicTable from "../../../Common_Components/DynamicTable";
import { API_KEY_ERROR_TYPE_A } from "../../../Utils/TypeAErrors";
function PlaceOrderTypeA() {
  const PlaceOrdercURLData = `curl --location 'http://ntasc.mirae.com/typea/orders/{variety}' \\
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
    --data-urlencode 'price=1250'`;

  const SuccessResponseJson = {
    status: "success",
    data: {
      order_id: "1131241001100",
    },
  };

  const FailureTokenJson = {
    status: "error",
    message: "Invalid request. Please try again.",
    error_type: "TokenException",
    data: null,
  };

  const FailureInputJson = {
    status: "error",
    message: "System is not connected to NSE Equity market",
    error_type: "InputException",
    data: null,
  };

  const requestParameter = [
    {
      Field: "variety",
      Type: "string",
      Description:
        "Variety of the order ( <code class='highlighter'>regular</code> <code class='highlighter'>amo</code> <code class='highlighter'>co</code>)",
    },
    {
      Field: "tradingsymbol",
      Type: "string",
      Description: "Refer Trading Symbol in Tables",
    },
    {
      Field: "transaction_type",
      Type: "string",
      Description:
        "The trading side of transaction : <code class='highlighter'>BUY</code> <code class='highlighter'>SELL</code>",
    },
    {
      Field: "order_type",
      Type: "string",
      Description:
        "Order Type :<code class='highlighter'>MARKET</code> <code class='highlighter'>LIMIT</code> <code class='highlighter'>SL</code> <code class='highlighter'>SL-M</code>",
    },
    {
      Field: "quantity",
      Type: "string",
      Description: "Number of shares for the order",
    },
    {
      Field: "product",
      Type: "string",
      Description:
        "Product type <code class='highlighter'>CNC</code> <code class='highlighter'>NRML</code> <code class='highlighter'>MIS</code> <code class='highlighter'>MTF</code>",
    },
    {
      Field: "validity",
      Type: "string",
      Description:
        "Validity of Order <code class='highlighter'>DAY</code> <code class='highlighter'>IOC</code>",
    },
    {
      Field: "price",
      Type: "string",
      Description: "Price at which order is placed",
    },
  ];

  return (
    <div className="flex flex-col gap-6 mt-10">
      {/* <h1>Place Order</h1> */}
      <div className="flex flex-col gap-3">
        <ol className="list-inside">
          <li className="font-bold text-xl">Order Placement</li>
        </ol>
      </div>

      {/* Description  Details Section */}
      <div>
        <p>
          This endpoint allows users to place a regular trading order in the
          specified market. Users must provide relevant order details such as
          the trading symbol, exchange, transaction type, and other order
          specifics.
        </p>
      </div>

      {/* Request Header Details Section */}
      <div className="flex flex-col gap-2">
        <span className="font-bold">Request Headers -</span>
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
            <span className="font-semibold">Content-Type:</span> For this
            request, it is set to{" "}
            <span className="mstockNavFont">
              application/x-www-form-urlencoded
            </span>
            , which is used for submiting form data.
          </li>
        </ul>
      </div>

      {/* Postman Curl command Details Section */}
      <div className="flex flex-col gap-2">
        <p className="font-bold">Postman cURL Command -</p>
        <CopyBox copyContent={PlaceOrdercURLData} />
      </div>

      {/* Request Body Details Section */}
      <div className="flex flex-col gap-2">
        <p>
          <span className="font-bold">Request Body - </span>The body of the
          request must be URL-encoded and include the following parameters:
        </p>
        <DynamicTable data={requestParameter} />
      </div>

      {/* Request Response -  Details Section  */}
      <div>
        <p className="font-bold">Response Structure -</p>
        <p className="py-3">
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

            <li>
              {" "}
              <span className="font-semibold">
                Failure (HTTP Status 400):{" "}
              </span>{" "}
              If the API Key is Invalid or expired.
            </li>
            <NewJsonViewer data={API_KEY_ERROR_TYPE_A} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PlaceOrderTypeA;
