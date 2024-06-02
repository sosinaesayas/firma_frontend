import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
const InvoiceForm = () => {
  const financialDoc = useSelector(
    (state: RootState) => state.financialDocSlice.financialDoc
  );

  return (
    <div>
      <div className="bg-white p-8 rounded-lg shadow-lg max-w-lg w-full mx-auto">
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Subtotal</th>
              <th className="px-4 py-2">ETB</th>
              <th className="px-4 py-2">{financialDoc?.additionalCost}</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Tax {financialDoc?.tax} %</td>
              <td className="border px-4 py-2">ETB</td>
              <td className="border px-4 py-2">{financialDoc?.taxedAmount}</td>
            </tr>
            <tr>
              <td className="border px-4 py-2">
                Discount {financialDoc?.discount} %
              </td>
              <td className="border px-4 py-2">ETB</td>
              <td className="border px-4 py-2">
                {financialDoc?.discountAmount.toFixed(2)}
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-2">Additional Costs</td>

              <td className="border px-4 py-2">ETB</td>
              <td className="border px-4 py-2">
                <p>{financialDoc?.additionalCost}</p>
              </td>
            </tr>

            <tr>
              <td className="border px-4 py-2 font-bold">Total</td>
              <td className="border px-4 py-2"></td>
              <td className="border px-4 py-2 font-bold">ETB</td>
              <td className="border px-4 py-2 font-bold">
                {financialDoc?.total}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="flex justify-center ">
        <button className="mt-4 bg-blue-500 rounded-lg pt-1 pb-1 pr-3 pl-3 text-white">
          Continue
        </button>
      </div>
    </div>
  );
};

export default InvoiceForm;
