import React, { useState, useEffect } from 'react';
import Select, { MultiValue } from 'react-select';
import { ExpressionInterestData } from "../../../../data/interfaces/expressionInterestData";
import { useNavigate } from 'react-router-dom';
import category_datas from "../../../../data/constants/tender_category";
import initialExpressionInterestTender from "../../../../data/constants/expressionInterest_initial";
import { useExpressionInterest } from '../../../../hooks/useExpressionInterest';

const AddExpressionInterest = () => {
  const navigate = useNavigate();
  const { status, error, submitExpressionInterest } = useExpressionInterest();
  const [formData, setFormData] = useState<ExpressionInterestData>(initialExpressionInterestTender);

  useEffect(() => {
    if (status === 'succeeded') {
      navigate("/home");
    }
  }, [status, navigate]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    submitExpressionInterest(formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
            <label htmlFor="id" className="text-gray-700 mb-2">
              Tender ID
            </label>
            <input
              type="text"
              placeholder=""
              className="border border-gray-300 rounded-md px-4 py-2"
              required
              name="id"
              id="id"
              autoComplete="off"
              value={formData.id}
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
      
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md"
        >
          Add Tender For Approval
        </button>
       
        {error && <p className="text-red-500">{error}</p>}
      </form>
    </div>
  );
};

export default AddExpressionInterest;
