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


  useEffect(()=>{
        console.log(copyContent);
        
  },[])

  return (
    <div className="relative bg-gray-400 text-white p-4 rounded-sm shadow-md max-w-full overflow-x-auto">
      <pre className="whitespace-pre-wrap">{copyContent}</pre>
      <button
        onClick={handleCopy}
        className="absolute top-2 right-2 bg-blue-500 text-white text-sm px-2 py-1 rounded hover:bg-blue-600"
      >
        Copy
      </button>
    {
        isCopied &&  <span className="fixed bottom-6 right-32 px-6 py-3 bg-customMediumBlue transform-origin: left;
        ">Text is copied</span>
    }
    </div>
  );
};
export default CopyBox;