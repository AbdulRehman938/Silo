import { useParams } from 'react-router-dom'
import HeroSection from '../components/jobdetail/HeroSection'
import JobDetailsSection from '../components/jobdetail/JobDetailsSection'
import ApplicationFormSection from '../components/jobdetail/ApplicationFormSection'
import { jobDetailData } from '../data/jobDetailData'

const JobDetail = () => {
  const { id } = useParams()

  // Job data based on ID
  const job = jobDetailData[id] || jobDetailData[1]

  return (
    <div className="bg-white">
      {/* Section 1: Hero Section */}
      <HeroSection jobData={job} />
      
      {/* Section 2: Job Details with List Items */}
      <JobDetailsSection />
      
      {/* Section 3: Application Form */}
      <ApplicationFormSection />
      <div className="relative left-1/2 -translate-x-1/2 w-screen h-[0.06rem] bg-black my-10" />
    </div>
  )
}

export default JobDetail
