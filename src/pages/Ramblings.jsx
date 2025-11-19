import { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

export default function Ramblings() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("View all");
  const containerRef = useRef(null);
  const sidebarRef = useRef(null);
  const sidebarWrapperRef = useRef(null);
  const [isSticky, setIsSticky] = useState(false);
  const [leftPosition, setLeftPosition] = useState(0);

  const blogPosts = [
    {
      id: 1,
      image: "https://res.cloudinary.com/di9tb45rl/image/upload/v1762717286/rambling1_wotzmr.png",
      category: "UGC",
      readTime: "5 min read",
      title: "How to brief a UGC creator",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      link: "/blog/1",
    },
    {
      id: 2,
      image: "https://res.cloudinary.com/di9tb45rl/image/upload/v1762717283/rambling2_dhai4t.png",
      category: "Animation",
      readTime: "5 min read",
      title: "Animation checklist for social media",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      link: "/blog/2",
    },
    {
      id: 3,
      image: "https://res.cloudinary.com/di9tb45rl/image/upload/v1762717283/rambling3_d95vxk.png",
      category: "Strategy",
      readTime: "5 min read",
      title: 'The Death of "Posting to Post"',
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      link: "/blog/3",
    },
    {
      id: 4,
      image: "https://res.cloudinary.com/di9tb45rl/image/upload/v1762717290/rambling4_buowhf.png",
      category: "Branding",
      readTime: "5 min read",
      title: "5 Things Every Brand Brief Should Include (But Rarely Does)",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      link: "/blog/4",
    },
    {
      id: 5,
      image: "https://res.cloudinary.com/di9tb45rl/image/upload/v1762717294/rambling6_o0p8nd.png",
      category: "Creators",
      readTime: "5 min read",
      title: "Meet the Creators: Stories from Our Network",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      link: "/blog/5",
    },
  ];

  // Dynamically generate categories from blog posts
  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(blogPosts.map((post) => post.category)),
    ];
    return ["View all", ...uniqueCategories];
  }, [blogPosts]);

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "View all") {
      return blogPosts;
    }
    return blogPosts.filter((post) => post.category === selectedCategory);
  }, [blogPosts, selectedCategory]);

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !sidebarRef.current || !sidebarWrapperRef.current) return;

      // Disable sticky on mobile (screens smaller than 1024px / lg breakpoint)
      const isMobile = window.innerWidth < 1024;
      if (isMobile) {
        setIsSticky(false);
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const sidebarWrapperRect = sidebarWrapperRef.current.getBoundingClientRect();
      const sidebarHeight = sidebarRef.current.offsetHeight;
      
      // Calculate left position for fixed element
      setLeftPosition(sidebarWrapperRect.left);
      
      // Only stick when scrolling down and container top reaches threshold
      // And container bottom hasn't passed the sidebar
      if (containerRect.top <= 128 && containerRect.bottom >= sidebarHeight + 128 + 64) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleScroll);
    handleScroll(); // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen md:mt-20 lg:mt-20 mx-3 md:mx-0">
      <div className="mx-auto max-w-[1280px] px-0 md:px-6 lg:px-8 md:py-12 mb-20">
        {/* Header Section */}
        <div className="mb-24 md:w-[50vw] mt-32 md:mt-0 ">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4 font-['Epilogue'] leading-tight">
            Our Ramblings
          </h1>
          <p className="text-black text-lg font-normal">
            From UGC tips to the latest in social and design trends, The Silo Blog dives into what’s shaping the digitall marketing and content-first world right now.
          </p>
        </div>

        <div ref={containerRef} className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div ref={sidebarWrapperRef} className="lg:w-48 flex-shrink-0">
            <div 
              ref={sidebarRef}
              className={`${isSticky ? 'fixed top-32' : 'relative'} p-4 bg-white z-40 shadow-md lg:shadow-none`}
              style={isSticky ? { left: `${leftPosition}px`, width: sidebarWrapperRef.current?.offsetWidth + 'px' } : {}}
            >
              <h3 className="text-lg font-bold text-black mb-6">
                Blog categories
              </h3>
              <div className="space-y-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left text-sm transition-all duration-300 ease-in-out ${
                      selectedCategory === category
                        ? "border-2 border-black bg-transparent px-4 py-3 text-black font-bold transform scale-105"
                        : "text-black hover:text-black hover:bg-white hover:translate-x-2 hover:font-bold px-2 py-1"
                    }`}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {filteredPosts.length > 0 && (
              <>
                {/* Featured Post */}
                <div className="mb-12">
                  <div
                    className="bg-white overflow-hidden cursor-pointer flex flex-col"
                    onClick={() => navigate(filteredPosts[0].link)}
                  >
                    <div className="md:p-8 md:px-0 py-8 px-0 order-1 md:order-2">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm bg-[#FFDBDB] text-black font-semibold px-3 py-1">
                          {filteredPosts[0].category}
                        </span>
                        
                        <span className="text-sm text-black">
                          {filteredPosts[0].readTime}
                        </span>
                      </div>
                      <h2 className="text-3xl font-bold text-black mb-4 hover:text-brand transition-colors">
                        {filteredPosts[0].title}
                      </h2>
                      <p className="text-black mb-6 text-lg">
                        {filteredPosts[0].description}
                      </p>
                      <a
                        href="#"
                        className="inline-flex items-center gap-2 font-dm font-semibold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                      >
                        <span>Read more</span>
                        <span
                          aria-hidden
                          className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                        >
                          <MdOutlineKeyboardArrowRight className="text-2xl font-black text-brand" />
                        </span>
                      </a>
                    </div>
                    <div className="w-full h-[60vh] overflow-hidden group order-2 md:order-1">
                      <img
                        src={filteredPosts[0].image}
                        alt={filteredPosts[0].title}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                    </div>
                  </div>
                </div>

                {/* Grid Posts */}
                {filteredPosts.length > 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.slice(1).map((post) => (
                      <div
                        key={post.id}
                        className="bg-white overflow-hidden cursor-pointer flex flex-col"
                        onClick={() => navigate(post.link)}
                      >
                        <div className="md:p-6 md:px-0 py-6 px-0 order-1 md:order-2">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-sm bg-[#FFDBDB] text-black font-semibold px-3 py-1">
                              {post.category}
                            </span>
                            
                            <span className="text-sm text-black">
                              {post.readTime}
                            </span>
                          </div>
                          <h3 className="text-xl font-bold text-black mb-3 hover:text-brand transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-black mb-4">
                            {post.description}
                          </p>
                          <a
                            href="#"
                            className="inline-flex items-center gap-2 font-dm font-semibold text-xl leading-[150%] text-[#FF322E] tracking-normal group"
                          >
                            <span>Read more</span>
                            <span
                              aria-hidden
                              className="inline-block ml-1 transform transition-transform duration-300 ease-in-out group-hover:translate-x-2"
                            >
                              <MdOutlineKeyboardArrowRight className="text-2xl font-black text-back" />
                            </span>
                          </a>
                        </div>
                        <div className="aspect-[4/3] overflow-hidden group order-2 md:order-1">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110" loading="lazy" />
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </>
            )}

            {/* No posts message */}
            {filteredPosts.length === 0 && (
              <div className="text-center py-12">
                <p className="text-black text-lg">
                  No posts found in this category.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="md:mt-40 mt-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 md:gap-12 lg:gap-16">
            {/* Left Content */}
            <div className="lg:flex-1 lg:max-w-lg">
              <h2 className="text-black text-3xl font-bold mb-4 font-['Epilogue'] leading-tight">
                Sign up to our newsletter
              </h2>

              <p className="text-black text-base leading-relaxed">
               We don’t spam. We send sharp insights, new briefs, and the kind of content you’ll actually want to open.
              </p>
            </div>

            {/* Right Form */}
            <div className="lg:flex-shrink-0 max-w-xl w-full">
              <div className="md:flex md:gap-3 flex flex-col md:flex-row  gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 border border-black  focus:outline-none focus:ring-2 focus:ring-[#FF322E] focus:border-transparent text-base w-full"
                />
                <button className="bg-[#FF322E] whitespace-nowrap text-white px-6 py-3 font-semibold hover:bg-brand transition-colors text-base">
                  Sign me up!
                </button>
              </div>

              <p className="text-black text-sm mt-3 leading-relaxed">
                By clicking Sign Up you're confirming that you agree with our{" "}
                <a
                  href="#"
                  className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer"
                >
                  Terms and Conditions
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="relative left-1/2 -translate-x-1/2 w-screen h-[0.06rem] bg-black my-5" />
    </div>
  );
}
