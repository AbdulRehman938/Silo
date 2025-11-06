import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

// Content Section Component
const ContentSection = ({ title, children, className = '' }) => {
  return (
    <section className={`mb-8 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold text-black mb-6">{title}</h2>
      <div className="space-y-4">
        {children}
      </div>
    </section>
  );
};

// Quote Block Component
const QuoteBlock = ({ quote, author }) => {
  return (
    <blockquote className="border-l-4 border-gray-300 pl-6 py-4 my-8 bg-gray-50 rounded-r-lg">
      <p className="text-lg italic text-gray-800 mb-2 font-medium">"{quote}"</p>
      {author && (
        <cite className="text-sm text-gray-600 font-medium text-right block">— {author}</cite>
      )}
    </blockquote>
  );
};

// Content Image Component
const ContentImage = ({ src, alt, caption }) => {
  const [contentImageLoaded, setContentImageLoaded] = useState(false);
  const [contentImageError, setContentImageError] = useState(false);

  const handleContentImageLoad = () => {
    setContentImageLoaded(true);
    setContentImageError(false);
  };

  const handleContentImageError = () => {
    setContentImageError(true);
    setContentImageLoaded(false);
  };

  return (
    <figure className="mb-6">
      <div className="aspect-[4/3] rounded-lg overflow-hidden bg-gray-200 flex items-center justify-center relative">
        {!contentImageError && (
          <>
            {!contentImageLoaded && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
            <img
              src={src || '/placeholderblog2.png'}
              alt={alt}
              className={`w-full h-full object-cover transition-opacity duration-300 ${contentImageLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="lazy"
              onLoad={handleContentImageLoad}
              onError={handleContentImageError}
            />
          </>
        )}
        {contentImageError && (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
          </div>
        )}
      </div>
      {caption && (
        <figcaption className="text-sm text-gray-600 italic mt-2 text-center">{caption}</figcaption>
      )}
    </figure>
  );
};

// Newsletter Subscription Component
const NewsletterSubscription = ({ onSubmit, isSubmitting, message, messageType }) => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && !isSubmitting) {
      onSubmit(email);
    }
  };

  return (
    <div className="bg-white border border-gray-200 rounded-lg p-6 mt-8">
      <h3 className="text-lg font-semibold text-black mb-2">Subscribe to newsletter</h3>
      <p className="text-sm text-gray-600 mb-4">
        Subscribe to receive the latest blog posts to your inbox weekly. No spam, ever.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          disabled={isSubmitting}
          required
        />
        
        <button
          type="submit"
          disabled={isSubmitting || !email}
          className="w-full bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      {message && (
        <p className={`text-sm mt-3 ${messageType === 'success' ? 'text-green-600' : 'text-red-600'}`}>
          {message}
        </p>
      )}

      <p className="text-xs text-gray-500 mt-3">
        By subscribing you agree to with our{' '}
        <a href="#" className="underline hover:text-gray-700">Privacy Policy</a>
      </p>
    </div>
  );
};

export default function BlogDetail() {
  const { id } = useParams();
  const [copySuccess, setCopySuccess] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [subscriptionState, setSubscriptionState] = useState({
    email: '',
    isSubmitting: false,
    message: '',
    messageType: ''
  });

  // Social sharing functions
  const shareOnLinkedIn = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${url}`, '_blank');
  };

  const shareOnTwitter = () => {
    const url = encodeURIComponent(window.location.href);
    const text = encodeURIComponent(blogPost?.title || 'Check out this blog post');
    window.open(`https://twitter.com/intent/tweet?url=${url}&text=${text}`, '_blank');
  };

  const shareOnFacebook = () => {
    const url = encodeURIComponent(window.location.href);
    window.open(`https://www.facebook.com/sharer/sharer.php?u=${url}`, '_blank');
  };

  // Newsletter subscription handler
  const handleNewsletterSubmit = async (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    
    if (!emailRegex.test(email)) {
      setSubscriptionState({
        email: '',
        isSubmitting: false,
        message: 'Please enter a valid email address.',
        messageType: 'error'
      });
      return;
    }

    setSubscriptionState(prev => ({
      ...prev,
      isSubmitting: true,
      message: '',
      messageType: ''
    }));

    try {
      // Mock API call - replace with actual implementation
      await new Promise(resolve => setTimeout(resolve, 1000));
      console.log('Newsletter subscription:', email);
      
      setSubscriptionState({
        email: '',
        isSubmitting: false,
        message: 'Successfully subscribed to newsletter!',
        messageType: 'success'
      });
    } catch (error) {
      setSubscriptionState({
        email: '',
        isSubmitting: false,
        message: 'Failed to subscribe. Please try again.',
        messageType: 'error'
      });
    }
  };

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(window.location.href);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } else {
        // Fallback for older browsers or non-secure contexts
        const textArea = document.createElement('textarea');
        textArea.value = window.location.href;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      }
    } catch (err) {
      console.error('Failed to copy: ', err);
      // Show error message to user
      alert('Failed to copy link. Please copy manually: ' + window.location.href);
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
    setImageError(false);
  };

  const handleImageError = () => {
    setImageError(true);
    setImageLoaded(false);
  };

  // Reset image states when blog post changes
  useEffect(() => {
    setImageLoaded(false);
    setImageError(false);
  }, [id]);

  // Blog data matching the structure from Ramblings page
  const blogPosts = {
    1: {
      id: 1,
      image: "/rambling1.png",
      category: "UGC",
      readTime: "5 min read",
      title: "How to brief a UGC creator",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      author: "Ruby Turbett",
      publishDate: "12 Sept 2024",
      featuredImage: "/placeholderblog1.png",
      content: {
        introduction: {
          title: 'Introduction',
          paragraphs: [
            'Hi laudantium est et quaerat ligula ac diam, error vel vitae sapien duis molestie neque dolor faucibus eget vestibulum leo. Dictum quis molestie est et Tellus aliquam lorem urna aliam. Mauris pretium mauris mauris amet, diam elit neque Curabitur. At feugiat sapien varius id.',
            'Eget quis mauris leo lacinia pharetra, tempus. Sapien in vestibulum mollis et vulputate lectus ut sed aliquam. Auctor ut lacinia arcu quis Tellus magna mauris. Nulla ut habitasse diam ut. Suspendisse tellus neque, quis egestas elit et vulputate. Mauris pretium mauris mauris amet, diam elit neque Curabitur. At feugiat sapien varius id.'
          ]
        },
        contentImage: {
          src: '/placeholderblog2.png',
          alt: 'Image content goes here',
          caption: 'Image content goes here'
        },
        quote: {
          text: 'Ipsum sit mattis nulla quam nulla. Gravida id gravida ac enim mauris id. Non pellentesque congue eget consectetur turpis. Sapien, dictum molestie sem tempor. Diam elit, orci, tincidunt aenean tempus.',
          author: 'Author name'
        },
        conclusion: {
          title: 'Conclusion',
          paragraphs: [
            'Tellus odio tempus sem posuere ornare leo. Vitae ut. Blandit duis ultricies vulputate morbi feugiat cras placerat elit. Aliquam tellus lorem sed ac. Montes, sed mattis pellentesque suscipit accumsan. Cursus viverra aenean magna risus elementum faucibus molestie pellentesque. Arcu ultricies sed mauris vestibulum.',
            'Morbi sed imperdiet in ipsum, adipiscing elit dui lectus. Tellus id scelerisque est ultricies ultricies. Duis est sit sed leo nisl, blandit elit sagittis. Quisque tristique consequat quam sed. Nisl at scelerisque amet nulla purus habitasse.',
            'Nunc sed faucibus bibendum feugiat sed interdum. Ipsum egestas condimentum mi massa. In tincidunt pharetra consectetur sed duis facilisis metus. Etiam egestas in nec sed et. Quis lobortis at sit dictum eget nibh tortor commodo cursus.',
            'Odio felis sagittis, morbi feugiat tortor vitae feugiat fusce aliquet. Nam elementum urna nisi aliquet erat dolor enim. Ornare id morbi eget ipsum. Aliquam senectus neque ut id eget consectetur dictum. Donec posuere pharetra odio consequat scelerisque et, nunc tortor. Nec pellentesque dignissim enim sit amet venenatis.'
          ]
        }
      }
    },
    2: {
      id: 2,
      image: "/rambling2.png",
      category: "Animation",
      readTime: "5 min read",
      title: "Animation checklist for social media",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      author: "Ruby Turbett",
      publishDate: "12 Sept 2024",
      featuredImage: "/placeholderblog1.png"
    },
    3: {
      id: 3,
      image: "/rambling3.png",
      category: "Strategy",
      readTime: "5 min read",
      title: "The Death of \"Posting to Post\"",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      author: "Ruby Turbett",
      publishDate: "12 Sept 2024",
      featuredImage: "/placeholderblog1.png"
    },
    4: {
      id: 4,
      image: "/rambling4.png",
      category: "Branding",
      readTime: "5 min read",
      title: "5 Things Every Brand Brief Should Include (But Rarely Does)",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      author: "Ruby Turbett",
      publishDate: "12 Sept 2024",
      featuredImage: "/placeholderblog1.png"
    },
    5: {
      id: 5,
      image: "/rambling5.png",
      category: "Creators",
      readTime: "5 min read",
      title: "Meet the Creators: Stories from Our Network",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
      author: "Ruby Turbett",
      publishDate: "12 Sept 2024",
      featuredImage: "/placeholderblog1.png"
    }
  };

  const blogPost = blogPosts[id];

  // Handle case where blog post is not found
  if (!blogPost) {
    return (
      <div className="bg-gray-50 min-h-screen">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-black mb-4">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">The blog post you're looking for doesn't exist.</p>
            <a 
              href="/ramblings" 
              className="inline-flex items-center text-red-500 hover:text-red-600 font-medium transition-colors"
            >
              ← Back to Ramblings
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 py-12">
        {/* Breadcrumb Navigation */}
        <nav className="mb-8" aria-label="Breadcrumb">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Blog</span>
            <span className="text-gray-400">›</span>
            <span>{blogPost.category}</span>
          </div>
        </nav>

        {/* Main Content Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16">
          {/* Left Column - Content */}
          <div className="lg:pr-8 order-last lg:order-first">
            {/* Blog Title */}
            <header>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6 leading-tight">
                {blogPost.title}
              </h1>
            </header>

            {/* Author Metadata */}
            <section className="mb-8" aria-label="Article metadata">
              <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-500">
                <span>By <span className="font-medium">{blogPost.author}</span></span>
                <span className="text-gray-300 hidden sm:inline" aria-hidden="true">•</span>
                <time dateTime={blogPost.publishDate}>{blogPost.publishDate}</time>
                <span className="text-gray-300 hidden sm:inline" aria-hidden="true">•</span>
                <span>{blogPost.readTime}</span>
              </div>
            </section>

            {/* Social Share Section */}
            <section className="mb-8" aria-label="Share this post">
              <h2 className="text-base font-medium text-black mb-4">Share this post</h2>
              <div className="flex items-center flex-wrap gap-4">
                {/* Copy Link Button */}
                <button
                  onClick={copyToClipboard}
                  className="p-2 text-gray-600 hover:text-black focus:text-black focus:outline-none focus:ring-2 focus:ring-gray-300 rounded transition-colors"
                  aria-label="Copy link to clipboard"
                  title={copySuccess ? "Copied!" : "Copy link"}
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                  </svg>
                </button>

                {/* LinkedIn Button */}
                <button
                  onClick={shareOnLinkedIn}
                  className="p-2 text-gray-600 hover:text-black focus:text-black focus:outline-none focus:ring-2 focus:ring-gray-300 rounded transition-colors"
                  aria-label="Share on LinkedIn"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </button>

                {/* Twitter/X Button */}
                <button
                  onClick={shareOnTwitter}
                  className="p-2 text-gray-600 hover:text-black focus:text-black focus:outline-none focus:ring-2 focus:ring-gray-300 rounded transition-colors"
                  aria-label="Share on Twitter"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                  </svg>
                </button>

                {/* Facebook Button */}
                <button
                  onClick={shareOnFacebook}
                  className="p-2 text-gray-600 hover:text-black focus:text-black focus:outline-none focus:ring-2 focus:ring-gray-300 rounded transition-colors"
                  aria-label="Share on Facebook"
                >
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </button>
              </div>
              {copySuccess && (
                <p className="text-sm text-green-600 mt-2" role="status" aria-live="polite">
                  Link copied to clipboard!
                </p>
              )}
            </section>

            {/* Content Body */}
            {blogPost.content && (
              <div className="content-body">
                {/* Introduction Section */}
                <ContentSection title={blogPost.content.introduction.title}>
                  {blogPost.content.introduction.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-base text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </ContentSection>

                {/* Content Image */}
                <ContentImage 
                  src={blogPost.content.contentImage.src}
                  alt={blogPost.content.contentImage.alt}
                  caption={blogPost.content.contentImage.caption}
                />

                {/* Quote Block */}
                <QuoteBlock 
                  quote={blogPost.content.quote.text}
                  author={blogPost.content.quote.author}
                />

                {/* Conclusion Section */}
                <ContentSection title={blogPost.content.conclusion.title}>
                  {blogPost.content.conclusion.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-base text-gray-700 leading-relaxed mb-4">
                      {paragraph}
                    </p>
                  ))}
                </ContentSection>
              </div>
            )}
          </div>

          {/* Right Column - Featured Image and Newsletter */}
          <aside className="lg:pl-8 order-first lg:order-last" aria-label="Featured image and newsletter">
            <figure className="bg-gray-200 rounded-lg aspect-[4/3] overflow-hidden flex items-center justify-center relative">
              {!imageError && (
                <>
                  {!imageLoaded && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-200 animate-pulse">
                      <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  )}
                  <img
                    src={blogPost.featuredImage}
                    alt={`Featured image for ${blogPost.title}`}
                    className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                    loading="lazy"
                    onLoad={handleImageLoad}
                    onError={handleImageError}
                  />
                </>
              )}
              {imageError && (
                <div className="w-full h-full flex items-center justify-center" role="img" aria-label="Image placeholder">
                  <svg className="w-12 h-12 md:w-16 md:h-16 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </div>
              )}
            </figure>

            {/* Newsletter Subscription */}
            <NewsletterSubscription 
              onSubmit={handleNewsletterSubmit}
              isSubmitting={subscriptionState.isSubmitting}
              message={subscriptionState.message}
              messageType={subscriptionState.messageType}
            />
          </aside>
        </div>
      </div>
    </div>
  );
}