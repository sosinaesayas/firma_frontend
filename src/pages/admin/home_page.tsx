import React from "react";
import Sidebar from "../../components/layout/user_side_bar";
import { Outlet } from "react-router-dom";

const HomePage: React.FC = () => (
  <div className="w-full h-screen bg-white shadow-md fixed flex">
    <div className="w-1/5 ">
      <Sidebar />
    </div>
    <div className='w-4/5 bg-red p-6 overflow-auto'>
    <div className='flex-grow bg-red p-4 overflow-auto'>
      <Outlet />
    </div>
  </div>
  </div>
  
);

export default HomePage;
