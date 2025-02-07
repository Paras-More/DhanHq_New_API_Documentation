import React from "react";
import CopyBox from "../../../Common_Components/CopyBox";
import NewJsonViewer from "../../../Common_Components/NewJsonViewer";
import DynamicTable from "../../../Common_Components/DynamicTable";
import { API_KEY_ERROR_TYPE_A } from "../../../Utils/TypeAErrors";
function ModifyOrderTypeA() {
  const ModifyOrderCurlData = `curl --location --request PUT 'http://ntasc.mirae.com/typea/orders/regular/1000000000016050' \\
--header 'X-Mirae-Version: 1' \\
--header 'Authorization: token api_key:access_token' \\
--header 'Content-Type: application/x-www-form-urlencoded' \\
--data-urlencode 'order_type=LIMIT' \\  
--data-urlencode 'quantity=5' \\
--data-urlencode 'price=2000' \\
--data-urlencode 'validity=DAY' \\
--data-urlencode 'disclosed_quantity=0' \\
--data-urlencode 'trigger_price=0'`;

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
    message:
      "Order Does not Exsist.Need to refresh orderbook / relogin in application ",
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
      Field: "order_type",
      Type: "string",
      Description:
        "Order Type :<code class='highlighter'>LIMIT</code> <code class='highlighter'>MARKET</code> <code class='highlighter'>SL</code> <code class='highlighter'>SL-M</code>",
    },
    {
      Field: "quantity",
      Type: "string",
      Description: "Number of shares for the order",
    },
    {
      Field: "price",
      Type: "string",
      Description: "Price at which order is placed",
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
      Field: "trigger_price",
      Type: "string",
      Description:
        "Price at which the order is triggered, in case of <code class='highlighter'>STOP_LOSS</code> <code class='highlighter'>STOP_LOSS_MARKET</code>",
    },
    {
      Field: "disclosed_quantity",
      Type: "string",
      Description: "Number of shares visible (Keep more than 30% of quantity)",
    },
    {
      Field: "transaction_type",
      Type: "string",
      Description:
        "The trading side of transaction : <code class='highlighter'>BUY</code> <code class='highlighter'>SELL</code>",
    },
    {
      Field: "product",
      Type: "string",
      Description:
        "Product type <code class='highlighter'>CNC</code> <code class='highlighter'>MIS</code> <code class='highlighter'>MTF</code> <code class='highlighter'>NRML</code>  ",
    },
    {
      Field: "modqty_remng",
      Type: "string",
      Description: "Remaining quantity",
    },
  ];
  return (
    <div className="flex flex-col gap-6 mt-10">
      {/* <h1>Place Order</h1> */}
      <div className="flex flex-col gap-3">
        <ol className="list-inside">
          <li className="font-bold text-xl">Order Modification</li>
        </ol>
      </div>

      {/* Description  Details Section */}
      <div>
        <p>
          This endpoint allows users to update/modify an existing order by
          specifying the order ID and providing the updated order details.
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
          <li>
            <span className="font-semibold">Content-Type:</span> Indicated the
            media type of the resource. For this request, it is set to{" "}
            <a
              className="mstockNavFont"
              href="application/x-www-form-urlencoded"
            >
              {" "}
              application/x-www-form-urlencoded
            </a>
            , which s used for submiting form data.
          </li>
        </ul>
      </div>
      {/* Postman Curl command Details Section */}
      <div className="flex flex-col gap-2">
        <p className="font-bold">Postman cURL Command -</p>
        <CopyBox copyContent={ModifyOrderCurlData} />
      </div>

      {/* Path Parameter */}
      <div className="flex flex-col gap-3">
        <p className="font-bold">Path Parameter -</p>
        <ul className="list-inside list-disc">
          <DynamicTable
            data={[
              {
                Field: "order_id",
                Description:
                  "The unique identifier of the order to be updated or modified",
              },
            ]}
          />
        </ul>
      </div>

      {/* Request Body Details Section */}
      <div className="flex flex-col gap-4">
        <p>
          <span className="font-bold">Request Body - </span>The body of the
          request must be URL-encoded and include the following parameters:
        </p>
        <DynamicTable data={requestParameter} />
      </div>

      {/* Request Response -  Details Section  */}
      <div>
        <p className="font-bold">Request Response -</p>
        <p className="py-3">
          The response of the request will be based on authentication outcome.
        </p>
        <div>
          <ul className="list-outside list-disc px-6 flex flex-col gap-6">
            {/* Success Json View repsonse */}
            <li>
              {" "}
              <span className="font-semibold">Success (HTTP Status 200): </span>
              On successful order update, the server returns a JSON object
              containing the order ID and status.
            </li>
            <NewJsonViewer data={SuccessResponseJson} />

            <li>
              {" "}
              <span className="font-semibold">Failure (HTTP Status 401): </span>
              : If the order fails due to invalid parameters, authentication
              issues, or other errors, the server will return an error message
              with below json format.
            </li>
            <NewJsonViewer data={FailureTokenJson} />

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
            <NewJsonViewer data={API_KEY_ERROR_TYPE_A} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default ModifyOrderTypeA;
