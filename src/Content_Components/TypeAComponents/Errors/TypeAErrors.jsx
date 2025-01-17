import React from "react";
import DynamicTable from "../../../Common_Components/DynamicTable";

function TypeAErrors() {
  const typeAErrorData = [
    {
      "Error Types": "APIKeyException ",
      Description:
        "Preceded by a 403 status code, this indicates the expiry or invalidation of an API Key.",
    },
    {
      "Error Types": "TokenException",
      Description:
        "Preceded by a 401 status code, this indicated the missing, expiry or invalidation of JWT token.",
    },
    {
      "Error Types": "InputException  ",
      Description:
        "Preceded by a 400 status code, Represents missing required fields, bad values for parameters etc.",
    },
    {
      "Error Types": "MiraeException",
      Description: "Represent the error response received from mStock's API.",
    },
    {
      "Error Types": "GeneralException",
      Description:
        "Represents an Internal server error occured while processing the API request. This should only happen rarely.",
    },
  ];

  return (
    <div className="min-w-full">
      <h1 className="content-heading-font py-2">Errors</h1>
      {/* <p>Description -This is this introduction page of API Documentation .</p>  */}
      <DynamicTable data={typeAErrorData} />
    </div>
  );
}

export default TypeAErrors;
