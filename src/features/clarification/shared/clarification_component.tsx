import React from "react";
import { Clarification, ClarificationReply } from "../../../data/interfaces/clarification";

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
      <div className="bg-white shadow-lg rounded-lg p-6 my-6">
        <div className="border-b border-gray-300 pb-6 mb-6">
          <h2 className="text-lg font-semibold mb-2 text-blue-700">
            Clarification #{index + 1} | Asked by {clarification.user.companyName}
          </h2>
          <h3 className="text-sm text-gray-600 mb-2">
            Asked on {formatDate(clarification.date)}, Answered on{" "}
            {formatDate(
             clarification.replies[0]?.date
            )}
          </h3>
          <div className="flex items-start mb-4">
            <h2 className="mr-2 font-semibold text-gray-700">Question :</h2>
            <div>
              <p className="text-sm text-gray-800">{clarification?.question ?? ''}</p>
            </div>
          </div>

          <div className="flex items-start">
            <h2 className="mr-2 font-semibold text-gray-700">Answers :</h2>
            <div>
              <div className="space-y-2">
                {clarification.replies.length === 0 ? (
                  <p className="text-sm text-gray-800">Not answered by Ethiopost admins.</p>
                ) : (
                  clarification.replies.map((reply: ClarificationReply, index: number) => (
                    <div key={index}>
                      <p className="text-sm font-semibold text-blue-700">Answer {index + 1}</p>
                      <p className="text-sm text-gray-800">{reply.reply}</p>
                    </div>
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ClarificationComponent;

