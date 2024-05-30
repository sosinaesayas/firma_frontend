import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaBell, FaCog, FaCircle } from 'react-icons/fa';

const Navbar = () => {
  const [active, setActive] = useState("");
  const handleChange = (item:any) => {
    setActive(item);
  };

  return (
    <div className="bg-blue-700 p-4 flex justify-between items-center text-white ">
      <div className="text-2xl font-bold">Ethiopost</div>

      <div className="flex space-x-8">
        <Link
          className={`hover:text-yellow-400 ${active === 'dashboard' ? 'text-yellow-400' : ''}`}
          onClick={() => handleChange('dashboard')}
          to="/dashboard"
        >
          Dashboard
        </Link>
        <Link
          className={`hover:text-yellow-400 ${active === 'tenders' ? 'text-yellow-400' : ''}`}
          onClick={() => handleChange('tenders')}
          to="/tenders"
        >
          Tenders
        </Link>
        <Link
          className={`hover:text-yellow-400 ${active === 'information' ? 'text-yellow-400' : ''}`}
          onClick={() => handleChange('information')}
          to="/information"
        >
          Information
        </Link>
        <Link
          className={`hover:text-yellow-400 ${active === 'faq' ? 'text-yellow-400' : ''}`}
          onClick={() => handleChange('faq')}
          to="/faq"
        >
          FAQ
        </Link>
      </div>

      <div className="flex space-x-4 items-center">
        <Link
          className={`hover:text-yellow-400 flex items-center ${active === 'company' ? 'text-yellow-400' : ''}`}
          onClick={() => handleChange('company')}
          to="/company"
        >
          <FaCircle className="mr-2" /> Company
        </Link>
        <Link
          className="hover:text-yellow-400"
          onClick={() => handleChange('notifications')}
          to="/notifications"
        >
          <FaBell />
        </Link>
        <Link
          className="hover:text-yellow-400"
          onClick={() => handleChange('settings')}
          to="/settings"
        >
          <FaCog />
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
