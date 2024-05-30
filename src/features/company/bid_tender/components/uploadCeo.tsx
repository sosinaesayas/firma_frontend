
import React, { useRef, useState } from "react";

const FileBrowseCeo: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("select");

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      setSelectedFile(event.target.files[0]);
      setUploadStatus("ready");
    }
  };

  const onChooseFile = () => {
    inputRef.current?.click();
  };

  const handleUpload = () => {
    setUploadStatus("uploading");
    const uploadInterval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(uploadInterval);
          setUploadStatus("completed");
          return 100;
        }
        return prev + 10;
      });
    }, 300);
  };

  return (
    <div className="flex items-center border border-gray-300 rounded-lg">
      <input
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
        className="hidden"
      />
      <input
        type="text"
        placeholder="Browse file..."
        className="bg-white focus:outline-none border-none rounded-l-lg py-2 px-4 block w-full appearance-none leading-normal"
        readOnly
        value={selectedFile ? selectedFile.name : ""}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
        onClick={onChooseFile}
      >
        Browse
      </button>
      {selectedFile && uploadStatus === "ready" && (
        <button
          className="bg-green-500 text-white px-4 py-2 rounded ml-2"
          onClick={handleUpload}
        >
          Upload
        </button>
      )}
      {uploadStatus === "uploading" && (
        <div className="ml-4">
          <p className="text-gray-700 mb-2">Uploading: {progress}%</p>
          <progress className="w-full" value={progress} max="100"></progress>
        </div>
      )}
      {uploadStatus === "completed" && (
        <p className="text-green-500 ml-4">Upload completed!</p>
      )}
    </div>
  );
};

export default FileBrowseCeo;
