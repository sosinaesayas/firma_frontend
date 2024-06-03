import TenderDropdown from "../../features/post_tenders/tender_dropdown";
import AddPublicTender from "../../features/post_tenders/public_tender/components/public_tender";

const CreateProformaTender: React.FC = () => {
  return (
    <>
   <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold">Add New Pro Forma Tender</h1>
      <TenderDropdown />
    </div>
     <AddPublicTender/>
     
    </>
  );
};

export default CreateProformaTender;
