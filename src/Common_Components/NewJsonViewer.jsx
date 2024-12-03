import React from "react";

const NewJsonViewer = ({ data }) => {
  // Recursive function to render JSON-like structure
  const renderData = (value) => {
    if (value === null) {
      return <span className="text-green-500">null</span>;
    } else if (typeof value === "object") {
      if (Array.isArray(value)) {
        return (
          <div className="pl-4">
            [
            {value.map((item, index) => (
              <div key={index} className="pl-4">
                {renderData(item)}
                {index < value.length - 1 ? "," : ""}
              </div>
            ))}
            ]
          </div>
        );
      } else {
        return (
          <div className="pl-4">
            {"{"}
            {Object.entries(value).map(([nestedKey, nestedValue], index) => (
              <div key={index} className="pl-4">
                <span className="text-purple-600">
                  "{nestedKey}":
                </span>{" "}
                {renderData(nestedValue)}
                {index < Object.entries(value).length - 1 ? "," : ""}
              </div>
            ))}
            {"}"}
          </div>
        );
      }
    } else if (typeof value === "string") {
      return <span className="text-red-500">"{value}"</span>;
    } else {
      return <span className="text-red-500">{value}</span>;
    }
  };

  return (
    <div className="p-4 bg-customBlue rounded-md font-mono text-sm overflow-x-auto" style={{whiteSpace: 'pre-wrap', padding: '1rem',colorborderRadius: '5px' }}>
      <div>
        {"{"}
        {Object.entries(data).map(([key, value], index) => (
          <div key={index} className="pl-4">
            <span className="text-purple-600">"{key}":</span>{" "}
            {renderData(value)}
            {index < Object.entries(data).length - 1 ? "," : ""}
          </div>
        ))}
        {"}"}
      </div>
    </div>
  );
};

export default NewJsonViewer;
