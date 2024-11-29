import React from 'react'
import NewJsonViewer from '../../../Common_Components/NewJsonViewer'
import CopyBox from '../../../Common_Components/CopyBox'
import DynamicTable from '../../../Common_Components/DynamicTable'
function LoginTypeB() {

 const data  = [
    {
      "method": "POST",
      "path": "https://nTasc.mirae.com/agl/connect/login",
      "description": "This endpoint allows users to log in to the application "
    },
  ]

  const loginCurlData = `
  curl --location 'http://localhost:18463/Agl/connect/login' \\
  --header 'X-Mirae-Version: 1' \\
  --header 'Content-Type: application/json' \\
  --data-raw '{
    "clientcode": "SATYA",
    "password": "Macm@123",
    "totp": "",
    "state": ""
}'
`
  const SuccessResponseJson = {
    "status": true,
    "message": "Please enter the OTP that we sent on XXXXXXX452 and XXXX00@GMAIL.COM",
    "errorcode": "",
    "data": {
        "jwtToken": "697c39bf-9411-46b0-81c2-67448ee99c72",
        "refreshToken": "",
        "feedToken": "",
        "state": "live"
    }
}
  const FailureApiVersionJson = {
    "status": false,
    "message": "Please provide valid clientcode and password.",
    "errorcode": "400",
    "data": null
}
  const FailureCredentialsJson = {
    "status": false,
    "message": "Invalid username or password. 9 attempts remaining ",
    "errorcode": "500",
    "data": null
}


  return (
    <div className='flex flex-col gap-6 mt-10'>
    {/* <h1>Place Order</h1> */}
        <h1 className="content-heading-font">Login Type B</h1>
                <div className='mt-4'>
                    <DynamicTable data={data}/>
                </div>
        <div className='flex flex-col gap-3'>
          <ol className='list-inside'>
            <li className="font-bold text-xl">Login</li>
          </ol>
          <p>
            URL :
            <a
              className="text-customBlueFont"
              href="https://nTasc.mirae.com/agl/connect/login "
            >
              https://nTasc.mirae.com/agl/connect/login 
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
          <span className="font-semibold">Content-Type: </span> For this request, it is set to<span className='text-customBlueFont'> application/x-www-form-urlencoded</span>, which is used for submiting form data through body.
        </li>
      </ul>
    </div>

    {/* Request Body Details Section */}
    <div>
      <p><span className="font-bold">Request Body - </span></p>
      <p>The body of the request must be URL-encoded and include the following parameters:</p>
      <ul className='list-inside list-disc'>
        <li>clientcode: The username of the user attempting to log in. (Example: SATYA)</li>
        <li>password: The password associated with the username. (Example: Macm@123)</li>
        <li>totp: blank</li>
        <li>state: blank</li>
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
          <NewJsonViewer data={SuccessResponseJson} />
          {/* Failure Version Json View repsonse */}
          <li>
            <span className="font-semibold">
            Failure (HTTP Status 400):{" "}
            </span>{" "}
            If the version is incorrect, the server will return an error message.
          </li>
          <NewJsonViewer data={FailureApiVersionJson} />

          {/* Failure Incorrect credentials */}
          <li>
            <span className="font-semibold">
            Failure (HTTP Status 500):{" "}
            </span>{" "}
            If the login credentials are incorrect, the server will return an error message.
          </li>
          <NewJsonViewer data={FailureCredentialsJson} />
        </ul>
      </div>
    </div>

   </div>
  )
}

export default LoginTypeB