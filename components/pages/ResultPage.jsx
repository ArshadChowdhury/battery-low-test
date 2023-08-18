import html2canvas from "html2canvas";
import jsPDF from "jspdf";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const ResultPage = () => {
  const pdfRef = useRef();
  const navigate = useNavigate();
  const pdfMobileRef = useRef();
  const getData = localStorage.getItem("project-data");
  const data = JSON.parse(getData);
  const style = {
    headingStyle: "p-3 text-left text-sm font-semibold text-gray-900",
    resultNumberStyles: "px-3 text-left",
    resultTextStyle: "p-3 text-sm text-gray-500 break-words truncate",
    cardBetween: "flex justify-between items-center truncate",
  };

  const downloadPDF = () => {
    const input = pdfRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("l", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      console.log(imgWidth);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 45;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("result.pdf");
    });
  };

  const downloadPDFMobile = () => {
    const input = pdfMobileRef.current;
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL("img/png");
      const pdf = new jsPDF("l", "mm", "a4", true);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imgWidth = canvas.width;
      const imgHeight = canvas.height;
      const ratio = Math.min(pdfWidth / imgWidth, pdfHeight / imgHeight);
      console.log(imgWidth);
      const imgX = (pdfWidth - imgWidth * ratio) / 2;
      const imgY = 10;
      pdf.addImage(
        imgData,
        "PNG",
        imgX,
        imgY,
        imgWidth * ratio,
        imgHeight * ratio
      );
      pdf.save("result.pdf");
    });
  };

  if (data === null) return navigate("/");

  return (
    <>
      <section className="hidden lg:flex flex-col flex-wrap justify-center items-center gap-8 min-h-screen">
        <div className="flex flex-col items-center" ref={pdfRef}>
          <h1 className="text-4xl text-gray-700 font-extrabold my-6">Result</h1>
          <table className="mx-4 divide-y divide-gray-300 shadow-lg truncate">
            <thead className="bg-gray-50 rounded-t-xl">
              <tr className="divide-x divide-gray-200">
                <th scope="col" className={style.headingStyle}>
                  Project Name
                </th>
                <th scope="col" className={style.headingStyle}>
                  Project Description
                </th>
                <th scope="col" className={style.headingStyle}>
                  Client&apos;s Name
                </th>
                <th scope="col" className={style.headingStyle}>
                  Contractor&apos;s Name
                </th>
                <th scope="col" className={style.headingStyle}>
                  Max X
                </th>
                <th scope="col" className={style.headingStyle}>
                  Min X
                </th>
                <th scope="col" className={style.headingStyle}>
                  Max Y
                </th>
                <th scope="col" className={style.headingStyle}>
                  Min Y
                </th>
                <th scope="col" className={style.headingStyle}>
                  Max Z
                </th>

                <th scope="col" className={style.headingStyle}>
                  Min Z
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 bg-white">
              <tr className="divide-x divide-gray-200">
                <td className={style.resultTextStyle}>{data.project_name}</td>
                <td className={style.resultTextStyle}>
                  {data.project_description}
                </td>
                <td className={style.resultTextStyle}>{data.client_name}</td>
                <td className={style.resultTextStyle}>
                  {data.contractor_name}
                </td>
                <td className={style.resultNumberStyles}>{data.max_X}</td>
                <td className={style.resultNumberStyles}>{data.min_X}</td>
                <td className={style.resultNumberStyles}> {data.max_Y}</td>
                <td className={style.resultNumberStyles}>{data.min_Y}</td>
                <td className={style.resultNumberStyles}>{data.max_Z}</td>
                <td className={style.resultNumberStyles}>{data.min_Z}</td>
              </tr>
            </tbody>
          </table>
        </div>
        <button
          onClick={downloadPDF}
          className="px-4 py-2 bg-gray-500 rounded-lg text-slate-50"
        >
          Download result PDF
        </button>
      </section>
      <section
        ref={pdfMobileRef}
        className="flex flex-col gap-4 mx-4 items-center lg:hidden"
      >
        <h1 className="text-4xl text-gray-700 font-extrabold my-6">Result</h1>
        <div className="flex flex-col w-full gap-4 bg-white border shadow-md border-gray-200 rounded-lg p-6 divide-y divide-gray-200">
          <h2 className={style.cardBetween}>
            Project Name
            <span className="text-gray-700 font-semibold px-2 text-right truncate py-4">
              {data.project_name}
            </span>
          </h2>
          <h2 className={style.cardBetween}>
            Client&apos;s Name
            <span className="px-2 text-right truncate py-4">
              {data.client_name}
            </span>
          </h2>
          <h2 className={style.cardBetween}>
            Project Description
            <span className="px-2 text-right truncate py-4">
              {data.project_description}
            </span>
          </h2>
          <h2 className={style.cardBetween}>
            Contractor&apos;s Name
            <span className="px-2 truncate py-4">{data.contractor_name}</span>
          </h2>

          <h2 className={style.cardBetween}>
            Max X<span className="px-2 truncate py-4">{data.max_X}</span>
          </h2>

          <h2 className={style.cardBetween}>
            Min X<span className="px-2 truncate py-4">{data.min_X}</span>
          </h2>

          <h2 className={style.cardBetween}>
            Max Y <span className="px-2 truncate py-4">{data.max_Y}</span>
          </h2>

          <h2 className={style.cardBetween}>
            Min Y<span className="px-2 truncate py-4">{data.min_Y}</span>
          </h2>

          <h2 className={style.cardBetween}>
            Max Z <span className="px-2 truncate py-4">{data.max_Z}</span>
          </h2>

          <h2 className={style.cardBetween}>
            Min Z <span className="px-2 truncate py-4">{data.min_Z}</span>
          </h2>
        </div>

        <button
          onClick={downloadPDFMobile}
          className="px-4 py-2 bg-gray-500 rounded-lg text-slate-50"
        >
          Download result PDF
        </button>
      </section>
    </>
  );
};

export default ResultPage;
