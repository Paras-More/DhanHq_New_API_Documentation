import React from "react";
import CopyBox from "../../../Common_Components/CopyBox";
import NewJsonViewer from "../../../Common_Components/NewJsonViewer";
import DynamicTable from "../../../Common_Components/DynamicTable";
function TradeHistoryTypeA() {
  const ModifyOrderCurlData = `curl --location --request GET 'http://ntasc.mirae.com/typea/trades' \\
    --header 'X-Mirae-Version: 1' \\
    --header 'Authorization: token api_key:access_token' \\`;

  const SuccessResponseJson = {
    status: "success",
    data: [
      {
        trade_id: "68346395",
        order_id: "1300000040250500",
        exchange: "NSE",
        tradingsymbol: "RASHTRIYA CHEMICALS & FER",
        instrument_token: 0,
        product: "CNC",
        average_price: 145.45,
        quantity: 1,
        exchange_order_id: "1300000040250500",
        transaction_type: "SELL",
        fill_timestamp: "14:48:23",
        order_timestamp: "2024-02-14 14:48:23",
        exchange_timestamp: "2024-02-14 14:48:23",
      },
      {
        trade_id: "68334426",
        order_id: "1300000040194885",
        exchange: "NSE",
        tradingsymbol: "RASHTRIYA CHEMICALS & FER",
        instrument_token: 0,
        product: "CNC",
        average_price: 145.6,
        quantity: 1,
        exchange_order_id: "1300000040194885",
        transaction_type: "BUY",
        fill_timestamp: "14:47:53",
        order_timestamp: "2024-02-14 14:47:53",
        exchange_timestamp: "2024-02-14 14:47:53",
      },
    ],
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
  const FailureInvalidAPIKey = {
    status: "error",
    message:
      "API is suspended/expired for use. Please check your API subscription and try again.",
    data: null,
  };

  const requestParameter = [
    {
      Field: "fromdate",
      Type: "string",
      Description: "2024-01-06",
    },
    {
      Field: "todate",
      Type: "string",
      Description: "2025-01-07",
    },
  ];

  return (
    <div className="flex flex-col gap-6 mt-10">
      {/* <h1>Place Order</h1> */}
      <div className="flex flex-col gap-3">
        <ol className="list-inside">
          <li className="font-bold text-xl">Trade History</li>
        </ol>
      </div>

      {/* Description  Details Section */}
      <div>
        <p>
          While an orders is sent as single entry but, it may get executed in
          arbitrary chunks at the exchange level. This endpoint returns a list
          of all trades generated upon the execution of orders for that day.
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

export default TradeHistoryTypeA;
