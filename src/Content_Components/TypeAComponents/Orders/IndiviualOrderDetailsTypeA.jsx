import React from "react";
import CopyBox from "../../../Common_Components/CopyBox";
import NewJsonViewer from "../../../Common_Components/NewJsonViewer";
import DynamicTable from "../../../Common_Components/DynamicTable";
import { API_KEY_ERROR_TYPE_A } from "../../../Utils/TypeAErrors";
function IndiviualOrderDetailsTypeA() {
  const orderBookCurlData = `curl --location 'http://ntasc.mirae.com/typea/order/details' \\
    --header 'X-Mirae-Version: 1' \\
    --header 'Authorization: token api_key:access_token'\\
    --header 'Content-Type: application/x-www-form-urlencoded' \\
    --data-urlencode 'order_no=1157250130101' \\
    --data-urlencode 'segment=E'`;

  const SuccessResponseJson = {
    status: "success",
    data: [
      {
        average_price: 1950,
        cancelled_quantity: 10,
        disclosed_quantity: 0,
        exchange: "NSE",
        exchange_order_id: "1000000000016050",
        exchange_timestamp: null,
        filled_quantity: 10,
        instrument_token: 0,
        order_id: "1121250123103",
        order_timestamp: "23-01-2025 02:55:55 PM",
        order_type: "LIMIT",
        parent_order_id: null,
        pending_quantity: 10,
        price: 1950,
        product: "CNC",
        quantity: 10,
        status: "Triggered",
        status_message: "STOPLOSS TRIGGER",
        tag: null,
        tradingsymbol: "ACC",
        transaction_type: "SELL",
        trigger_price: 0,
        validity: "DAY",
        variety: null,
        modified: false,
      },
      {
        average_price: 1950,
        cancelled_quantity: 10,
        disclosed_quantity: 0,
        exchange: "NSE",
        exchange_order_id: "1000000000016050",
        exchange_timestamp: null,
        filled_quantity: 10,
        instrument_token: 0,
        order_id: "1121250123103",
        order_timestamp: "23-01-2025 02:55:55 PM",
        order_type: "SL",
        parent_order_id: null,
        pending_quantity: 10,
        price: 1950,
        product: "CNC",
        quantity: 10,
        status: "Pending",
        status_message: "CONFIRMED",
        tag: null,
        tradingsymbol: "ACC",
        transaction_type: "SELL",
        trigger_price: 1945,
        validity: "DAY",
        variety: null,
        modified: false,
      },
    ],
  };
  const VersionExpensionJson = {
    status: "error",
    message: "Please provide valid api version.",
    error_type: "VersionException",
    data: null,
  };

  const requestParameter = [
    {
      Field: "order_id",
      Type: "string",
      Description: "The unique identifier of the order to be cancel.",
    },
    {
      Field: "segment",
      Type: "string",
      Description: "E",
    },
  ];

  return (
    <div className="flex flex-col gap-6 mt-10">
      {/* <h1>Place Order</h1> */}
      <div className="flex flex-col gap-3">
        <ol className="list-inside">
          <li className="font-bold text-xl">Individual Order Details</li>
        </ol>
      </div>

      {/* Description  Details Section */}
      <div>
        <p>
          This endpoint allows users to retrieve the status of individual order
          using the order id.
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
        <CopyBox copyContent={orderBookCurlData} />
      </div>

      {/* Request Body Details Section */}
      <div className="flex flex-col gap-2">
        <p>
          <span className="font-bold">Request Body - </span>This endpoint does
          not require a request body or additional parameters in the query
          string for the retrieval of orders.
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
              : If authentication fails, the server will return an error message
            </li>
            <NewJsonViewer data={VersionExpensionJson} />

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

export default IndiviualOrderDetailsTypeA;
