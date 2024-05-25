import React from 'react';
import Sidebar from "../components/layout/user_side_bar";
import { Outlet } from 'react-router-dom';

const PublicTender: React.FC = () => (
  <div className='w-full h-screen bg-white shadow-md fixed flex'>
    
    <div className='w-1/5 bg-black'>
      <Sidebar />
    </div>
    <div className='flex-grow bg-red p-4 overflow-auto'>
      <Outlet />
    </div>
    
  </div>
);

export default PublicTender;
