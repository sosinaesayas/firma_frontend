
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../../store/store";
import {getClarifications} from '../clarification_slice';
import ClarificationComponent from '../shared/clarification_component';
import { Clarification } from "../../../data/interfaces/clarification";
import { useParams } from "react-router-dom";
import AnswerClarification from "./answer_clarification";
const ClarificationList: React.FC = () => {
    const dispatch: AppDispatch = useDispatch();
    const { tenderId } = useParams<{ tenderId: string }>();
    const clarifications = useSelector((state: RootState) => state.clarification.clarifications);
    const getClarificationStatus = useSelector((state: RootState) => state.clarification.getClarificationStatus);
    const getClarificationError = useSelector((state: RootState) => state.clarification.getClarificationError);

    useEffect(() => {
        dispatch(getClarifications(tenderId || ''));
    }, [dispatch, tenderId]);
    return (
        <div>
            
            {getClarificationStatus === 'loading' && <div>Loading...</div>}
            {getClarificationStatus === 'succeeded' && clarifications.map(
                (clarification: Clarification, index: number) => (
             <>
                <ClarificationComponent clarification={clarification} index={index} key={clarification._id} />
                {clarification.canReply && <AnswerClarification clarificationId={clarification._id} />}
             </>
            ))}
            {getClarificationStatus === 'failed' && <div>{getClarificationError}</div>}
        </div>
    );
};


export default ClarificationList;