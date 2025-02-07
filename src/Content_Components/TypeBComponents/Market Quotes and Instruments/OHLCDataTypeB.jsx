import React from "react";
import CopyBox from "../../../Common_Components/CopyBox";
import NewJsonViewer from "../../../Common_Components/NewJsonViewer";
import DynamicTable from "../../../Common_Components/DynamicTable";
import { API_KEY_ERROR_TYPE_B,INVALID_REQUEST_TYPE_B_401 } from "../../../Utils/TypeBErrors";
function OHLCDataTypeB() {
  const ModifyOrderCurlData = `curl --location --request GET 'http://localhost:18463/agl/instruments/quote' \\
--header 'X-Mirae-Version: 1' \\
--header 'Authorization: Bearer access_token' \\
--header 'X-PrivateKey: INnHxHlHDwDWPmXMou00TA@@' \\
--header 'Content-Type: application/json' \\
--data '{
    "mode": "OHLC",
    "exchangeTokens": {
        "NSE": ["3045"],
        "BSE": ["500410"]
    }
}'`;

  const OHLCSuccessResponseJson = {
    status: "true",
    message: "SUCCESS",
    errorcode: "",
    data: {
      fetched: [
        {
          exchange: "NSE",
          tradingSymbol: "SBIN-EQ",
          symbolToken: "3045",
          ltp: 571.8,
          open: 568.75,
          high: 568.75,
          low: 567.05,
          close: 566.5,
        },
      ],
      unfetched: [],
    },
  };

  const LTPSuccessResponseJson =  {
    "status": "true",
    "message": "SUCCESS",
    "errorcode": "",
    "data": {
         "fetched": [
              {
                   "exchange": "NSE",
                   "tradingSymbol": "SBIN-EQ",
                   "symbolToken": "3045",
                   "ltp": 571.75
              }
         ],
         "unfetched": []
    }
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
      Field: "mode",
      Type: "string",
      Description:
        "<code class='highlighter'>OHLC</code> <code class='highlighter'>LTP</code>",
    },
    {
      "Field": "exchangeTokens",
      "Type": "string",
      "Description": "<code class='highlighter'>\"NSE\": [\"3045\"]</code> <code class='highlighter'>\"BSE\": [\"500410\"]</code>"
    }

  ];

  return (
    <div className="flex flex-col gap-6">
      {/* <h1>Place Order</h1> */}
      <div className="flex flex-col gap-3">
        <ol className="list-inside">
          <li className="font-bold text-xl">Market OHLC Data</li>
        </ol>
      </div>

      {/* Description  Details Section */}
      <div>
        <p>
          This endpoint returns the OHLC market data identified by the
          exchange:tradingsymbol combination that are passed as values to the
          query parameter.
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
            <span className="font-semibold">X-PrivateKey:</span> private_key
          </li>
        </ul>
      </div>
      {/* Postman Curl command Details Section */}
      <div className="flex flex-col gap-2">
        <p className="font-bold">Postman cURL Command -</p>
        <CopyBox copyContent={ModifyOrderCurlData} />
      </div>

      {/* Query Parameter */}
      <div className="flex flex-col gap-3">
        <p className="font-bold">Query Parameter -</p>
        <ul className="list-inside list-disc">
          <DynamicTable
            data={requestParameter}
          />
        </ul>
      </div>

      {/* Request Body Details Section */}
      <div className="flex flex-col gap-4">
        <p>
          <span className="font-bold">Request Body - </span>This endpoint does
          not require a request body or additional parameters in the query
          string for the retrieval of orders.
        </p>
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
              Successful OHLC Response
            </li>
            <NewJsonViewer data={OHLCSuccessResponseJson} />

            {/* <li> */}

            <li>
              {" "}
              <span className="font-semibold">Success (HTTP Status 200): </span>
              Successful LTP Response
            </li>
            <NewJsonViewer data={LTPSuccessResponseJson} />

            <li>
              {" "}
              <span className="font-semibold">Failure (HTTP Status 401): </span>
              : If the order fails due to invalid parameters, authentication
              issues, or other errors, the server will return an error message
              with below json format.
            </li>
            <NewJsonViewer data={INVALID_REQUEST_TYPE_B_401} />

            <li>
              {" "}
              <span className="font-semibold">
                Failure (HTTP Status 400):{" "}
              </span>{" "}
              If the API Key is Invalid or expired.
            </li>
            <NewJsonViewer data={API_KEY_ERROR_TYPE_B} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default OHLCDataTypeB;
