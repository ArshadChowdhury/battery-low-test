import { useState } from "react";

const FileParser = ({ setFormData }) => {
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (!file) {
      setErrorMessage("");
      setFormData({
        max_X: "",
        min_X: "",
        max_Y: "",
        min_Y: "",
        max_Z: "",
        min_Z: "",
      });
    }

    if (file.type === "text/csv") {
      setErrorMessage("");
      const reader = new FileReader();
      reader.readAsText(file);
      reader.onload = () => {
        let arrObject = [];
        let lines = reader.result?.split("\n");
        let headers = lines[0].split(",");

        for (let i = 1; i < lines.length; i++) {
          let rowData = lines[i].split(",");
          arrObject[i] = {};
          for (let j = 0; j < rowData.length; j++) {
            arrObject[i][headers[j]] = rowData[j];
          }
        }

        const x = [];
        const y = [];
        const z = [];

        arrObject.map((element) => {
          element.X && x.push(parseFloat(element.X));
          element.Y && y.push(parseFloat(element.Y));
          element.Z && z.push(parseFloat(element.Z));
        });
        const getData = localStorage.getItem("project-data");
        const data = JSON.parse(getData);
        const values = {
          max_X: Math.max(...x),
          min_X: Math.min(...x),
          max_Y: Math.max(...y),
          min_Y: Math.min(...y),
          max_Z: Math.max(...z),
          min_Z: Math.min(...z),
        };

        console.log({ ...values });

        setFormData({
          ...values,
        });
        console.log(data);
        const payload = { ...data, ...values };
        // data.push({ ...values });
        // const newData = [...]
        console.log(data);
        localStorage.setItem("project-data", JSON.stringify(payload));
      };

      reader.onerror = () => {
        console.log("file error", reader.error);
      };
    } else {
      setErrorMessage("Wrong file format ! Please upload a CSV file");
      return;
    }
  };

  return (
    <>
      <label htmlFor="file">Upload a CSV file</label>
      <input id="file" type="file" accept="csv" onChange={handleFileChange} />
      <p className="text-red-800">{errorMessage.length > 0 && errorMessage}</p>
    </>
  );
};

export default FileParser;
