import React from "react";
import { Clarification, ClarificationReply } from "../../../data/interfaces/clarification";

// create a function that formats a time from Iso string to "May 15, 2021, 12:00 PM"
const formatDate = (date: string) => {
  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
    hour: "numeric",
    minute: "numeric",
  } as const;
  return new Date(date).toLocaleDateString(undefined, options) + ', ' + new Date(date).toLocaleTimeString(undefined, { hour: 'numeric', minute: 'numeric', hour12: true });
};

interface Props {
  clarification: Clarification;
  index: number;
}

const ClarificationComponent: React.FC<Props> = ({ clarification, index }) => {
  return (
    <>
      <div className="border-b-black my-10">
        <h2 className="my-5 text-lg">
          Clarification #{index + 1} | Asked by {clarification.user.companyName}
        </h2>
        <h3 className="my-5">
          Asked on {formatDate(clarification.date)}, Answered on{" "}
          {formatDate(
           clarification.replies[0]?.date
          )}
        </h3>
        <div className="flex-row">
          <h2>Question :</h2>
          <div>
            <h3>{clarification?.question  ?? ''}</h3>
          </div>
        </div>

        <div className="flex-row">
          <h2>Answers :</h2>
          <div>
            <h3>{clarification.replies.length === 0  ? "Not answered by Ethiopost admins." :   clarification.replies.map(
              (reply  : ClarificationReply, index  : number) =>  <>
              <h3> Answer {index+ 1} </h3>  { reply.reply}
              <br></br>
              </>
            
            )}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClarificationComponent;
