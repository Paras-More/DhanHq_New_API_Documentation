import React from 'react'
import NewJsonViewer from '../../../Common_Components/NewJsonViewer'
import DynamicTable from '../../../Common_Components/DynamicTable'
import CopyBox from '../../../Common_Components/CopyBox'
function MarketDataTypeB() {

    const sampleJsonData = {
 "correlationID": "Optional Field",
 "action": 1,
 "params": {
 "mode": 3,
 "tokenList": [
 {
 "exchangeType": 1,
 "tokens": [
 "22",
"1333"
 ]
 }
 ]
 }
}

    const marketDepthStructureData = [
        {
            "Field": "Buy/Sell Flag 1",
            "Type": "[short]",
            // "Description": ""
        },
        {
            "Field": "Bid Qty 1",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Bid Price 1",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Bid Number Of Orders 1",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Buy/Sell Flag 2",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Bid Qty 2",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Bid Price 2",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Bid Number Of Orders 2",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Buy/Sell Flag 3",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Bid Qty 3",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Bid Price 3",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Bid Number Of Orders 3",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Buy/Sell Flag 4",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Bid Qty 4",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Bid Price 4",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Bid Number Of Orders 4",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Buy/Sell Flag 5",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Bid Qty 5",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Bid Price 5",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Bid Number Of Orders 5",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Buy/Sell Flag 1",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Ask Qty 1",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Ask Price 1",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Ask Number Of Orders 1",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Buy/Sell Flag 2",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Ask Qty 2",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Ask Price 2",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Ask Number Of Orders 2",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Buy/Sell Flag 3",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Ask Qty 3",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Ask Price 3",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Ask Number Of Orders 3",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Buy/Sell Flag 4",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Ask Qty 4",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Ask Price 4",
            "Type": "[long]",
            "Description": ""
        },
        // 
        {
            "Field": "Ask Number Of Orders 4",
            "Type": "[short]",
            "Description": ""
        },
        {
            "Field": "Buy/Sell Flag 5",
            "Type": "[short]]",
            "Description": ""
        },
        {
            "Field": "Ask Qty 5",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Ask Price 5",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Ask Number Of Orders 5",
            "Type": "[short]",
            "Description": ""
        }
    ]
    
    
    const QuotePacketStructureData = [
        {
            "Field": "Token",
            "Type": "[byte[25]]",
            // "Description": ""
        },
        {
            "Field": "Sequence Number",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Exchange Timestamp",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "LTP",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Last Traded Qty",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Average Traded Price",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Volume Traded Today",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Total Buy Qty",
            "Type": "[double]",
            "Description": ""
        },
        {
            "Field": "Total Sell Qty",
            "Type": "[double]",
            "Description": ""
        },
        {
            "Field": "Open",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "High",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Low",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Close",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Last Traded Timestamp",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Open Interest",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Open Interest Percent",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Market Depth",
            "Type": "[byte[200]]",
            "Description": ""
        },
        {
            "Field": "Upper Circuit Limit",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "Lower Circuit Limit",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "52 Week High",
            "Type": "[long]",
            "Description": ""
        },
        {
            "Field": "52 Week Low",
            "Type": "[long]",
            "Description": ""
        }
    ]
    

    
  return (
    <>
        <div className='flex flex-col gap-6 mt-10'>
    {/* <h1>Place Order</h1> */}
        <h1 className="content-heading-font">Market Data Type B</h1>

     {/* ServerAuth Details Section */}
     <div>
                <h1 className='text-xl font-bold mb-2'>Server Auth</h1>
            <div>
            <ol className=' list-decimal flex flex-col gap-3 list-outside px-4'>
                    <li>Authentication is done based on the Access Token generated in Login</li>
                    <li>The Access Token is then passed in Query Paramater of the WebSocket URL
                        <ol className='list-inside alphabetic-list indent-6 flex flex-col gap-1'>
                            <li>Sample: <span className='font-bold'>ws://192.168.0.1:8003?ACCESS_TOKEN= abcxxx</span></li>
                            <li>The IP:Port will be replaced with UAT and PROD urls.</li>
                        </ol>
                    </li>
                    <li>If the Access Token is not authenticated, the connection will not be made.</li>
                    <li>Once the connection is successful,<span className='text-green-600'> LOGIN:AccessToken</span> has to be sent on the WebSocket connection to maintain the connection.
                        <ol className='list-inside alphabetic-list indent-6 flex flex-col gap-1'>
                            <li>If not sent, the connection will be auto disconnected in 10 seconds</li>
                            <li>Sample: <span className='font-bold'>LOGIN: abcxxx</span></li>
                        </ol>
                    </li>
                </ol>
            </div>
     </div>

    {/* Request Structure Details Section */}
    <div>
            <p><span className="font-bold">Request Structure - </span></p>
            <p>Requests are simple JSON messages with parameters</p>
            <ul className='list-outside list-disc p-4'>
                <li>Available Actions (<span className='font-bold'>action</span>) : 1 =  <span className='font-bold'>subscribe </span>, 0 =<span className='font-bold'> unsubscribe</span>, mode</li>
                <li>Available Values (<span className='font-bold'>mode</span>):  1 = <span className='font-bold'>LTP</span>, 2 = <span className='font-bold'>Quote</span>, 3 = <span className='font-bold'>Snap Quote</span></li>
                <li>Available Exchange Types (<span className='font-bold'>exchangeType</span>): 1 = <span className='font-bold'>NSECM</span>, 2 = <span className='font-bold'>NSEFO</span>, 3 = <span className='font-bold'>BSECM</span>,
                4 = <span className='font-bold'>BSEFO</span>, 13 = <span className='font-bold'>NSECD</span></li>
            </ul>
            {/* Sample Details Structure */}
            <div>
                <h1 className='font-bold'>Samples :</h1>
                <span><NewJsonViewer data={sampleJsonData}/></span>
            </div>
    </div>

    {/* Response Structure */}
    <div className='flex flex-col gap-4'>
        <h1  className='font-bold'>Response Structure</h1>
        <p>Quotes delivered via the API are always binary messages. These have to be read as bytes
        and then type-casted into appropriate quote data structures.</p>
        <div>
            <p>Each binary message consists of Header and the actual Quote Packet. The structure is as
            follows,</p>
            <ul className='list-outside list-disc px-6'>
                <li>The first two byte [<span className='font-bold'>byte</span>] are for number of packets in the message.</li>
                <li>The next two bytes [<span className='font-bold'>byte</span>] are for number of total bytes in the quote packet.</li>
                <li>The remaining bytes are for quote packet</li>
            </ul>
        </div>
    </div>

    {/* Quote Packet Structure */}
      <div>
            <h1 className='font-bold py-3'>Quote Packet Structure: (379 bytes)</h1>
            <div className='max-w-[50%]'>
            <DynamicTable data={QuotePacketStructureData}/>
            </div>
      </div>
      {/* Market Depth Structure */}
      <div>
            <h1 className='font-bold py-3'>Market Depth Structure: (200 Bytes)</h1>
            <div className='max-w-[50%]'>
            <DynamicTable data={marketDepthStructureData}/>
            </div>
      </div>
     {/* Note Section */}
     <div className='mb-10'>
            <p className='font-bold'>Please Note :</p>
            <p>1. [<span className='font-bold'>short</span>]: 2 Bytes | [<span className='font-bold'>int</span>]: 4 Bytes | [<span className='font-bold'>long</span>]: 8 Bytes | [<span className='font-bold'>double</span>]: 8 Bytes</p>
      </div>
   </div>
    </>
)
}

export default MarketDataTypeB