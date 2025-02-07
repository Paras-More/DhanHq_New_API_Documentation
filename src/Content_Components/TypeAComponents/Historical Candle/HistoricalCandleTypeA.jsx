import React from "react";
import CopyBox from "../../../Common_Components/CopyBox";
import NewJsonViewer from "../../../Common_Components/NewJsonViewer";
import DynamicTable from "../../../Common_Components/DynamicTable";
import { API_KEY_ERROR_TYPE_A } from "../../../Utils/TypeAErrors";
function HistoricalCandleTypeA() {
  const ModifyOrderCurlData = `curl --location 'https://ntasc.mirae.com/typea/instruments/historical/11536/60minute?from=2024-08-02+09%3A15%3A00&to=2024-08-04+09%3A20%3A00' \\
--header 'X-Mirae-Version: 1' \\
--header 'Authorization: token access_token'`;

  const SuccessResponseJson = {
    status: "success",
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
  const FailureInputJson = {
    status: "error",
    message:
      "Order Does not Exsist.Need to refresh orderbook / relogin in application ",
    error_type: "InputException",
    data: null,
  };
  const QueryParameter = [
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
  const data = [
    {
      method: "GET",
      path: "https://ntasc.mirae.com/typea/instruments/historical/11536/minute?from={2024-08-02+09:15:00}&to={2024-08-04+09:20:00}",
      description: "View historical candle data",
    },
  ];
  return (
    <div className="flex flex-col gap-6">
      {/* <h1>Place Order</h1> */}
      <h1 className="content-heading-font">Historical Candle</h1>
      <div className="mt-2">
        <DynamicTable data={data} />
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
          <DynamicTable data={QueryParameter} />
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
            <NewJsonViewer data={API_KEY_ERROR_TYPE_A} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default HistoricalCandleTypeA;
