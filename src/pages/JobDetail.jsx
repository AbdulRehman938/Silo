import { useParams } from 'react-router-dom'
import HeroSection from '../components/jobdetail/HeroSection'
import JobDetailsSection from '../components/jobdetail/JobDetailsSection'
import ApplicationFormSection from '../components/jobdetail/ApplicationFormSection'

const JobDetail = () => {
  const { id } = useParams()

  // Job data based on ID
  const jobData = {
    1: {
      department: 'Food & Drink',
      title: 'Creator Partnerships Manager',
      type: 'Permanent',
      location: 'Remote'
    },
    2: {
      department: 'Marketing',
      title: 'Social Media Strategist',
      type: 'Full-time',
      location: 'London, UK'
    },
    3: {
      department: 'Design',
      title: 'Creative Director',
      type: 'Contract',
      location: 'Hybrid'
    }
  }

  const job = jobData[id] || jobData[1]

  return (
    <div className="bg-white">
      {/* Section 1: Hero Section */}
      <HeroSection jobData={job} />
      
      {/* Section 2: Job Details with List Items */}
      <JobDetailsSection />
      
      {/* Section 3: Application Form */}
      <ApplicationFormSection />
    </div>
  )
}

export default JobDetail
