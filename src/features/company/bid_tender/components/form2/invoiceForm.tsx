function InvoiceForm() {
  return (
    <div className="max-w-md mx-auto p-4">
      <div className="grid grid-cols-3 gap-4 mb-4">
        <div className="col-span-1"></div>
        <div className="col-span-1 text-center font-bold">Subtotal</div>
        <div className="col-span-1 text-center font-bold">ETB</div>

       
        <div className="col-span-1 flex items-center">
          <label htmlFor="tax" className="font-bold">Tax:</label>
        </div>
        <div className="col-span-1">
          <div id="tax" className="border border-gray-300 rounded-md px-4 py-2">Tax Value</div>
        </div>
        <div className="col-span-1">
          <div id="tax-2" className="border border-gray-300 rounded-md px-4 py-2">Tax Value</div>
        </div>

      
      
        <div className="col-span-1 flex items-center">
          <label htmlFor="discount" className="font-bold">Discount:</label>
        </div>
        <div className="col-span-1">
          <div id="discount" className="border border-gray-300 rounded-md px-4 py-2">Discount Value</div>
        </div>
        <div className="col-span-1">
          <div id="discount-2" className="border border-gray-300 rounded-md px-4 py-2">Discount Value</div>
        </div>
      </div>
    </div>
  );
}

export default InvoiceForm;
