import React from "react";
import NewJsonViewer from "../../../Common_Components/NewJsonViewer";
import CopyBox from "../../../Common_Components/CopyBox";
import DynamicTable from "../../../Common_Components/DynamicTable";

function CancelOrderTypeA() {
  const CancelOrderCurlData = `curl --location --request DELETE 'http://ntasc.mirae.com/typea/orders/regular/1161241001100' \\
    --header 'X-Mirae-Version: 1' \\
    --header 'Authorization: token api_key:access_token'`;

  const SuccessResponseJson = {
    status: "success",
    data: {
      order_id: "1161241001100",
    },
  };

  const FailureInputJson = {
    status: "error",
    message:
      "Order Does not Exsist.Need to refresh orderbook / relogin in application ",
    error_type: "InputException",
    data: null,
  };
  const FailureInvalidAPIKey = {
    status: "error",
    message:
      "API is suspended/expired for use. Please check your API subscription and try again.",
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
      Field: "validity",
      Type: "string",
      Description:
        "Validity of Order <code class='highlighter'>DAY</code> <code class='highlighter'>IOC</code>",
    },
    {
      Field: "exchange",
      Type: "string",
      Description:
        "Validity of Order <code class='highlighter'>NSE</code> <code class='highlighter'>BSE</code>",
    },
    {
      Field: "quantity",
      Type: "string",
      Description: "Number of shares for the order",
    },
    {
      Field: "order_type",
      Type: "string",
      Description:
        "Order Type :<code class='highlighter'>LIMIT</code> <code class='highlighter'>MARKET</code> <code class='highlighter'>STOP_LOSS</code> <code class='highlighter'>STOP_LOSS_MARKET</code>",
    },
    {
      Field: "modqty_remng",
      Type: "string",
      Description: "Remaining quantity",
    },
    {
      Field: "product",
      Type: "string",
      Description:
        "Product type <code class='highlighter'>CNC</code> <code class='highlighter'>NORMAL</code> <code class='highlighter'>MIS</code>",
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
          <li className="font-bold text-xl">Order Cancellation</li>
        </ol>
      </div>

      {/* Description  Details Section */}
      <div>
        <p>
          This endpoint allows users to delete an existing order specified by
          the order ID. Deleting an order will cancel the specified order.
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
            authentication header. The format is token api_key:access_token.
          </li>
        </ul>
      </div>

      {/* Postman Curl command Details Section */}
      <div className="flex flex-col gap-2">
        <p className="font-bold">Postman cURL Command -</p>
        <CopyBox copyContent={CancelOrderCurlData} />
      </div>

      {/* Path Parameter */}
      <div className="flex flex-col gap-2">
        {/* <p> */}
        <p className="font-bold">Path Parameter -</p>
        <DynamicTable
          data={[
            {
              Field: "order_id",
              Description: "The unique identifier of the order to be cancel.",
            },
          ]}
        />
        {/* </p> */}
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
        <p className="font-bold">Response Structure-</p>
        <p className="py-3">
          The response of the request will be based on authentication outcome.
        </p>
        <div>
          <ul className="list-outside list-disc px-6 flex flex-col gap-6">
            {/* Success Json View repsonse */}
            <li>
              {" "}
              <span className="font-semibold">Success (HTTP Status 200): </span>
              On successful order deletion, the server returns a JSON object
              containing the order ID and status.
            </li>
            <NewJsonViewer data={SuccessResponseJson} />

            <li>
              {" "}
              <span className="font-semibold">
                Failure (HTTP Status 200):{" "}
              </span>{" "}
              : If orderid does not exist then server will return below json
              reponse.
            </li>
            <NewJsonViewer data={FailureInputJson} />

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

export default CancelOrderTypeA;
