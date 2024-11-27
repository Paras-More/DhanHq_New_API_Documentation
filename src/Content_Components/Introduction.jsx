import React from "react";
import CopyBox from "../Common_Components/CopyBox";
import DynamicTable from "../Common_Components/DynamicTable";
import SwitchTabComponent from "../Common_Components/SwitchTabComponent";
function Introduction() {
  const exampleData = [
    {
      "Rate Limit": "per second",
      "Order APIs": "25",
      "Data APIs": "1",
      'Quote APIs':"20",
      "Non Trading APIs": "Another order",
    },
    {
      "Rate Limit": "per minute	",
      "Order APIs": "250",
      "Data APIs": "1000",
      'Quote APIs':"Unlimited",
      "Non Trading APIs": "Unlimited",
    },
    {
      "Rate Limit": "per hour",
      "Order APIs": "1000	",
      "Data APIs": "5000",
      'Quote APIs':"Unlimited",
      "Non Trading APIs": "Unlimited",
    },
    {
      "Rate Limit": "per day",
      "Order APIs": "7000",
      "Data APIs": "10000",
      'Quote APIs':"Unlimited",
      "Non Trading APIs": "Unlimited",
    },

    
  ];

  const dynamicCOntent = `
 {
    "dhanClientId": "1000000003",
    "orderId": "112111182198",
    "correlationId":"123abc678",
    "orderStatus": "PENDING",
    "transactionType": "BUY",
    "exchangeSegment": "NSE_EQ",
    "productType": "INTRADAY",
    "orderType": "MARKET",
    "validity": "DAY",
    "tradingSymbol": "",
    "securityId": "11536",
    "quantity": 5,
    "disclosedQuantity": 0,
    "price": 0.0,
    "triggerPrice": 0.0,
    "afterMarketOrder": false,
    "boProfitValue": 0.0,
    "boStopLossValue": 0.0,
    "legName": ,
    "createTime": "2021-11-24 13:33:03",
    "updateTime": "2021-11-24 13:33:03",
    "exchangeTime": "2021-11-24 13:33:03",
    "drvExpiryDate": null,
    "drvOptionType": null,
    "drvStrikePrice": 0.0,
    "omsErrorCode": null,
    "omsErrorDescription": null
}

  `;

  const ErrorData = `
  {
    "errorType": "",
    "errorCode": "",
    "errorMessage": ""
}
  `

  return (
    <div>
      <h1 className="content-heading-font  py-6">Introduction</h1>

      {/* Introduction details section */}
          <div>
          <h3 className="font-semibold content-subheading-font">Getting Started</h3>
          <p>
            DhanHQ API is a state-of-the-art platform for you to build trading and
            investment services & strategies. It is a set of REST-like APIs that
            provide integration with our trading platform. Execute & modify orders
            in real time, manage portfolio, access live market data and more, with
            lightning fast API collection. We offer resource-based URLs that accept
            JSON or form-encoded requests. The response is returned as JSON-encoded
            responses by using Standard HTTP response codes, verbs, and
            authentication.
          </p>
            <div className="w-full flex flex-col gap-4 py-6">
                <div className="w-full border-2 p-3 rounded-lg flex items-center justify-between">
                    <div className="flex items-center gap-2">
                        <img src="https://dhanhq.co/docs/v2/img/btn2sandbox.png"></img>
                        <span>Developer Kit</span>
                    </div>
                    <div className="">
                        <a href="/#Link" className="flex items-center gap-2">
                        <span className="text-customBlueFont font-semibold hover:opacity-85"> Explore Now</span>
                        <img src="https://dhanhq.co/docs/v2/img/dhanhq-arrow.png" target="_blank" alt="Arrow_image"></img>
                        </a>
                    </div>

                </div>
                <div className="w-full border-2 p-3 flex items-center justify-between rounded-lg">
                <div className="flex items-center gap-2 ">
                        <img src="https://dhanhq.co/docs/v2/img/btn2pydhanhq.png"></img>
                        <span>DhanHQ Python Client</span>
                    </div>
                    <div className="">
                        <a href="/#Link" className="flex items-center gap-2">
                        <span className="text-customBlueFont font-semibold hover:opacity-85"> Explore Now</span>
                        <img src="https://dhanhq.co/docs/v2/img/dhanhq-arrow.png" target="_blank" alt="Arrow_image"></img>
                        </a>
                    </div>
                </div>
            </div>
          </div>
      {/* Login details Section  */}
          <div>
          <h3 className="font-semibold content-subheading-font">Login</h3>
            <h4 className="title-font">For Partners</h4>
            <p>Once the partner is onboarded through offline channel, Dhan team will share Partner credentials for Login. When the Dhan user, login to the partner’s application, the consent flow server-to-server and the partner gets the consent id. Partner has to put credentials in header. Thereafter, the partner starts browser based login flow. Dhan user login using Dhan credentials (email/phone/password/pin). Login flow terminates with redirection to partner server with token id. Finally, the partner shall fetch the user details and access token.</p>
          </div>
      {/* Steps Section */}
          <div className="mt-6">
                {/* Step 1 details */}
              <div className="flex flex-col gap-6">
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-pretty">Step 1:</span>
                    <a href="https://auth.dhan.co/partner/generate-consent" className="text-customBlueFont">https://auth.dhan.co/partner/generate-consent</a>
                  </div>
                  <div className="bg-customBlue">
                    <p>Partner need to add partner_id & partner_secret in the header. The response of this flow will have consent-id. Use this consent-id for the next browser based flow.</p>
                  </div>
                  <div>
                    <img src="https://dhanhq.co/docs/v2/img/01.png" alt="step-1 Image-overview"></img>
                  </div>
              </div>
                {/* Step 2 details */}
              <div className="flex flex-col gap-6">
              <div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-pretty">Step 2:</span>
                    <a href=" https://auth.dhan.co/consent-login?consentId=<consentId>" className="text-customBlueFont">https://auth.dhan.co/consent-login?consentId=&lt;consentId&gt;</a>
                  </div>
                  <div className="bg-customBlue">
                    <p>This flow will terminate on a partner's server with URL &lt;partner-redirect-url&gt;?tokenid=&lt;tokenId&gt;. Use this token-id in the next GET call.</p>
                  </div>
                  <div>
                    <img src="https://dhanhq.co/docs/v2/img/01.png" alt="step-1 Image-overview"></img>
                  </div>
              </div>
              </div>

                {/* Step 3 details */}
              <div className="flex flex-col gap-6">
              <div>
                  <div className="flex items-center gap-4">
                    <span className="font-semibold text-pretty">Step 3:</span>
                    <a href="https://auth.dhan.co/partner/generate-consent" className="text-customBlueFont"> https://auth.dhan.co/partner/consume-consent?tokenId=&lt;token-Id&gt;</a>
                  </div>
                  <div className="bg-customBlue">
                    <p>In this step, you need to add partner_id & partner_secret in header again.
                    This flow will end with end user details like ClientId, UCC, PoA status etc..</p>
                  </div>
                  <div>
                    <img src="https://dhanhq.co/docs/v2/img/01.png" alt="step-1 Image-overview"></img>
                  </div>
              </div>
              </div>
          </div> 
      {/* Indiviual Details Section  */}
          <div className="mt-8">
          <h4 className="title-font m-0">For Individual Traders</h4>
            <p className="bg-customBlue">Individual traders can directly get their Access Token from web.dhan.co. All Dhan users are eligible to get free access to Trading APIs. Here's how to get your Access Token::</p>
              <ul className="list-disc">
                <li>Login to web.dhan.co</li>
                <li>Click on My Profile and navigate to 'DhanHQ Trading APIs and Access'</li>
              </ul>
          </div>
      {/* Structure Details Section */}
          <div>
          <h4 className="title-font m-0">Structure</h4>

          <SwitchTabComponent/>

          </div>
      {/* Errors details section */}
          <div className="flex flex-col gap-3 mt-6">
            <h4 className="title-font m-0">Errors</h4>
            <p>Error responses come with the error code and message generated internally by the system. The sample structure of error response is shown below.</p>
            <CopyBox copyContent={ErrorData} />
            <p>You can find detailed error code and message under <a className="text-blue-700" href="/*">Annexure.</a></p>
          </div>
      {/* Rate Limit Section table */}
          <div className="mt-12">
      <DynamicTable data={exampleData}  />
          </div>
    </div>
  );
}

export default Introduction;
