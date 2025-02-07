import React from 'react'
import CopyBox from '../../../Common_Components/CopyBox'
import DynamicTable from '../../../Common_Components/DynamicTable'
import NewJsonViewer from '../../../Common_Components/NewJsonViewer'
function GenerateSessionTypeB() {

    const data = [
        {
            "method": "POST",
            "path": "https://ntasc.mirae.com/typeb/session/token",
            "description":"This endpoint is used to retrieve a session token based on the provided API key, request token, and checksum."
          },
    ]

    const generateSessionCurlData = `curl --location 'http://ntasc.mirae.com/typeb/session/token' \\
    --header 'X-Mirae-Version: 1' \\
    --header 'X-PrivateKey: ay3KHeKfEJgoiYzkB/MAKg@@' \\
    --header 'Content-Type: application/json' \\
    --data '{
        "refreshToken": "refreshToken",
        "otp":"123"
      }'
    `
    const SuccessResponseJson ={
      "status": "true",
      "message": "Please enter the OTP that we sent on XXXXXXX928 and XXXXEY@MIRAEASSETCM.COM",
      "errorcode": "",
      "data": {
          "jwtToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVU0VSTkFNRSI6IlJBSFVMIiwiQVBJVFlQRSI6IkFHTCIsIm5iZiI6MTczNTYyNDQxNSwiZXhwIjoxNzM1NjI0NzE1LCJpYXQiOjE3MzU2MjQ0MTV9.MQGh5S801_tccVXx0k-Njj_yqkcXBaN5T0mZnUjLlHI",
          "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVU0VSTkFNRSI6IlJBSFVMIiwiQVBJVFlQRSI6IkFHTCIsIm5iZiI6MTczNTYyNDQxNSwiZXhwIjoxNzM1NjI0NzE1LCJpYXQiOjE3MzU2MjQ0MTV9.MQGh5S801_tccVXx0k-Njj_yqkcXBaN5T0mZnUjLlHI",
          "feedToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJVU0VSTkFNRSI6IlJBSFVMIiwiQVBJVFlQRSI6IkFHTCIsIm5iZiI6MTczNTYyNDQxNSwiZXhwIjoxNzM1NjI0NzE1LCJpYXQiOjE3MzU2MjQ0MTV9.MQGh5S801_tccVXx0k-Njj_yqkcXBaN5T0mZnUjLlHI",
          "state": "live"
      }
  }
    const FailureInvalidOtpJson = {
      "status": "false",
      "message": "Entered OTP has been expired. Please regenerate a new one & enter the same.",
      "errorcode": "500",
      "data": null
  } 
  const FailureInvalidAPIKey ={
    "status": "error",
    "message": "API is suspended/expired for use. Please check your API subscription and try again.",
    "data": null
  }

  const SessionParameter = [
    {
      "Field":"refreshToken",
      "Type":"string",
      "Description":"refreshToken"
    },
    {
      "Field":"otp",
      "Type":"string",
      "Description":"A token that uniquely identifies the session request (Example: 123)."
    },
  ]

  const SessionntascParameter = [
    {
      "Field":"refreshToken",
      "Type":"string",
      "Description":"refreshToken"
    },
    {
      "Field":"request_token",
      "Type":"string",
      "Description":" OTP (123);"
    },
  ]
  

  return (
    <div className='flex flex-col gap-6'>
    {/* <h1>Place Order</h1> */}
        {/* <h1 className="content-heading-font"> Generate Session</h1> */}
       
        <div className='flex flex-col gap-3'>
          <ol className='list-inside'>
            <li className="font-bold text-xl">Generate Session</li>
          </ol>
          <div className='mt-4'>
              <DynamicTable data={data}/>
        </div>
        </div>
        
    {/* Description  Details Section */}
    <div>
      <p>
        This endpoint is used to retrieve a session token based on the provided refreshToken and otp. The session token is essential for authenticating subsequent API requests.
      </p>
    </div>
    
    {/* Request Header Details Section */}
    <div className='flex flex-col gap-2'>
    <span className="font-bold"> Request Headers -</span> 
      <dl class="pl-4">
        <div class="flex">
          <dt class="font-semibold min-w-[120px]">X-Mirae-Version :</dt>
          <dd>Specifies the version of the API being used. In this case, it is set to 1.</dd>
        </div>
        <div class="flex">
          <dt class="font-semibold min-w-[120px]">Content-Type :</dt>
          <dd>
            For this request, it is set to <span className='mstockNavFont'> application/json</span>, which is used for submiting form through data.
          </dd>
        </div>
        <div class="flex">
          <dt class="font-semibold min-w-[120px]">X-PrivateKey :</dt>
          <dd>
          ay3KHeKfEJgoiYzkB/MAKg@@</dd>
        </div>
      </dl>
    </div>

    {/* Postman Curl command Details Section */}
    <div className='flex flex-col gap-2'>
      <p className="font-bold">cURL Command -</p>
      <CopyBox copyContent={generateSessionCurlData} />
    </div>


    {/* Request Body Details Section */}
    <div className='flex flex-col gap-3'>
      <p><span className="font-bold">Request Body - </span></p>
      <p>The body of the request must be URL-encoded and include the following parameters:</p>
      <div className='flex flex-col gap-6'>
      <DynamicTable data={SessionParameter}/>

      <p>n.Tasc Fields mapping with mStock API Parameters – </p>
      <DynamicTable data={SessionntascParameter}/>
      </div>
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

          <li>
            <span className="font-semibold">
            Failure (HTTP Status 400):{" "}
            </span>{" "}
            If the API Key is Invalid or expired.          </li>
          <NewJsonViewer data={FailureInvalidAPIKey} />
        </ul>
      </div>
    </div>

   </div>
  )
}

export default GenerateSessionTypeB