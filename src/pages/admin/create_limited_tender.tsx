import AddLimitedTender from "../../features/post_tenders/limited_tender/components/add_limited_tender";
import TenderDropdown from "../../features/post_tenders/tender_dropdown";

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
