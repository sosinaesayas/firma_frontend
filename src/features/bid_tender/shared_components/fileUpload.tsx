import React, { useRef, useState, useEffect } from "react";

const FileUpload: React.FC = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [progress, setProgress] = useState(0);
  const [uploadStatus, setUploadStatus] = useState("select");
  const [dragActive, setDragActive] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files && event.target.files.length > 0) {
      const file = event.target.files[0];
      setSelectedFile(file);
      setUploadStatus("ready");
      if (file.type.startsWith("image/")) {
        setImagePreview(URL.createObjectURL(file));
      } else {
        setImagePreview(null);
      }
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

  const handleDragOver = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragActive(false);
  };

  const handleDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    setDragActive(false);
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      const file = event.dataTransfer.files[0];
      setSelectedFile(file);
      setUploadStatus("ready");
      if (file.type.startsWith("image/")) {
        setImagePreview(URL.createObjectURL(file));
      } else {
        setImagePreview(null);
      }
    }
  };

  useEffect(() => {
    return () => {
      if (imagePreview) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  return (
    <div className="flex flex-col items-center justify-center  bg-gray-100 p-4">
     
         
     <input
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
        className="hidden"
        id="inputFile"
      />
    

      {!selectedFile && (
        <div
          className={`w-full max-w-md h-32 p-6 border-2 border-dashed rounded-lg cursor-pointer text-center flex items-center justify-center ${
            dragActive ? "border-blue-500 bg-blue-100" : "border-gray-300"
          }`}
          onClick={onChooseFile}
          onDragOver={handleDragOver}
          onDragLeave={handleDragLeave}
          onDrop={handleDrop}
        >
          <p className="text-gray-500">
            Drag and drop a file here or <span className="text-blue-500">browse</span>
          </p>
        </div>
      )}

      {selectedFile && (
        <div className="mt-4 w-full max-w-md">
          <p className="text-gray-700 mb-2">Selected File: {selectedFile.name}</p>
          {imagePreview && (
            <img
              src={imagePreview}
              alt="Preview"
              className="w-full h-auto max-h-64 object-contain mb-4 border border-gray-300 rounded-lg"
            />
          )}
          {uploadStatus === "ready" && (
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md"
              onClick={handleUpload}
            >
              Start Upload
            </button>
          )}
          {uploadStatus === "uploading" && (
            <div className="mt-4">
              <p className="text-gray-700 mb-2">Uploading: {progress}%</p>
              <progress className="w-full" value={progress} max="100"></progress>
            </div>
          )}
          {uploadStatus === "completed" && (
            <p className="text-green-500 mt-4">Upload completed!</p>
          )}
        </div>
      )}
    </div>
  );
};

export default FileUpload;
