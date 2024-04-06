import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

const FormikForm = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string().required("Full Name is required"),
    contact: Yup.string()
      .required("Contact Information is required")
      .matches(/^[0-9]+$/, "Contact Information must be a number"),
    aadharCard: Yup.string().required("Aadhar Card is required"),
    propertyAddress: Yup.string().required("Property Address is required"),
    propertyDescription: Yup.string().required(
      "Property Description is required"
    ),
    deedOrTitle: Yup.string().required("Deed or Title is required"),
    landSurvey: Yup.string().required("Land Survey is required"),
    additionalDocumentation: Yup.string().required(
      "Additional Documentation is required"
    ),
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div>
      <h1 className="orange_gradient text-5xl font-semibold text-center mt-14 pb-4">
        Registration
      </h1>
      <h2 className="desc text-center mt-4 text-xl">
        A simple registration process to get you started with your land
        ownership.
      </h2>
      <Formik
        initialValues={{
          fullName: "",
          contact: "",
          aadharCard: "",
          propertyAddress: "",
          propertyDescription: "",
          deedOrTitle: "",
          landSurvey: "",
          additionalDocumentation: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form className="mt-8">
            <div className="flex flex-col mb-4">
              <label htmlFor="fullName">Full Name</label>
              <Field
                className="h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name="fullName"
                type="text"
                id="fullName"
                required
              />
              <ErrorMessage name="fullName" component="div" />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="contact">Contact Information</label>
              <Field
                className="h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name="contact"
                type="number"
                id="contact"
                required
              />
              <ErrorMessage name="contact" component="div" />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="aadharCard">Aadhar Card</label>
              <Field
                className="h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name="aadharCard"
                type="number"
                id="aadharCard"
                required
              />
              <ErrorMessage name="aadharCard" component="div" />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="propertyAddress">Property Address</label>
              <Field
                className="h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name="propertyAddress"
                type="text"
                id="propertyAddress"
                required
              />
              <ErrorMessage name="propertyAddress" component="div" />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="propertyDescription">Property Description</label>
              <Field
                className="h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name="propertyDescription"
                type="text"
                id="propertyDescription"
                required
              />
              <ErrorMessage name="propertyDescription" component="div" className="text-gray-300"/>
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="deedOrTitle">Deed or Title</label>
              <Field
                className="h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name="deedOrTitle"
                type="text"
                id="deedOrTitle"
                required
              />
              <ErrorMessage name="deedOrTitle" component="div" />
            </div>

            <div className="flex flex-col mb-4">
              <label htmlFor="deedOrTitle">ULPIN</label>
              <Field
                className="h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                name="ULPIN"
                type="text"
                id="ULPIN"
                required
              />
              <ErrorMessage name="ULPIN" component="div" className="text-gray-300"/>
            </div>

            <div className="flex flex-col mb-4">
              <label
                className="h-10 rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                htmlFor="additionalDocumentation"
              >
                Additional Documentation
              </label>
              <Field
                name="additionalDocumentation"
                type="file"
                id="additionalDocumentation"
              />
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded"
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  );
};

export default FormikForm;
