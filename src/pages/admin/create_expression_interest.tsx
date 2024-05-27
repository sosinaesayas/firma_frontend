import TenderDropdown from "../../features/create_tenders/components/tender_dropdown";
import AddExpressionInterest from "../../features/create_tenders/components/expression_of_interest/add_expression_interest";
const CreatExpressionInterestTender: React.FC = () => {
  return (
    <>
     <div className="flex justify-between items-center mb-4">
      <h1 className="text-2xl font-bold">Add a New Expression Interest Tender</h1>
      <TenderDropdown />
    </div>
     <AddExpressionInterest/>

    </>
  );
};

export default CreatExpressionInterestTender;