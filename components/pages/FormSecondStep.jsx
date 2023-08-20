import { useFormik } from "formik";
import { useState } from "react";
import * as yup from "yup";
import TextInputField from "../forms/TextInputField";
import TextAreaField from "../forms/TextAreaField";
import { useNavigate } from "react-router-dom";
import FileParser from "../file-parser/FileParser";
import ErrorMessage from "../forms/ErrorMessage";

function FormSecondStep() {
  const getData = localStorage.getItem("project-data");
  const data = JSON.parse(getData);
  const [formData, setFormData] = useState({
    max_X: "",
    min_X: "",
    max_Y: "",
    min_Y: "",
    max_Z: "",
    min_Z: "",
  });
  const navigate = useNavigate();

  // yup schema to validate input data and shwoing user errors accrodingly

  const createProjectSchema = yup.object().shape({
    max_X: yup.string().required("Max X is required"),
    min_X: yup.string().required("Min X is required"),
    max_Y: yup.string().required("Max Y is required"),
    min_Y: yup.string().required("Min Y is required"),
    max_Z: yup.string().required("Max Z is required"),
    min_Z: yup.string().required("Min Z is required"),
  });

  // setting up formik here
  const formik = useFormik({
    initialValues: formData,
    enableReinitialize: true,
    onSubmit: (values) => {
      const payload = { ...data, ...values };
      localStorage.setItem("project-data", JSON.stringify(payload));
      return navigate("/result-page");
    },
    validationSchema: createProjectSchema,
  });
  const formInputStyles = {
    errorStyle:
      "focus:outline-red-400 border-red-400 border mt-1 rounded px-2 py-2 rounded-md",
    normalStyle: "my-1 rounded-md px-2 py-2 focus:outline-none",
  };

  if (data === null) return navigate("/");

  return (
    <section className="flex justify-center items-center bg-slate-50 min-h-screen">
      <div className="w-full min-w-lg mx-4 lg:mx-0 flex flex-col items-center rounded-lg">
        <h1 className="font-bold text-4xl my-4 text-center">
          Add additional information
        </h1>
        <div className="bg-gray-400 w-full mb-8 lg:w-1/2 rounded-md">
          <form
            className="px-8 flex flex-col gap-1 my-6"
            onSubmit={formik.handleSubmit}
          >
            <TextInputField
              label="Project Name"
              value={data.project_name}
              className={formInputStyles.normalStyle}
              disabled={true}
            />
            <TextAreaField
              label="Project Description"
              value={data.project_description}
              className={formInputStyles.normalStyle}
              disabled={true}
            />
            <TextInputField
              label="Client's Name"
              value={data.client_name}
              className={formInputStyles.normalStyle}
              disabled={true}
            />
            <TextInputField
              label="Contractor's Name"
              value={data.contractor_name}
              className={formInputStyles.normalStyle}
              disabled={true}
            />
            <FileParser setFormData={setFormData} />
            <TextInputField
              type="number"
              name="max_X"
              label="Max X"
              placeholder="Enter maximum value of X"
              value={formik.values.max_X}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.max_X && formik.touched.max_X
                  ? formInputStyles.errorStyle
                  : formInputStyles.normalStyle
              }
            />
            {formik.errors.max_X && formik.touched.max_X && (
              <ErrorMessage errorMessage={formik.errors.max_X} />
            )}
            <TextInputField
              type="number"
              name="min_X"
              label="Min X"
              placeholder="Enter minimum value of X"
              value={formik.values.min_X}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.min_X && formik.touched.min_X
                  ? formInputStyles.errorStyle
                  : formInputStyles.normalStyle
              }
            />
            {formik.errors.min_X && formik.touched.min_X && (
              <ErrorMessage errorMessage={formik.errors.min_X} />
            )}
            <TextInputField
              type="number"
              name="max_Y"
              label="Max Y"
              placeholder="Enter maximum value of Y"
              value={formik.values.max_Y}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.max_Y && formik.touched.max_Y
                  ? formInputStyles.errorStyle
                  : formInputStyles.normalStyle
              }
            />
            {formik.errors.max_Y && formik.touched.max_Y && (
              <ErrorMessage errorMessage={formik.errors.max_Y} />
            )}
            <TextInputField
              type="number"
              name="min_Y"
              label="Min Y"
              placeholder="Enter minimum value of Y"
              value={formik.values.min_Y}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.min_Y && formik.touched.min_Y
                  ? formInputStyles.errorStyle
                  : formInputStyles.normalStyle
              }
            />
            {formik.errors.min_Y && formik.touched.min_Y && (
              <ErrorMessage errorMessage={formik.errors.min_Y} />
            )}
            <TextInputField
              type="number"
              name="max_Z"
              label="Max Z"
              placeholder="Enter maximum value of Z"
              value={formik.values.max_Z}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.max_Z && formik.touched.max_Z
                  ? formInputStyles.errorStyle
                  : formInputStyles.normalStyle
              }
            />
            {formik.errors.max_Z && formik.touched.max_Z && (
              <ErrorMessage errorMessage={formik.errors.max_Z} />
            )}
            <TextInputField
              type="number"
              name="min_Z"
              label="Min Z"
              placeholder="Enter minimum value of Z"
              value={formik.values.min_Z}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.min_Z && formik.touched.min_Z
                  ? formInputStyles.errorStyle
                  : formInputStyles.normalStyle
              }
            />
            {formik.errors.min_Z && formik.touched.min_Z && (
              <ErrorMessage errorMessage={formik.errors.min_Z} />
            )}
            <button
              type="submit"
              className="my-6 py-2 bg-gray-300 rounded-lg hover:bg-slate-600 hover:text-white"
            >
              Add Project
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormSecondStep;
