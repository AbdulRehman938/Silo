import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Section2 from "../components/About/Section2";

const CareerIndex = () => {
  const navigate = useNavigate();

  const handleJobClick = (jobId) => {
    navigate(`/job/${jobId}`);
  };

  const handleApplyClick = (e, jobId) => {
    e.stopPropagation(); // Prevent card click when Apply button is clicked
    console.log(`Apply clicked for job ${jobId}`);
    // Add apply logic here
  };

  return (
    <div className="h-auto max-w-[1280px] mt-20 mx-auto px-0 sm:px-6 md:px-8 lg:px-16 xl:px-20">
      <div className="min-h-screen max-w-full bg-white py-8 sm:py-12 md:py-16 lg:py-20 mx-auto mb-28 md:mb-0">
        <div className="max-w-full mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 md:gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="space-y-4 sm:space-y-6 order-1 lg:order-1">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight">
                Work at the Silo
              </h1>
              <p className="text-sm sm:text-base md:text-lg font-normal text-black leading-relaxed">
                Want to make ideas happen? Join The Silo - a team of creators
                <br className="hidden sm:block" />
               strategists, and storytellers shaping brands that stand out online
              </p>
            </div>

            {/* Right Content - Job Listings */}
            <div className="space-y-3 sm:space-y-4 order-2 lg:order-2">
              {/* Job Card 1 */}
              <div
                onClick={() => handleJobClick(1)}
                className="bg-white border border-black p-6 sm:p-8 md:p-10 cursor-pointer  hover:border-black transition-all duration-200 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-0">
                    <h3
                      style={{
                        fontFamily: "Epilogue",
                        fontWeight: 700,
                        fontSize: window.innerWidth < 640 ? "20px" : "24px",
                        lineHeight: "140%",
                        letterSpacing: "0%",
                      }}
                      className="text-black group-hover:text-brand transition-colors duration-200"
                    >
                      Job Title
                    </h3>
                    <span
                      style={{
                        fontFamily: "DM Sans",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "150%",
                        letterSpacing: "0%",
                      }}
                      className="bg-[#FFDBDB] text-black px-2 py-1 self-start"
                    >
                      Department
                    </span>
                  </div>
                  <button
                    onClick={(e) => handleApplyClick(e, 1)}
                    className="inline-flex items-center gap-2 font-dm font-normal text-xl leading-[150%] text-[#FF322E] tracking-normal group self-start sm:self-auto"
                  >
                    <span>Apply Now</span>
                    <span
                      aria-hidden
                      className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                    >
                      <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                    </span>
                  </button>
                </div>

                <p
                  style={{
                    fontFamily: "DM Sans",
                    fontWeight: 400,
                    fontSize: window.innerWidth < 640 ? "14px" : "16px",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                  }}
                  className="text-black mb-3 sm:mb-4"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-black flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      style={{
                        fontFamily: "DM Sans",
                        fontWeight: 400,
                        fontSize: window.innerWidth < 640 ? "16px" : "18px",
                        lineHeight: "150%",
                        letterSpacing: "0%",
                      }}
                      className="text-black"
                    >
                      Location
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-black flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      style={{
                        fontFamily: "DM Sans",
                        fontWeight: 400,
                        fontSize: window.innerWidth < 640 ? "16px" : "18px",
                        lineHeight: "150%",
                        letterSpacing: "0%",
                      }}
                      className="text-black"
                    >
                      Contract Type
                    </span>
                  </div>
                </div>
              </div>

              {/* Job Card 2 */}
              <div
                onClick={() => handleJobClick(2)}
                className="bg-white border border-black p-6 sm:p-8 md:p-10 cursor-pointer  hover:border-black transition-all duration-200 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-0">
                    <h3
                      style={{
                        fontFamily: "Epilogue",
                        fontWeight: 700,
                        fontSize: window.innerWidth < 640 ? "20px" : "24px",
                        lineHeight: "140%",
                        letterSpacing: "0%",
                      }}
                      className="text-black group-hover:text-brand transition-colors duration-200"
                    >
                      Job Title
                    </h3>
                    <span
                      style={{
                        fontFamily: "DM Sans",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "150%",
                        letterSpacing: "0%",
                      }}
                      className="bg-[#FFBDBD] text-black px-2 py-1 self-start"
                    >
                      Department
                    </span>
                  </div>
                  <button
                    onClick={(e) => handleApplyClick(e, 2)}
                    className="inline-flex items-center gap-2 font-dm font-normal text-xl leading-[150%] text-[#FF322E] tracking-normal group self-start sm:self-auto"
                  >
                    <span>Apply Now</span>
                    <span
                      aria-hidden
                      className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                    >
                      <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                    </span>
                  </button>
                </div>

                <p
                  style={{
                    fontFamily: "DM Sans",
                    fontWeight: 400,
                    fontSize: window.innerWidth < 640 ? "14px" : "16px",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                  }}
                  className="text-black mb-3 sm:mb-4"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-black flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      style={{
                        fontFamily: "DM Sans",
                        fontWeight: 400,
                        fontSize: window.innerWidth < 640 ? "16px" : "18px",
                        lineHeight: "150%",
                        letterSpacing: "0%",
                      }}
                      className="text-black"
                    >
                      Location
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-black flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      style={{
                        fontFamily: "DM Sans",
                        fontWeight: 400,
                        fontSize: window.innerWidth < 640 ? "16px" : "18px",
                        lineHeight: "150%",
                        letterSpacing: "0%",
                      }}
                      className="text-black"
                    >
                      Contract Type
                    </span>
                  </div>
                </div>
              </div>

              {/* Job Card 3 */}
              <div
                onClick={() => handleJobClick(3)}
                className="bg-white border border-black p-6 sm:p-8 md:p-10 cursor-pointer  hover:border-black transition-all duration-200 group"
              >
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-3 sm:mb-4">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-3 mb-2 sm:mb-0">
                    <h3
                      style={{
                        fontFamily: "Epilogue",
                        fontWeight: 700,
                        fontSize: window.innerWidth < 640 ? "20px" : "24px",
                        lineHeight: "140%",
                        letterSpacing: "0%",
                      }}
                      className="text-black group-hover:text-brand transition-colors duration-200"
                    >
                      Job Title
                    </h3>
                    <span
                      style={{
                        fontFamily: "DM Sans",
                        fontWeight: 600,
                        fontSize: "14px",
                        lineHeight: "150%",
                        letterSpacing: "0%",
                      }}
                      className="bg-[#FFBDBD] text-black px-2 py-1 self-start"
                    >
                      Department
                    </span>
                  </div>
                  <button
                    onClick={(e) => handleApplyClick(e, 3)}
                    className="inline-flex items-center gap-2 font-dm font-normal text-xl leading-[150%] text-[#FF322E] tracking-normal group self-start sm:self-auto"
                  >
                    <span>Apply Now</span>
                    <span
                      aria-hidden
                      className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                    >
                      <MdOutlineKeyboardArrowRight className="text-2xl font-black" />
                    </span>
                  </button>
                </div>

                <p
                  style={{
                    fontFamily: "DM Sans",
                    fontWeight: 400,
                    fontSize: window.innerWidth < 640 ? "14px" : "16px",
                    lineHeight: "150%",
                    letterSpacing: "0%",
                  }}
                  className="text-black mb-3 sm:mb-4"
                >
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse varius enim in eros elementum tristique.
                </p>

                <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6">
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-black flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      style={{
                        fontFamily: "DM Sans",
                        fontWeight: 400,
                        fontSize: window.innerWidth < 640 ? "16px" : "18px",
                        lineHeight: "150%",
                        letterSpacing: "0%",
                      }}
                      className="text-black"
                    >
                      Location
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <svg
                      className="w-4 h-4 text-black flex-shrink-0"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                        clipRule="evenodd"
                      />
                    </svg>
                    <span
                      style={{
                        fontFamily: "DM Sans",
                        fontWeight: 400,
                        fontSize: window.innerWidth < 640 ? "16px" : "18px",
                        lineHeight: "150%",
                        letterSpacing: "0%",
                      }}
                      className="text-black"
                    >
                      Contract Type
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Section2 />
      <div className="relative left-1/2 -translate-x-1/2 w-screen h-[0.06rem] bg-black mt-20" />
    </div>
  );
};

export default CareerIndex;
