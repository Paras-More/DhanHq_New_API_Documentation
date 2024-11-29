import React from 'react'
import CopyBox from '../../../Common_Components/CopyBox'
import DynamicTable from '../../../Common_Components/DynamicTable'
import NewJsonViewer from '../../../Common_Components/NewJsonViewer'
function GenerateSessionTypeB() {

    const data = [
        {
            "method": "POST",
            "path": "https://nTasc.mirae.com/agl/portfolio/positions",
            "description":"This endpoint is used to retrieve a session token based on the provided API key, request token, and checksum."
          },
    ]

    const generateSessionCurlData = `
    curl --location 'http://localhost:18463/Agl/session/token' \\
    --header 'X-Mirae-Version: 1' \\
    --header 'Content-Type: application/json' \\
    --data '{
        "refreshToken": "SATYA",
        "otp":"123"
    }'
    `
    const SuccessResponseJson = {
      "status": true,
      "message": "SUCCESS",
      "errorcode": "200",
      "data": {
          "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
          "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9",
          "feedToken": "eyJhbGciOiJIUzUxMiJ9"
      }
  }
    const FailureInvalidOtpJson = {
      "status": false,
      "message": "Entered OTP has been expired. Please regenerate a new one & enter the same.",
      "errorcode": "500",
      "data": null
  }
  

  return (
    <div className='flex flex-col gap-6 mt-10'>
    {/* <h1>Place Order</h1> */}
        <h1 className="content-heading-font"> Generate Session Type B</h1>
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
              href="https://nTasc.mirae.com/agl/session/token"
            >
              https://nTasc.mirae.com/agl/session/token 
            </a>
          </p>
          <p>
            Method -<span className="font-bold"> POST</span>
          </p>
        </div>
        
    {/* Description  Details Section */}
    <div>
      <p>
        <span className="font-bold">Description -</span> This endpoint is used to retrieve a session token based on the provided refreshToken and otp. The session token is essential for authenticating subsequent API requests.
      </p>
    </div>

    {/* Postman Curl command Details Section */}
    <div>
      <p className="font-bold">Postman cURL Command -</p>
      <CopyBox copyContent={generateSessionCurlData} />
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
          <span className="font-semibold">Content-Type: </span>For this request, it is set to <span className='text-customBlueFont'>application/json</span>, which is used for submiting form data through body
        </li>
      </ul>
    </div>

    {/* Request Body Details Section */}
    <div>
      <p><span className="font-bold">Request Body - </span></p>
      <p>The body of the request must be URL-encoded and include the following parameters:</p>
      <ul className='list-inside list-disc'>
        <li>refreshToken: The username of the user (Example: SATYA).</li>

        <li>•	otp: A token that uniquely identifies the session request (Example: 123).</li>
      </ul>

      <p>n.Tasc Fields mapping with mStock API Parameters – </p>
      <ul className='list-inside list-disc'>
          <li>refreshToken  =&gt; username (SATYA)</li>
          <li>refreshToken  =&gt; OTP (123);</li>
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
            On successful login, the server returns a JSON object containing the authentication token and any relevant user details.
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

export default GenerateSessionTypeB