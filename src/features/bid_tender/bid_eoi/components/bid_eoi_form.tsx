import React, { useState } from "react";
import { useParams } from "react-router-dom";
import FileBrowse from "../../shared_components/fileBrowse";
import { AppDispatch, RootState } from "../../../../store/store";
import { postEoiBidForm} from "../bid_eoi_slice";
import { useDispatch, useSelector } from "react-redux";
interface FileUploadStatus {
  file: File;
  progress: number;
  status: "ready" | "uploading" | "completed";
}

const BidExpressionOfInterestForm: React.FC = () => {
  const dispatch: AppDispatch = useDispatch();
  const { status , error } = useSelector(
    (state: RootState) => state.bidExpressionOfInterest
  );
  const { tenderId } = useParams<{ tenderId: string }>();
  const [files, setFiles] = useState<FileUploadStatus[]>([]);
  const [timeline, setTimeline] = useState("");
  const [price, setPrice] = useState("");

  const handleFilesChange = (files: FileUploadStatus[]) => {
    setFiles(files);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("tenderId", tenderId || "");
    formData.append("timeline", timeline);
    formData.append("price", price);

    files.forEach((fileStatus) => {
      if (fileStatus.status === "completed") {
        formData.append("technicalDocument", fileStatus.file);
      }
    });

    dispatch(postEoiBidForm(formData));
 };

 if(status === "succeeded"){
   return <div>
    <h1>
      Success!
    </h1>
   </div>
  }

  return (
    <form className="p-4 mb-10" onSubmit={handleSubmit}>
     {error && <div className="text-red-500 text-sm mb-4">{error}</div>}
      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full">
        <p className="text-gray-900">Tender ID: {tenderId}</p>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full">
        <h4 className="text-lg font-semibold mb-4">Technical Proposal</h4>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <FileBrowse onFilesChange={handleFilesChange} />
          </div>
          <div className="flex flex-col">
            <label className="mb-2">Timeline</label>
            <div className="relative">
              <input
                type="date"
                value={timeline}
                onChange={(e) => setTimeline(e.target.value)}
                className="bg-white border border-gray-300 rounded-lg py-2 px-4 w-full"
              />
              <span className="absolute right-3 top-3">
                <i className="fa fa-calendar" />
              </span>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow-lg rounded-lg p-6 mb-6 w-full">
        <label className="mb-2">Price</label>
        <input
          type="number"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          className="bg-white border border-gray-300 rounded-lg py-2 px-4 w-full"
        />
      </div>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Save and Continue
        </button>
      </div>
    </form>
  );
};

export default BidExpressionOfInterestForm;
