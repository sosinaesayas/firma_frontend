import PublicTender from "../../features/create_tenders/components/public_tender/public_tender";
import TenderDropdown from "../../features/create_tenders/components/tender_dropdown";

const PostTendersPage: React.FC = () => {
  return (
    <>
  <header className="flex justify-end p-4"> 
  <TenderDropdown />
 </header>
 <PublicTender/>


    </>
  );
};

export default PostTendersPage;
