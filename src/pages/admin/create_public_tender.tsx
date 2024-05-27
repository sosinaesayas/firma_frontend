import TenderDropdown from "../../features/create_tenders/components/tender_dropdown";
import AddPublicTender from "../../features/create_tenders/components/public_tender/public_tender";

const CreatePublicTender: React.FC = () => {
  return (
    <>
   <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold">Add New Public Tender</h1>
      <TenderDropdown />
    </div>
     <AddPublicTender/>
     
    </>
  );
};

export default CreatePublicTender;
