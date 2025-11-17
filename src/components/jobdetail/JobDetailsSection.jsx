import { LuTriangleRight } from "react-icons/lu"
import { TiTick } from "react-icons/ti"

const JobDetailsSection = () => {
  return (
    <div className="max-w-[1280px] mx-auto px-4 sm:px-6 md:px-8 lg:px-16 xl:px-20 py-12 lg:py-20">
    

      {/* Job Details Grid Section */}
      <div className="relative">
        {/* Vertical Line - Spans full height of both sections */}
        <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-black transform -translate-x-1/2 z-10"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 pt-10 border-t-2 border-t-black">
          
          {/* What you'll do */}
          <div className="pr-0 md:pr-8 lg:pr-12">
            <h3 
              style={{
                fontFamily: 'Epilogue', 
                fontWeight: 700, 
                fontSize: '24px', 
                lineHeight: '140%', 
                letterSpacing: '0%'
              }} 
              className="text-black mb-6"
            >
              What you'll do
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-gray-700"
                >
                  Build and maintain strong relationships with creators across the UK, South Africa and US.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-gray-700"
                >
                  Work directly with clients to understand their goals and translate them into creative briefs.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-gray-700"
                >
                  Match brands with the right creators based on style, reach, and audience.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-gray-700"
                >
                  Oversee campaigns from ideation through delivery, ensuring quality and timeliness.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-gray-700"
                >
                  Manage content rights, usage, and ready-to-post delivery formats.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-gray-700"
                >
                  Provide insight on performance, pulling insights that shape future campaigns.
                </span>
              </li>
            </ul>
          </div>

          {/* Benefits */}
          <div className="pl-0 md:pl-8 lg:pl-12">
            <h3 
              style={{
                fontFamily: 'Epilogue', 
                fontWeight: 700, 
                fontSize: '24px', 
                lineHeight: '140%', 
                letterSpacing: '0%'
              }} 
              className="text-black mb-6"
            >
              Benefits
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><TiTick /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-gray-700"
                >
                  Competitive salary with performance-based bonuses.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><TiTick /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-gray-700"
                >
                  Hybrid working setup with flexibility built in.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><TiTick /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-gray-700"
                >
                  Access to a growing international creator network.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><TiTick /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-gray-700"
                >
                  Opportunity to work on campaigns with Revolut, Ignition, food, and tech brands.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><TiTick /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-gray-700"
                >
                  A team that values creativity, clarity, and bold ideas.
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 lg:mt-16 pt-10 border-t-2 border-t-black">
          
          {/* Who you are */}
          <div className="pr-0 md:pr-8 lg:pr-12">
            <h3 
              style={{
                fontFamily: 'Epilogue', 
                fontWeight: 700, 
                fontSize: '24px', 
                lineHeight: '140%', 
                letterSpacing: '0%'
              }} 
              className="text-black mb-6"
            >
              Who you are
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-gray-700"
                >
                  A strong communicator who can manage both client expectations and creator needs.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-gray-700"
                >
                  Organised, detail-oriented, and comfortable running multiple projects at once.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-gray-700"
                >
                  Confident in social platforms, trends, and content formats.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-gray-700"
                >
                  Experienced in influencer/UGC management, brand partnerships, or campaign delivery.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-gray-700"
                >
                  Comfortable in a fast-paced, no-fluff environment.
                </span>
              </li>
            </ul>
          </div>

          {/* Who you'll be */}
          <div className="pl-0 md:pl-8 lg:pl-12">
            <h3 
              style={{
                fontFamily: 'Epilogue', 
                fontWeight: 700, 
                fontSize: '24px', 
                lineHeight: '140%', 
                letterSpacing: '0%'
              }} 
              className="text-black mb-6"
            >
              Who you'll be
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-gray-700"
                >
                  The go-to person for making brand—creator partnerships run smoothly.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-gray-700"
                >
                  A trusted voice with both clients and creators.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-gray-700"
                >
                  A driver of campaigns that feel fresh, intentional, and effective.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-red-500 text-lg flex-shrink-0 mt-0.5"><LuTriangleRight className="text-brand fill-brand mx-4 rotate-90" size={16} /></span>
                <span 
                  style={{
                    fontFamily: 'DM Sans', 
                    fontWeight: 400, 
                    fontSize: '16px', 
                    lineHeight: '150%', 
                    letterSpacing: '0%'
                  }} 
                  className="text-gray-700"
                >
                  Part of a team that pushes brands to stop playing safe and start getting noticed.
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetailsSection
