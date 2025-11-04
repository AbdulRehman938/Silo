import Section from '../components/Home/Section.jsx';

// Job data structure and static data
const jobsData = [
  {
    id: '1',
    title: 'Smoothie Smash',
    category: 'Food & Drink',
    image: '/job1.png'
  },
  {
    id: '2',
    title: 'Lumin Solar',
    category: 'Energy',
    image: '/job2.png'
  },
  {
    id: '3',
    title: 'Smart Stats',
    category: 'B2B',
    image: '/job3.png'
  },
  {
    id: '4',
    title: 'Supofa',
    category: 'Food & Drink',
    image: '/job4.png'
  },
  {
    id: '5',
    title: 'Royal Navy',
    category: 'B2B',
    image: '/job5.png'
  }
];

// JobCard Component - Clickable with hover effects
function JobCard({ job }) {
  const handleCardClick = () => {
    // Handle job card click - you can navigate to job details page or open modal
    console.log(`Clicked on job: ${job.title}`);
    // Example: navigate to job details
    // window.location.href = `/jobs/${job.id}`;
    // Or use React Router: navigate(`/jobs/${job.id}`);
  };

  return (
    <div 
      className="flex flex-col w-full max-w-[373px] cursor-pointer transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          handleCardClick();
        }
      }}
      aria-label={`View job details for ${job.title} in ${job.category}`}
    >
      {/* Job Image - Exact dimensions from screenshot */}
      <img
        src={job.image}
        alt={`${job.title} - ${job.category} job opportunity`}
        className="w-full h-[270px] object-cover rounded-lg mb-4 transition-all duration-300"
        style={{ width: '100%', maxWidth: '373px', height: '270px' }}
      />
      
      {/* Category Label - Exact styling from screenshot */}
      <div 
        className="bg-red-50 text-[#FF322E] w-fit rounded mb-2"
        style={{
          padding: '4px 8px',
          fontSize: '14px',
          fontWeight: 500,
          fontFamily: 'DM Sans, sans-serif'
        }}
      >
        {job.category}
      </div>
      
      {/* Job Title - Exact typography from screenshot */}
      <h3 
        className="text-black m-0"
        style={{
          fontFamily: 'Epilogue, sans-serif',
          fontWeight: 700,
          fontSize: 'clamp(24px, 3vw, 32px)',
          lineHeight: '130%',
          letterSpacing: '0%'
        }}
      >
        {job.title}
      </h3>
    </div>
  );
}

export default function JobBoard() {
  return (
    <div className="w-full bg-white">
      {/* Container matching screenshot proportions */}
      <div className="max-w-[1200px] mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        
        {/* Hero Section - Exact match to screenshot */}
        <div className="mb-16 lg:mb-20">
          {/* Main Heading - Exact typography from screenshot */}
          <h1 
            className="mb-6 text-black"
            style={{
              fontFamily: 'Epilogue, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(36px, 5vw, 56px)',
              lineHeight: '120%',
              letterSpacing: '0%',
              maxWidth: '768px'
            }}
          >
            The Silo job board
          </h1>
          
          {/* Description Text - Exact match to screenshot */}
          <p 
            className="mb-2 text-gray-700"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(16px, 2vw, 18px)',
              lineHeight: '150%',
              letterSpacing: '0%',
              maxWidth: '768px'
            }}
          >
            The Silo Job Board is where brands post briefs and creators pick them up. Simple.
          </p>
          
          <p 
            className="mb-10 text-gray-600"
            style={{
              fontFamily: 'DM Sans, sans-serif',
              fontWeight: 400,
              fontSize: 'clamp(16px, 2vw, 18px)',
              lineHeight: '150%',
              letterSpacing: '0%',
              maxWidth: '768px'
            }}
          >
            It's a live feed of campaigns looking for UGC: TikToks, Reels, photos, product demos, 
            testimonials, ready for creators to jump on. No middlemen, no noise. Just real opportunities, 
            real brands, and a roster of vetted creators who know how to make content that connects.
          </p>
          
          {/* Action Buttons - Exact match to screenshot */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Primary Button - Exact screenshot styling */}
            <button 
              className="bg-[#FF322E] text-white rounded hover:bg-red-600 transition-colors"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 700,
                fontSize: '16px',
                lineHeight: '150%',
                width: '197px',
                height: '48px',
                padding: '12px 24px',
                whiteSpace: 'nowrap'
              }}
            >
              Sign up as a Creator
            </button>
            
            {/* Secondary Button - Exact screenshot styling */}
            <button 
              className="bg-transparent text-[#FF322E] border border-[#FF322E] rounded hover:bg-[#FF322E] hover:text-white transition-colors"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontWeight: 400,
                fontSize: '16px',
                lineHeight: '150%',
                padding: '8px 16px',
                whiteSpace: 'nowrap'
              }}
            >
              Post a Brief
            </button>
          </div>
        </div>
        
        {/* Job Grid - Exact screenshot layout with responsive behavior */}
        <div className="w-full">
          
          {/* Mobile: Single column (< 640px) */}
          <div className="grid grid-cols-1 gap-8 sm:hidden justify-items-center">
            {jobsData.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          
          {/* Tablet: 2 columns (640px - 1024px) */}
          <div className="hidden sm:grid lg:hidden grid-cols-2 gap-6 justify-items-center">
            {jobsData.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
          
          {/* Desktop: Exact screenshot layout (1024px+) */}
          <div className="hidden lg:block">
            {/* First Row - 3 cards exactly like screenshot */}
            <div className="flex gap-6 mb-6 justify-start">
              <JobCard job={jobsData[0]} />
              <JobCard job={jobsData[1]} />
              <JobCard job={jobsData[2]} />
            </div>
            
            {/* Second Row - 2 cards exactly like screenshot */}
            <div className="flex gap-6 justify-start">
              <JobCard job={jobsData[3]} />
              <JobCard job={jobsData[4]} />
            </div>
          </div>
          
        </div>
      </div>
      
      {/* Section Component */}
      <Section />
    </div>
  );
}