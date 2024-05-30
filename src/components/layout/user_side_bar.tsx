import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const Sidebar: React.FC = () => {
  const [isTendersOpen, setIsTendersOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="w-full h-screen bg-gray-100 text-gray-900 border-r border-gray-300">
      <div className="p-4">
        <h1 className="text-xl font-bold hover:cursor-pointer" onClick={()=>{
          navigate('/admin/')
        }}>Admin Dashboard</h1>
      </div>
      <nav className="mt-2">       
        <div>
          <button 
            className="flex items-center justify-between w-full py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200"
            onClick={() => setIsTendersOpen(!isTendersOpen)}
          >
            <span>Tenders and Applications</span>
            <svg 
              className={`w-5 h-5 transition-transform ${isTendersOpen ? 'rotate-180' : ''}`}
              xmlns="http://www.w3.org/2000/svg" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {isTendersOpen && (
            <div className="pl-4">
              <a href="/admin/post-tenders" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Tenders</a>
              <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Applications</a>
            </div>
          )}
        </div>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Payment</a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Clarification</a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Announcement</a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Supplier</a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Calendar</a>
        <a href="#" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-gray-200">Setting</a>
      </nav>
    </div>
  );
};

export default Sidebar;
