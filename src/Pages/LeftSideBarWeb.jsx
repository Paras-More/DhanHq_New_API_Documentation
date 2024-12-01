import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ContextStore } from '../App'
import { useContext } from 'react'
import "./Main.css"


function LeftSideBarWeb() {
  
    const {state,dispatch} = useContext(ContextStore);
    const DefaultTypeAData = [
      {
        title:"Login",
        path:"/type-a/login",
        isSelected:false,
      },
      {
        title:"Generate Session",
        path:"/type-a/generate-session",
        isSelected:false,
      },
      {
        title:"Orders",
        path:"/type-a/orders",
        isSelected:false,
      },
      {
        title:"Net Position",
        path:"/type-a/net-position",
        isSelected:false,
      },
      {
        title:"Calculate Order Margin",
        path:"/type-a/calculate-order-margin",
        isSelected:false,
      },

    ]
    const DefaultTypeBData = [
      {
        title:"Login",
        path:"/type-b/login",
        isSelected:false,
      },
      {
        title:"Generate Session",
        path:"/type-b/generate-session",
        isSelected:false,
      },
      {
        title:"Orders",
        path:"/type-b/orders",
        isSelected:false,
      },
      {
        title:"Net Position",
        path:"/type-b/net-position",
        isSelected:false,
      },
      {
        title:"Calculate Order Margin",
        path:"/type-b/calculate-order-margin",
        isSelected:false,
      },

    ]
    const[TypeAPathData,setTypeAPathData] = useState(DefaultTypeAData)
    const[TypeBPathData,setTypeBPathData] = useState(DefaultTypeAData)

    

    function handleTitleClick(title,ArrayName){
        
      if(ArrayName === "TypeAPathData"){
        const filteredArray = TypeAPathData.map((ele,i)=>{
          if(ele.title === title){
            return {...ele,isSelected:true}
          }else{
            return {...ele,isSelected:false}
          }
      })
      setTypeAPathData(filteredArray)   
      setTypeBPathData(DefaultTypeBData)
      }else if(ArrayName === "TypeBPathData"){
        const filteredArray = TypeBPathData.map((ele,i)=>{
          if(ele.title === title){
            return {...ele,isSelected:true}
          }else{
            return {...ele,isSelected:false}
          }
      })
      setTypeBPathData(filteredArray) 
      setTypeAPathData(DefaultTypeAData)
      }
     
    }

    useEffect(()=>{
      console.log(TypeAPathData);
      
    },[TypeAPathData])

  return (
    <aside className='bg-white w-customSmall flex-shrink-0 xl:flex flex-col hidden gap-4  overflow-y-scroll'>
            {console.log("LeftSide bar RENDER")}
        {/*  */}
          <div>
            <h1 className="font-bold mb-1">Ver 2.0 / API Documentation</h1>
            <ul className='indent-1 flex flex-col'>
            <Link to="/"><li>Introduction</li></Link>
            </ul>
          </div>

      {/* DropDown Type A & Type B */}
          <div className='w-full pr-6'>
                <div className='border-2 border-black rounded-lg p-1 cursor-pointer hover:text-customBlueFont' onClick={()=>dispatch({type:"TOGGLE_DROPDOWN"})}>
                  <div className='flex items-center justify-between'>
                  <p className='indent-2'>{state.selectedValue}</p>
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
                    // state.showDropDown &&
                    <div className="border-x-2 border-y-2 rounded-lg mt-1 flex flex-col bg-white transition-all ease- duration-500 overflow-hidden"  
                    style={{
                      opacity: state.showDropDown ? 1 : 0,
                      visibility: state.showDropDown ? "visible" : "hidden",
                      maxHeight: state.showDropDown ? "300px" : "0px", // Increased maxHeight for smoother expand
                      transform:state.showDropDown ?  "translateY(0)" : "translateY(1px)",
                    }}
                      >
                      <p className="indent-3 py-1 border-b hover:text-customBlueFont hover:bg-customBlue  flex items-center justify-between pr-6" onClick={() => dispatch({ type: "SELECTED_OPTION_VALUE", payload: "Type A" })}>
                        Type A
                        {
                        state.selectedValue === 'Type A' && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        
                        }
                      </p>
                      <p className="indent-3 py-1 hover:text-customBlueFont hover:bg-customBlue flex items-center justify-between pr-6" onClick={() => dispatch({ type: "SELECTED_OPTION_VALUE", payload: "Type B" })}>
                        Type B
                        {
                          state.selectedValue === 'Type B' && <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
                          <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 12.75 6 6 9-13.5" />
                        </svg>
                        }
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
                TypeAPathData?.map((ele,i)=>{
                    return(
                <Link  onClick={(e)=>handleTitleClick(ele.title,'TypeAPathData')} to={ele.path}><li className={`${ele.isSelected ? 'text-customBlueFont font-bold' :''}`}>{ele.title}</li></Link>
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
                TypeBPathData?.map((ele,i)=>{
                    return(
                <Link  onClick={(e)=>handleTitleClick(ele.title,'TypeBPathData')} to={ele.path}><li className={`${ele.isSelected ? 'text-customBlueFont font-bold' :''}`}>{ele.title}</li></Link>
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
          
              <Link to="/market-quote"><li>Market Quote</li></Link>
              <Link to="/live-market-feed"><li>Live Market Feed</li></Link>
              <Link to="/historic-data"><li>Historical Data</li></Link>
            </ul>
          </div>

      {/* Annexure and others */}
          <div>
            <ul className='indent-3  flex flex-col'>
              <Link to="/annexure"><li>Annexure</li></Link>
              <Link to="/instrument-list"><li>Instrument List</li></Link>
            </ul>
          </div>
  </aside>       
  )
}


export default LeftSideBarWeb;