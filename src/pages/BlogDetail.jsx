import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export default function BlogDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');

  // Sample blog data - in a real app this would come from an API
  const blogPosts = {
    1: {
      id: 1,
      category: "UGC",
      title: "How to brief a UGC creator",
      author: "John Doe",
      date: "March 15, 2024",
      readTime: "5 min read",
      content: {
        introduction: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        body: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
        quote: "Lorem sit mattis nulla quam nulla. Gravida et gravida lorem rhoncus ut non pellentesque congue eget consectetur turpis. Sapien dictum molestie sem tempor. Diam elit orci, tincidunt semper tempor.",
        conclusion: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
      }
    },
    2: {
      id: 2,
      category: "Animation",
      title: "Animation checklist for social media",
      author: "Jane Smith",
      date: "March 12, 2024",
      readTime: "5 min read",
      content: {
        introduction: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        body: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
        quote: "Lorem sit mattis nulla quam nulla. Gravida et gravida lorem rhoncus ut non pellentesque congue eget consectetur turpis. Sapien dictum molestie sem tempor. Diam elit orci, tincidunt semper tempor.",
        conclusion: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
      }
    },
    3: {
      id: 3,
      category: "Strategy",
      title: "The Death of \"Posting to Post\"",
      author: "Mike Johnson",
      date: "March 10, 2024",
      readTime: "5 min read",
      content: {
        introduction: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        body: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
        quote: "Lorem sit mattis nulla quam nulla. Gravida et gravida lorem rhoncus ut non pellentesque congue eget consectetur turpis. Sapien dictum molestie sem tempor. Diam elit orci, tincidunt semper tempor.",
        conclusion: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
      }
    },
    4: {
      id: 4,
      category: "Branding",
      title: "5 Things Every Brand Brief Should Include (But Rarely Does)",
      author: "Sarah Wilson",
      date: "March 8, 2024",
      readTime: "5 min read",
      content: {
        introduction: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        body: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
        quote: "Lorem sit mattis nulla quam nulla. Gravida et gravida lorem rhoncus ut non pellentesque congue eget consectetur turpis. Sapien dictum molestie sem tempor. Diam elit orci, tincidunt semper tempor.",
        conclusion: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
      }
    },
    5: {
      id: 5,
      category: "Creators",
      title: "Meet the Creators: Stories from Our Network",
      author: "Alex Brown",
      date: "March 5, 2024",
      readTime: "5 min read",
      content: {
        introduction: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.",
        body: "Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.",
        quote: "Lorem sit mattis nulla quam nulla. Gravida et gravida lorem rhoncus ut non pellentesque congue eget consectetur turpis. Sapien dictum molestie sem tempor. Diam elit orci, tincidunt semper tempor.",
        conclusion: "Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur."
      }
    }
  };

  const post = blogPosts[id];

  if (!post) {
    return (
      <div className="bg-gray-50 min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Post not found</h1>
          <button
            onClick={() => navigate('/ramblings')}
            className="text-red-500 hover:text-red-600 font-medium"
          >
            ← Back to Ramblings
          </button>
        </div>
      </div>
    );
  }

  const handleNewsletterSubmit = (e) => {
    e.preventDefault();
    // Handle newsletter signup
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="mx-auto max-w-[90vw] px-3 md:px-6 lg:px-8 py-8 lg:py-12">
        {/* Hero Section */}
        <div className="mb-16">
          {/* Breadcrumb */}
          <nav className="mb-8">
            <button
              onClick={() => navigate('/ramblings')}
              className="text-gray-500 hover:text-gray-700 text-sm"
            >
              Blog
            </button>
            <span className="text-gray-400 mx-2">></span>
            <span className="text-gray-900 text-sm">{post.category}</span>
          </nav>

          {/* Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Left Column - Text Content */}
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-black mb-8 leading-tight">
                Blog title heading will go here
              </h1>
              
              <div className="mb-8">
                <p className="text-gray-600 text-base mb-2">By Ruby Turbett</p>
                <p className="text-gray-500 text-sm">12 Sept 2024 • 5 min read</p>
              </div>
              
              <div>
                <p className="text-gray-700 text-base mb-4 font-medium">Share this post</p>
                <div className="flex gap-4">
                  {/* Link Icon */}
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                  </button>
                  
                  {/* LinkedIn Icon */}
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </button>
                  
                  {/* X (Twitter) Icon */}
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                    </svg>
                  </button>
                  
                  {/* Facebook Icon */}
                  <button className="text-gray-600 hover:text-gray-800 transition-colors">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column - Hero Image */}
            <div>
              <img
                src="/placeholderblog1.png"
                alt={post.title}
                className="w-full h-80 lg:h-96 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8">

            
            {/* Full Width Content */}
            <div className="mt-12 col-span-full">
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-black mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae.
                </p>
              </div>

              {/* Content Image */}
              <div className="mb-8">
                <img
                  src="/placeholderblog2.png"
                  alt="Content illustration"
                  className="w-full h-48 md:h-64 object-cover"
                />
                <p className="text-xs text-gray-500 mt-1">Image description here</p>
              </div>

              {/* More Content */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
              </div>

              {/* Quote */}
              <blockquote className="border border-gray-300 p-4 mb-8 bg-gray-50 max-w-md">
                <p className="text-sm text-gray-800 font-medium leading-relaxed mb-2">
                  "Lorem sit mattis nulla quam nulla. Gravida et gravida lorem rhoncus ut non pellentesque congue eget consectetur turpis. Sapien dictum molestie sem tempor. Diam elit orci, tincidunt semper tempor."
                </p>
                <footer className="text-xs text-gray-600">— Industry Expert</footer>
              </blockquote>

              {/* Conclusion */}
              <div className="mb-8">
                <h2 className="text-xl font-bold text-black mb-4">Conclusion</h2>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur.
                </p>
                <p className="text-gray-700 leading-relaxed mb-4 text-sm">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p className="text-gray-700 leading-relaxed text-sm">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            {/* Newsletter Signup */}
            <div className="border border-gray-300 p-4 sticky top-8 mt-8 lg:mt-0">
              <h3 className="text-base font-bold text-black mb-3">Subscribe to newsletter</h3>
              <p className="text-gray-600 text-xs mb-4">
                Subscribe to receive the latest blog posts in your inbox every week.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-3 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-red-500 focus:border-transparent text-xs"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-2 transition-colors text-xs"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-2">
                By subscribing you agree to with our{' '}
                <a href="#" className="underline hover:text-gray-700">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}