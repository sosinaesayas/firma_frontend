import PublicTender from "../../features/post_tenders/public_tender/components/public_tender";
import TenderDropdown from "../../features/post_tenders/tender_dropdown";

const TenderSidebarPage: React.FC = () => {
  return (
    <>
  <header className="flex justify-end p-4"> 
  <TenderDropdown />
 </header>
 <PublicTender/>


    </>
  );
};

export default TenderSidebarPage
