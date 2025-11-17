

const HeroSection = ({ jobData }) => {
  return (
    <div className="min-h-screen bg-white flex flex-col mt-20">
      {/* Content Section no. 1 - Top Half */}
      <div className="flex-1 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 flex items-center">
        <div className="w-full pt-8 sm:py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-6 order-2 lg:order-1">
              {/* Department Badge */}
              <div className="inline-block">
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 600, 
                    fontSize: '14px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="bg-red-100 text-black px-3 py-2 rounded"
                >
                  {jobData.department}
                </span>
              </div>

              {/* Job Title */}
              <h1 
                style={{
                  fontFamily: 'Epilogue', 
                  fontWeight: 700, 
                  fontSize: window.innerWidth < 640 ? '32px' : window.innerWidth < 1024 ? '40px' : '56px', 
                  lineHeight: '120%', 
                  letterSpacing: '0%'
                }} 
                className="text-black leading-tight"
              >
                {jobData.title}
              </h1>

              {/* Job Details */}
              <div className="space-y-1">
                <p 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  {jobData.type}
                </p>
                <p 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-black"
                >
                  {jobData.location}
                </p>
              </div>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2">
              <div className="w-full h-full flex items-center justify-center bg-[#DBDBDB]  sm:h-[336px] lg:h-[315px]">
                <svg
                  className="w-20 h-20 text-[#BABABA]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content Section no. 2 - Bottom Half */}
      <div className="flex-1 max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 flex items-center pb-8 sm:pb-12">
        <div className="w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            {/* Left Image */}
            <div className="order-2 lg:order-1">
              <div className="w-full h-full flex items-center justify-center bg-[#DBDBDB] sm:h-80 lg:h-[300px]">
                <svg
                  className="w-20 h-20 text-[#BABABA]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/>
                </svg>
              </div>
            </div>

            {/* Right Content */}
            <div className="space-y-6 order-1 lg:order-2">
              <h2 
                style={{
                  fontFamily: 'Epilogue', 
                  fontWeight: 700, 
                  fontSize: window.innerWidth < 640 ? '20px' : '24px', 
                  lineHeight: '140%', 
                  letterSpacing: '0%'
                }} 
                className="text-black"
              >
                We're The Silo, and we don't do content for the sake of content.
              </h2>

              <p 
                style={{
                  fontFamily: 'DM Sans', 
                  fontWeight: 400, 
                  fontSize: '16px', 
                  lineHeight: '150%', 
                  letterSpacing: '0%'
                }} 
                className="text-black"
              >
                We work with brands who want to cut through the noise, and creators who know 
                how to make that happen. Now we're looking for a Creator Partnerships Manager 
                to join the team. This role is about building relationships, shaping briefs, and 
                making sure the work that goes live feels authentic, strategic, and bold. You'll sit 
                between clients and our network of creators, turning brand goals into content 
                that gets remembered.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeroSection
