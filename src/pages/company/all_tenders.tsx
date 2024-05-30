import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { fetchTenders } from "../../features/all_tenders/all_tenders_slice";
import TenderTable from "../../features/all_tenders/components/all_tenders_table";
import { AppDispatch } from "../../store/store";
const AllTenders: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tenders, status, error } = useSelector(
    (state: RootState) => state.getAllTendersForCompany
  );

  useEffect(() => {
    if (status === "idle") {
      dispatch(fetchTenders());
    }
  }, [status, dispatch, tenders, error]);

  return (
    <>
      {status === "loading" && <p>Loading...</p>}
      {status === "failed" && <p>{error}</p>}
      {status === "succeeded" && tenders && (
        <section className=" bg-white  px-6 pt-6 pb-2 shadow-lg border border-slate-100 rounded-[20px]">
          <div className="flex items-center justify-between mb-5">
            <h5 className="font-bold text-xl ">Recent Tenders</h5>
          </div>
          <TenderTable data={tenders} />
        </section>
      )}
    </>
  );
};

export default AllTenders;
