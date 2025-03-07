import React from "react";
import CopyBox from "../../../Common_Components/CopyBox";
import NewJsonViewer from "../../../Common_Components/NewJsonViewer";
import DynamicTable from "../../../Common_Components/DynamicTable";
import { API_KEY_ERROR_TYPE_B,INVALID_REQUEST_TYPE_B_401 } from "../../../Utils/TypeBErrors";
function ModifyOrderTypeB() {
  const ModifyOrderCurlData = `curl --location --request PUT 'http://ntasc.mirae.com/typeb/orders/regular/1191241106101' \\
    --header 'X-Mirae-Version: 1' \\
    --header 'X-PrivateKey: ay3KHeKfEJgoiYzkB/MAKg@@' \\
    --header 'Authorization: Bearer access_token \\
    --header 'Content-Type: application/json' \\
    --data '{
      "variety": "NORMAL",
      "tradingsymbol": "ACC-EQ",
      "symboltoken": "22",
      "exchange": "NSE",
      "transactiontype": "BUY",
      "orderid": "1191241106101",
      "ordertype": "MARKET",
      "quantity": "15",
      "producttype": "DELIVERY",
      "duration": "DAY",
      "price": "2240",
      "triggerprice": "0",
      "disclosedquantity": "",
      "modqty_remng": "0"
      }'
`;
  const SuccessResponseJson = {
    status: "true",
    message: "SUCCESS",
    errorcode: "",
    data: {
      orderid: " 1191241106101",
      uniqueorderid: "",
    },
  };

  const FailureValidJson = {
    status: "false",
    message: "Enter valid trigger price.",
    errorcode: "400",
    data: null,
  };

  const FailureOrderIdJson = {
    status: "false",
    message: "Order is Cancelled.Kindly refresh your OrderBook",
    errorcode: "RS-0034",
    data: null,
  };
  const requestParameter = [
    {
      Field: "variety",
      Type: "string",
      Description:
        "Variety of the order ( <code class='highlighter'>NORMAL</code> <code class='highlighter'>AMO</code> <code class='highlighter'>ROBO</code> <code class='highlighter'>STOPLOSS</code> )",
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
      Field: "orderid ",
      Type: "string",
      Description: "Order Id Number</code>",
    },
    {
      Field: "order_type",
      Type: "string",
      Description:
        " Product Type <code class='highlighter'>DELIVERY</code> <code class='highlighter'>INTRADAY</code> <code class='highlighter'>MARGIN</code> <code class='highlighter'>CARRYFORWARD</code>",
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
      Field: "squareoff",
      Type: "string",
      Description: "Auto Sqaure off",
    },
    {
      Field: "disclosedquantity",
      Type: "string",
      Description: "Number of shares visible (Keep more than 30% of quantity)",
    },
    {
      Field: "modqty_remng",
      Type: "string",
      Description: "Remaining quantity",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* <h1>Place Order</h1> */}
      <div className="flex flex-col gap-3">
        <ol className="list-inside">
          <li className="font-bold text-xl">Order Modification</li>
        </ol>
      </div>

      {/* Description  Details Section */}
      <div>
        <p>
          This endpoint allows users to update/modify an existing order by
          specifying the order ID and providing the updated order details.
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
        <CopyBox copyContent={ModifyOrderCurlData} />
      </div>

      {/* Path Parameter */}
      <div className="flex flex-col gap-2">
        {/* <p> */}
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
        {/* </p> */}
      </div>

      {/* Request Body Details Section */}
      <div className="flex flex-col gap-2">
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
              <span className="font-semibold">Failure (HTTP Status 401): </span>
              : If the order fails due to invalid parameters, authentication
              issues, or other errors, the server will return an error message
              with below json format.
            </li>
            <NewJsonViewer data={FailureValidJson} />

            <li>
              {" "}
              <span className="font-semibold">
                Failure (HTTP Status 200):{" "}
              </span>{" "}
              : If orderid does not exist then server will return below json
              reponse.
            </li>
            <NewJsonViewer data={FailureOrderIdJson} />

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

export default ModifyOrderTypeB;
