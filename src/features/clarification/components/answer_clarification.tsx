import React, {  useState } from "react";
import { useDispatch, useSelector} from "react-redux";
import { AppDispatch , RootState} from "../../../store/store";
import { addReply  } from "../clarification_slice";
import Popup from "../shared/popup";

interface ReplyProps {
    clarificationId : string;
}
const AnswerClarification: React.FC<ReplyProps> = ({clarificationId}) => {
  const dispatch: AppDispatch = useDispatch();
  const status = useSelector(
    (state: RootState) => state.clarification.postClarificationStatus
  );
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const handleOpenPopup = () => setIsPopupOpen(true);
  const handleClosePopup = () => setIsPopupOpen(false);
  const handleSend = (message: string) => {
    
    dispatch(addReply({ clarificationId : clarificationId, reply: message }));
    setIsPopupOpen(false);
  };


  return (
    <div className="p-4">
      <button
        className="px-4 py-2 bg-blue-500 text-white rounded"
        onClick={handleOpenPopup}
      >
        Reply
      </button>

      <Popup
        title="Reply for Clarification"
        isOpen={isPopupOpen}
        onClose={handleClosePopup}
        onSend={handleSend}
        status= {status}
      />
    </div>
  );
};

export default AnswerClarification;