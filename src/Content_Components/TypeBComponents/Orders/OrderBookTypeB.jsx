import React from "react";
import CopyBox from "../../../Common_Components/CopyBox";
import NewJsonViewer from "../../../Common_Components/NewJsonViewer";
import DynamicTable from "../../../Common_Components/DynamicTable";
import { INVALID_REQUEST_TYPE_B_401, API_KEY_ERROR_TYPE_B } from "../../../Utils/TypeBErrors";
function OrderBookTypeB() {
  const orderBookCurlData = `curl --location 'http://ntasc.mirae.com/typeb/orders' \\
    --header 'X-Mirae-Version: 1' \\
    --header 'X-PrivateKey: ay3KHeKfEJgoiYzkB/MAKg@@' \\
    --header 'Authorization: Bearer access_token'`;

  const SuccessResponseJson = {
    status: "true",
    message: "SUCCESS",
    errorcode: "",
    data: [
      {
        variety: null,
        ordertype: "SL",
        producttype: "MARGIN",
        duration: "DAY",
        price: "2400.00",
        triggerprice: "2390",
        quantity: "900",
        disclosedquantity: "0",
        squareoff: "0",
        stoploss: "0",
        trailingstoploss: "0",
        tradingsymbol: "ACC-28Nov2024-2400-CE",
        transactiontype: "BUY",
        exchange: "NSE",
        symboltoken: "75307",
        instrumenttype: "OPTSTK",
        strikeprice: "2400",
        optiontype: "CE",
        expirydate: "2024-Nov-28",
        lotsize: "",
        cancelsize: "0",
        averageprice: "0",
        filledshares: "0",
        unfilledshares: "0",
        orderid: "1142241106106",
        text: "EXCH:16284:The order price is out of the days price range.",
        status: "Rejected",
        orderstatus: "Rejected",
        updatetime: "2024-Nov-06 12:42:18",
        exchtime: "",
        exchorderupdatetime: "2024-Nov-06 12:42:18",
        fillid: "",
        filltime: "",
        parentorderid: "",
        uniqueorderid: "",
        exchangeorderid: "1000000000017285",
      },
      {
        variety: null,
        ordertype: "SL",
        producttype: "MARGIN",
        duration: "DAY",
        price: "2400.00",
        triggerprice: "2390",
        quantity: "900",
        disclosedquantity: "0",
        squareoff: "0",
        stoploss: "0",
        trailingstoploss: "0",
        tradingsymbol: "ACC-28Nov2024-FUT",
        transactiontype: "BUY",
        exchange: "NSE",
        symboltoken: "35593",
        instrumenttype: "FUTSTK",
        strikeprice: "-0.01",
        optiontype: "XX",
        expirydate: "2024-Nov-28",
        lotsize: "",
        cancelsize: "0",
        averageprice: "0",
        filledshares: "0",
        unfilledshares: "0",
        orderid: "1132241106107",
        text: "CONFIRMED",
        status: "Pending",
        orderstatus: "Pending",
        updatetime: "2024-Nov-06 12:41:00",
        exchtime: "",
        exchorderupdatetime: "2024-Nov-06 12:41:00",
        fillid: "",
        filltime: "",
        parentorderid: "",
        uniqueorderid: "",
        exchangeorderid: "1000000000017276",
      },
    ],
  };

  return (
    <div className="flex flex-col gap-6">
      {/* <h1>Place Order</h1> */}
      <div className="flex flex-col gap-3">
        <ol className="list-inside">
          <li className="font-bold text-xl">Order Book</li>
        </ol>
      </div>

      {/* Description  Details Section */}
      <div>
        <p>
          This endpoint allows users to retrieve a list of their trading orders.
          Users can view all their existing orders.
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
            <dt class="font-semibold min-w-[120px]">X-PrivateKey :</dt>
            <dd>ay3KHeKfEJgoiYzkB/MAKg@@</dd>
          </div>
        </dl>
      </div>

      {/* Postman Curl command Details Section */}
      <div className="flex flex-col gap-2">
        <p className="font-bold">cURL Command -</p>
        <CopyBox copyContent={orderBookCurlData} />
      </div>

      {/* Request Body Details Section */}
      <div className="flex flex-col gap-2">
        <p>
          <span className="font-bold">Request Body - </span>This endpoint does
          not require a request body or additional parameters in the query
          string for the retrieval of orders.
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
              {" "}
              <span className="font-semibold">Success (HTTP Status 200): </span>
              On successful order deletion, the server returns a JSON object
              containing the order ID and status.
            </li>
            <NewJsonViewer data={SuccessResponseJson} />

            <li>
              {" "}
              <span className="font-semibold">
                Failure (HTTP Status 400):{" "}
              </span>{" "}
              : If authentication fails, the server will return an error message
            </li>
            <NewJsonViewer data={INVALID_REQUEST_TYPE_B_401} />

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

export default OrderBookTypeB;
