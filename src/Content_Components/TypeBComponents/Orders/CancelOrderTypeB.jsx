import React from "react";
import NewJsonViewer from "../../../Common_Components/NewJsonViewer";
import CopyBox from "../../../Common_Components/CopyBox";
import DynamicTable from "../../../Common_Components/DynamicTable";

function CancelOrderTypeB() {
  const CancelOrderCurlData = `curl --location --request DELETE 'http://ntasc.mirae.com/typeb/orders/regular/1112241106105' \\
    --header 'X-Mirae-Version: 1' \\
    --header 'X-PrivateKey: ay3KHeKfEJgoiYzkB/MAKg@@' \\
    --header 'Authorization: Bearer access_token \\
    --header 'Content-Type: application/json' \\
    --data '{
    "variety": "NORMAL",
    "orderid": "1181250130106"
    }'
`;

  const SuccessResponseJson = {
    status: "true",
    message: "SUCCESS",
    errorcode: "",
    data: {
      orderid: "201020000000080",
      uniqueorderid: "",
    },
  };

  const FailureOrderIdJson = {
    status: "false",
    message: "Order is Cancelled.Kindly refresh your OrderBook",
    errorcode: "RS-00093",
    data: null,
  };
  const FailureInvalidAPIKey = {
    status: false,
    message:
      "Invalid product. valid product types allowed are DELIVERY, INTRADAY and CARRYFORWARD.",
    errorcode: "400",
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
      Field: "symboltoken",
      Type: "string",
      Description: "Token of the contract for which modify is being sent",
    },
    {
      Field: "exchange",
      Type: "string",
      Description:
        "Exchange name : <code class='highlighter'>NSE</code> <code class='highlighter'>BSE</code>",
    },
    {
      Field: "transaction_type",
      Type: "string",
      Description:
        "The trading side of transaction : <code class='highlighter'>BUY</code> <code class='highlighter'>SELL</code>",
    },
    {
      Field: "orderid",
      Type: "string",
      Description: "order specific ID which needs to be cancelled",
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
      Field: "producttype",
      Type: "string",
      Description:
        " Product Type <code class='highlighter'>CNC</code> <code class='highlighter'>INTRADAY</code> <code class='highlighter'>MARGIN</code> <code class='highlighter'>MTF</code> <code class='highlighter'>CO</code> <code class='highlighter'>BO</code>",
    },
    {
      Field: "duration",
      Type: "string",
      Description: "Regular Order Immediate or Cancel",
    },
    {
      Field: "price",
      Type: "string",
      Description: "Price at which order is placed",
    },
    {
      Field: "trigger_price",
      Type: "string",
      Description:
        "Price at which the order is triggered, in case of <code class='highlighter'>STOP_LOSS</code> <code class='highlighter'>STOP_LOSS_MARKET</code>",
    },
    {
      Field: "disclosedquantity",
      Type: "string",
      Description: "Number of shares visible (Keep more than 30% of quantity)",
    },
    {
      Field: "modqty_remng",
      Type: "string",
      Description: "Quantity of shares in order that needs to be modified",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* <h1>Place Order</h1> */}
      <div className="flex flex-col gap-3">
        <ol className="list-inside">
          <li className="font-bold text-xl">Order Cancellation</li>
        </ol>
      </div>

      {/* Description  Details Section */}
      <div>
        <p>
          This endpoint allows users to delete an existing order specified by
          the order ID. Deleting an order will cancel the specified order.
        </p>
      </div>

      {/* Request Header Details Section */}
      <div className="flex flex-col gap-2">
        <span className="font-bold"> Request Headers -</span>
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
              api_key:jwtToken.
            </dd>
          </div>
          <div class="flex">
            <dt class="font-semibold min-w-[120px]">Content-Type :</dt>
            <dd>
              Indicated the media type of the resource. For this request, it is
              set to <span className="mstockNavFont">application/json</span>,
              which is used for submiting form data through body
            </dd>
          </div>
          <div class="flex">
            <dt class="font-semibold min-w-[120px]">X-PrivateKey :</dt>
            <dd>ay3KHeKfEJgoiYzkB/MAKg@@</dd>
          </div>
        </dl>
      </div>

      {/* Postman Curl command Details Section */}
      <div className="flex flex-col gap-2">
        <p className="font-bold">cURL Command -</p>
        <CopyBox copyContent={CancelOrderCurlData} />
      </div>

      {/* Path Parameter */}
      <div className="flex flex-col gap-2">
        <p className="font-bold">Path Parameter -</p>
        <DynamicTable
          data={[
            {
              Field: "order_id",
              Description:
                "The unique identifier of the order to be updated or modified",
            },
          ]}
        />
      </div>

      {/* Request Body Details Section */}
      {/* <div className="flex flex-col gap-2">
        <p>
          <span className="font-bold">Request Body - </span>The body of the
          request must be URL-encoded and include the following parameters:
        </p>

        <DynamicTable data={requestParameter} />
      </div> */}

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
              On successful order deletion, the server returns a JSON object
              containing the order ID and status.
            </li>
            <NewJsonViewer data={SuccessResponseJson} />

            <li>
              <span className="font-semibold">Failure (HTTP Status 200): </span>
              : If orderid does not exist then server will return below json
              reponse.
            </li>
            <NewJsonViewer data={FailureOrderIdJson} />

            <li>
              <span className="font-semibold">Failure (HTTP Status 400): </span>
              Invalid product error
            </li>
            <NewJsonViewer data={FailureInvalidAPIKey} />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default CancelOrderTypeB;
