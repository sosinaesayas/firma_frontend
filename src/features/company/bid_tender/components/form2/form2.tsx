import FileUpload from "../fileUpload";
import { useState} from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import initialPublicTender from "../../../../../data/constants/public_tender_initial";
import { TenderFormData } from "../../../../../data/interfaces/tenderFormData";
import ProductTable from "./product_table";
import AdditionalCostsForm from "./additional_costs_form";
import CompanyInfo from "./company_profile_info";
import initialCompanyProfile from "../../../../../data/constants/company_info_initial"
import InvoiceForm from "./invoiceForm"



const Form2 = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState<TenderFormData>(initialPublicTender);
  const handleBackClick = () => {
    navigate(-1);
  }
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <div className="p-6 mb-10 space-y-6">

<div className="relative bg-white shadow-lg rounded-lg p-6 mb-6 w-full border border-gray-200 flex items-start">
  <button
    onClick={handleBackClick}
    className="text-gray-700 hover:text-gray-900"
    style={{ marginTop: '-0.25rem', marginRight: '1rem' }} // Adjust margins as needed
  >
    <FontAwesomeIcon icon={faArrowLeft} className="h-6 w-6" />
  </button>
  <p className="text-gray-900">
    Hey company, this is the text we have for now. Hey company, this is the
    text we have for now. Hey company, this is the text we have for now. Hey
    company, this is the text we have for now. Hey company, this is the text
    we have for now.
  </p>
</div>

<h1>Financial Quotation</h1>
<div className="bg-white shadow-lg rounded-lg p-4 ">
  
<div className="flex justify-between space-x-4">
  <div className="ml-5">
    <div className="mt-4 mb-4">
    <FileUpload />
    </div>
    
    <div className="flex flex-row">
      <label htmlFor="currency" className="text-gray-700 mb-2 mr-6">
        Currency
      </label>
      <select
        name="currency"
        id="currency"
        className="border border-gray-300 rounded-md px-4 py-2 mb-4"
        value={formData.currency}
        onChange={handleChange}
      >
        <option value="ETB">ETB</option>
        <option value="USD">USD</option>
        <option value="GBP">GBP</option>
      </select>
    </div>
  </div>
<div><CompanyInfo companyInfo={initialCompanyProfile}/></div>
 
</div>
          <div>
            <ProductTable/>
          </div>
          <h1>Additional Costs</h1>
          <div><AdditionalCostsForm/></div>

      <div className="max-w-lg  p-4">
  <form className="space-y-4">
    <div>
      <label className="block text-gray-700 mb-2">Notes</label>
      <textarea 
        placeholder="Notes - any relevant information not already covered"
        className="w-full border border-gray-300 rounded-md px-4 py-2 h-32 resize-none"
      ></textarea>
    </div>
    <div>
      <label className="block text-gray-700 mb-2">Terms</label>
      <textarea 
        placeholder="Terms and conditions, late fees, payment methods, delivery schedule"
        className="w-full border border-gray-300 rounded-md px-4 py-2 h-32 resize-none"
      ></textarea>
    </div>
{/* 
    <div className="flex flex-col">
      <div>
      <label>Tax</label>
      <input/>
      <input/>
      </div>
      <div>
        <label>Discount</label>
      <input/>
      <input/>
      </div>
    </div> */}
    <div>
      <InvoiceForm/>
    </div>
   

  </form>
</div>




          </div>


</div>
  );
};

export default Form2;
