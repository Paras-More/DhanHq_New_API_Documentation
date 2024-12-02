import React from 'react'
import NewJsonViewer from '../../../Common_Components/NewJsonViewer'
import DynamicTable from '../../../Common_Components/DynamicTable'
import CopyBox from '../../../Common_Components/CopyBox'
function MarketDataTypeA() {

    const quoteStructureData = [
        {
            "Field": "Token",
            "Type": "[int]",
            // "Description": ""
        },
        {
            "Field": "LTP",
            "Type": "[int]",
            "Description": "Last traded price"
        },
        {
            "Field": "Last Traded Qty",
            "Type": "[int]",
            "Description": "Last traded quantity"
        },
        {
            "Field": "Average Traded Price",
            "Type": "[int]",
            "Description": "Average Traded Price"
        },
        {
            "Field": "Volume Traded Today",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Total Buy Qty",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Total Sell Qty",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Open",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "High",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Low",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Close",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Last Traded Timestamp",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Open Interest",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Open Interest High",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Open Interest Low",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Exchange Timestamp",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Market Depth",
            "Type": "[byte[]]",
            "Description": ""
        }
    ];

    const marketDepthStructureData = [
        {
            "Field": "Bid Qty 1",
            "Type": "[int]",
            // "Description": ""
        },
        {
            "Field": "Bid Price 1",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Bid Number Of Orders 1",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Padding",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Bid Qty 2",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Bid Price 2",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Bid Number Of Orders 2",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Padding",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Bid Qty 3",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Bid Price 3",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Bid Number Of Orders 3",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Padding",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Bid Qty 4",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Bid Price 4",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Bid Number Of Orders 4",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Padding",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Bid Qty 5",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Bid Price 5",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Bid Number Of Orders 5",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Padding",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Ask Qty 1",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Ask Price 1",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Ask Number Of Orders 1",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Padding",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Ask Qty 2",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Ask Price 2",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Ask Number Of Orders 2",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Padding",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Ask Qty 3",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Ask Price 3",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Ask Number Of Orders 3",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Padding",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Ask Qty 4",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Ask Price 4",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Ask Number Of Orders 4",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Padding",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Ask Qty 5",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Ask Price 5",
            "Type": "[int]",
            "Description": ""
        },
        {
            "Field": "Ask Number Of Orders 5",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Padding",
            "Type": "[short]",
            "Description": ""
        }
    ];
    
    const indexPacketStructureData = [
    {
        "Field": "Token",
        "Type": "[int]",
        "Description": ""
    },
    {
        "Field": "LTP",
        "Type": "[int]",
        "Description": ""
    },
    {
        "Field": "High",
        "Type": "[int]",
        "Description": ""
    },
    {
        "Field": "Low",
        "Type": "[int]",
        "Description": ""
    },
    {
        "Field": "Open",
        "Type": "[int]",
        "Description": ""
    },
    {
        "Field": "Close",
        "Type": "[int]",
        "Description": ""
    },
    {
        "Field": "Price Change",
        "Type": "[int]",
        "Description": ""
    },
    {
        "Field": "Exchange Timestamp",
        "Type": "[int]",
        "Description": ""
    }
];

    

  return (
    <>
    
        <div className='flex flex-col gap-6 mt-10'>
    {/* <h1>Place Order</h1> */}
        <h1 className="content-heading-font">Market Data Type A</h1>
        <div>
              {/* <DynamicTable data={data}/> */}
        </div>

     {/* ServerAuth Details Section */}
     <div>
                <h1 className='text-xl font-bold mb-2'>Server Auth</h1>
            <div>
            <ol className=' list-decimal flex flex-col gap-3 list-outside px-4'>
                    <li>Authentication is done based on the Access Token generated in Login</li>
                    <li>The Access Token is then passed in Query Paramater of the WebSocket URL
                        <ol className='list-inside alphabetic-list indent-6 flex flex-col gap-1'>
                            <li>Sample: <span className='font-bold'>ws://192.168.0.1:8003?ACCESS_TOKEN= N3RV32o_ZERODHA</span></li>
                            <li>The IP:Port will be replaced with UAT and PROD urls.</li>
                        </ol>
                    </li>
                    <li>If the Access Token is not authenticated, the connection will not be made.</li>
                    <li>Once the connection is successful,<span className='text-green-600'> LOGIN:AccessToken</span> has to be sent on the WebSocket connection to maintain the connection.
                        <ol className='list-inside alphabetic-list indent-6 flex flex-col gap-1'>
                            <li>If not sent, the connection will be auto disconnected in 10 seconds</li>
                            <li>Sample: <span className='font-bold'>LOGIN:N3RV32o_ZERODHA</span></li>
                        </ol>
                    </li>
                </ol>
            </div>
     </div>

    {/* Request Structure Details Section */}
    <div>
            <p><span className="font-bold">Request Structure - </span></p>
            <p>Requests are simple JSON messages with two parameters, a (action) and v (value). </p>
            <ul className='list-outside list-disc p-4'>
                <li>Available Actions (a) : subscribe, unsubscribe, mode</li>
                <li>Available Values (v): These represents array of tokens in case of subscribe and
                unsubscribe. In case of mode, the available mode values are expected here.</li>
                <li>Available Modes: ltp, quote, full</li>
            </ul>
            {/* Sample Details Structure */}
            <div>
                <h1 className='font-bold'>Subscribe :</h1>
                <span><NewJsonViewer data={{"a": "subscribe", "v": [55256, 55412]}}/></span>
            </div>
            <div>
                <h1 className='font-bold'>unsubscribe :</h1>
                <span><NewJsonViewer data={{"a": "unsubscribe", "v": [55256, 55412]}}/></span>
            </div>
            <div>
                <h1 className='font-bold'>Subscribe :</h1>
                <span><NewJsonViewer data={{"a": "mode", "v": ["ltp"]}}/></span>
            </div>
    </div>

    {/* Response Structure */}
    <div className='flex flex-col gap-4'>
        <p>Quotes delivered via the API are always binary messages. These have to be read as bytes
        and then type-casted into appropriate quote data structures.</p>
        <div>
            <p>Each binary message consists of Header and the actual Quote Packet. The structure is as
            follows,</p>
            <ul className='list-outside list-disc px-6'>
                <li>The first two bytes [short] are for number of packets in the message.</li>
                <li>The next two bytes [short] are for number of total bytes in the quote packet.</li>
                <li>The remaining bytes are for quote packet</li>
            </ul>
        </div>
    </div>

    {/* Quote Packet Structure */}
      <div>
            <h1 className='font-bold py-3'>Quote Packet Structure: (64 Bytes + Market Depth)</h1>
            <div className='max-w-[50%]'>
            <DynamicTable data={quoteStructureData}/>
            </div>
      </div>
      {/* Market Depth Structure */}
      <div>
            <h1 className='font-bold py-3'>Market Depth Structure: (120 Bytes)</h1>
            <div className='max-w-[50%]'>
            <DynamicTable data={marketDepthStructureData}/>
            </div>
      </div>
      {/* Index packet Structure */}
      <div>
            <h1 className='font-bold py-3'>Market Depth Structure: (32 Bytes)</h1>
            <span className='font-thin'>Specifically created for non tradable Index Tokens (Mentioned below)</span>

            <div className='max-w-[50%]'>
            <DynamicTable data={indexPacketStructureData}/>
            </div>
      </div>
   </div>
    </>
)
}

export default MarketDataTypeA