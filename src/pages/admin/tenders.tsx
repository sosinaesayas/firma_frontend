import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store'; 
import { fetchTenders } from '../../features/get_tenders/tender_table_slice';
import TenderTable from '../../features/get_tenders/components/tender_table';
import { AppDispatch } from '../../store/store';
const Tenders: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tenders, status, error } = useSelector((state: RootState) => state.tenderTable);
  console.log({ tenders, status, error })

  useEffect(() => {
    if (status === 'idle' ) {
      dispatch(fetchTenders());
    }
  }, [status, dispatch ,tenders, error]);

  return (
    <>
    
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      {status === 'succeeded' && tenders && 
      <section className=' bg-white  px-6 pt-6 pb-2 shadow-lg border border-slate-100 rounded-[20px]'>
        <div className="flex items-center justify-between mb-5">
          <h5 className="font-bold text-xl ">Recent Tenders</h5>
        </div>
        <TenderTable data={tenders} />

      </section>
      }
      
    </>
  );
};

export default Tenders;
