import { useState, useEffect } from "react";
import Select, { MultiValue } from "react-select";
import { TenderFormData } from "../../../../data/interfaces/tenderFormData";
import { postTenderForm } from "../public_tender_slice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../../../store/store";
import { RootState } from "../../../../store/store";
import category_datas from "../../../../data/constants/tender_category";
import { fetchTenders } from "../../../get_tenders/tender_table_slice";
import { regions } from "../../../../data/constants/regions";
import initialPublicTender from "../../../../data/constants/public_tender_initial";
import ProductsSelect from "../../../../components/shared/products";
import AdditionalCostsSelect from "../../../../components/shared/additional_cost";

const AddPublicTender = () => {
  const dispatch: AppDispatch = useDispatch();
  const navigate = useNavigate();
  const formTenderError = useSelector(
    (state: RootState) => state.formTender?.error
  );
  const formTenderStatus = useSelector(
    (state: RootState) => state.formTender?.status
  );
  const [formData, setFormData] = useState<TenderFormData>(initialPublicTender);
  useEffect(() => {
    if (formTenderStatus === "succeeded") {
      navigate("/admin/");
      dispatch(fetchTenders());
    }
  }, [dispatch, formTenderStatus, navigate]);

  const handleSubmit = (e: any) => {
    e.preventDefault();
    dispatch(postTenderForm(formData))
      .unwrap()
      .catch((error) => {
        console.log(error);
      });
  };
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSelectChange = (
    selectedOptions: MultiValue<{ value: string; label: string }>
  ) => {
    const selectedValues = selectedOptions.map((option) => option.value);
    setFormData((prevData) => ({
      ...prevData,
      tenderCategory: selectedValues,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label htmlFor="tender_id" className="text-gray-700 mb-2">
              Tender ID
            </label>
            <input
              type="text"
              placeholder=""
              className="border border-gray-300 rounded-md px-4 py-2"
              required
              name="tender_id"
              id="tender_id"
              autoComplete="off"
              value={formData.tender_id}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-col">
            <label htmlFor="startDate" className="text-gray-700 mb-2">
              Bid start date
            </label>
            <input
              type="date"
              placeholder=""
              className="border border-gray-300 rounded-md px-4 py-2"
              required
              name="startDate"
              id="startDate"
              autoComplete="off"
              value={formData.startDate}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="endDate" className="text-gray-700 mb-2">
              Bid end date and time
            </label>
            <input
              type="datetime-local"
              placeholder=""
              className="border border-gray-300 rounded-md px-4 py-2"
              required
              name="endDate"
              id="endDate"
              autoComplete="off"
              value={formData.endDate}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="tenderCategory" className="text-gray-700 mb-2">
              Tender Category
            </label>
            <Select
              placeholder="Select an option"
              options={category_datas.map((category) => ({
                value: category,
                label: category,
              }))}
              isMulti
              id="tenderCategory"
              name="tenderCategory"
              onChange={handleSelectChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="openDate" className="text-gray-700 mb-2">
              Bid opening date and time
            </label>
            <input
              type="datetime-local"
              className="border border-gray-300 rounded-md px-4 py-2"
              required
              name="openDate"
              id="openDate"
              autoComplete="off"
              value={formData.openDate}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="bidType" className="text-gray-700 mb-2">
              Bid Type
            </label>
            <select
              typeof="text"
              className="border border-gray-300 rounded-md px-4 py-2"
              value={formData.bidType}
              name="bidType"
              id="bidType"
              onChange={handleChange}
            >
              <option value="International">International</option>
              <option value="Local">Local</option>
            </select>
          </div>
        </div>
        <div className="flex flex-col">
          <label htmlFor="title" className="text-gray-700 mb-2">
            Tender Title
          </label>
          <textarea
            id="title"
            name="title"
            className="flex-grow border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none h-22 px-2 py-2"
            placeholder="Enter tender title..."
            value={formData.title}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="flex flex-col">
          <label htmlFor="description" className="text-gray-700 mb-2">
            Tender Description
          </label>
          <textarea
            id="description"
            className="flex-grow border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 resize-none h-96 px-2 py-2"
            placeholder="Enter tender description..."
            value={formData.description}
            onChange={handleChange}
            name="description"
          ></textarea>
        </div>

        <fieldset className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="flex flex-col">
            <label htmlFor="bidDocumentPrice" className="text-gray-700 mb-2">
              Bid Document Price
            </label>
            <input
              type="number"
              placeholder=""
              className="border border-gray-300 rounded-md px-4 py-2"
              required
              name="bidDocumentPrice"
              id="bidDocumentPrice"
              autoComplete="off"
              value={formData.bidDocumentPrice}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="cpoAmount" className="text-gray-700 mb-2">
              CPO Amount
            </label>
            <input
              type="number"
              placeholder=""
              className="border border-gray-300 rounded-md px-4 py-2"
              required
              name="cpoAmount"
              id="cpoAmount"
              autoComplete="off"
              value={formData.cpoAmount}
              onChange={handleChange}
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="physical-sample" className="text-gray-700 mb-2">
              Sample Required
            </label>
            <select
              className="border border-gray-300 rounded-md px-4 py-2 mb-4"
              id="sampleRequired"
              title="sample"
              name="sampleRequired"
              value={formData.sampleRequired ? "Required" : "Not Required"}
              onChange={(e) =>
                handleChange({
                  target: {
                    name: "sampleRequired",
                    value: e.target.value === "Required",
                  },
                })
              }
            >
              <option value="Required">Required</option>
              <option value="Not Required">Not Required</option>
            </select>
            {formData.sampleRequired && (
              <div className="flex flex-col">
                <label htmlFor="sampleAddress" className="text-gray-700 mb-2">
                  Sample Address
                </label>
                <input
                  type="text"
                  placeholder="Enter Physical Sample Address"
                  className="border border-gray-300 rounded-md px-4 py-2 mb-4"
                  id="sampleAddress"
                  name="sampleAddress"
                  value={formData.sampleAddress}
                  onChange={handleChange}
                />
              </div>
            )}
          </div>

          <div className="flex flex-col">
            <label htmlFor="currency" className="text-gray-700 mb-2">
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

          <div className="flex flex-col">
            <label htmlFor="region" className="text-gray-700 mb-2">
              Region
            </label>
            <select
              className="border border-gray-300 rounded-md px-4 py-2 mb-4"
              value={formData.region}
              onChange={handleChange}
              name="region"
              id="region"
            >
              {regions.map((region) => (
                <option key={region} value={region}>
                  {region}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label> Select products</label>
            <ProductsSelect
              handleProductChange={(selectedOptions) => {
                console.log(selectedOptions);
                const selectedValues = selectedOptions.map(
                  (option) => option.value
                );
                console.log(selectedValues);
                setFormData((prevData) => ({
                  ...prevData,
                  products: selectedValues,
                }));
              }}
            />
          </div>

          <div>
            <label> Select Additional Cost</label>
            <AdditionalCostsSelect
              handleAdditionalCostChange={(selectedOptions) => {
                const selectedValues = selectedOptions.map((option) => option.value);
                setFormData((prevData) => ({
                  ...prevData,
                  additionalCost: selectedValues,
                }));
              }}
            />
          </div>

          <div>
            {/* <label> Select a company</label> */}
           
          </div>
        </fieldset>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Add Tender For Approval
        </button>
        {formTenderError && <p>{formTenderError}</p>}
      </form>
    </div>
  );
};

export default AddPublicTender;
