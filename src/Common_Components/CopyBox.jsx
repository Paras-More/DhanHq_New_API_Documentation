import React, { useEffect, useState } from "react";
const CopyBox = ({ copyContent }) => {

    const[isCopied,setIsCopied] = useState(false)

  // const handleCopy = () => {
  //   navigator.clipboard.writeText(copyContent).then((data)=>{
  //       // alert(data)
  //       console.log(data);
  //       setIsCopied(true)
  //       // Deleting the Pop of copied text
  //       setTimeout(()=>{
  //        setIsCopied(false)
  //       },3000)
  //   }).catch((e)=>{
  //       alert(e)
  //   })
  // };

  const HandleCopy = () => {
    const textArea = document.createElement("textarea");
    textArea.value = copyContent; // The content to be copied
    document.body.appendChild(textArea);
    textArea.select();
    try {
        const successful = document.execCommand("copy");
        if (successful) {
            console.log("Text copied to clipboard");
            setIsCopied(true);
            // Clear the copied state after 3 seconds
            setTimeout(() => {
                setIsCopied(false);
            }, 3000);
        } else {
            console.log("Failed to copy text");
        }
    } catch (err) {
        console.error("Unable to copy text: ", err);
    }
    document.body.removeChild(textArea); // Clean up
};

  return (
    <div className="relative bg-customBlue shrink-1  text-gray-800 p-3 rounded-sm shadow-md max-w-full md:max-w-[736px] overflow-x-scroll">
      <code className="whitespace-pre-wrap text-sm flex items-center">{copyContent}</code>
      <button
        onClick={HandleCopy}
        className="absolute top-2 right-2 bg-customBlueFont text-white text-sm px-2 py-1 rounded hover:bg-customBlueFont"
      >
        {
          !isCopied ? "Copy" : "Copied!"
        }
      </button>
    {/* {
        isCopied &&  <span className="fixed bottom-6 right-32 px-5 py-2 bg-customBlueFont text-white rounded-md;
        ">Text is copied</span>
    } */}
    </div>
  );
};
export default CopyBox;