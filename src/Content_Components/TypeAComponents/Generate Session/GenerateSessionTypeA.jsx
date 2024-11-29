import React from 'react'
import CopyBox from '../../../Common_Components/CopyBox'
import NewJsonViewer from '../../../Common_Components/NewJsonViewer'
import DynamicTable from '../../../Common_Components/DynamicTable'
function GenerateSessionTypeA() {

  const data =[
    {
        "method": "POST",
        "path": "https://nTasc.mirae.com/zrd/session/token",
        "description": "This endpoint is used to retrieve a session token based on the provided API key, request token, and checksum."
      },
  ]

  const loginCurlData =`
  curl --location 'http://localhost:18463/zrd/session/token' \\
  --header 'X-Mirae-Version: 1' \\
  --header 'Content-Type: application/x-www-form-urlencoded' \\
  --data-urlencode 'api_key=SATYA' \\
  --data-urlencode 'request_token=123' \\
  --data-urlencode 'checksum=W'`

  const SuccessResponseJson = {
    "status": "success",
    "data": {
        "user_type": "individual",
        "email": "tusharbandal2000@gmail.com",
        "user_name": "SATYA",
        "user_shortname": "NA",
        "broker": "MIRAE",
        "exchanges": [
            "NSE",
            "NFO",
            "CDS"
        ],
        "products": [
            "CNC",
            "NRML",
            "MIS"
        ],
        "order_types": [
            "MARKET",
            "LIMIT"
        ],
        "avatar_url": "",
        "user_id": "538",
        "api_key": "7328e5a975a5eac63c3d",
        "access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
        "public_token": "4876d509-06c1-45db-8248-33dbde85135b",
        "enctoken": "eyJhbGciOiJIUzUxMiJ9_juyp9To5lDGtr7jqmh-",
        "refresh_token": "iGcP5onq6MXJYHHvAE26qS1A2cLodotQqZE5azfsah8",
        "silo": "",
        "login_time": "2024-09-26 03:34:48",
        "meta": {
            "demat_consent": "physical"
        }
    }
  }

  const FailureInvalidOtpJson = {
    "status": "error",
    "message": "Entered OTP has been expired. Please regenerate a new one & enter the same.",
    "data": null
}


  return (
    <div className='flex flex-col gap-6 mt-10'>
    {/* <h1>Place Order</h1> */}
        <h1 className="content-heading-font"> Generate Session TypeA</h1>
        <div className='mt-4'>
              <DynamicTable data={data}/>
        </div>
        <div className='flex flex-col gap-3'>
          <ol className='list-inside'>
            <li className="font-bold text-xl">Generate Session</li>
          </ol>
          <p>
            URL :
            <a
              className="text-customBlueFont"
              href="https://nTasc.mirae.com/zrd/session/token "
            >
              https://nTasc.mirae.com/zrd/session/token
            </a>
          </p>
          <p>
            Method -<span className="font-bold"> POST</span>
          </p>
        </div>
        
    {/* Description  Details Section */}
    <div>
      <p>
        <span className="font-bold">Description -</span> This endpoint allows users to log in to the application by providing their username and password. Successful authentication will send the OTP to users registered mobile no that can be used for subsequent requests.
      </p>
    </div>

    {/* Postman Curl command Details Section */}
    <div>
      <p className="font-bold">Postman cURL Command -</p>
      <CopyBox copyContent={loginCurlData} />
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
          <span className="font-semibold">Content-Type: </span> For this request, it is set to<span className='text-customBlueFont'> application/x-www-form-urlencoded</span>, which is used for submiting form data.
        </li>
      </ul>
    </div>

    {/* Request Body Details Section */}
    <div>
      <p><span className="font-bold">Request Body - </span></p>
      <p>The body of the request must be URL-encoded and include the following parameters:</p>
      <ul className='list-inside list-disc'>

        <li>api_key: The API key provided to the user (Example: SATYA).</li>

        <li>request_token: A token that uniquely identifies the session request (Example: 123).</li>
        
        <li>checksum: A validation string to ensure the integrity of the request (Example: W)</li>
      </ul>

      <p>n.Tasc Fields mapping with mStock API Parameters – </p>
      <ul className='list-inside list-disc'>

        <li>api_key =&gt; username (SATYA)</li>

        <li>-&gt•	request_token =&gt; OTP (123);</li>
        
        <li>•	checksum =&gt; source (W)</li>
      </ul>
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
            On successful login, the server returns a JSON object containing the authentication token and any relevant user information.
          </li>
          <p className='font-extralight'>Note: In below response access_token, enctoken and refresh_token are pasted half because its size is very large.</p>
          <NewJsonViewer data={SuccessResponseJson} />
          {/* Failure Version Json View repsonse */}
          <li>
            <span className="font-semibold">
            Failure (HTTP Status 500):{" "}
            </span>{" "}
            If the request fails due to an invalid OTP passed, the server will return an error message.
          </li>
          <NewJsonViewer data={FailureInvalidOtpJson} />
        </ul>
      </div>
    </div>

   </div>
  )
}

export default GenerateSessionTypeA