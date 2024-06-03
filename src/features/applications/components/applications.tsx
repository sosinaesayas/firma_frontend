import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { useNavigate } from "react-router-dom";
import { FaFilePdf, FaPrint } from "react-icons/fa";
import CompanyInfo from "../../bid_tender/bid_all_tenders/components/company_profile_info";
import initialCompanyProfile from "../../../data/constants/company_profile";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { getTenderById } from "../../bid_tender/bid_all_tenders/bid_tender_slice";
import {postBidForm , updateTenderId} from "../../bid_tender/bid_all_tenders/bid_tender_slice";

const Applications: React.FC = () => {
    const tenderDetail = useSelector((state: RootState) => state.bidTender.tenderDetail);
  const formData = useSelector((state: RootState) => state.bidTender.formData);
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
  , [dispatch, tenderId , tenderDetail]);
 

  return (
    <div>
      <div className="p-6 mb-5 space-y-6">
        <div className="relative bg-white shadow-[0_-5px_10px_0_rgba(0,0,0,0.1)] rounded-lg p-6 mb-6 w-full border border-gray-200 flex items-start">
          <button
            onClick={handleBackClick}
            className="text-gray-700 hover:text-gray-900"
            style={{ marginTop: "-0.25rem", marginRight: "1rem" }}
          ></button>
          <div className="flex flex-col space-y-2">
            <h1 className="text-2xl text-gray-900">{tenderDetail?.title}</h1>
            <p className="text-gray-700">{tenderDetail?.tenderCategory}</p>
          </div>
          <p className="text-gray-900">{tenderDetail?.description}</p>
        </div>



        <div className=" bg-white shadow-[0_5px_10px_0_rgba(0,0,0,0.1)] rounded-lg p-6 mb-6 w-full border border-gray-200  space-x-4">
        <div className="relative rounded-lg p-6 mb-6 w-full border-b border-blue-200 flex justify-between space-x-4">
          <h2 className="flex-shrink-0 text-xl">EBS Multimedia</h2>
          <div className="flex space-x-4">
            <button className="bg-blue-500 rounded-lg py-1 px-3 text-white flex items-center">
              <FaPrint className="mr-2" />
              Print Quote
            </button>
            <button className="bg-blue-500 rounded-lg py-1 px-3 text-white flex items-center">
              <FaFilePdf className="mr-2" />
              Download Invoice
            </button>
          </div>
        </div>
            <div className="flex justify-between mb-5">
                <div>Attached Files</div>
                <div>Account Files</div>
                <div> <CompanyInfo companyInfo={initialCompanyProfile} /></div>

            </div>

            <div>
                <p className="text-xl mb-5">Grade the technical proposal</p>
                <div className="flex justify-start space-x-4 ">
                    <div className="shadow-md space-x-2 p-4 rounded-md">mark</div>
                    <div className="space-x-2 p-4">out of</div>
                    <div className="shadow-md space-x-2 p-4 rounded-md">result</div>
                </div>
                <button className="bg-blue-500 rounded-lg py-1 px-3 mt-6 text-white flex items-center">
              Grade
            </button>
            </div>
        </div>
        
        <div className="flex justify-end">
         <button className="bg-blue-500 rounded-lg py-1 px-3 mt-6 text-white ">
              Approve Technical
         </button>
        </div>

        
      </div>
    </div>
  );
};

export default Applications;
