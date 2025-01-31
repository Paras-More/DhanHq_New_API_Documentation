import React from "react";
import CopyBox from "../../../Common_Components/CopyBox";
import NewJsonViewer from "../../../Common_Components/NewJsonViewer";
import DynamicTable from "../../../Common_Components/DynamicTable";
function FundSummaryTypeA() {
  const data = [
    {
      method: "GET",
      path: "http://ntasc.mirae.com/user/fundsummary",
      description:
        "This endpoint used get the funds, cash and margin information for the user.",
    },
  ];

  const loginCurlData = `curl --location --request 'http://ntasc.mirae.com/user/fundsummary' \\
    --header 'X-Mirae-Version: 1' \\
    --header 'Authorization: token api_key:access_token' \\`;

  const SuccessResponseJson = {
    status: "success",
    data: {
      equity: {
        enabled: true,
        net: 99999999999,
        available: {
          adhoc_margin: 99999999999,
          cash: 299998804600.8,
          opening_balance: 299998804600.8,
          live_balance: 199999999998,
          collateral: 0,
          intraday_payin: 0,
        },
        utilised: {
          debits: 0,
          exposure: 0,
          m2m_realised: 0,
          m2m_unrealised: 0,
          option_premium: 0,
          payout: 0,
          span: 0,
          holding_sales: 0,
          turnover: 0,
          liquid_collateral: 0,
          stock_collateral: 0,
          delivery: 0,
        },
      },
    },
  };

  const FailureInvalidOtpJson = {
    status: "error",
    message:
      "Entered OTP has been expired. Please regenerate a new one & enter the same.",
    data: null,
  };
  const FailureInvalidAPIKey = {
    status: "error",
    message:
      "API is suspended/expired for use. Please check your API subscription and try again.",
    data: null,
  };
  const SessionParameter = [
    {
      Field: "api_key",
      Type: "string",
      Description:
        " The API key provided to the user (Example: ay3KHeKfEJgoiYzkB/MAKg@@).",
    },
    {
      Field: "request_token",
      Type: "string",
      Description:
        "A token that uniquely identifies the session request (Example: 123).",
    },
    {
      Field: "checksum",
      Type: "string",
      Description:
        "A validation string to ensure the integrity of the request (Example: L)",
    },
  ];

  const SessionntascParameter = [
    {
      Field: "api_key",
      Type: "string",
      Description: "ay3KHeKfEJgoiYzkB/MAKg@@",
    },
    {
      Field: "request_token",
      Type: "string",
      Description: " OTP (123);",
    },
    {
      Field: "checksum",
      Type: "string",
      Description: "source (L)",
    },
  ];

  return (
    <div className="flex flex-col gap-6">
      {/* <h1>Place Order</h1> */}
      {/* <h1 className="content-heading-font"> Generate Session</h1> */}
      <div className="flex flex-col gap-3">
        <ol className="list-inside">
          <li className="font-bold text-xl">Fund Summary </li>
        </ol>
          <div className="mt-4">
        <DynamicTable data={data} />
      </div>
      </div>

      {/* Description  Details Section */}
      <div>
        <p>
          This endpoint used get the funds, cash and margin information for the
          user.
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
            <dt class="font-semibold min-w-[120px]"> Authorization:</dt>
            <dd>
           A token-based authentication header. The format is token api_key:access_token
            </dd>
          </div>
        </dl>
      </div>

      {/* Postman Curl command Details Section */}
      <div>
        <p className="font-bold">cURL Command -</p>
        <CopyBox copyContent={loginCurlData} />
      </div>

      {/* Request Body Details Section */}
      <div className="flex flex-col gap-5">
        <p>
          <span className="font-bold">Request Body - </span>
        </p>
        <p>
          This endpoint does not require a request body or additional parameters
          in the query string for the retrieval of orders
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
              On successful request, the server returns a JSON object containing
              the session token and any relevant user details
            </li>
            <p className="font-extralight">
              Note: In below response access_token, enctoken and refresh_token
              are pasted half because its size is very large.
            </p>
            <NewJsonViewer data={SuccessResponseJson} />
            {/* Failure Version Json View repsonse */}
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

export default FundSummaryTypeA;
