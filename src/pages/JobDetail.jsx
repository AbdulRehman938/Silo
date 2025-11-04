import React from 'react'
import { useParams } from 'react-router-dom'

const JobDetail = () => {
  const { id } = useParams()

  return (
    <div className="min-h-screen bg-white py-8 sm:py-12 md:py-16 lg:py-20 px-4 sm:px-6 md:px-8 lg:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 mb-12 lg:mb-20">
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
                Food & Drink
              </span>
            </div>

            {/* Job Title */}
            <h1 
              style={{
                fontFamily: 'Epilogue', 
                fontWeight: 700, 
                fontSize: window.innerWidth < 640 ? '32px' : window.innerWidth < 1024 ? '40px' : '48px', 
                lineHeight: '120%', 
                letterSpacing: '0%'
              }} 
              className="text-black leading-tight"
            >
              Creator Partnerships Manager
            </h1>

            {/* Job Details */}
            <div className="space-y-2">
              <p 
                style={{
                  fontFamily: 'DM Sans', 
                  fontWeight: 400, 
                  fontSize: '16px', 
                  lineHeight: '150%', 
                  letterSpacing: '0%'
                }} 
                className="text-gray-600"
              >
                Permanent
              </p>
              <p 
                style={{
                  fontFamily: 'DM Sans', 
                  fontWeight: 400, 
                  fontSize: '16px', 
                  lineHeight: '150%', 
                  letterSpacing: '0%'
                }} 
                className="text-gray-600"
              >
                Remote
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64 sm:h-80 lg:h-96">
              <img
                src="/Placeholder1.png"
                alt="Job header image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* Content Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left Image */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-200 rounded-lg overflow-hidden h-64 sm:h-80 lg:h-96">
              <img
                src="/Placeholder2.png"
                alt="Job content image"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <h2 
              style={{
                fontFamily: 'Epilogue', 
                fontWeight: 700, 
                fontSize: window.innerWidth < 640 ? '24px' : '28px', 
                lineHeight: '140%', 
                letterSpacing: '0%'
              }} 
              className="text-black"
            >
              We're The Silo, and we don't do content for the sake of content.
            </h2>

            <div className="space-y-4">
              <p 
                style={{
                  fontFamily: 'DM Sans', 
                  fontWeight: 400, 
                  fontSize: '16px', 
                  lineHeight: '150%', 
                  letterSpacing: '0%'
                }} 
                className="text-gray-700"
              >
                We work with brands who want to cut through the noise, and creators who know 
                how to make that happen. Now we're looking for a Creator Partnerships Manager 
                to join the team. This role is about building relationships, shaping briefs, and 
                making sure the work that goes live feels authentic, strategic, and bold. You'll sit 
                between clients and our network of creators, turning brand goals into content 
                that gets remembered.
              </p>
            </div>

            {/* Apply Button */}
            <div className="pt-4">
              <button className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-none transition-colors duration-200">
                Apply Now
              </button>
            </div>
          </div>
        </div>

        {/* Job Details Grid Section */}
        <div className="mt-16 lg:mt-24">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
            {/* What you'll do */}
            <div className="border-r-0 md:border-r border-gray-300 pr-0 md:pr-8 lg:pr-12">
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
                  <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">▸</span>
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
                  <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">▸</span>
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
                  <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">▸</span>
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
                  <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">▸</span>
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
                  <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">▸</span>
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
                  <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">▸</span>
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
                  <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">▸</span>
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
                  <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">▸</span>
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
                  <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">▸</span>
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
                  <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">▸</span>
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
                  <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">▸</span>
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 mt-12 lg:mt-16">
            {/* Who you are */}
            <div className="border-r-0 md:border-r border-gray-300 pr-0 md:pr-8 lg:pr-12">
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
                  <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">▸</span>
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
                  <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">▸</span>
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
                  <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">▸</span>
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
                  <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">▸</span>
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
                  <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">▸</span>
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
                  <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">▸</span>
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
                  <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">▸</span>
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
                  <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">▸</span>
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
                  <span className="text-red-500 text-lg flex-shrink-0 mt-0.5">▸</span>
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

        {/* Application Form Section */}
        <div className="mt-16 lg:mt-24">
          <div className="max-w-4xl">
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
                fontWeight: 400, 
                fontSize: '16px', 
                lineHeight: '150%', 
                letterSpacing: '0%'
              }} 
              className="text-gray-700 mb-8"
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>

            {/* Application Form */}
            <form className="space-y-6">
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
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
                    className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  />
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                />
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
                    Resume (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="resume"
                      name="resume"
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 text-sm">
                      📎 Upload Resume
                    </span>
                  </div>
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
                    Cover Letter (Optional)
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="coverLetter"
                      name="coverLetter"
                      className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-red-500 text-sm">
                      📎 Upload Cover Letter
                    </span>
                  </div>
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
                  className="w-full px-4 py-3 border border-gray-300 rounded-none focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent resize-none"
                />
              </div>

              <div className="flex items-start">
                <input
                  type="checkbox"
                  id="terms"
                  name="terms"
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

              <button
                type="submit"
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-none transition-colors duration-200"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default JobDetail