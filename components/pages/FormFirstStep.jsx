import { useFormik } from "formik";
import * as yup from "yup";
import TextInputField from "../forms/TextInputField";
import TextAreaField from "../forms/TextAreaField";
import ErrorMessage from "../forms/ErrorMessage";
import { useNavigate } from "react-router-dom";

function FormFirstStep() {
  const navigate = useNavigate();
  // yup schema to validate input data and shwoing user errors accrodingly
  const createProjectSchema = yup.object().shape({
    project_name: yup
      .string()
      .required("Project name is required")
      .matches(/^[a-z|A-Z]+/, "Must start with alphabetic characters")
      .min(5, "Project name must be at least 5 characters")
      .max(40, "Project name cannot exceed 40 characters"),
    project_description: yup
      .string()
      .required("Project description is required")
      .matches(/^[a-z|A-Z]+/, "Must start with alphabetic characters")
      .min(20, "Project description must be at least 20 characters")
      .max(300, "Project description cannot exceed 300 characters"),
    client_name: yup
      .string()
      .required("Client's name is required")
      .matches(/^[a-z|A-Z]+/, "Must start with alphabetic characters")
      .min(5, "Client's name must be at least 5 characters")
      .max(30, "Client's name cannot exceed 30 characters"),
    contractor_name: yup
      .string()
      .required("Contractor's name is required")
      .matches(/^[a-z|A-Z]+/, "Must start with alphabetic characters")
      .min(5, "Contractor's name must be at least 5 characters")
      .max(30, "Contractor's name cannot exceed 30 characters"),
  });

  // setting up formik here
  const formik = useFormik({
    initialValues: {
      project_name: "",
      project_description: "",
      client_name: "",
      contractor_name: "",
    },
    onSubmit: (values, { resetForm }) => {
      // alert(JSON.stringify(values, null, 2));
      resetForm();
      return navigate("/second-step");
    },
    validationSchema: createProjectSchema,
  });

  const formInputStyles = {
    errorStyle:
      "focus:outline-red-400 border-red-400 border-2 mt-1 rounded px-2 py-1",
    normalStyle: "my-1 rounded px-2 py-1 focus:outline-none",
  };

  return (
    <section className="flex justify-center items-center bg-slate-50 h-screen">
      <div className="w-full md:w-3/5 mx-4 lg:mx-0 flex flex-col items-center gap-8 rounded-lg">
        <h1 className="font-bold text-4xl">Add a project</h1>
        <div className="bg-gray-200 w-full lg:w-1/2 rounded-md">
          <form
            className="px-10 flex flex-col my-10"
            onSubmit={formik.handleSubmit}
          >
            <TextInputField
              type="text"
              name="project_name"
              label="Project Name"
              placeholder="Enter your project's name"
              value={formik.values.project_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.project_name && formik.touched.project_name
                  ? formInputStyles.errorStyle
                  : formInputStyles.normalStyle
              }
            />
            {formik.errors.project_name && formik.touched.project_name && (
              <ErrorMessage errorMessage={formik.errors.project_name} />
            )}
            <TextAreaField
              type="text"
              name="project_description"
              label="Project Description"
              placeholder="Enter your project's description"
              value={formik.values.project_description}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.project_description &&
                formik.touched.project_description
                  ? formInputStyles.errorStyle
                  : formInputStyles.normalStyle
              }
            />
            {formik.errors.project_description &&
              formik.touched.project_description && (
                <ErrorMessage
                  errorMessage={formik.errors.project_description}
                />
              )}
            <TextInputField
              type="text"
              name="client_name"
              label="Client's Name"
              placeholder="Enter client's name"
              value={formik.values.client_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.client_name && formik.touched.client_name
                  ? formInputStyles.errorStyle
                  : formInputStyles.normalStyle
              }
            />
            {formik.errors.client_name && formik.touched.client_name && (
              <ErrorMessage errorMessage={formik.errors.client_name} />
            )}
            <TextInputField
              type="text"
              name="contractor_name"
              label="Contractor's Name"
              placeholder="Enter contractor's name"
              value={formik.values.contractor_name}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={
                formik.errors.contractor_name && formik.touched.contractor_name
                  ? formInputStyles.errorStyle
                  : formInputStyles.normalStyle
              }
            />
            {formik.errors.contractor_name &&
              formik.touched.contractor_name && (
                <ErrorMessage errorMessage={formik.errors.contractor_name} />
              )}
            <button
              type="submit"
              className="my-6 py-2 bg-gray-400 rounded-lg hover:bg-slate-600 hover:text-white"
            >
              Add Project
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default FormFirstStep;
