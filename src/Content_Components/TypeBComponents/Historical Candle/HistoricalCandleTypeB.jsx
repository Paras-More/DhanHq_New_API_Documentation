import React from "react";
import CopyBox from "../../../Common_Components/CopyBox";
import NewJsonViewer from "../../../Common_Components/NewJsonViewer";
import DynamicTable from "../../../Common_Components/DynamicTable";
function HistoricalCandleTypeB() {
  const ModifyOrderCurlData = `curl --location --request GET 'https://ntasc.mirae.com/typeb/instruments/historical' \
--header 'X-Mirae-Version: 1' \\
--header 'Authorization: Bearer access_token' \\
--header 'X-PrivateKey: private_key' \\
--header 'Content-Type: application/json' \\
--data '{
    "exchange": "NSE",
    "symboltoken": "11536",
    "interval": "ONE_MINUTE",
    "fromdate": "2024-08-02 09:15",
    "todate": "2024-08-04 09:20"
}' \\`;

  const SuccessResponseJson = {
    status: "true",
    message:"success",
    "errorcode": "",
    data: {
      candles: [
        ["2024-01-01T09:15:00+05", 3790, 3832, 3773.35, 3803, 825219],
        ["2024-01-02T09:15:00+05", 3811.1, 3811.1, 3767.25, 3781.15, 1343722],
      ],
    },
  };

  const FailureTokenJson = {
    status: "error",
    message: "Invalid request. Please try again.",
    error_type: "TokenException",
    data: null,
  };

  const FailureInvalidAPIKey = {
    status: "error",
    message:
      "API is suspended/expired for use. Please check your API subscription and try again.",
    data: null,
  };

  const data = [
    {
      method: "GET",
      path: "https://ntasc.mirae.com/typeb/instruments/historical",
      description: "View historical candle data"
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* <h1>Place Order</h1> */}
      <h1 className="content-heading-font">Historical Candle</h1>
      <div className="flex flex-col gap-3">
        <div className="mt-4">
        <DynamicTable data={data} />
      </div>
      </div>

      {/* Description  Details Section */}
      <div>
        <p>
          The historical data API provides the historical candle data for
          instruments across various exchange segment.
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
            <span className="font-semibold">X-Private-key:</span> private_key
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

export default HistoricalCandleTypeB;
