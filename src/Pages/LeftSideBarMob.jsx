import React, { useEffect, useState } from "react";
import { useContext } from "react";
import { SelectTypeContext } from "../Context/SelectType";
import mstockLogo from "../Logo/mirae-logo.svg";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";
import { Link } from "react-router-dom";
import TradingApiDefaultA from "../Utils/TradlingLinkTypeA";
import TradingApiDefaultB from "../Utils/TradingApiDefaultB";

function LeftSideBarMob() {
  const { showMenu, setShowMenu } = useContext(SelectTypeContext);
  const { state, dispatch } = useContext(SelectTypeContext);
  const navigate = useNavigate();
  const [currentTypeLinks, setCurrentTypeLinks] = useState([]);

  const location = useLocation();
  const [initalRender, setInitalRender] = useState(false);
  const [TradlingLinkTypeA, setTradlingLinkTypeA] =
    useState(TradingApiDefaultA);
  const [TradlingLinkTypeB, setTradlingLinkTypeB] =
    useState(TradingApiDefaultA);

  useEffect(() => {
    setCurrentTypeLinks(filterCurrentTypeLinks());
    if (initalRender) {
      navigate(`/type-${state.selectedValue.toLowerCase()}/login`);
    }
    setInitalRender(true);
  }, [state.selectedValue]);

  useEffect(() => {
    console.log("path");
    const pathType = location.pathname;
    if (pathType.length > 0) {
      navigate(location.pathname);
      setShowMenu(!showMenu);
      // dispatch({...state,selectedValue:pathType.toUpperCase()})
    }
  }, [location.pathname]);

  const filterCurrentTypeLinks = () => {
    switch (state.selectedValue) {
      case "A":
        return TradingApiDefaultA;
      case "B":
        return TradingApiDefaultB;
    }
  };

  useEffect(() => {}, [showMenu]);

  function handleLinkCLick(e) {
    e.stopPropagation();
  }
  function handleParentClick(e) {
    // If user clicks on background grey portion then menu will be closed
    setShowMenu(!showMenu);
  }
  return (
    <>
      {
        <div
          onClick={handleParentClick}
          className="md:hidden text-2xl fixed top-0 left-0 h-full bg-[#6b72808f] transition-all ease-in duration-500"
          style={{
            opacity: showMenu ? 1 : 0,
            visibility: showMenu ? "visible" : "hidden",
            width: showMenu ? "100%" : "-1%", // Expands from 0% width to full width
            transform: showMenu ? "translateX(0)" : "translateX(-100%)", // Moves from left to right
            transform: !showMenu ? "translateX(-100%)" : "translateX(0)", // Moves from left to right
          }}
        >
          {
            <div className="h-full w-[15.125rem] bg-white px-4 py-4 ">
              <div onClick={handleLinkCLick} className="bg-white  h-full">
                <div className="bg-white flex items-center justify-start gap-2 py-[0.5rem] min-h-[4rem] max-h-[4rem]">
                  .{/* Back button SVG DIV */}
                  <div className="mb-2 mr-2">
                    <svg
                      onClick={() => setShowMenu(!showMenu)}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="size-6"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9 15 3 9m0 0 6-6M3   9h12a6 6 0 0 1 0 12h-3"
                      />
                    </svg>
                  </div>
                  <div className="h-[3.5rem] w-[12.875rem] ">
                    <img
                      src={mstockLogo}
                      className="h-[3.5rem] w-[7.875rem]"
                    ></img>
                  </div>
                </div>
                <div className="mt-2">
                  <div className="fixed flex flex-col gap-2 overflow-y-scroll">
                    {/* Introduction API */}
                    <div>
                      <h1 className="font-bold mb-2">API Documentation</h1>
                      {
                        <ul className="indent-1 flex flex-col">
                          {currentTypeLinks?.map((ele, i) => {
                            if (ele.type === "Introduction")
                              return (
                                <Link to={ele.path}>
                                  <li
                                    className={`${
                                      location.pathname === "/developer/"
                                        ? "text-customBlueFont font-bold"
                                        : ""
                                    }`}
                                  >
                                    {ele.title}
                                  </li>
                                </Link>
                              );
                          })}
                        </ul>
                      }
                    </div>

                    {/* DropDown Type A & Type B */}
                    <div className="w-full relative">
                      <div
                        className="max-w-[63%] mt-2 bg-customBlueFont text-white rounded-lg cursor-pointer hover:"
                        onClick={() =>
                          dispatch({
                            ...state,
                            showDropDown: !state.showDropDown,
                          })
                        }
                      >
                        <div className="flex items-center justify-between px-1">
                          <p className="indent-2 font-semibold text-s">{`Type ${state.selectedValue}`}</p>
                          {state.showDropDown ? (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m4.5 15.75 7.5-7.5 7.5 7.5"
                              />
                            </svg>
                          ) : (
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke-width="1.5"
                              stroke="currentColor"
                              class="size-6"
                            >
                              <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                d="m19.5 8.25-7.5 7.5-7.5-7.5"
                              />
                            </svg>
                          )}
                        </div>
                      </div>
                      {
                        <div
                          className="border-x-2 border-y-2 w-[60%] rounded-lg mt-1 flex flex-col bg-white shadow-lg border-orange-200  transition-all ease- duration-500 overflow-hidden"
                          style={{
                            opacity: state.showDropDown ? 1 : 0,
                            visibility: state.showDropDown
                              ? "visible"
                              : "hidden",
                            maxHeight: state.showDropDown ? "300px" : "0px", // Increased maxHeight for smoother expand
                            transform: state.showDropDown
                              ? "translateY(0)"
                              : "translateY(1px)",
                          }}
                        >
                          <p
                            className="indent-3  text-customBlueFont border-b hover:text-customBlueFont hover:bg-orange-100  flex items-center justify-between pr-6"
                            onClick={() =>
                              dispatch({
                                selectedValue: "A",
                                showDropDown: false,
                              })
                            }
                          >
                            Type A
                          </p>
                          <p
                            className="indent-3 text-customBlueFont hover:text-customBlueFont hover:bg-orange-100  flex items-center justify-between pr-6"
                            onClick={() =>
                              dispatch({
                                selectedValue: "B",
                                showDropDown: false,
                              })
                            }
                          >
                            Type B
                          </p>
                        </div>
                      }
                    </div>

                    {/* Trading API List Items */}
                    <div>
                      <h1 className="font-bold mb-1 ">Trading API's</h1>
                      {/* For Selected Value Type A */}
                      <ul className="list-none">
                        {currentTypeLinks?.map((ele, i) => {
                          if (ele.type === "TradingAPI") {
                            return (
                              <Link
                                to={`/developer/type-${
                                  state.selectedValue
                                }/${ele.title.replaceAll(
                                  " ",
                                  "-"
                                )}`.toLowerCase()}
                              >
                                <li
                                  className={`${
                                    ele.path.split("/")[2] ===
                                    location.pathname.split("/")[3]
                                      ? "text-customBlueFont font-bold"
                                      : ""
                                  }`}
                                >
                                  {ele.title}
                                </li>
                              </Link>
                            );
                          }
                        })}
                      </ul>
                    </div>

                    {/* Data API List Items */}
                    <div>
                      <h1 className="font-bold mb-1">Data APIs</h1>
                      <ul className="flex flex-col">
                        {currentTypeLinks?.map((ele, i) => {
                          if (ele.type === "DataAPI") {
                            return (
                              <Link
                                to={`/developer/type-${
                                  state.selectedValue
                                }/${ele.title.replaceAll(
                                  " ",
                                  "-"
                                )}`.toLowerCase()}
                              >
                                <li
                                  className={`${
                                    ele.path.split("/")[2] ===
                                    location.pathname.split("/")[3]
                                      ? "text-customBlueFont font-bold"
                                      : ""
                                  }`}
                                >
                                  {ele.title}
                                </li>
                              </Link>
                            );
                          }
                        })}
                      </ul>
                    </div>

                    {/* Annexure and others */}
                    <div>
                      <ul className="flex flex-col">
                        {currentTypeLinks?.map((ele, i) => {
                          if (ele.type === "Annexure")
                            return (
                              <Link
                                to={`/developer/${ele.title.replaceAll(
                                  " ",
                                  "-"
                                )}`.toLowerCase()}
                              >
                                <li
                                  className={`${
                                    location.pathname === "/developer/annexure"
                                      ? "text-customBlueFont font-bold"
                                      : ""
                                  } font-bold`}
                                >
                                  {ele.title}
                                </li>
                              </Link>
                            );
                        })}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      }
    </>
  );
}

export default LeftSideBarMob;
