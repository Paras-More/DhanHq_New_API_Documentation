import React from "react";
import CopyBox from "../../../Common_Components/CopyBox";
import NewJsonViewer from "../../../Common_Components/NewJsonViewer";
import DynamicTable from "../../../Common_Components/DynamicTable";
function LTPDataTypeB() {
  const ModifyOrderCurlData = `curl --location --request GET 'https://ntasc.mirae.com/typeb/instruments/quote' \\
--header 'X-Mirae-Version: 1' \\
--header 'Authorization: Bearer jwt_token \\
--header 'X-PrivateKey: private_key' \\
--data '{
    "mode": "LTP",
    "exchangeTokens": {
        "NSE": ["3045"],
        "BSE": ["500410"]
    }
  }'`;


  const SuccessLTPResponseJson = {
    "status": true,
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
      Field: "order_type",
      Type: "string",
      Description:
        "Order Type :<code class='highlighter'>LIMIT</code> <code class='highlighter'>MARKET</code> <code class='highlighter'>STOP_LOSS</code> <code class='highlighter'>STOP_LOSS_MARKET</code>",
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
        "Product type <code class='highlighter'>CNC</code> <code class='highlighter'>INTRADAY</code> <code class='highlighter'>MARGIN</code> <code class='highlighter'>MTF</code> <code class='highlighter'>CO</code> <code class='highlighter'>BO</code>",
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
          <li className="font-bold text-xl">Market LTP Data</li>
        </ol>
      </div>

      {/* Description  Details Section */}
      <div>
        <p>
          This endpoint returns the LTP market data identified by the
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
            <span className="font-semibold">X-Private-key:</span> private_ke
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
            data={[
              {
                Field: "i",
                Description: "NSE:ACC",
              },
              {
                Field: "i",
                Description: "BSE:ACC",
              },
              {
                Field: "i",
                Description: "NFO:CDSL25JAN2220CE",
              },
            ]}
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
              <span className="font-semibold">Failure (HTTP Status 200): </span>
              LTP Response
            </li>
            <NewJsonViewer data={SuccessLTPResponseJson} />

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

export default LTPDataTypeB;
