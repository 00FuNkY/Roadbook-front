import axios from "axios";
import React, { useContext, useState } from "react";
import { context } from "./context";

function FileUploadPage() {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const { tokenApp } = useContext(context);

  const changeHandler = (event) => {
    console.log(event.target.files);
    setSelectedFile(event.target.files[0]);
    setIsSelected(true);
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("files", selectedFile);

    await axios.post("http://localhost:5000/city/1/upload", formData, {
      headers: {
        Authorization: `Bearer ${tokenApp}`,
        "content-type": "multipart/form-data",
      },
    });
  };

  return (
    <div>
      <input type="file" name="file" onChange={changeHandler} />
      {isSelected ? (
        <div>
          <p>Filename: {selectedFile.name}</p>
          <p>Filetype: {selectedFile.type}</p>
          <p>Size in bytes: {selectedFile.size}</p>
          <p>
            lastModifiedDate :{" "}
            {selectedFile.lastModifiedDate.toLocaleDateString()}
          </p>
        </div>
      ) : (
        <p>Select a file to show details</p>
      )}
      <div>
        <button onClick={handleSubmission}>Submit</button>
      </div>
    </div>
  );
}

export default FileUploadPage;
