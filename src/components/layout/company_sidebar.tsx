import React, { useState } from 'react';

const CompanySidebar: React.FC = () => {
 

  return (
    <div className="w-full h-screen bg-gray-100 text-gray-900 border-r border-gray-300">
      <div className="p-4">
        <h1 className="text-xl font-bold hover:cursor-pointer"> Company Name</h1>
      </div>
      <nav className="mt-2">       
      <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Dashboard</a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">My Tenders</a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Clarification</a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Account Settings</a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Calendar</a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Notices</a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Payments</a>
      </nav>
      <div className="p-4">
        <button>logout</button>
      </div>
    </div>
  );
};

export default CompanySidebar;
