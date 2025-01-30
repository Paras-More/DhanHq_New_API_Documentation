import React from "react";
import CopyBox from "../../../Common_Components/CopyBox";
import NewJsonViewer from "../../../Common_Components/NewJsonViewer";
import DynamicTable from "../../../Common_Components/DynamicTable";
function Holdings_TypeA() {
  const positionCurlData = `curl --location 'http://ntasc.mirae.com/typea/portfolio/holdings' \\
    --header 'X-Mirae-Version: 1' \\
    --header 'Authorization: token api_key:access_token'`;

  const SuccessResponseJson = {
    status: "success",
    data: [
      {
        tradingsymbol: "BANK OF MAHARASHTRA",
        exchange: null,
        instrument_token: 11377,
        isin: "INE457A01014",
        product: null,
        price: 30,
        quantity: 10,
        used_quantity: 1,
        t1_quantity: 0,
        realised_quantity: 0,
        authorised_quantity: 0,
        authorised_date: null,
        opening_quantity: 0,
        collateral_quantity: 0,
        collateral_type: null,
        discrepancy: false,
        average_price: 30,
        last_price: 84.7,
        close_price: 51.1,
        pnl: 0,
        day_change: 0,
        day_change_percentage: 0,
      },
      {
        tradingsymbol: "PSP PROJECTS LIMITED",
        exchange: null,
        instrument_token: 20877,
        isin: "INE488V01015",
        product: null,
        price: 513.35,
        quantity: 100,
        used_quantity: 0,
        t1_quantity: 0,
        realised_quantity: 0,
        authorised_quantity: 0,
        authorised_date: null,
        opening_quantity: 0,
        collateral_quantity: 100,
        collateral_type: null,
        discrepancy: false,
        average_price: 513.35,
        last_price: 774.75,
        close_price: 659.95,
        pnl: 0,
        day_change: 0,
        day_change_percentage: 0,
      },
    ],
  };

  const FailureVersionJson = {
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
      method: "POST",
      path: "https://ntasc.mirae.com/typea/portfolio/positions",
      description: "retrieve a list of all existing trading orders.",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* <h1>Place Order</h1> */}

      <div className="flex flex-col gap-3">
        <ol className="list-inside">
          <li className="font-bold text-xl">Holdings</li>
        </ol>
      </div>

      {/* Description  Details Section */}
      <div>
        <p>
          This endpoint offers the users to retrieve all the list of holdings
          that contain the user's portfolio of long term equity delivery stocks.
        </p>
      </div>

      {/* Request Header Details Section */}
      <div className="flex flex-col gap-2">
        <span className="font-bold">Request Headers -</span>
        <dl class="pl-4">
          <div class="flex">
            <dt class="font-semibold min-w-[120px]">X-Mirae-Version :</dt>
            <dd>
              Specifies the version of the API being used. In this case, it is
              set to 1.
            </dd>
          </div>
          <div class="flex">
            <dt class="font-semibold min-w-[120px]">Authorization :</dt>
            <dd>
              A token-based authentication header. The format is token
              api_key:access_token.
            </dd>
          </div>
        </dl>
      </div>

      {/* Postman Curl command Details Section */}
      <div className="flex flex-col gap-2">
        <p className="font-bold">cURL Command -</p>
        <CopyBox copyContent={positionCurlData} />
      </div>

      {/* Request Body Details Section */}
      <div>
        <p>
          <span className="font-bold">Request Body - </span>
        </p>
        <p>
          This endpoint does not require a request body or additional parameters
          in the query string for the retrieval of orders.
        </p>
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
              <span className="font-semibold">Success (HTTP Status 200): </span>
              On successful retrieval, the server returns a JSON array of client
              positions.
            </li>
            <NewJsonViewer data={SuccessResponseJson} />
            {/* Failure Version Json View repsonse */}
            <li>
              <span className="font-semibold">Failure (HTTP Status 401): </span>{" "}
              If authentication fails, the server will return an error message
            </li>
            <NewJsonViewer data={FailureVersionJson} />
            <li>
              <span className="font-semibold">Failure (HTTP Status 400): </span>{" "}
              If the API Key is Invalid or expired.
            </li>
            <NewJsonViewer data={FailureInvalidAPIKey} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Holdings_TypeA;
