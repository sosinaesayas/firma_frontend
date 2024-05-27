import AddLimitedTender from "../../features/create_tenders/components/limited_tender/add_limited_tender";
import TenderDropdown from "../../features/create_tenders/components/tender_dropdown";

const CreatLimitedTender: React.FC = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold">Add a New Limited Tender</h1>
      <TenderDropdown />
    </div>
     <AddLimitedTender/>

    </>
  );
};

export default CreatLimitedTender;
