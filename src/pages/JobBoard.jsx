import Section from "../components/Home/Section.jsx";
import { FaChevronRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { jobsData } from "../data/jobsData.js";

// JobCard Component - Clickable with hover effects
function JobCard({ job }) {
  const navigate = useNavigate();

  const handleCardClick = () => {
    navigate(`/jobs/${job.id}`);
  };

  return (
    <div
      className="flex flex-col w-full lg:w-[32vw] lg:max-w-[400px] lg:flex-shrink-0 cursor-pointer transition-all duration-300 group mb-8 md:mb-0"
      onClick={handleCardClick}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          handleCardClick();
        }
      }}
      aria-label={`View job details for ${job.title} in ${job.category}`}
    >
      {/* Job Title - At top on mobile */}
      <h3
        className="text-black m-0 mb-3 md:mb-2 order-1 md:order-3 text-2xl md:text-base"
        style={{
          fontFamily: "Epilogue, sans-serif",
          fontWeight: 700,
          lineHeight: "130%",
          letterSpacing: "0%",
        }}
      >
        {job.title}
      </h3>

      {/* Category Label - Below title on mobile, above title on desktop */}
      <div
        className="bg-[#FFDBDB] text-black w-fit mb-4 md:mb-2 md:mt-3 order-2 md:order-2"
        style={{
          padding: "5px 7px",
          fontSize: "18px",
          fontWeight: 800,
          fontFamily: "DM Sans, sans-serif",
        }}
      >
        {job.category}
      </div>

      {/* Job Image - Moved to bottom on mobile */}
      <div className="w-full h-[260px] font-bold overflow-hidden order-3 md:order-1">
        <img
          src={job.image}
          alt={`${job.title} - ${job.category} job opportunity`}
          className="w-full h-full font-bold object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
      </div>
    </div>
  );
}

export default function JobBoard() {
  return (
    <div className="w-full bg-white md:mt-5 mb-20 max-w-[1280px] mx-auto mt-20">
      {/* Container with 95vw max-width */}
      <div className="max-w-[full] mx-[3vw] md:mx-auto px-0 sm:px-0 md:px-0 py-10 lg:py-14 my-20 md:mb-0">
        {/* Hero Section - Adjusted for 95vw */}
        <div className="mb-12 lg:mb-16">
          <div className="w-full lg:w-1/2">
            {/* Main Heading - Exact typography from screenshot */}
            <h1
              className="mb-5 text-black"
              style={{
                fontFamily: "Epilogue, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(32px, 4.5vw, 52px)",
                lineHeight: "120%",
                letterSpacing: "0%",
              }}
            >
              The Silo job board
            </h1>

            {/* Description Text - Exact match to screenshot */}
            <p
              className="mb-2 text-black"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 700,
                fontSize: "clamp(15px, 1.8vw, 17px)",
                lineHeight: "150%",
                letterSpacing: "0%",
              }}
            >
              The Silo Job Board is where brands post briefs and creators pick
              them up. Simple.
            </p>

            <p
              className="mb-8 text-black"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 400,
                fontSize: "clamp(15px, 1.8vw, 17px)",
                lineHeight: "150%",
                letterSpacing: "0%",
              }}
            >
              It's a live feed of campaigns looking for UGC: TikToks, Reels,
              photos, product demos, testimonials, ready for creators to jump
              on. No middlemen, no noise. Just real opportunities, real brands,
              and a roster of vetted creators who know how to make content that
              connects.
            </p>
          </div>

          {/* Action Buttons - Exact match to screenshot */}
          <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
            {/* Primary Button - Exact screenshot styling */}
            <button
              onClick={() => window.location.href = '/contact'}
              className="inline-flex items-center justify-center gap-2 bg-[#FF322E] text-white border-transparent relative overflow-hidden group"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 700,
                fontSize: "30px",
                lineHeight: "150%",
                width: "185px",
                height: "56px",
                padding: "10px 20px",
                whiteSpace: "nowrap",
              }}
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                <FaChevronRight   className="text-white w-5 h-5 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-[140%]" />
              </div>
              <span className="block transition-all duration-300 ease-in-out text-sm group-hover:translate-x-60">
                Sign up as a Creator
              </span>
            </button>

            {/* Secondary Button - Exact screenshot styling */}
            <button
              onClick={() => window.location.href = '/contact'}
              className="inline-flex items-center justify-center gap-2 bg-transparent border-[1px] border-[#FF322E] text-[#FF322E] relative overflow-hidden group"
              style={{
                fontFamily: "DM Sans, sans-serif",
                fontWeight: 700,
                fontSize: "30px",
                lineHeight: "150%",
                width: "200px",
                height: "56px",
                padding: "10px 20px",
                whiteSpace: "nowrap",
              }}
            >
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                <FaChevronRight   className="text-[#FF322E] w-5 h-5 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-[140%]" />
              </div>
              <span className="block transition-all duration-300 ease-in-out text-sm group-hover:translate-x-80">
                Post a requirement Brief
              </span>
            </button>
          </div>
        </div>

        {/* Job Grid - Exact screenshot layout with responsive behavior */}
        <div className="w-full px-[1vw] md:px-0">
          {/* Mobile: Single column (< 640px) */}
          <div className="grid grid-cols-1 gap-6 sm:hidden justify-items-center">
            {jobsData.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {/* Tablet: 2 columns (640px - 1024px) */}
          <div className="hidden sm:grid lg:hidden grid-cols-2 gap-2 justify-items-center">
            {jobsData.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>

          {/* Desktop: Adjusted layout for 95vw (1024px+) */}
          <div className="hidden lg:block">
            {/* First Row - 3 cards with fixed width and gap */}
            <div className="flex gap-20 mb-8">
              <JobCard job={jobsData[0]} />
              <JobCard job={jobsData[1]} />
              <JobCard job={jobsData[2]} />
            </div>

            {/* Second Row - 2 cards with fixed width and gap matching top row */}
            <div className="flex gap-20 mb-8">
              <JobCard job={jobsData[3]} />
              <JobCard job={jobsData[4]} />
            </div>
          </div>
        </div>
      </div>

      {/* Section Component */}
      <Section />
      <div className="relative left-1/2 -translate-x-1/2 w-screen h-[1px] bg-black mt-10" />
    </div>
  );
}
