import React from 'react'
import CopyBox from '../../../Common_Components/CopyBox'
import NewJsonViewer from '../../../Common_Components/NewJsonViewer'
import DynamicTable from '../../../Common_Components/DynamicTable'
function Net_PositionTypeB() {

  const positionCurlData = `
curl --location 'http://localhost:18463/Agl/portfolio/positions' \\
--header 'X-Mirae-Version: 1' \\
--header 'Authorization: Bearer access_token'
`
 
  const SuccessResponseJson = {
    "status": true,
    "message": "SUCCESS",
    "errorcode": "",
    "data": [
        {
            "exchange": "NSE",
            "symboltoken": "50374",
            "producttype": "INTRADAY",
            "tradingsymbol": "",
            "symbolname": "NIFTY-07Nov2024-24000-CE",
            "instrumenttype": "OPTIDX",
            "priceden": "",
            "pricenum": "",
            "genden": "",
            "gennum": "",
            "precision": "",
            "multiplier": "1",
            "boardlotsize": "",
            "buyqty": "100",
            "sellqty": "600",
            "buyamount": "800.1",
            "sellamount": "799.97",
            "symbolgroup": "",
            "strikeprice": "24000",
            "optiontype": "CE",
            "expirydate": "07-Nov-2024",
            "lotsize": "25",
            "cfbuyqty": "0",
            "cfsellqty": "0",
            "cfbuyamount": "",
            "cfsellamount": "",
            "buyavgprice": "800.1",
            "sellavgprice": "799.97",
            "avgnetprice": "799.94",
            "netvalue": "399970",
            "netqty": "-500",
            "totalbuyvalue": "80010",
            "totalsellvalue": "479980",
            "cfbuyavgprice": "0",
            "cfsellavgprice": "0",
            "totalbuyavgprice": "",
            "totalsellavgprice": "",
            "netprice": "799.94"
        },
        {
            "exchange": "NSE",
            "symboltoken": "50374",
            "producttype": "CARRYFORWARD",
            "tradingsymbol": "",
            "symbolname": "NIFTY-07Nov2024-24000-CE",
            "instrumenttype": "OPTIDX",
            "priceden": "",
            "pricenum": "",
            "genden": "",
            "gennum": "",
            "precision": "",
            "multiplier": "1",
            "boardlotsize": "",
            "buyqty": "150",
            "sellqty": "100",
            "buyamount": "800.1",
            "sellamount": "799.9",
            "symbolgroup": "",
            "strikeprice": "24000",
            "optiontype": "CE",
            "expirydate": "07-Nov-2024",
            "lotsize": "25",
            "cfbuyqty": "0",
            "cfsellqty": "0",
            "cfbuyamount": "",
            "cfsellamount": "",
            "buyavgprice": "800.1",
            "sellavgprice": "799.9",
            "avgnetprice": "800.5",
            "netvalue": "-40025",
            "netqty": "50",
            "totalbuyvalue": "120015",
            "totalsellvalue": "79990",
            "cfbuyavgprice": "0",
            "cfsellavgprice": "0",
            "totalbuyavgprice": "",
            "totalsellavgprice": "",
            "netprice": "800.5"
        }
    ]
}

  
  const FailureVersionJson = {
    "status": false,
    "message": "Incorrect auth. Please try again.",
    "errorcode": "400",
    "data": null
}
  
const data = [
  {
    "method": "POST",
    "path": "https://nTasc.mirae.com/agl/portfolio/positions",
    "description": "retrieve a list of all existing trading orders."
  },
]

  return (
    <div className='flex flex-col gap-6 mt-10'>
    {/* <h1>Place Order</h1> */}
    <h1 className="content-heading-font">Net Position TYPE B</h1>
                    <div className='mt-4'>
                        <DynamicTable data={data}/>
                    </div>
    <div className='flex flex-col gap-3'>
      <ol className='list-inside'>
        <li className="font-bold text-xl">Net Position</li>
      </ol>
      <p>
        URL :
        <a
          className="text-customBlueFont"
          href="https://ntasc.mirae.com/zrd/orders/regular"
        >
           https://nTasc.mirae.com/agl/portfolio/positions
        </a>
      </p>
      <p>
        Method -<span className="font-bold"> GET</span>
      </p>
    </div>
    
    {/* Description  Details Section */}
    <div>
      <p>
        <span className="font-bold">Description -</span> This endpoint allows users to retrieve a list of their trading orders.
        Users can view all their existing orders
      </p>
    </div>

    {/* Postman Curl command Details Section */}
    <div>
      <p className="font-bold">Postman cURL Command -</p>
      <CopyBox copyContent={positionCurlData} />
    </div>
    
    {/* Request Header Section */}
    <div>
      <h1 className="font-bold">Request Headers – </h1>
      <p className="indent-14">
        <span>
          <span className="font-bold">Key:</span> X-Mirae-Version: ,{" "}
        </span>
        <span>
          <span className="font-bold">Value</span>: 1
        </span>
      </p>
    </div>

    {/* Request Header Details Section */}
    <div>
      <ul>
        <li>
          <span className="font-semibold">X-Mirae-Version:</span> Specifies
          the version of the API being used. In this case, it is set to 1
        </li>
        <li>
          <span className="font-semibold">Authorization:</span> A token-based authentication header. The format is token 
          api_key:access_token.
        </li>
      </ul>
    </div>

    {/* Request Body Details Section */}
    <div>
      <p>
        <span className="font-bold">Request Body - </span>
      </p>
      <p>
      This endpoint does not require a request body or additional parameters in the
      query string for the retrieval of orders.
       </p>
    </div>

    {/* Request Response -  Details Section  */}
    <div>
      <p className="font-bold">Response Structure-</p>
      <p className='py-3'>
        The response of the request will be based on authentication outcome.
      </p>
      <div>
        <ul className="list-outside list-disc px-6 flex flex-col gap-6">
          {/* Success Json View repsonse */}
          <li>
            <span className="font-semibold">Success (HTTP Status 200): </span>
            On successful retrieval, the server returns a
            JSON array of client positions.
          </li>
          <NewJsonViewer data={SuccessResponseJson} />
          {/* Failure Version Json View repsonse */}
          <li>
            <span className="font-semibold">
            Failure (HTTP Status 200):{" "}
            </span>{" "}
            If authentication fails, the server will return an
            error message
          </li>
          <NewJsonViewer data={FailureVersionJson} />
        </ul>
      </div>
    </div>

   </div>
  )
}

export default Net_PositionTypeB