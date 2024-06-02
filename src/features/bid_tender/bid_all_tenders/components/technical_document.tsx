import FileUpload from "../../shared_components/fileUpload";
import FileBrowse, { FileUploadStatus } from "../../shared_components/fileBrowse";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import { AppDispatch, RootState } from "../../../../store/store";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {  getTenderById , updateFiles , updateCpoFiles} from "../bid_tender_slice";
import { useEffect } from "react";
const TechnicalDocument = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();

  const handleBackClick = () => {
    navigate(-1);
  };

  const { tenderId } = useParams<{ tenderId: string }>();
  // get tender id from route params

  

  useEffect(() => {
    dispatch(getTenderById(tenderId || ""));
  }
  , [dispatch, tenderId]);

 
  const tenderDetail = useSelector((state: RootState) => state.bidTender.tenderDetail);
  console.log(tenderDetail);
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      dispatch(updateCpoFiles(Array.from(event.target.files)));
    }
  };

  
  const handleFileUploadChange = (files: FileUploadStatus[]) => {
    dispatch(updateFiles(files.map((file) => file.file)));
  };
  
  return (
    <div className="p-6 mb-10 space-y-6">

<div className="relative bg-white shadow-lg rounded-lg p-6 mb-6 w-full border border-gray-200 flex items-start">
  <button
    onClick={handleBackClick}
    className="text-gray-700 hover:text-gray-900"
    style={{ marginTop: '-0.25rem', marginRight: '1rem' }} // Adjust margins as needed
  >
    {/* <FontAwesomeIcon icon={faArrowLeft} className="h-6 w-6" /> */}
  </button>
  <p className="text-gray-900">
    {tenderDetail?.description}
  </p>
</div>




      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full border border-gray-200">
        <h4 className="text-lg font-semibold mb-4">Technical Proposal</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <FileBrowse onFilesChange={handleFileUploadChange}  />
          </div>
          <div className="flex flex-col space-y-4">
          <div className="border border-red-500 rounded-lg bg-red-100 p-2">
            A scanned copy of the CPO (required)
          </div>

            <FileUpload onFilesChange = {handleFileChange } />
          </div>
        </div>
      </div>

      <div className="flex justify-end">
        <button
        onClick={()=>{
          navigate(`/company/bid-tender-2/${tenderId}`);
        }}
        className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">
          Save and Continue
        </button>
      </div>
    </div>
  );
};

export default TechnicalDocument;