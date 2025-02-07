import React from "react";
import CopyBox from "../../../Common_Components/CopyBox";
import NewJsonViewer from "../../../Common_Components/NewJsonViewer";
import DynamicTable from "../../../Common_Components/DynamicTable";
import { API_KEY_ERROR_TYPE_B,INVALID_REQUEST_TYPE_B_401 } from "../../../Utils/TypeBErrors";
function Holdings_TypeB() {
  const positionCurlData = `curl --location 'http://ntasc.mirae.com/typeb/portfolio/holdings' \\
    --header 'X-Mirae-Version: 1' \\
    --header 'Authorization: token api_key:access_token'
    --header 'X-PrivateKey: private_key'\\
    `;

  const SuccessResponseJson = {
    "status": "true",
    "message": "SUCCESS",
    "errorcode": null,
    "data": [
        {
            "tradingsymbol": "BANK OF MAHARASHTRA",
            "exchange": null,
            "isin": "INE457A01014",
            "t1quantity": 0,
            "realisedquantity": 0,
            "quantity": 10,
            "authorisedquantity": 0,
            "product": null,
            "collateralquantity": 0,
            "collateraltype": null,
            "haircut": 0,
            "averageprice": 30,
            "ltp": 84.7,
            "symboltoken": "11377",
            "close": 51.1,
            "profitandloss": 0,
            "pnlpercentage": 0
        },
        {
            "tradingsymbol": "PSP PROJECTS LIMITED",
            "exchange": null,
            "isin": "INE488V01015",
            "t1quantity": 0,
            "realisedquantity": 0,
            "quantity": 100,
            "authorisedquantity": 0,
            "product": null,
            "collateralquantity": 100,
            "collateraltype": null,
            "haircut": 0,
            "averageprice": 513.35,
            "ltp": 774.75,
            "symboltoken": "20877",
            "close": 659.95,
            "profitandloss": 0,
            "pnlpercentage": 0
        },
    ]
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
          <div class="flex">
            <dt class="font-semibold min-w-[120px]">X-PrivateKey: </dt>
            <dd>
            private_key
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
            <NewJsonViewer data={INVALID_REQUEST_TYPE_B_401} />
            <li>
              <span className="font-semibold">Failure (HTTP Status 400): </span>{" "}
              If the API Key is Invalid or expired.
            </li>
            <NewJsonViewer data={API_KEY_ERROR_TYPE_B} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Holdings_TypeB;
