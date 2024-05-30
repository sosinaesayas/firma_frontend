import React from "react";
import { useNavigate } from "react-router-dom";
const CompanySidebar: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-gray-100 text-gray-900 border-r border-gray-300">
      <div className="p-4">
        <h1
          className="text-xl font-bold hover:cursor-pointer"
          onClick={() => {
            navigate("/company/");
          }}
        >
          Dashboard
        </h1>
      </div>
      <nav className="mt-2">
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
        >
          All Tenders
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
        >
          My Tenders
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
        >
          Calendar
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
        >
          Notices
        </a>
        <a
          href="#"
          className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
        >
          Payments
        </a>
      </nav>
    </div>
  );
};

export default CompanySidebar;
