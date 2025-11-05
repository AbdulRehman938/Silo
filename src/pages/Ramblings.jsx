import { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosSend } from 'react-icons/io';

export default function Ramblings() {
  const navigate = useNavigate();
  const [selectedCategory, setSelectedCategory] = useState("View all");

  const blogPosts = [
    {
      id: 1,
      image: "/rambling1.png",
      category: "UGC",
      readTime: "5 min read",
      title: "How to brief a UGC creator",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      link: "/blog/1"
    },
    {
      id: 2,
      image: "/rambling2.png",
      category: "Animation",
      readTime: "5 min read",
      title: "Animation checklist for social media",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      link: "/blog/2"
    },
    {
      id: 3,
      image: "/rambling3.png",
      category: "Strategy",
      readTime: "5 min read",
      title: "The Death of \"Posting to Post\"",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      link: "/blog/3"
    },
    {
      id: 4,
      image: "/rambling4.png",
      category: "Branding",
      readTime: "5 min read",
      title: "5 Things Every Brand Brief Should Include (But Rarely Does)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      link: "/blog/4"
    },
    {
      id: 5,
      image: "/rambling6.png",
      category: "Creators",
      readTime: "5 min read",
      title: "Meet the Creators: Stories from Our Network",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      link: "/blog/5"
    }
  ];

  // Dynamically generate categories from blog posts
  const categories = useMemo(() => {
    const uniqueCategories = [...new Set(blogPosts.map(post => post.category))];
    return ["View all", ...uniqueCategories];
  }, [blogPosts]);

  // Filter posts based on selected category
  const filteredPosts = useMemo(() => {
    if (selectedCategory === "View all") {
      return blogPosts;
    }
    return blogPosts.filter(post => post.category === selectedCategory);
  }, [blogPosts, selectedCategory]);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        {/* Header Section */}
        <div className="mb-12">
          <h1 className="text-4xl lg:text-5xl font-bold text-black mb-4">
            Our Ramblings
          </h1>
          <p className="text-gray-600 text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Sidebar */}
          <div className="lg:w-48 flex-shrink-0">
            <div className="p-4">
              <h3 className="text-lg font-bold text-black mb-6">Blog categories</h3>
              <div className="space-y-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`block w-full text-left text-sm transition-colors ${
                      selectedCategory === category
                        ? 'border border-gray-800 px-4 py-3 text-black font-medium' 
                        : 'text-gray-700 hover:text-black px-2 py-1'
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
                    className="bg-white rounded-lg overflow-hidden cursor-pointer transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                    onClick={() => navigate(filteredPosts[0].link)}
                  >
                    <div className="aspect-[2/1] overflow-hidden">
                      <img
                        src={filteredPosts[0].image}
                        alt={filteredPosts[0].title}
                        className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
                      />
                    </div>
                    <div className="p-8">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="text-sm text-gray-500">{filteredPosts[0].category}</span>
                        <span className="text-gray-300">•</span>
                        <span className="text-sm text-gray-500">{filteredPosts[0].readTime}</span>
                      </div>
                      <h2 className="text-3xl font-bold text-black mb-4 hover:text-red-600 transition-colors">
                        {filteredPosts[0].title}
                      </h2>
                      <p className="text-gray-600 mb-6 text-lg">
                        {filteredPosts[0].description}
                      </p>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          navigate(filteredPosts[0].link);
                        }}
                        className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-red-500 text-red-500 h-[40px] px-4 py-2 text-xs font-bold uppercase tracking-wide relative overflow-hidden group"
                      >
                        <div className="absolute left-3 top-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                          <IoIosSend className="block text-red-500 w-4 h-4 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-6 group-hover:rotate-45 group-hover:scale-[140%]" />
                        </div>
                        <span className="block transition-all duration-300 ease-in-out text-sm group-hover:translate-x-16">
                          READ MORE
                        </span>
                      </button>
                    </div>
                  </div>
                </div>

                {/* Grid Posts */}
                {filteredPosts.length > 1 && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {filteredPosts.slice(1).map((post) => (
                      <div 
                        key={post.id} 
                        className="bg-white rounded-lg overflow-hidden cursor-pointer transform transition-all duration-200 hover:shadow-lg hover:-translate-y-1"
                        onClick={() => navigate(post.link)}
                      >
                        <div className="aspect-[4/3] overflow-hidden">
                          <img
                            src={post.image}
                            alt={post.title}
                            className="w-full h-full object-cover transition-transform duration-200 hover:scale-105"
                          />
                        </div>
                        <div className="p-6">
                          <div className="flex items-center gap-3 mb-3">
                            <span className="text-sm text-gray-500">{post.category}</span>
                            <span className="text-gray-300">•</span>
                            <span className="text-sm text-gray-500">{post.readTime}</span>
                          </div>
                          <h3 className="text-xl font-bold text-black mb-3 hover:text-red-600 transition-colors">
                            {post.title}
                          </h3>
                          <p className="text-gray-600 mb-4">
                            {post.description}
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              navigate(post.link);
                            }}
                            className="inline-flex items-center justify-center gap-2 bg-transparent border-2 border-red-500 text-red-500 h-[36px] px-3 py-1 text-xs font-bold uppercase tracking-wide relative overflow-hidden group"
                          >
                            <div className="absolute left-2 top-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                              <IoIosSend className="block text-red-500 w-3 h-3 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-5 group-hover:rotate-45 group-hover:scale-[140%]" />
                            </div>
                            <span className="block transition-all duration-300 ease-in-out text-xs group-hover:translate-x-12">
                              READ MORE
                            </span>
                          </button>
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
                <p className="text-gray-500 text-lg">No posts found in this category.</p>
              </div>
            )}
          </div>
        </div>

        {/* Newsletter Signup Section */}
        <div className="mt-20 bg-white rounded-lg p-8 lg:p-12">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-8">
            {/* Left Content */}
            <div className="lg:w-1/2">
              <h2 className="text-3xl lg:text-4xl font-bold text-black mb-4">
                Sign up to our newsletter
              </h2>
              <p className="text-gray-600 text-lg">
                We don't spam. We send sharp insights, new briefs, and the kind of content you'll actually want to open.
              </p>
            </div>

            {/* Right Content - Form */}
            <div className="lg:w-1/2">
              <form className="flex flex-col sm:flex-row gap-4">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="inline-flex items-center justify-center gap-2 bg-red-500 text-white h-[48px] px-6 py-3 text-xs font-bold uppercase tracking-wide border-transparent relative overflow-hidden group whitespace-nowrap"
                >
                  <div className="absolute left-3 top-1/2 -translate-y-1/2 svg-wrapper group-hover:animate-bounce-custom">
                    <IoIosSend className="block text-white w-6 h-6 opacity-0 transition-all duration-300 ease-in-out group-hover:opacity-100 group-hover:translate-x-12 group-hover:rotate-45 group-hover:scale-[140%]" />
                  </div>
                  <span className="block transition-all duration-300 ease-in-out text-sm group-hover:translate-x-40">
                    Sign me up!
                  </span>
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-3">
                By clicking Sign Up you're confirming that you agree with our{' '}
                <a href="#" className="underline hover:text-gray-700">
                  Terms and Conditions
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
