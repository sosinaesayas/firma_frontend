import React from 'react';
import TenderDropdown from "../../features/create_tenders/components/tender_dropdown";
import Sidebar from "../../components/layout/user_side_bar";
import { Outlet } from 'react-router-dom';

const HomePage: React.FC = () => (
  <div className='w-full h-screen bg-white shadow-md fixed flex'>
    <div className='w-1/6 '>
      <Sidebar />
    </div>
    {/* <div> <TenderDropdown /></div> */}
    <div className='flex-grow bg-red p-4 overflow-auto'>
      <Outlet />
    </div>
    
  </div>
);

export default HomePage;