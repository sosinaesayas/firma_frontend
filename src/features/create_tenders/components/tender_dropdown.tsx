import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TenderDropdown = () => {
  const navigate = useNavigate();
  const [selectedOption, setSelectedOption] = useState("");

  const handleSelectChange = (event:any) => {
    const value = event.target.value;
    setSelectedOption(value);

    switch (value) {
      case 'Public Tender':
        navigate('/add-public-tender');
        break;
      case 'Limited Tender':
        navigate('/add-limited-tender');
        break;
      case 'Direct Purchase Tender':
        navigate('/add-direct-purchase-tender');
        break;
      case 'Expression of Interest':
        navigate('/add-expression-interest-tender');
        break;
      case 'Pro Forma Tender':
        navigate('/add-pro-forma-tender');
        break;
      default:
        break;
    }
  };

  return (
    <div className="dropdown">
      <select
        value={selectedOption}
        onChange={handleSelectChange}
        className="border border-gray-300 rounded-md px-4 py-2"
      >
        
        <option value="Public Tender">Public Tender</option>
        <option value="Limited Tender">Limited Tender</option>
        <option value="Direct Purchase Tender">Direct Purchase Tender</option>
        <option value="Expression of Interest">Expression of Interest</option>
        {/* <option value="Pro Forma Tender">Pro Forma Tender</option> */}
      </select>
    </div>
  );
};

export default TenderDropdown;


