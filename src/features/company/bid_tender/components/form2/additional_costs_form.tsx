const AdditionalCostsForm = () => {
    return (
      <div className="form-container">
        <form className="custom-form">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-40 md:w-1/3 px-3 mb-6 md:mb-0">
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" id="input1" placeholder="Input 1" />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" id="input2" placeholder="Input 2" />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" id="input3" placeholder="Input 3" />
            </div>
            <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
              <input className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" id="input4" placeholder="Input 4" />
            </div>
          </div>
        </form>
      </div>
    );
  };
  
  export default AdditionalCostsForm;
  