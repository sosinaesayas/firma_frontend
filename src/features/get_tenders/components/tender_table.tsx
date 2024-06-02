import { useState } from 'react';
import { IoIosMore } from 'react-icons/io';
import Pagination from '../../../components/common/Pagination';
import TenderTableData from '@/data/interfaces/tender';
import { useNavigate } from "react-router-dom";
interface TenderTableProps {
  data: TenderTableData[];
}

const TenderTable = ({ data }: TenderTableProps) => {
  const [activeRowId, setActiveRowId] = useState<string | null>(null);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 15;
  const navigate = useNavigate();
  const handleClickAction = (tenderId: string) => {
    if (activeRowId === tenderId) {
      setActiveRowId(null);
    } else {
      setActiveRowId(tenderId);
    }
  };

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="table-responsive p-1 pb-4">
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
                    className={`w-2 h-2 rounded-full ${data.deadlineInDays < 5 && 'bg-red-400'
                      } ${data.deadlineInDays < 10 && data.deadlineInDays > 5 && 'bg-yellow-400'
                      } ${data.deadlineInDays > 10 && 'bg-green-400'}`}
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
                       <li className="hover:text-blue-400 cursor-pointer" onClick={()=>{
                        navigate(`/clarifications/${data._id}`)
                      }}>
                       See clarifications
                      </li>
                      <li className="hover:text-blue-400 cursor-pointer">Download</li>
                      <li className="hover:text-blue-400 cursor-pointer">Print</li>
                      <li className="hover:text-red-400 cursor-pointer">Delete</li>
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

export default TenderTable;