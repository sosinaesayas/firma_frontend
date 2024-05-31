import React, { useRef, useState, useEffect } from "react";

interface FileUploadStatus {
  file: File;
  progress: number;
  status: "ready" | "uploading" | "completed";
}

interface FileBrowseProps {
  onFilesChange: (files: FileUploadStatus[]) => void;
}

const FileBrowse: React.FC<FileBrowseProps> = ({ onFilesChange }) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [files, setFiles] = useState<FileUploadStatus[]>([]);

  useEffect(() => {
    onFilesChange(files);
  }, [files, onFilesChange]);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const selectedFiles = Array.from(event.target.files).map(file => ({
        file,
        progress: 0,
        status: "ready" as const,
      }));
      setFiles(selectedFiles);
    }
  };

  const onChooseFile = () => {
    inputRef.current?.click();
  };

  const handleUpload = (index: number) => {
    const updatedFiles = [...files];
    updatedFiles[index].status = "uploading";
    setFiles(updatedFiles);

    const uploadInterval = setInterval(() => {
      setFiles(prevFiles => {
        const newFiles = [...prevFiles];
        if (newFiles[index].progress >= 100) {
          clearInterval(uploadInterval);
          newFiles[index].status = "completed";
          return newFiles;
        }
        newFiles[index].progress += 10;
        return newFiles;
      });
    }, 300);
  };

  return (
    <div className="flex flex-col items-center border border-gray-300 rounded-lg p-4 w-full">
      <input
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
        className="hidden"
        multiple
      />
      <div className="flex items-center w-full mb-2">
        <input
          type="text"
          placeholder="Browse files..."
          className="bg-white focus:outline-none border-none rounded-l-lg py-2 px-4 block w-full appearance-none leading-normal"
          readOnly
          value={files.length > 0 ? `${files.length} files selected` : ""}
        />
        <button
          type="button"
          className="bg-blue-500 text-white px-4 py-2 rounded-r-lg"
          onClick={onChooseFile}
        >
          Browse
        </button>
      </div>
      {files.map((fileStatus, index) => (
        <div key={index} className="mt-4 w-full max-w-md">
          <p className="text-gray-700 mb-2">Selected File: {fileStatus.file.name}</p>
          {fileStatus.status === "ready" && (
            <button
              type="button"
              className="bg-green-500 text-white px-4 py-2 rounded-md"
              onClick={() => handleUpload(index)}
            >
              Start Upload
            </button>
          )}
          {fileStatus.status === "uploading" && (
            <div className="mt-4">
              <p className="text-gray-700 mb-2">Uploading: {fileStatus.progress}%</p>
              <progress className="w-full" value={fileStatus.progress} max="100"></progress>
            </div>
          )}
          {fileStatus.status === "completed" && (
            <p className="text-green-500 mt-4">Upload completed!</p>
          )}
        </div>
      ))}
    </div>
  );
};

export default FileBrowse;
