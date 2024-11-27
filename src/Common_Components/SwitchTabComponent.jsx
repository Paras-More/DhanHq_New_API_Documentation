import React, { useState } from "react";

const SwitchTabComponent = () => {
  const [activeTab, setActiveTab] = useState("REST");

  return (
    <div className="w-full max-w-lg mx-auto mt-10">
      {/* Tab Buttons */}
      <div className="flex border-b">
        <button
          className={`py-2 px-4 font-semibold ${
            activeTab === "REST" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("REST")}
        >
          REST
        </button>
        <button
          className={`py-2 px-4 font-semibold ${
            activeTab === "Python" ? "text-blue-500 border-b-2 border-blue-500" : "text-gray-600"
          }`}
          onClick={() => setActiveTab("Python")}
        >
          Python
        </button>
      </div>

      {/* Tab Content */}
      <div className="mt-5">
        {activeTab === "REST" && (
          <p>
            All GET and DELETE request parameters go as query parameters, and POST and PUT
            parameters as form-encoded. User has to input an access token in the header for every
            request.
          </p>
        )}
        {activeTab === "Python" && (
          <p>Install Python Package directly using the following command in the command line.</p>
        )}
      </div>
    </div>
  );
};

export default SwitchTabComponent;
