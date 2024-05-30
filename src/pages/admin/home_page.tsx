import React from 'react';
import Sidebar from "../../components/layout/user_side_bar";
import { Outlet } from 'react-router-dom';

const HomePage: React.FC = () => (
  <div className='w-full h-screen bg-white shadow-md fixed flex'>
    <div className='w-1/5 '>
      <Sidebar />
    </div>
<<<<<<< HEAD
    {/* <div> <TenderDropdown /></div> */}
    <div className='w-4/5 bg-red p-6 overflow-auto'>
=======
    <div className='flex-grow bg-red p-4 overflow-auto'>
>>>>>>> 86668520cdf4f153fe3963bd7652b608082cd10b
      <Outlet />
    </div>
    
  </div>
);

export default HomePage;