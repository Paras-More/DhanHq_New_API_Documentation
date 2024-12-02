import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContextStore } from '../App'
import { useContext } from 'react'
import "./Main.css"


function LeftSideBarWeb() {
  
    const {state,dispatch} = useContext(ContextStore);
    const TradingApiDefaultA = [
      {
        title:"Login",
        path:"/type-a/login",
        isSelected:false,
        type:"TradingAPI"

      },
      {
        title:"Generate Session",
        path:"/type-a/generate-session",
        isSelected:false,
        type:"TradingAPI"

      },
      {
        title:"Orders",
        path:"/type-a/orders",
        isSelected:false,
        type:"TradingAPI"

      },
      {
        title:"Net Position",
        path:"/type-a/net-position",
        isSelected:false,
        type:"TradingAPI"

      },
      {
        title:"Calculate Order Margin",
        path:"/type-a/calculate-order-margin",
        isSelected:false,
        type:"TradingAPI"

      },
      {
        title:"Market Data",
        path:"/type-a/market-data",
        isSelected:false,
        type:"DataAPI"

      },
      {
        title:"Annexure",
        path:"/annexure",
        isSelected:false,
        type:"Annexure"

      }

    ]
    const TradingApiDefaultB = [
      {
        title:"Login",
        path:"/type-b/login",
        isSelected:false,
        type:"TradingAPI"
      },
      {
        title:"Generate Session",
        path:"/type-b/generate-session",
        isSelected:false,
        type:"TradingAPI"

      },
      {
        title:"Orders",
        path:"/type-b/orders",
        isSelected:false,
        type:"TradingAPI"

      },
      {
        title:"Net Position",
        path:"/type-b/net-position",
        isSelected:false,
        type:"TradingAPI"

      },
      {
        title:"Calculate Order Margin",
        path:"/type-b/calculate-order-margin",
        isSelected:false,
        type:"TradingAPI"

      },
      {
        title:"Market Data",
        path:"/type-b/market-data",
        isSelected:false,
        type:"DataAPI"

      },
      {
        title:"Annexure",
        path:"/annexure",
        isSelected:false,
        type:"Annexure"

      },

    ]
    
    const[TradlingLinkTypeA,setTradlingLinkTypeA] = useState(TradingApiDefaultA)
    const[TradlingLinkTypeB,setTradlingLinkTypeB] = useState(TradingApiDefaultA)

    function handleTitleClick(title,ArrayName){
        
      if(ArrayName === "TradlingLinkTypeA"){
        const filteredArray = TradlingLinkTypeA.map((ele,i)=>{
          if(ele.title === title){
            return {...ele,isSelected:true}
          }else{
            return {...ele,isSelected:false}
          }
      })
      setTradlingLinkTypeA(filteredArray)   
      setTradlingLinkTypeB(TradingApiDefaultB)
      }else if(ArrayName === "TradlingLinkTypeB"){
        const filteredArray = TradlingLinkTypeB.map((ele,i)=>{
          if(ele.title === title){
            return {...ele,isSelected:true}
          }else{
            return {...ele,isSelected:false}
          }
      })
      setTradlingLinkTypeB(filteredArray) 
      setTradlingLinkTypeA(TradingApiDefaultA)
      }
     
    }


  return (
    <aside className='bg-white  w-customSmall flex-shrink-0 xl:flex flex-col hidden gap-4  overflow-y-scroll'>
            {console.log("LeftSide bar RENDER")}
        {/*  */}
          <div>
            <h1 className="font-bold mb-6">API Documentation</h1>
            <ul className='indent-1 flex flex-col'>
            <Link to="/"><li className='font-semibold'>Introduction</li></Link>
            </ul>
          </div>

      {/* DropDown Type A & Type B */}
          <div className='w-full '>
                <div className='p-2 w-[80%] bg-customBlueFont text-white rounded-lg cursor-pointer hover:bg-blue-600' onClick={()=>dispatch({type:"TOGGLE_DROPDOWN"})}>
                  <div className='flex items-center justify-between px-1'>
                  <p className='indent-2 font-semibold'>{state.selectedValue}</p>
                  {
                    state.showDropDown ? <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                      </svg> : <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                    </svg>
                  }
                  </div>
                </div>
                {
                    <div className="border-x-2 border-y-2 w-[80%] rounded-lg mt-1 flex flex-col bg-white shadow-lg border-blue-200  transition-all ease- duration-500 overflow-hidden"  
                    style={{
                      opacity: state.showDropDown ? 1 : 0,
                      visibility: state.showDropDown ? "visible" : "hidden",
                      maxHeight: state.showDropDown ? "300px" : "0px", // Increased maxHeight for smoother expand
                      transform:state.showDropDown ?  "translateY(0)" : "translateY(1px)",
                    }}
                      >
                      <p className="indent-3 p-2 text-customBlueFont border-b hover:text-customBlueFont hover:bg-blue-100  flex items-center justify-between pr-6" onClick={() => dispatch({ type: "SELECTED_OPTION_VALUE", payload: "Type A" })}>
                        Type A
                      </p>
                      <p className="indent-3 p-2 text-customBlueFont hover:text-customBlueFont hover:bg-blue-100  flex items-center justify-between pr-6" onClick={() => dispatch({ type: "SELECTED_OPTION_VALUE", payload: "Type B" })}>
                        Type B
                      </p>
                    </div> 
                }
          </div>
    
      {/* Trading API List Items */}
          <div>
          <h1 className="font-bold mb-1">Trading API's</h1>

          {/* For Selected Value Type A */}
          {
            state.selectedValue === 'Type A' && 
             <ul className='indent-3'>
              {
                TradlingLinkTypeA?.map((ele,i)=>{
                  if(ele.type === 'TradingAPI')
                    return(
                <Link  onClick={(e)=>handleTitleClick(ele.title,'TradlingLinkTypeA')} to={ele.path}><li className={`${ele.isSelected ? 'text-customBlueFont font-bold' :''}`}>{ele.title}</li></Link>
                    )
                })
              }
            </ul>
          }

          {/* For Selected Value Type B */}
          {
            state.selectedValue === 'Type B' && 
             <ul className='indent-3'>
              {
                TradlingLinkTypeB?.map((ele,i)=>{
                  if(ele.type === 'TradingAPI')
                    return(
                <Link  onClick={(e)=>handleTitleClick(ele.title,'TradlingLinkTypeB')} to={ele.path}><li className={`${ele.isSelected ? 'text-customBlueFont font-bold' :''}`}>{ele.title}</li></Link>
                    )
                })
              }
            </ul>
          }
        
          </div>

      {/* Data API List Items */}
          <div>
            <h1 className="font-bold mb-1">Data APIs</h1>
            <ul className='indent-3 flex flex-col'>
            { state.selectedValue === 'Type A' && 
                TradlingLinkTypeA?.map((ele,i)=>{
                  if(ele.type === 'DataAPI')
                    return(
                <Link  onClick={(e)=>handleTitleClick(ele.title,'TradlingLinkTypeA')} to={ele.path}><li className={`${ele.isSelected ? 'text-customBlueFont font-bold' :''}`}>{ele.title}</li></Link>
                    )
                })
            }
            </ul>

            <ul className='indent-3 flex flex-col'>
            { state.selectedValue === 'Type B' && 
                TradlingLinkTypeB?.map((ele,i)=>{
                  if(ele.type === 'DataAPI')
                    return(
                <Link  onClick={(e)=>handleTitleClick(ele.title,'TradlingLinkTypeB')} to={ele.path}><li className={`${ele.isSelected ? 'text-customBlueFont font-bold' :''}`}>{ele.title}</li></Link>
                    )
                })
            }
            </ul>
          </div>

      {/* Annexure and others */}
          <div>
            <ul className='indent-3  flex flex-col'>
            {state.selectedValue === 'Type A' && 
                TradlingLinkTypeA?.map((ele,i)=>{
                  if(ele.type === 'Annexure')
                    return(
                <Link  onClick={(e)=>handleTitleClick(ele.title,'TradlingLinkTypeA')} to={ele.path}><li className={`${ele.isSelected ? 'text-customBlueFont font-bold' :''}`}>{ele.title}</li></Link>
                    )
                })
            }
            </ul>

            <ul className='indent-3  flex flex-col'>
            {state.selectedValue === 'Type B' && 
                TradlingLinkTypeB?.map((ele,i)=>{
                  if(ele.type === 'Annexure')
                    return(
                <Link  onClick={(e)=>handleTitleClick(ele.title,'TradlingLinkTypeB')} to={ele.path}><li className={`${ele.isSelected ? 'text-customBlueFont font-bold' :''}`}>{ele.title}</li></Link>
                    )
                })
            }
            </ul>
          </div>
  </aside>       
  )
}


export default LeftSideBarWeb;