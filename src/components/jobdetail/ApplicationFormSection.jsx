import { useState } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import { HiOutlineUpload } from 'react-icons/hi'
import { AiOutlineFilePdf, AiOutlineFileWord, AiOutlineClose } from 'react-icons/ai'
import { IoIosSend } from 'react-icons/io'

const ApplicationFormSection = () => {
  const [resumeFiles, setResumeFiles] = useState([])
  const [coverLetterFiles, setCoverLetterFiles] = useState([])

  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, 'Name must be at least 2 characters')
      .max(50, 'Name must be less than 50 characters')
      .required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    phone: Yup.string()
      .matches(/^[0-9+\-\s()]*$/, 'Phone number is not valid')
      .min(10, 'Phone number must be at least 10 digits')
      .required('Phone number is required'),
    message: Yup.string()
      .min(10, 'Message must be at least 10 characters')
      .max(500, 'Message must be less than 500 characters'),
    terms: Yup.boolean()
      .oneOf([true], 'You must accept the terms and conditions')
      .required('You must accept the terms and conditions'),
  })

  // Formik setup
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
      terms: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // Handle form submission here
      const formData = {
        ...values,
        resumeFiles: resumeFiles.map(f => f.file),
        coverLetterFiles: coverLetterFiles.map(f => f.file),
      }
      console.log('Form submitted:', formData)
      
      // Simulate API call
      setTimeout(() => {
        alert('Application submitted successfully!')
        resetForm()
        setResumeFiles([])
        setCoverLetterFiles([])
        setSubmitting(false)
      }, 1000)
    },
  })

  const handleFileUpload = (e, type) => {
    const files = Array.from(e.target.files)
    const currentFiles = type === 'resume' ? resumeFiles : coverLetterFiles
    const otherFiles = type === 'resume' ? coverLetterFiles : resumeFiles
    const setFiles = type === 'resume' ? setResumeFiles : setCoverLetterFiles
    const otherType = type === 'resume' ? 'cover letter' : 'resume'

    // Check if adding new files would exceed the limit
    if (currentFiles.length + files.length > 5) {
      alert(`You can only upload a maximum of 5 files for ${type}`)
      return
    }

    // Check for duplicate files in current section and other section
    const duplicatesInCurrent = []
    const duplicatesInOther = []
    const newFiles = []

    files.forEach(file => {
      const fileSize = (file.size / 1024).toFixed(2) + ' KB'
      
      // Check if file exists in current section
      const isDuplicateInCurrent = currentFiles.some(existingFile => 
        existingFile.name === file.name && existingFile.file.size === file.size
      )

      // Check if file exists in other section
      const isDuplicateInOther = otherFiles.some(existingFile => 
        existingFile.name === file.name && existingFile.file.size === file.size
      )

      if (isDuplicateInCurrent) {
        duplicatesInCurrent.push(file.name)
      } else if (isDuplicateInOther) {
        duplicatesInOther.push(file.name)
      } else {
        newFiles.push({
          file,
          name: file.name,
          size: fileSize,
          type: file.type
        })
      }
    })

    // Show alert if duplicates found
    if (duplicatesInCurrent.length > 0) {
      alert(`The following file(s) are already uploaded in ${type}:\n${duplicatesInCurrent.join('\n')}`)
    }
    
    if (duplicatesInOther.length > 0) {
      alert(`The following file(s) are already uploaded in ${otherType}:\n${duplicatesInOther.join('\n')}`)
    }

    // Add only non-duplicate files
    if (newFiles.length > 0) {
      setFiles([...currentFiles, ...newFiles])
    }

    e.target.value = '' // Reset input
  }

  const removeFile = (index, type) => {
    if (type === 'resume') {
      setResumeFiles(resumeFiles.filter((_, i) => i !== index))
    } else {
      setCoverLetterFiles(coverLetterFiles.filter((_, i) => i !== index))
    }
  }

  const getFileIcon = (fileType) => {
    if (fileType.includes('pdf')) {
      return <AiOutlineFilePdf className="text-red-500 text-2xl" />
    }
    return <AiOutlineFileWord className="text-blue-500 text-2xl" />
  }

  return (
    <div className="max-w-[95vw] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 lg:py-20">
      <div className="max-w-full">
        <h2 
          style={{
            fontFamily: 'Epilogue', 
            fontWeight: 700, 
            fontSize: window.innerWidth < 640 ? '32px' : '40px', 
            lineHeight: '120%', 
            letterSpacing: '0%'
          }} 
          className="text-black mb-2"
        >
          Interested?
        </h2>
        <h3 
          style={{
            fontFamily: 'Epilogue', 
            fontWeight: 700, 
            fontSize: window.innerWidth < 640 ? '32px' : '40px', 
            lineHeight: '120%', 
            letterSpacing: '0%'
          }} 
          className="text-black mb-6"
        >
          Hit us up.
        </h3>
        
        <p 
          style={{
            fontFamily: 'DM Sans', 
            fontWeight: 300, 
            fontSize: '16px', 
            lineHeight: '150%', 
            letterSpacing: '0%'
          }} 
          className="text-gray-700 mb-8"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        {/* Application Form */}
        <form onSubmit={formik.handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label 
                htmlFor="name" 
                style={{
                  fontFamily: 'DM Sans', 
                  fontWeight: 400, 
                  fontSize: '16px', 
                  lineHeight: '150%', 
                  letterSpacing: '0%'
                }} 
                className="block text-black mb-2"
              >
                Name*
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-3 border rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                  formik.touched.name && formik.errors.name
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="mt-1 text-sm text-red-500">{formik.errors.name}</p>
              )}
            </div>
            <div>
              <label 
                htmlFor="email" 
                style={{
                  fontFamily: 'DM Sans', 
                  fontWeight: 400, 
                  fontSize: '16px', 
                  lineHeight: '150%', 
                  letterSpacing: '0%'
                }} 
                className="block text-black mb-2"
              >
                Email*
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className={`w-full px-4 py-3 border rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                  formik.touched.email && formik.errors.email
                    ? 'border-red-500'
                    : 'border-gray-300'
                }`}
              />
              {formik.touched.email && formik.errors.email && (
                <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
              )}
            </div>
          </div>

          <div>
            <label 
              htmlFor="phone" 
              style={{
                fontFamily: 'DM Sans', 
                fontWeight: 400, 
                fontSize: '16px', 
                lineHeight: '150%', 
                letterSpacing: '0%'
              }} 
              className="block text-black mb-2"
            >
              Phone*
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formik.values.phone}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-3 border rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent ${
                formik.touched.phone && formik.errors.phone
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            />
            {formik.touched.phone && formik.errors.phone && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.phone}</p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label 
                htmlFor="resume" 
                style={{
                  fontFamily: 'DM Sans', 
                  fontWeight: 400, 
                  fontSize: '16px', 
                  lineHeight: '150%', 
                  letterSpacing: '0%'
                }} 
                className="block text-black mb-2"
              >
                Resume (optional){resumeFiles.length > 0 && ` - Max upload limit: ${resumeFiles.length}/5`}
              </label>
              <label 
                htmlFor="resume" 
                className={`w-full px-4 py-3 border border-red-500 bg-white flex items-center justify-center gap-2 transition-all duration-300 hover:bg-red-50 hover:border-red-600 group ${resumeFiles.length >= 5 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <input
                  type="file"
                  id="resume"
                  name="resume"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  multiple
                  onChange={(e) => handleFileUpload(e, 'resume')}
                  disabled={resumeFiles.length >= 5}
                />
                <HiOutlineUpload className="text-red-500 text-xl transition-transform duration-300 group-hover:scale-110" />
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-red-500 transition-colors duration-300 group-hover:text-red-600"
                >
                  Upload Resume
                </span>
              </label>
              
              {/* Resume Files Preview */}
              {resumeFiles.length > 0 && (
                <div className="mt-3 space-y-2">
                  {resumeFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        {getFileIcon(file.type)}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                          <p className="text-xs text-gray-500">{file.size}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index, 'resume')}
                        className="ml-2 text-red-500 hover:text-red-700 transition-colors"
                      >
                        <AiOutlineClose className="text-lg" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
            <div>
              <label 
                htmlFor="coverLetter" 
                style={{
                  fontFamily: 'DM Sans', 
                  fontWeight: 400, 
                  fontSize: '16px', 
                  lineHeight: '150%', 
                  letterSpacing: '0%'
                }} 
                className="block text-black mb-2"
              >
                Cover Letter (optional){coverLetterFiles.length > 0 && ` - Max upload limit: ${coverLetterFiles.length}/5`}
              </label>
              <label 
                htmlFor="coverLetter" 
                className={`w-full px-4 py-3 border border-red-500 bg-white flex items-center justify-center gap-2 transition-all duration-300 hover:bg-red-50 hover:border-red-600 group ${coverLetterFiles.length >= 5 ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}
              >
                <input
                  type="file"
                  id="coverLetter"
                  name="coverLetter"
                  className="hidden"
                  accept=".pdf,.doc,.docx"
                  multiple
                  onChange={(e) => handleFileUpload(e, 'coverLetter')}
                  disabled={coverLetterFiles.length >= 5}
                />
                <HiOutlineUpload className="text-red-500 text-xl transition-transform duration-300 group-hover:scale-110" />
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-red-500 transition-colors duration-300 group-hover:text-red-600"
                >
                  Upload Cover Letter
                </span>
              </label>
              
              {/* Cover Letter Files Preview */}
              {coverLetterFiles.length > 0 && (
                <div className="mt-3 space-y-2">
                  {coverLetterFiles.map((file, index) => (
                    <div key={index} className="flex items-center justify-between p-3 bg-gray-50 border border-gray-200">
                      <div className="flex items-center gap-3 flex-1 min-w-0">
                        {getFileIcon(file.type)}
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 truncate">{file.name}</p>
                          <p className="text-xs text-gray-500">{file.size}</p>
                        </div>
                      </div>
                      <button
                        type="button"
                        onClick={() => removeFile(index, 'coverLetter')}
                        className="ml-2 text-red-500 hover:text-red-700 transition-colors"
                      >
                        <AiOutlineClose className="text-lg" />
                      </button>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div>
            <label 
              htmlFor="message" 
              style={{
                fontFamily: 'DM Sans', 
                fontWeight: 400, 
                fontSize: '16px', 
                lineHeight: '150%', 
                letterSpacing: '0%'
              }} 
              className="block text-black mb-2"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows={6}
              placeholder="Type your message..."
              value={formik.values.message}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              className={`w-full px-4 py-3 border rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none ${
                formik.touched.message && formik.errors.message
                  ? 'border-red-500'
                  : 'border-gray-300'
              }`}
            />
            {formik.touched.message && formik.errors.message && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.message}</p>
            )}
          </div>

          <div>
            <div className="flex items-start">
              <input
                type="checkbox"
                id="terms"
                name="terms"
                checked={formik.values.terms}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                className="h-4 w-4 text-red-500 focus:ring-red-500 border-gray-300 rounded mt-0.5 flex-shrink-0"
              />
              <label 
                htmlFor="terms" 
                style={{
                  fontFamily: 'DM Sans', 
                  fontWeight: 400, 
                  fontSize: '14px', 
                  lineHeight: '150%', 
                  letterSpacing: '0%'
                }} 
                className="ml-2 text-gray-600"
              >
                I accept the Terms
              </label>
            </div>
            {formik.touched.terms && formik.errors.terms && (
              <p className="mt-1 text-sm text-red-500">{formik.errors.terms}</p>
            )}
          </div>

          <button
            type="submit"
            disabled={formik.isSubmitting}
            className="inline-flex items-center justify-center gap-2 bg-[#FF322E] w-xl h-[48px] px-6 py-3 text-xs font-bold uppercase tracking-wide text-white border-transparent relative overflow-hidden group disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <div className="absolute left-3 top-1/2 -translate-y-1/2 translate-x-5 svg-wrapper group-hover:animate-bounce-custom">
              <IoIosSend className="block text-white w-6 h-6 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-4 group-hover:rotate-45 group-hover:scale-[140%]" />
            </div>
            <span className="block transition-all duration-300 ease-in-out text-base group-hover:translate-x-28">
              {formik.isSubmitting ? 'Submitting...' : 'Submit'}
            </span>
          </button>
        </form>
      </div>
    </div>
  )
}

export default ApplicationFormSection
