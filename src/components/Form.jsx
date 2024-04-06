import { Formik, Field, Form, ErrorMessage } from 'formik'
import * as Yup from 'yup'

const FormikForm = () => {
  const validationSchema = Yup.object({
    fullName: Yup.string()
      .required('Full Name is required'),
    contact: Yup.string()
      .required('Contact Information is required')
      .matches(/^[0-9]+$/, 'Contact Information must be a number'),
    aadharCard: Yup.string()
      .required('Aadhar Card is required'),
    propertyAddress: Yup.string()
      .required('Property Address is required'),
    propertyDescription: Yup.string()
      .required('Property Description is required'),
    deedOrTitle: Yup.string()
      .required('Deed or Title is required'),
    landSurvey: Yup.string()
      .required('Land Survey is required'),
    additionalDocumentation: Yup.string()
      .required('Additional Documentation is required'),
  })

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values)
    setSubmitting(false)
  }

  return (
    <div>
      <h1 className='orange_gradient text-5xl font-semibold text-center mt-14 pb-4'>
        Registration
      </h1>
      <h2 className='desc text-center mt-4 text-xl'>
        A simple registration process to get you started with your land ownership.
      </h2>
      <Formik
        initialValues={{
          fullName: '',
          contact: '',
          aadharCard: '',
          propertyAddress: '',
          propertyDescription: '',
          deedOrTitle: '',
          landSurvey: '',
          additionalDocumentation: '',
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ isSubmitting }) => (
          <Form>
            <div className='flex flex-col mb-4'>
              <label htmlFor='fullName'>Full Name</label>
              <Field
                name='fullName'
                type='text'
                id='fullName'
                required
              />
              <ErrorMessage name='fullName' component='div' />
            </div>

            <div className='flex flex-col mb-4'>
              <label htmlFor='contact'>Contact Information</label>
              <Field
                name='contact'
                type='text'
                id='contact'
                required
              />
              <ErrorMessage name='contact' component='div' />
            </div>

            <div className='flex flex-col mb-4'>
              <label htmlFor='aadharCard'>Identification: Aadhar Card</label>
              <Field
                name='aadharCard'
                type='text'
                id='aadharCard'
                required
              />
              <ErrorMessage name='aadharCard' component='div' />
            </div>

            <div className='flex flex-col mb-4'>
              <label htmlFor='propertyAddress'>Property Details: Property Address</label>
              <Field
                name='propertyAddress'
                type='text'
                id='propertyAddress'
                required
              />
              <ErrorMessage name='propertyAddress' component='div' />
            </div>

            <div className='flex flex-col mb-4'>
              <label htmlFor='propertyDescription'>Property Details: Property Description</label>
              <Field
                name='propertyDescription'
                type='text'
                id='propertyDescription'
                required
              />
              <ErrorMessage name='propertyDescription' component='div' />
            </div>

            <div className='flex flex-col mb-4'>
              <label htmlFor='deedOrTitle'>Ownership Proof: Deed or Title</label>
              <Field
                name='deedOrTitle'
                type='text'
                id='deedOrTitle'
                required
              />
              <ErrorMessage name='deedOrTitle' component='div' />
            </div>

            <div className='flex flex-col mb-4'>
              <label htmlFor='landSurvey'>Ownership Proof: Land Survey</label>
              <Field
                name='landSurvey'
                type='text'
                id='landSurvey'
                required
              />
              <ErrorMessage name='landSurvey' component='div' />
            </div>

            <div className='flex flex-col mb-4'>
              <label htmlFor='additionalDocumentation'>Additional Documentation</label>
              <Field
                name='additionalDocumentation'
                type='text'
                id='additionalDocumentation'
                required
              />
              <ErrorMessage name='additionalDocumentation' component='div' />
            </div>

            <button
              type='submit'
              disabled={isSubmitting}
              className='bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded'
            >
              Save
            </button>
          </Form>
        )}
      </Formik>
    </div>
  )
}

export default FormikForm