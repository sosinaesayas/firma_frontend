import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";


const FinancialQuoteTable = () => {

  const { financialDoc, status, error, gradeStatus, gradeError } = useSelector(
    (state: RootState) => state.financialDocSlice
  );

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div>
      {gradeStatus === "grade_failed" && (
        <div className="bg-red-400 text-white p-2 rounded-lg mb-4">
          {gradeError}
        </div>
      )}
      {status === "failed" && (
        <div className="bg-red-400 text-white p-2 rounded-lg mb-4">{error}</div>
      )}
      <div className="table-responsive p-1 pb-10 mb-20 bg-blue-700 ">
        <table className="table-hover">
          <thead>
            <tr>
              <th>Item</th>
              <th>Unit</th>
              <th>Quantity</th>
              <th>Unit Price</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {financialDoc?.products.map((data) => {
              return (
                <tr key={data.short_text} className="relative">
                  <td>{data.short_text}</td>

                  <td>{data.unit}</td>
                  <td>{data.quantity}</td>
                  <td>{data.price}</td>
                  <td>{data.amount} Birr</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FinancialQuoteTable;
