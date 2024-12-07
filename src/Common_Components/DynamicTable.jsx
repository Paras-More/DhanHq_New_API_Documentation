const DynamicTable = ({ data }) => {
    if (!data || data.length === 0) {
      return <p>No data available</p>;
    }
    // Dynamically get the column keys from the data
    const columns = Object.keys(data[0]);
      
    return (
      <div className="w-full">
        <table className="table-auto border-collapse border border-gray-300 max-w-full">
          <thead>
            <tr className="bg-gray-100">
              {/* Dynamically render headers */}
              {columns.map((col)=>{                
                return(
                <th
                  key={col}
                  className=" px-4  bg-customBlue py-2 text-left capitalize"
                >
                  {col} {/* Replace underscores with spaces */}
                </th>
                )
              })}
            </tr>
          </thead>
          <tbody>
            {/* Dynamically render rows */}
            {data.map((row, rowIndex) => (
              <tr key={rowIndex} className="hover:bg-gray-50">
                {columns.map((col) => (
                  <td
                  dangerouslySetInnerHTML={{__html: row[col]}}
                    key={col}
                    className={`px-4 py-2  break-all text-wrap break-words ${
                      typeof row[col] === "string" && col.includes("path")
                        ? "font-mono"
                        : ""
                    }`}
                  >
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  };


  export default DynamicTable