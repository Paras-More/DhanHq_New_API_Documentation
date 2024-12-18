import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col md:min-w-[736px] items-center justify-center h-screen bg-gray-100">
      <h1 className="text-4xl font-bold text-red-600 mb-4">404</h1>
      <p className="text-lg text-gray-700 mb-6">Page Not Found</p>
      <button
        onClick={() => navigate("/developer")}
        className="px-6 py-2 text-white bg-blue-500 rounded-lg hover:bg-blue-600 transition"
      >
        Go to Home
      </button>
    </div>
  );
};

export default NotFound;
