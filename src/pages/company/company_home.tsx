import React from 'react';
import Navbar from "../../components/layout/company_navbar"
import CompanySidebar from '../../components/layout/company_sidebar';
import {Outlet} from "react-router-dom"


const CompanyHomePage: React.FC = () => (
  <div>
    <div>
      <Navbar/>
    </div>
   

   <div className='w-full h-screen bg-white shadow-md fixed flex'>
    <div className='w-2/12'>
      <CompanySidebar />
    </div>
    <div className='w-10/12 bg-red p-4 overflow-auto'>
      <Outlet />
    </div>
    
  </div>
    
  </div>
);

export default CompanyHomePage;