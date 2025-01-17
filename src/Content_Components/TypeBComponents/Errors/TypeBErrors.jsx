import React from "react";
import DynamicTable from "../../../Common_Components/DynamicTable";

function TypeBErrors() {
  const typeBErrorData = [
    {
      "Error Code": "<code class='px-4'>IA403</code>",
      Description:
        "Preceded by a 403 status code, this indicates the expiry or invalidation of an API Key.",
    },
    {
      "Error Code": "<code class='px-4'>IA401</code>",
      Description:
        "Preceded by a 401 status code, this indicated the missing, expiry or invalidation of JWT token.",
    },
    {
      "Error Code": "<code class='px-4'>IA400</code>",
      Description:
        "Preceded by a 400 status code, Represents missing required fields, bad values for parameters etc.",
    },
    {
      "Error Code": "<code class='px-4'>MA{XXX}</code>",
      Description:
        "Represent the error status coed received from mStock's API.",
    },
    {
      "Error Code": "<code class='px-4'>IA500</code>",
      Description:
        " Represents an Internal server error occured while processing the API request. This should only happen rarely.",
    },
  ];
  return (
    <div className="min-w-full">
      <h1 className="content-heading-font py-2">Errors</h1>
      {/* <p>Description -This is this introduction page of API Documentation .</p>  */}
      <DynamicTable data={typeBErrorData} />
    </div>
  );
}

export default TypeBErrors;
