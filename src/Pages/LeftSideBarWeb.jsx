import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
// import { ContextStore } from '../App'
import { useContext } from 'react'
import "./Main.css"
import { SelectTypeContext } from '../Context/SelectType';


function LeftSideBarWeb() {
  
    const {state,dispatch} = useContext(SelectTypeContext);
    const [currentTypeLinks,setCurrentTypeLinks] = useState([])
    
    const TradingApiDefaultA = [
      {
        title:"Login",
        path:"/login",
        isSelected:false,
        type:"TradingAPI"

      },
      {
        title:"Generate Session",
        path:"/generate-session",
        isSelected:false,
        type:"TradingAPI"

      },
      {
        title:"Orders",
        path:"/orders",
        isSelected:false,
        type:"TradingAPI"

      },
      {
        title:"Net Position",
        path:"/net-position",
        isSelected:false,
        type:"TradingAPI"

      },
      {
        title:"Calculate Order Margin",
        path:"/calculate-order-margin",
        isSelected:false,
        type:"TradingAPI"

      },
      {
        title:"Market Data",
        path:"/market-data",
        isSelected:false,
        type:"DataAPI"

      },
      {
        title:"Annexure",
        path:"/annexure",
        isSelected:false,
        type:"Annexure"

      },
      {
        title:"Introduction",
        path:"/",
        isSelected:false,
        type:"Introduction"
      }

    ]
    const TradingApiDefaultB = [
      {
        title:"Login",
        path:"/login",
        isSelected:false,
        type:"TradingAPI"
      },
      {
        title:"Generate Session",
        path:"/generate-session",
        isSelected:false,
        type:"TradingAPI"

      },
      {
        title:"Orders",
        path:"/orders",
        isSelected:false,
        type:"TradingAPI"

      },
      {
        title:"Net Position",
        path:"/net-position",
        isSelected:false,
        type:"TradingAPI"

      },
      {
        title:"Calculate Order Margin",
        path:"/calculate-order-margin",
        isSelected:false,
        type:"TradingAPI"

      },
      {
        title:"Market Data",
        path:"/market-data",
        isSelected:false,
        type:"DataAPI"

      },
      {
        title:"Annexure",
        path:"/annexure",
        isSelected:false,
        type:"Annexure"

      },
      {
        title:"Introduction",
        path:"/",
        isSelected:false,
        type:"Introduction"
      }

    ]
    const location = useLocation();
    const[TradlingLinkTypeA,setTradlingLinkTypeA] = useState(TradingApiDefaultA)
    const[TradlingLinkTypeB,setTradlingLinkTypeB] = useState(TradingApiDefaultA)

    useEffect(()=>{
        setCurrentTypeLinks(filterCurrentTypeLinks())
    },[state.selectedValue])

    
    const filterCurrentTypeLinks = ()=>{
      switch (state.selectedValue) {
        case "A":
          return TradingApiDefaultA;
          case "B":
        return TradingApiDefaultB;
      }
  }    


  return (
    <aside className='bg-white  w-customSmall hidden flex-shrink-0 xl:flex flex-col gap-4  overflow-y-scroll'>
            {console.log("LeftSide bar RENDER")}
        {/*  */}
          <div>
            <h1 className="font-bold mb-6">API Documentation</h1>
            <ul className='indent-1 flex flex-col'>
            {
            state.selectedValue === 'Type A' && 
             <ul className='indent-3'>
              {
                currentTypeLinks?.map((ele,i)=>{
                  if(ele.type === 'Introduction')
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
                  if(ele.type === 'Introduction')
                    return(
                <Link  onClick={(e)=>handleTitleClick(ele.title,'TradlingLinkTypeB')} to={ele.path}><li className={`${ele.isSelected ? 'text-customBlueFont font-bold' :''}`}>{ele.title}</li></Link>
                    )
                })
              }
            </ul>
          }
            </ul>
          </div>

      {/* DropDown Type A & Type B */}
          <div className='w-full '>
                <div className='p-1 w-[60%] bg-customBlueFont text-white rounded-lg cursor-pointer hover:' onClick={()=>dispatch({...state,showDropDown:!state.showDropDown})}>
                  <div className='flex items-center justify-between px-1'>
                  <p className='indent-2 font-semibold text-s'>{`Type ${state.selectedValue}`}</p>
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
                    <div className="border-x-2 border-y-2 w-[60%] rounded-lg mt-1 flex flex-col bg-white shadow-lg border-orange-200  transition-all ease- duration-500 overflow-hidden"  
                    style={{
                      opacity: state.showDropDown ? 1 : 0,
                      visibility: state.showDropDown ? "visible" : "hidden",
                      maxHeight: state.showDropDown ? "300px" : "0px", // Increased maxHeight for smoother expand
                      transform:state.showDropDown ?  "translateY(0)" : "translateY(1px)",
                    }}
                      >
                      <p className="indent-3 p-1 text-customBlueFont border-b hover:text-customBlueFont hover:bg-orange-100  flex items-center justify-between pr-6" onClick={() => dispatch({selectedValue: "A",showDropDown:false})}>
                        Type A
                      </p>
                      <p className="indent-3 p-1 text-customBlueFont hover:text-customBlueFont hover:bg-orange-100  flex items-center justify-between pr-6" onClick={() =>dispatch({selectedValue: "B",showDropDown:false})}>
                        Type B
                      </p>
                    </div> 
                }
          </div>
    
      {/* Trading API List Items */}
          <div>
          <h1 className="font-bold mb-1">Trading API's</h1>

          {/* For Selected Value Type A */}
          <ul className='list-none'>
          {
              currentTypeLinks?.map((ele,i)=>{
                if(ele.type === 'TradingAPI')
                    return(
                <Link to={`/type-${state.selectedValue}/${ele.title.replaceAll(" ","-")}`.toLowerCase()}><li className={`${ele.path.replace("/","") === location.pathname.split("/")[2] ? 'text-customBlueFont font-bold' :''}`}>{ele.title}</li></Link>
                    )
                })
            }
          </ul>
        
          </div>

      {/* Data API List Items */}
          <div>
            <h1 className="font-bold mb-1">Data APIs</h1>
            <ul className='indent-3 flex flex-col'>
            
            {
              currentTypeLinks?.map((ele,i)=>{
                if(ele.type === 'DataAPI')
                    return(
                <Link to={`/type-${state.selectedValue}/${ele.title.replaceAll(" ","-")}`.toLowerCase()}><li className={`${ele.path.replace("/","") === location.pathname.split("/")[2] ? 'text-customBlueFont font-bold' :''}`}>{ele.title}</li></Link>
                    )
                })
            }

            </ul>

          </div>

      {/* Annexure and others */}
          <div>
          <ul className='indent-3 flex flex-col'>
            
            {
              currentTypeLinks?.map((ele,i)=>{
                if(ele.type === 'Annexure')
                    return(
                <Link to={`/${ele.title.replaceAll(" ","-")}`.toLowerCase()}><li className={`${ele.path.replace("/","") === location.pathname.split("/")[1] ? 'text-customBlueFont font-bold' :''}`}>{ele.title}</li></Link>
                    )
                })
            }

            </ul>
          </div>
  </aside>       
  )
}


export default LeftSideBarWeb;