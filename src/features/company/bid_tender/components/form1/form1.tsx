import FileUpload from "../fileUpload";
import FileBrowse from "../fileBrowse";
import PasscodeCard from "../passcodeCard";
import UploadCEO from "../uploadCeo"
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";


const Form1 = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1);
  }
  return (
    <div className="p-6 mb-10 space-y-6">

<div className="relative bg-white shadow-lg rounded-lg p-6 mb-6 w-full border border-gray-200 flex items-start">
  <button
    onClick={handleBackClick}
    className="text-gray-700 hover:text-gray-900"
    style={{ marginTop: '-0.25rem', marginRight: '1rem' }} 
  >
    <FontAwesomeIcon icon={faArrowLeft} className="h-6 w-6" />
  </button>
  <p className="text-gray-900">
    Hey company, this is the text we have for now. Hey company, this is the
    text we have for now. Hey company, this is the text we have for now. Hey
    company, this is the text we have for now. Hey company, this is the text
    we have for now.
  </p>
</div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full border border-gray-200">
        <h4 className="text-lg font-semibold mb-4">Technical Proposal</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <FileBrowse />
          </div>
          <div className="flex flex-col space-y-4">
            <UploadCEO/>
            <FileUpload />
          </div>
        </div>
      </div>

      <div className="w-full mx-auto bg-white shadow-lg rounded-lg p-6 flex flex-col items-center mb-6 border border-gray-200">
        <p className="text-gray-900 mb-4">Your unique Passcode is</p>
        <p className="text-gray-700 mb-4">The technical you just saved will be encrypted up on submission. The opening committe will not be able to see the quotation unless your PIN CODE on opening day. You may save this passcode and losing this number will disqualify you from the bidding</p>
        <PasscodeCard />
        <Link to="/" className="text-blue-500 hover:underline mb-4">
          SMS/E-mail me this password
        </Link>
      </div>

      <div className="flex justify-end">
        <button className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Save and Continue
        </button>
      </div>
    </div>
  );
};

export default Form1;
