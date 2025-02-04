import React from "react";
import CopyBox from "../../../Common_Components/CopyBox";
import NewJsonViewer from "../../../Common_Components/NewJsonViewer";
import DynamicTable from "../../../Common_Components/DynamicTable";

function IndiviualOrderDetailsTypeB() {
  const orderBookCurlData = `curl --location --request GET 'http://localhost:18463/Agl/order/details' \\
--header 'X-Mirae-Version: 1' \\
--header 'Authorization: Bearer access_token' \\
--header 'X-PrivateKey: ay3KHeKfEJgoiYzkB/MAKg@@' \\
--header 'Content-Type: application/json' \\
--data '{
    "order_no": "1181250130105",
    "segment": "E"
}'`;

  const SuccessResponseJson = {
    status: true,
    message: "SUCCESS",
    errorcode: "",
    data: [
      {
        variety: null,
        ordertype: "MARKET",
        producttype: "DELIVERY",
        duration: "DAY",
        price: 0,
        triggerprice: 0,
        quantity: "20",
        disclosedquantity: "0",
        squareoff: 0,
        stoploss: 0,
        trailingstoploss: 0,
        tradingsymbol: "ACC",
        transactiontype: "SELL",
        exchange: "NSE",
        symboltoken: "22",
        instrumenttype: "EQUITY",
        strikeprice: 0,
        optiontype: "",
        expirydate: "2025-Jan-23",
        lotsize: "",
        cancelsize: "0",
        averageprice: "0",
        filledshares: "20",
        unfilledshares: "0",
        orderid: "1000000000016254",
        text: "CONFIRMED",
        status: "Pending",
        orderstatus: "Pending",
        updatetime: "23-01-2025 03:14:25 PM",
        exchtime: "",
        exchorderupdatetime: "",
        fillid: "",
        filltime: "",
        parentorderid: "",
        ordertag: "",
        uniqueorderid: "",
      },
    ],
  };
  const FailureInvalidAPIKey = {
    status: "error",
    message:
      "API is suspended/expired for use. Please check your API subscription and try again.",
    data: null,
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
    <div className="flex flex-col gap-6">
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
            <span className="font-semibold">X-PrivateKey:</span>private_key
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
            <NewJsonViewer data={FailureInvalidAPIKey} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default IndiviualOrderDetailsTypeB;
