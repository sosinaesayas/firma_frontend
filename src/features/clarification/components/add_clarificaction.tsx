
import React, {  useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { AppDispatch , RootState} from "../../../store/store";
import { postClarification } from "../clarification_slice";
import { useParams } from "react-router-dom";
import Popup from "../shared/popup";
const AddClarificationQuestion: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { tenderId } = useParams<{ tenderId: string }>();
  const status = useSelector(
    (state: RootState) => state.clarification.postClarificationStatus
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  const handleSend = (message: string) => {
    
    dispatch(postClarification({ tender : tenderId, question: message }));
    setIsPopupOpen(false);
  };


  return (
    <div className="p-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleOpenPopup}
      >
        Ask for Clarification
      </button>

      <Popup
        title="Ask for Clarification"
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onSend={handleSend}
        status= {status}
      />
    </div>
  );
};

export default AddClarificationQuestion;