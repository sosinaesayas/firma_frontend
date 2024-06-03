// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import ProductTable from "./product_table";
import AdditionalCostsForm from "./additional_costs_form";
import CompanyInfo from "./company_profile_info";
import initialCompanyProfile from "../../../../data/constants/company_profile";
import InvoiceForm from "./invoice_form";
import { FaFilePdf } from "react-icons/fa";
import { Link } from "react-router-dom";
import PasscodeCard from '../../shared_components/passcode';
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import DiscountAndTimeComponent from "./discount_and_time";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getTenderById } from "../bid_tender_slice";
import {postBidForm , updateTenderId , updatePostBidState} from "../bid_tender_slice";
import SuccessScreen from "../../../../components/animations/success";

const FinancialQuotation = () => {
  const tenderDetail = useSelector((state: RootState) => state.bidTender.tenderDetail);
  const {formData , postBidError , postBidStatus} = useSelector((state: RootState) => state.bidTender);
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const handleBackClick = () => {
    navigate(-1);
  }; 

  const onButtonClick = () => {
    console.log('formData',formData);
 
    dispatch(postBidForm(formData));

  }
  const { tenderId } = useParams<{ tenderId: string }>();
  useEffect(() => {

    if (!tenderDetail) {
      dispatch(getTenderById(tenderId || ""));

  }}
  , [dispatch, tenderId , tenderDetail , ]);
  const updateBidStatus = () => {
    setTimeout(() => {
      dispatch(updatePostBidState());
      navigate("/admin")
    }
    , 5000);
  }
  if (postBidStatus === 'succeeded') {
    updateBidStatus();
    return (<SuccessScreen message="Bid Submitted Successfully" />);
    
  }

 


  return (
    <div className="p-6 mb-10 space-y-6">
      <div className="relative bg-white shadow-[0_-5px_10px_0_rgba(0,0,0,0.1)] rounded-lg p-6 mb-6 w-full border border-gray-200 flex items-start">
        <button
          onClick={handleBackClick}
          className="text-gray-700 hover:text-gray-900"
          style={{ marginTop: "-0.25rem", marginRight: "1rem" }}
        >
          {/* <FontAwesomeIcon icon={faArrowLeft} className="h-6 w-6" /> */}
        </button>
        <div className="flex flex-col space-y-2">
          <h1 className="text-2xl text-gray-900">{tenderDetail?.title}</h1>
          <p className="text-gray-700">{tenderDetail?.tenderCategory}</p>
        </div>
        <p className="text-gray-900">
        
        {tenderDetail?.description}
         </p>
      </div>

      <h1 className="text-2xl  mb-5 mt-4">Financial Quotation</h1>
      <div className="bg-white shadow-lg rounded-lg p-4 ">
        <div className="flex justify-between space-x-4">
          <div className="ml-5">
            <div className="mt-4 mb-6">
           
            </div>

            <div className="flex flex-row">
              <label htmlFor="currency" className="text-gray-700 mb-2 mr-6">
                Currency
              </label>
              {/* <select
                name="currency"
                id="currency"
                className="border border-gray-300 rounded-md px-4 py-2 mb-4"
                value={formData.currency}
                onChange={handleChange}
              >
                <option value="ETB">ETB</option>
                <option value="USD">USD</option>
                <option value="GBP">GBP</option>
              </select> */}
              <div>
                ETB
              </div>
            </div>
          </div>
          <div>
            <CompanyInfo companyInfo={initialCompanyProfile} />
          </div>
        </div>
        <div className="mt-3 mb-3">
          <ProductTable />
        </div>
        <h1 className="text-2xl mb-5 mt-4">Additional Costs</h1>
        <div>
          <AdditionalCostsForm />
        </div>

        <h1 className="text-2xl mb-5 mt-4">Discount and delivery timeline</h1>
        <div>
          <DiscountAndTimeComponent />
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="max-w-lg p-4 flex-1">

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
            </form>
          </div>
          <div className="flex-1 p-4">
            <InvoiceForm />
          </div>
        </div>

        <div className="flex flex-row justify-start mb-6 ">
          <button className="mt-4 bg-blue-500 rounded-lg pt-1 pb-1 pr-3 pl-3 text-white flex items-center">
            <FaFilePdf className="mr-2" />
            Download Invoice
          </button>
        </div>
      </div>

      <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col items-center mb-6 border border-gray-200">
        <p className="text-gray-900 mb-4 text-2xl">Your unique Passcode is</p>
        <p className="text-gray-700 mb-4">The technical you just saved will be encrypted up on submission. The opening committe will not be able to see the quotation unless your PIN CODE on opening day. You may save this passcode and losing this number will disqualify you from the bidding</p>
        <PasscodeCard />
        <Link to="/" className="text-blue-500 hover:underline mb-4">
          SMS/E-mail me this password
        </Link>
      </div>

   {
    tenderDetail?.sampleRequired &&   <div  className="w-full mx-auto bg-yellow-50  shadow-lg rounded-lg p-6 flex flex-col items-start mb-6 border border-gray-200">
       <h1 className="text-2xl mb-4">Samples Required</h1>
       <p>This tender requires a physical sample to be shared with Ethiopost. Please send your physical samples to <strong>{tenderDetail.sampleAddress}</strong>please send your samples before the deadline. You can continue to submit this tender.</p>
           </div>
   }

      <div className="flex flex-row justify-end mb-6 ">
          <button onClick = {onButtonClick} className="mt-4 bg-blue-500 rounded-lg pt-1 pb-1 pr-3 pl-3 text-white flex items-center">
           Submit
          </button>
        </div>
    </div>
  );
};

export default FinancialQuotation;