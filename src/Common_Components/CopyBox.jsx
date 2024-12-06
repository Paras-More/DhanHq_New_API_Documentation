import React, { useEffect, useState } from "react";
const CopyBox = ({ copyContent }) => {

    const[isCopied,setIsCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(copyContent).then((data)=>{
        // alert(data)
        console.log(data);
        setIsCopied(true)
        // Deleting the Pop of copied text
        setTimeout(()=>{
         setIsCopied(false)
        },1000)
    }).catch((e)=>{
        alert(e)
    })
  };

  return (
    <div className="relative bg-customBlue shrink-1  text-gray-800 p-4 rounded-sm shadow-md max-w-full overflow-x-scroll">
      <code className="whitespace-pre-wrap text-sm">{copyContent}</code>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-customBlueFont text-white text-sm px-2 py-1 rounded hover:bg-customBlueFont"
      >
        Copy
      </button>
    {
        isCopied &&  <span className="fixed bottom-6 right-32 px-5 py-2 bg-customBlueFont text-white rounded-md;
        ">Text is copied</span>
    }
    </div>
  );
};
export default CopyBox;