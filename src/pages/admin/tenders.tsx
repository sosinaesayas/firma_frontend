import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/store'; 
import { fetchTenders } from '../../features/get_tenders/tender_table_slice';
import { TenderTable } from '../../features/get_tenders/components/tender_table';
import { AppDispatch } from '../../store/store';
const Tenders: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const { tenders, status, error } = useSelector((state: RootState) => state.tenderTable);

  useEffect(() => {
    if (status === 'idle' ) {
      dispatch(fetchTenders());
    }
  }, [status, dispatch ,tenders]);

  return (
    <>
    
      {status === 'loading' && <p>Loading...</p>}
      {status === 'failed' && <p>{error}</p>}
      {status === 'succeeded' && tenders && 
      <div>
        
        
        <TenderTable data={tenders} />
      </div>
      }
    </>
  );
};

export default Tenders;
