import { useState } from "react";
import "./App.css";

function App() {
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
    <>
      <h1>File Reader</h1>
      <h2>{name}</h2>
      <p>{content}</p>
      <input type="file" onChange={handleFileChange} />
    </>
  );
}

export default App;
