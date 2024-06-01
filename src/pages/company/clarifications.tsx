import AddClarificationQuestion from "../../features/clarification/components/add_clarificaction";
import ClarificationList from "../../features/clarification/components/clarification_list";
import React from "react";
const CompanyClarificationsPage: React.FC = () => {
  return (
    <div>
    <AddClarificationQuestion />
      <ClarificationList />
    </div>
  );
};

export default CompanyClarificationsPage;
