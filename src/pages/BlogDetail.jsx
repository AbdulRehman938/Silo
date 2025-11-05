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
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-[90vw] px-3 md:px-6 lg:px-8 py-8 lg:py-12">
        {/* Breadcrumb */}
        <nav className="mb-6 lg:mb-8 ml-0 lg:ml-5">
          <button
            onClick={() => navigate('/ramblings')}
            className="text-gray-500 hover:text-gray-700 text-sm"
          >
            Blog
          </button>
          <span className="text-gray-400 mx-2">></span>
          <span className="text-gray-900 text-sm">{post.category}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Main Content */}
          <div className="lg:col-span-4 lg:ml-5">
            {/* Header */}
            <div className="mb-6 lg:mb-8">
              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-4 lg:mb-6 leading-tight">
                {post.title}
              </h1>
              
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6">
                <div className="mb-4 sm:mb-0">
                  <p className="text-gray-600 mb-1">By {post.author}</p>
                  <p className="text-gray-500 text-sm">{post.date} • {post.readTime}</p>
                </div>
                
                <div className="flex items-center gap-4">
                  <span className="text-gray-600 text-sm">Share this post</span>
                  <div className="flex gap-3">
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"/>
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z"/>
                      </svg>
                    </button>
                    <button className="text-gray-400 hover:text-gray-600">
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Image */}
            <div className="mb-8">
              <img
                src="/Placeholder1.png"
                alt={post.title}
                className="w-full h-64 md:h-80 lg:h-96 object-cover rounded-lg"
              />
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {/* Introduction */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">Introduction</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {post.content.introduction}
                </p>
                <p className="text-gray-700 leading-relaxed">
                  {post.content.body}
                </p>
              </div>

              {/* Content Image */}
              <div className="mb-8">
                <img
                  src="/Placeholder2.png"
                  alt="Content illustration"
                  className="w-full h-64 md:h-80 object-cover rounded-lg"
                />
                <p className="text-sm text-gray-500 mt-2">Image description here</p>
              </div>

              {/* More Content */}
              <div className="mb-8">
                <p className="text-gray-700 leading-relaxed mb-6">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?
                </p>
              </div>

              {/* Quote */}
              <blockquote className="border-l-4 border-gray-300 pl-6 py-4 mb-8 bg-gray-50 rounded-r-lg">
                <p className="text-lg text-gray-800 italic font-medium leading-relaxed">
                  "{post.content.quote}"
                </p>
                <footer className="text-sm text-gray-600 mt-2">— Industry Expert</footer>
              </blockquote>

              {/* Conclusion */}
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-black mb-4">Conclusion</h2>
                <p className="text-gray-700 leading-relaxed mb-6">
                  {post.content.conclusion}
                </p>
                <p className="text-gray-700 leading-relaxed mb-6">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.
                </p>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            {/* Newsletter Signup */}
            <div className="bg-white rounded-lg p-6 mb-8 sticky top-8">
              <h3 className="text-xl font-bold text-black mb-4">Subscribe to newsletter</h3>
              <p className="text-gray-600 text-sm mb-6">
                Subscribe to receive the latest blog posts in your inbox every week.
              </p>
              <form onSubmit={handleNewsletterSubmit} className="space-y-4">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-red-500 hover:bg-red-600 text-white font-medium py-3 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
              <p className="text-xs text-gray-500 mt-3">
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