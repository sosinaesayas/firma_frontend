import { useEffect, useState } from "react";
import { IoIosMore } from "react-icons/io";
import Pagination from "../../../components/common/Pagination";
import TenderTableData from "@/data/interfaces/tender";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import { purchaseTender } from "../all_tenders_slice";
import { useNavigate } from "react-router-dom";
interface TenderTableProps {
  data: TenderTableData[];
}

const CompanyTenderTable = ({ data }: TenderTableProps) => {
  const dispatch = useDispatch<AppDispatch>();
  const [activeRowId, setActiveRowId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const navigate = useNavigate();
  const { purchaseStatus, purchaseError, purchaseLink } = useSelector(
    (state: RootState) => state.getAllTendersForCompany
  );
  const itemsPerPage = 10;

  const handleClickAction = (tenderId: string) => {
    if (activeRowId === tenderId) {
      setActiveRowId(null);
    } else {
      setActiveRowId(tenderId);
    }
  };

  const handlePurchase = (tenderId: string) => {
    dispatch(purchaseTender(tenderId));
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);
  useEffect(() => {
    if (purchaseLink) {
      window.open(purchaseLink, "_blank"); // Open the payment link in a new tab
    }
  }, [purchaseLink]);
  return (
    <div className="table-responsive p-1 pb-10 mb-20 ">
      {purchaseStatus === "purchase_failed" && (
        <div className="bg-red-400 text-white p-2 rounded-lg mb-4">
          {purchaseError}
        </div>
      )}

      <table className="table-hover">
        <thead>
          <tr>
            <th>Tender ID</th>
            <th>Dealine in Days</th>
            <th>Tender Name</th>
            <th>Tender Type</th>
            <th>Tender Category</th>
            <th>CPO/Bid Bond Amount</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((data) => {
            return (
              <tr key={data.id} className="relative">
                <td>{data.id}</td>
                <td className="text-center flex gap-2 items-center justify-center">
                  <span
                    className={`w-2 h-2 rounded-full ${
                      data.deadlineInDays < 5 && "bg-red-400"
                    } ${
                      data.deadlineInDays < 10 &&
                      data.deadlineInDays > 5 &&
                      "bg-yellow-400"
                    } ${data.deadlineInDays > 10 && "bg-green-400"}`}
                  ></span>
                  <span>{data.deadlineInDays}</span>
                </td>
                <td>{data.title}</td>
                <td>{data.tenderType}</td>
                <td>{data.tenderCategory}</td>
                <td>{data.cpoAmount} Birr</td>
                <td>{data.status}</td>
                <td
                  className="text-center cursor-pointer text-2xl"
                  onClick={() => handleClickAction(data.id)}
                >
                  <IoIosMore />
                </td>
                {activeRowId === data.id && (
                  <div className="absolute z-30 border border-slate-200 right-10 -bottom-16 bg-white px-6 py-2 rounded-lg shadow">
                    <ul className="text-sm flex text-gray-500 flex-col items-center gap-4">
                      {data.tenderType === "Expression of Interest" ||
                      data.purchased == true ? (
                        <li
                          className="hover:text-blue-400 cursor-pointer"
                          onClick={() => {
                            if (data.tenderType === "Expression of Interest") {
                              navigate(`/company/bid-eoi/${data._id}`);
                            }
                          }}
                        >
                          Bid tender
                        </li>
                      ) : (
                        <li
                          className="hover:text-blue-400 cursor-pointer"
                          onClick={() => {
                            handlePurchase(data._id);
                          }}
                        >
                          Purchase Tender
                        </li>
                      )}

                      <li className="hover:text-blue-400 cursor-pointer">
                        Download
                      </li>
                      <li className="hover:text-blue-400 cursor-pointer">
                        Print
                      </li>
                      <li
                        className="hover:text-blue-400 cursor-pointer"
                        onClick={() => {
                          handleClickAction(data.id);
                        }}
                      >
                        Cancel
                      </li>
                    </ul>
                  </div>
                )}
              </tr>
            );
          })}
        </tbody>
      </table>
      <Pagination
        itemsPerPage={itemsPerPage}
        totalItems={data.length}
        currentPage={currentPage}
        paginate={paginate}
      />
    </div>
  );
};

export default CompanyTenderTable;
