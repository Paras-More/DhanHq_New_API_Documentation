import React from "react";
import CopyBox from "../../../Common_Components/CopyBox";
import NewJsonViewer from "../../../Common_Components/NewJsonViewer";
import DynamicTable from "../../../Common_Components/DynamicTable";
function TradeHistoryTypeB() {
  const ModifyOrderCurlData = `curl --location --request GET 'http://ntasc.mirae.com/typeb/trades' \\
    --header 'X-Mirae-Version: 1' \\
    --header 'Authorization: token api_key:access_token' \\
     --header 'X-PrivateKey: private_key'\\`;

  const SuccessResponseJson = {
    "status": true,
    "message": "SUCCESS",
    "errorcode": "",
    "data": [
        {
            "exchange": "NSE",
            "producttype": "DELIVERY",
            "tradingsymbol": "RASHTRIYA CHEMICALS & FER",
            "instrumenttype": "",
            "symbolgroup": "",
            "strikeprice": "",
            "optiontype": "",
            "expirydate": "",
            "marketlot": "",
            "precision": "",
            "multiplier": "",
            "tradevalue": "",
            "transactiontype": "SELL",
            "fillprice": "145.45",
            "fillsize": "1",
            "orderid": "1300000040250500",
            "fillid": "68346395",
            "filltime": "14:48:23"
        },
        {
            "exchange": "NSE",
            "producttype": "DELIVERY",
            "tradingsymbol": "RASHTRIYA CHEMICALS & FER",
            "instrumenttype": "",
            "symbolgroup": "",
            "strikeprice": "",
            "optiontype": "",
            "expirydate": "",
            "marketlot": "",
            "precision": "",
            "multiplier": "",
            "tradevalue": "",
            "transactiontype": "BUY",
            "fillprice": "145.60",
            "fillsize": "1",
            "orderid": "1300000040194885",
            "fillid": "68334426",
            "filltime": "14:47:53"
        }
    ]
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
            <span className="font-semibold">X-PrivateKey: </span>private_key
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

export default TradeHistoryTypeB;
