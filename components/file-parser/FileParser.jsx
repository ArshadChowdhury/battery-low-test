import { useState } from "react";

const FileParser = () => {
  const [name, setName] = useState("");
  const [content, setContent] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.readAsText(file);
    reader.onload = () => {
      setName(file.name);
      setContent(reader.result.split("\n"));
    };
    reader.onerror = () => {
      console.log("file error", reader.error);
    };
  };

  console.log(name);
  console.log(content);
  return (
    <div>
      <h1>File Reader</h1>
      <h2>{name}</h2>
      <p>{content}</p>
      <input type="file" onChange={handleFileChange} />
    </div>
  );
};

export default FileParser;
