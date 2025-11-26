import { useState, useMemo, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { blogPostsData } from "../data/blogPostsData";

// GSAP
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

export default function Ramblings() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("View all");

  const containerRef = useRef(null);
  const sidebarRef = useRef(null);
  const sidebarWrapperRef = useRef(null);

  const blogPosts = blogPostsData;

  // Generate category list
  const categories = useMemo(() => {
    const uniqueCategories = [
      ...new Set(blogPosts.map((post) => post.category)),
    ];
    return ["View all", ...uniqueCategories];
  }, [blogPosts]);

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "View all") return blogPosts;
    return blogPosts.filter((post) => post.category === selectedCategory);
  }, [blogPosts, selectedCategory]);

  // GSAP Sidebar Scroll Animation
  useEffect(() => {
    if (
      !sidebarRef.current ||
      !sidebarWrapperRef.current ||
      !containerRef.current
    )
      return;

    // Only enable scroll animation for screens >= 768px (md and up)
    if (window.innerWidth < 768) {
      gsap.set(sidebarRef.current, { y: 0 });
      return;
    }

    const sidebar = sidebarRef.current;
    const container = containerRef.current;

    // reset sidebar position
    gsap.set(sidebar, { y: 0 });

    const st = ScrollTrigger.create({
      trigger: container,
      start: "top 220px",
      end: () =>
        container.offsetHeight - sidebar.offsetHeight <= 0
          ? "+=0"
          : `+=${container.offsetHeight - sidebar.offsetHeight}`,
      scrub: true,
      onUpdate: (self) => {
        const progress = self.progress;
        const maxY = container.offsetHeight - sidebar.offsetHeight;

        // Move sidebar according to scroll
        gsap.to(sidebar, {
          y: progress * maxY,
          ease: "none",
          duration: 0,
        });
      },
    });

    return () => {
      st.kill();
      ScrollTrigger.refresh();
    };
  }, []);

  return (
    <div className="min-h-screen md:mt-20 lg:mt-20 mx-3 md:mx-0">
      <div className="mx-auto max-w-[1280px] px-4 md:px-0 md:py-12 mb-20">
        
        {/* Header Section */}
        <div className="mb-24 md:w-[50vw] mt-32 md:mt-0 ">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4 font-['Epilogue'] leading-tight">
            Our Ramblings
          </h1>
          <p className="text-black text-lg font-normal">
            From UGC tips to the latest in social and design trends, The Silo Blog dives into what’s shaping the digital marketing and content-first world right now.
          </p>
        </div>

        {/* Sidebar + Posts Wrapper */}
        <div ref={containerRef} className="flex flex-col lg:flex-row gap-12 relative mt-2">
          
          {/* Sidebar */}
          <div ref={sidebarWrapperRef} className="lg:w-48 flex-shrink-0 relative">
            <div
              ref={sidebarRef}
              className="relative pb-4 bg-white z-40 shadow-md lg:shadow-none"
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
                        ? "border-[1px] border-black bg-transparent px-4 py-3 text-black font-bold transform scale-105"
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
                        href={filteredPosts[0].link}
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
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        loading="lazy"
                      />
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

                          <p className="text-black mb-4">{post.description}</p>

                          <a
                            href={post.link}
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
                            className="w-full h-full object-cover md:object-cover transition-transform duration-300 group-hover:scale-110"
                            loading="lazy"
                          />
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

        {/* Newsletter Section */}
        <div className="md:mt-40 mt-10">
          <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 md:gap-12 lg:gap-16">
            
            <div className="lg:flex-1 lg:max-w-lg">
              <h2 className="text-black text-3xl font-bold mb-4 font-['Epilogue'] leading-tight">
                Sign up to our newsletter
              </h2>

              <p className="text-black text-base leading-relaxed">
                We don’t spam. We send sharp insights, new briefs, and content you’ll actually want to open.
              </p>
            </div>

            <div className="lg:flex-shrink-0 max-w-xl w-full">
              <div className="md:flex md:gap-3 flex flex-col md:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="px-4 py-3 border border-black focus:outline-none focus:ring-2 focus:ring-[#FF322E] focus:border-transparent text-base w-full"
                />
                <button className="bg-[#FF322E] whitespace-nowrap text-white px-6 py-3 font-semibold hover:bg-brand transition-colors text-base">
                  Sign me up!
                </button>
              </div>

              <p className="text-black text-sm mt-3 leading-relaxed">
                By clicking Sign Up you're agreeing to our{" "}
                <a
                  href="/terms"
                  className="hover:text-brand hover:text-base text-sm ease-in-out duration-200 cursor-pointer"
                >
                  Terms and Conditions
                </a>
              </p>
            </div>
          </div>
        </div>

      </div>

      <div className="relative left-1/2 -translate-x-1/2 w-screen h-[1px] bg-black my-5" />
    </div>
  );
}
