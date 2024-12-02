import React, { useState } from "react";

const DropComponent = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      {/* Button to toggle the drop */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded shadow-lg flex items-center gap-2"
      >
        <span>Options</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className={`h-5 w-5 transition-transform duration-300 ${
            isOpen ? "rotate-180" : ""
          }`}
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M5.23 7.21a.75.75 0 011.06-.02L10 10.582l3.71-3.4a.75.75 0 011.06 1.06l-4 3.6a.75.75 0 01-1.06 0l-4-3.6a.75.75 0 01-.02-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </button>

      {/* Dropdown menu */}
      {isOpen && (
        <div className="absolute mt-2 w-48 bg-white shadow-lg rounded-md border border-blue-200 overflow-hidden">
          <ul>
            <li className="hover:bg-blue-100 px-4 py-2 text-blue-600 cursor-pointer">
              Profile
            </li>
            <li className="hover:bg-blue-100 px-4 py-2 text-blue-600 cursor-pointer">
              Settings
            </li>
            <li className="hover:bg-blue-100 px-4 py-2 text-blue-600 cursor-pointer">
              Help
            </li>
            <li className="hover:bg-blue-100 px-4 py-2 text-blue-600 cursor-pointer">
              Logout
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropComponent;
