import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../../store/store";
import { updateAdditionalCost } from "../bid_tender_slice";

const AdditionalCostComponent = () => {
  const dispatch: AppDispatch = useDispatch();
  const additionalCosts = useSelector((state: RootState) => state.bidTender.tenderDetail?.additionalCost) || [];
  const userAdditionalCosts = useSelector((state: RootState) => state.bidTender.formData.additionalCost);
  const formData= useSelector((state: RootState) => state.bidTender.formData);
  const handleAdditionalCostChange = (index: number, value: string) => {
    const updatedCosts = [...userAdditionalCosts];
    updatedCosts[index] = parseFloat(value) || 0;
    dispatch(updateAdditionalCost(updatedCosts));
    console.log('formData',formData);
  };


  return (
    <div className="form-container p-1 pb-4">
      {additionalCosts.map((costLabel, index) => (
        <div key={index} className="additional-cost-row flex align-baseline justify-start mb-4">
          <div className="additional-cost-label w-1/2 px-2">
            <label className="block text-gray-700 font-bold mb-2">
              {costLabel}
            </label>
           
          </div>
          <div className="additional-cost-input w-1/2 px-2">
            <input
              type="text"
              className="input-with-shadow w-full border border-4 "
              value={userAdditionalCosts[index]?.toString() || ''}
              onChange={(e) => handleAdditionalCostChange(index, e.target.value)}
            />
          </div>
        </div>
      ))}
      
    </div>
  );
};

export default AdditionalCostComponent;
