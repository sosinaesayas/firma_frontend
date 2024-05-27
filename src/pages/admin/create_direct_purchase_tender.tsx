import AddDirectPurchaseTender from "../../features/create_tenders/components/direct_purchase/add_direct_purchase";
import TenderDropdown from "../../features/create_tenders/components/tender_dropdown";

const CreatDirectPurchaseTender: React.FC = () => {
  return (
    <>
    <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold">Add a New Direct Purchase Tender</h1>
      <TenderDropdown />
    </div>
     <AddDirectPurchaseTender/>

    </>
  );
};

export default CreatDirectPurchaseTender;
