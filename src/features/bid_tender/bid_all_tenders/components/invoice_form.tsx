import {  useSelector } from "react-redux";
import { RootState } from "../../../../store/store";
const InvoiceForm = () => {
  


  const additionalCost = useSelector((state: RootState) => state.bidTender.formData.additionalCost);
  const additionalCosts = additionalCost.reduce((acc, cost) => {
    return acc + Number(cost);
  }
  , 0);
  const discount = useSelector((state: RootState) => state.bidTender.formData.discount);
  const productsBid = useSelector((state: RootState) => state.bidTender.formData.productsBid);
  
  const subtotal = productsBid.reduce((acc, product) => {
    return acc + Number(product.price) * Number(product.quantity);
  }, 0);
  const tax = subtotal * 0.1;
  const discountAmount = subtotal * discount / 100;
  const total = subtotal + tax - discountAmount ;



  
  return (
    <div >
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full mx-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2"></th>
              <th className="px-4 py-2">Subtotal</th>
              <th className="px-4 py-2">ETB</th>
              <th className="px-4 py-2">Amount</th>
            </tr>
          </thead>
          <tbody>
          <tr>
              <td className="border px-4 py-2">Product Costs</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">ETB</td>
              <td className="border px-4 py-2">
                <p>
                  {subtotal.toFixed(2)}
                </p>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2">Tax</td>
              <td className="border px-4 py-2">10%</td>
              <td className="border px-4 py-2">ETB</td>
              <td className="border px-4 py-2">{tax.toFixed(2)}</td>
            </tr>

            <tr>
              <td className="border px-4 py-2">Discount</td>
              <td className="border px-4 py-2">{discount.toFixed(2)}%</td>
              <td className="border px-4 py-2">ETB</td>
              <td className="border px-4 py-2">{discountAmount.toFixed(2)}</td>
            </tr>
           
            <tr>
              <td className="border px-4 py-2">Additional Costs</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2">ETB</td>
              <td className="border px-4 py-2">
                <p>
                  {additionalCosts}
                </p>
              </td>
            </tr>
            <tr>
              <td className="border px-4 py-2 font-bold">Total</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2 font-bold">ETB</td>
              <td className="border px-4 py-2 font-bold">{total.toFixed(2)}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className='flex justify-center '>
      <button className='mt-4 bg-blue-500 rounded-lg pt-1 pb-1 pr-3 pl-3 text-white'>Continue</button>
      </div>
     
    </div>
  );
};

export default InvoiceForm;
