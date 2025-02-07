import React from "react";
import CopyBox from "../../../Common_Components/CopyBox";
import NewJsonViewer from "../../../Common_Components/NewJsonViewer";
import DynamicTable from "../../../Common_Components/DynamicTable";
import { API_KEY_ERROR_TYPE_A } from "../../../Utils/TypeAErrors";
function PositionConversionTypeA() {
  const positionCurlData = `curl --location 'http://ntasc.mirae.com/typea/portfolio/convertposition' \\
    --header 'X-Mirae-Version: 1' \\
    --header 'Authorization: token api_key:access_token'
    --header 'Content-Type: application/x-www-form-urlencoded' \\
    --data-urlencode 'tradingsymbol=ACC' \\
    --data-urlencode 'exchange=NSE' \\
    --data-urlencode 'transaction_type=BUY' \\
    --data-urlencode 'position_type=DAY' \\
    --data-urlencode 'quantity=1' \\
    --data-urlencode 'old_product=CNC' \\
    --data-urlencode 'new_product=MIS'`;

  const SuccessResponseJson = `instrument_token,exchange_token,tradingsymbol,name,last_price,expiry,strike,
  tick_size,lot_size,instrument_type,segment,exchange
1,1,GOLDSTAR,GOLDSTAR POWER LIMITED,,,,,1,SM,SM,NSE
2,2,91D101220,GOI TBILL 91D-10/12/20,,,,,1,TB,TB,NSE`

  const FailureExceptionJson = {
    status: "error",
    message:
      "NSE EQUITY 3787 EQ RAHUL B 1 C INSUFICIENT QUANTITY TO CONVERT. INSUFICIENT QUANTITY: 1 AVAILABLE QUANTITY: 0",
    error_type: "MiraeException",
    data: null,
  };
  const data = [
    {
      method: "POST",
      path: "https://ntasc.mirae.com/typea/portfolio/positions",
      description: "retrieve a list of all existing trading orders.",
    },
  ];

  const requestParameter = [
    {
      Field: "tradingsymbol",
      Type: "string",
      Description: "Refer Trading Symbol in Tables",
    },
    {
      Field: "exchange",
      Type: "string",
      Description:
        "Exchange Name : <code class='highlighter'>NSE</code> <code class='highlighter'>BSE</code>",
    },
    {
      Field: "transaction_type",
      Type: "string",
      Description:
        "The trading side of transaction : <code class='highlighter'>BUY</code> <code class='highlighter'>SELL</code>",
    },
    {
      Field: "position_type",
      Type: "string",
      Description: "Position Type : <code class='highlighter'>DAY</code>",
    },
    {
      Field: "quantity",
      Type: "string",
      Description: "Number of shares for the order",
    },
    {
      Field: "old_product",
      Type: "string",
      Description: "Product type <code class='highlighter'>CNC</code> <code class='highlighter'>MIS</code> <code class='highlighter'>MTF</code>",
    },
    {
      Field: "new_product",
      Type: "string",
      Description: "Product type <code class='highlighter'>CNC</code> <code class='highlighter'>MIS</code> <code class='highlighter'>MTF</code>",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* <h1>Place Order</h1> */}

      <div className="flex flex-col gap-3">
        <ol className="list-inside">
          <li className="font-bold text-xl">Position Converstion</li>
        </ol>
      </div>

      {/* Description  Details Section */}
      <div>
        <p>
          Each position has one margin product. These products affect how the
          user's margin usage and free cash values are computed, and a user may
          wish to convert or change a position's margin product on timely basis.
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
              <span className="font-semibold">Success (HTTP Status 200): </span>
              On successful retrieval, the server returns a JSON array of client
              positions.
            </li>
            <CopyBox copyContent={SuccessResponseJson} />
            <li>
              <span className="font-semibold">Failure (HTTP Status 400): </span>{" "}
              If the API Key is Invalid or expired.
            </li>
            <NewJsonViewer data={API_KEY_ERROR_TYPE_A} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default PositionConversionTypeA;
