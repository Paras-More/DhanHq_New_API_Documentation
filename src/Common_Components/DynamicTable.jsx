const DynamicTable = ({ data }) => {
    if (!data || data.length === 0) {
      return <p>No data available</p>;
    }
    // Dynamically get the column keys from the data
    const columns = Object.keys(data[0]);
    console.log(columns);
      
    return (
      <div className="overflow-x-auto w-full">
        <table className="table-auto border-collapse border border-gray-300 w-full">
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
                    key={col}
                    className={` px-4 py-2 ${
                      typeof row[col] === "string" && col.includes("path")
                        ? "font-mono"
                        : ""
                    }`}
                  >
                    {row[col]}
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