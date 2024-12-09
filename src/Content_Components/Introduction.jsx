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
    <div className="min-w-full">
      <h1 className="content-heading-font py-6">Introduction</h1>
       {/* <p>Description -This is this introduction page of API Documentation .</p>  */}
       <p className="shrink-1 py-2">
            API is a state-of-the-art platform for you to build trading and
            investment services & strategies. It is a set of REST-like APIs that
            provide integration with our trading platform. Execute & modify orders
            in real time, manage portfolio, access live market data and more, with
            lightning fast API collection. We offer resource-based URLs that accept
            JSON or form-encoded requests. The response is returned as JSON-encoded
            responses by using Standard HTTP response codes, verbs, and
            authentication.
          </p>       
       <DynamicTable data={exampleData}/>     
    </div>
  );
}

export default Introduction;
