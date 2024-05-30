import FileUpload from "../fileUpload";
import FileBrowse from "../fileBrowse";
import PasscodeCard from "../passcodeCard";
import {Link} from "react-router-dom";

const Form1 = () => {
  return (
    <div className="p-4 mb-10">
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full">
        <p className="text-gray-900">
          hey company this is the text we have for now, hey company this is the
          text we have for now, hey company this is the text we have for now hey
          company this is the text we have for now hey company this is the text
          we have for now
        </p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full">
        <h4 className="text-lg font-semibold mb-4">Technical Proposal</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <FileBrowse />
          </div>
          <div className="flex flex-col">
            <FileBrowse/>
            <FileUpload />
          </div>
        </div>
      </div>

     <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col items-center mb-6">
     <p className="text-gray-900 mb-4 ">Enter your 6-digit passcode:</p>
      <p className="text-gray-700 mb-4 ">Please enter the code sent to your email.</p>
       <PasscodeCard/>
      <Link to = "/" className="text-blue-500 hover:underline mb-4">Didn't receive the code? Resend</Link>
     </div>

     <div className="flex justify-end">
      <button className="bg-white shadow-lg rounded-lg">Save and Continue</button>
     </div>
  

    </div>
  );
};

export default Form1;
