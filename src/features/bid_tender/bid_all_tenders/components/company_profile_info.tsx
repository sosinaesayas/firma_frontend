import React from 'react';
import CompanyProfile from "../../../../data/interfaces/company_profile";
interface CompanyInfoProps {
  companyInfo: CompanyProfile;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({ companyInfo }) => {
  return (
    <div className="mt-4 mr-auto">
      <img src={companyInfo.logo} alt="Company Logo" className="mb-4" />
      <h1 className="text-2xl">{companyInfo.companyName}</h1>
      <p className="mt-1">TIN Number: {companyInfo.tinNumber}</p>
      <p className="mt-1">VAT Registration Number: {companyInfo.vatNumber}</p>
      <p className="mt-1">Business License Number: {companyInfo.businessLicenseNumber}</p>
      <p className="mt-1">Phone 1: {companyInfo.phone1}</p>
      <p className="mt-1">Phone 2: {companyInfo.phone2}</p>
    </div>
  );
};

export default CompanyInfo;
