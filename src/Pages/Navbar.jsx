// import React, { useEffect } from "react";
// import { SetisMenuClicked } from "../Slices/ClickSlice";
// import { useDispatch, useSelector } from "react-redux";
// function Navbar() {
//   const dispatch = useDispatch();
//   const ShowMenu = useSelector((store) => store.ClickStatus.ShowMenu);
//   function handleMenuClick() {
//     dispatch(SetisMenuClicked());
//   }
//   useEffect(()=>{

//   },[ShowMenu])

//   return (
//     <>
//       {console.log("Navbar Rendered")}  
//       <nav className="w-full bg-white border-2 border-black lg:px-40 lg:py-3 px-8 py-3 flex items-center justify-between flex-wrap sticky top-0">
//         <div className="lg:flex hidden gap-20 items-center justify-between">
//           {/* <img src='https://dhanhq.co/docs/v2/img/DhanHQ_logo.svg'></img> */}
//           <h1 className="font-bold border-2 px-6 py-2">Logo</h1>
//           <span className="font-circular">Ver 2.0 / API Documentation</span>
//         </div>
//         { 
//            ShowMenu ? 
//             <div className="lg:hidden flex" onClick={handleMenuClick}>
//               <svg
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//                 stroke-width="1.5"
//                 stroke="currentColor"
//                 class="size-6"
//               >
//                 <path
//                   stroke-linecap="round"
//                   stroke-linejoin="round"
//                   d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
//                 />
//               </svg>
//             </div> :
//             <div className="lg:hidden flex" onClick={handleMenuClick}>
//               ✖
//             </div>
//         }
//         <div className="flex items-center justify-between gap-4 lg:bg-customBlue px-2">
//           <label htmlFor="searchInput" className="cursor-pointer">
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               fill="none"
//               viewBox="0 0 24 24"
//               stroke-width="1.5"
//               stroke="currentColor"
//               class="size-6"
//             >
//               <path
//                 stroke-linecap="round"
//                 stroke-linejoin="round"
//                 d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
//               />
//             </svg>
//           </label>
//           <input
//             id="searchInput"
//             type="search"
//             placeholder="Search"
//             className="bg-customBlue  px-2 py-[0.4rem] border-none  focus:outline-none lg:block hidden"
//           />
//         </div>
//       </nav>
//     </>
//   );
// }

// export default Navbar;
