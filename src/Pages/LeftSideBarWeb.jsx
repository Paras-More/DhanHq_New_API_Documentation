import React, { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { useContext } from 'react'
import "./Main.css"
import { useNavigate } from 'react-router-dom'
import { SelectTypeContext } from '../Context/SelectType';
import TradingApiDefaultA from '../Utils/TradlingLinkTypeA';
import TradingApiDefaultB from '../Utils/TradingApiDefaultB'

function LeftSideBarWeb() {
  
    const {state,dispatch} = useContext(SelectTypeContext);
    const navigate = useNavigate()
    const [currentTypeLinks,setCurrentTypeLinks] = useState([])

  
    const location = useLocation();
    const [initalRender,setInitalRender] = useState(false)
    const[TradlingLinkTypeA,setTradlingLinkTypeA] = useState(TradingApiDefaultA)
    const[TradlingLinkTypeB,setTradlingLinkTypeB] = useState(TradingApiDefaultA)

    useEffect(()=>{
        setCurrentTypeLinks(filterCurrentTypeLinks())        
        if(initalRender){
          navigate(`/developer/type-${state.selectedValue.toLowerCase()}/login`)
        }
        setInitalRender(true)
    },[state.selectedValue])  

    useEffect(()=>{
      console.log("path",location.pathname.replaceAll("/",""));
      const pathType = location.pathname; 
      if(pathType.length >0){
          navigate(location.pathname)
      // dispatch({...state,selectedValue:pathType.toUpperCase()})
      }
    },[location.pathname])

    
    const filterCurrentTypeLinks = ()=>{
      switch (state.selectedValue) {
        case "A":
          return TradingApiDefaultA;
          case "B":
        return TradingApiDefaultB;
      }
  }    
  
  return (
    <aside className='bg-white sticky top-0 w-[180px] hidden flex-shrink-0 md:flex flex-col gap-4'>
            {console.log("LeftSide bar RENDER")}
       <div className='fixed flex flex-col gap-4'>
         {/* Introduction API */}
         <div>
            <h1 className="font-bold mb-6 mt-2">API Documentation</h1>
            {
             <ul className='indent-1 flex flex-col'>
              {
                currentTypeLinks?.map((ele,i)=>{
                  
                  if(ele.type === 'Introduction')
                    return(
                <Link to={ele.path}><li className={`${location.pathname === '/developer/' ? 'text-customBlueFont font-bold' :''}`}>{ele.title}</li></Link>
                    )
                })
              }
            </ul>
          }
          </div>

      {/* DropDown Type A & Type B */}
          <div className='w-full relative'>
                <div className='p-1 max-w-[63%] bg-customBlueFont text-white rounded-lg cursor-pointer hover:' onClick={()=>dispatch({...state,showDropDown:!state.showDropDown})}>
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
                <Link to={`/developer/type-${state.selectedValue}/${ele.title.replaceAll(" ","-")}`.toLowerCase()}><li className={`${ele.path.split("/")[2] === location.pathname.split("/")[3] ? 'text-customBlueFont font-bold' :''}`}>{ele.title}</li></Link>
                    )
                })
            }
          </ul>
        </div>

      {/* Data API List Items */}
          <div>
            <h1 className="font-bold mb-1">Data APIs</h1>
            <ul className='flex flex-col'>
            {
              currentTypeLinks?.map((ele,i)=>{
                if(ele.type === 'DataAPI')
                    return(
                <Link to={`/developer/type-${state.selectedValue}/${ele.title.replaceAll(" ","-")}`.toLowerCase()}><li className={`${ele.path.split("/")[2] === location.pathname.split("/")[3]? 'text-customBlueFont font-bold' :''}`}>{ele.title}</li></Link>
                    )
                })
            }
            </ul>
          </div>

      {/* Annexure and others */}
        <div>
          <ul className='flex flex-col'>
            
            {
              currentTypeLinks?.map((ele,i)=>{
                if(ele.type === 'Annexure')
                    return(
                <Link to={`/developer/${ele.title.replaceAll(" ","-")}`.toLowerCase()}><li className={`${location.pathname === '/developer/annexure' ? 'text-customBlueFont font-bold' :''} font-bold`}>{ele.title}</li></Link>
                    )
                })
            }
            </ul>
        </div>
       </div>
  </aside>       
  )
}


export default LeftSideBarWeb;