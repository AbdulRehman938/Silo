import { useState } from 'react';
import { FaLink, FaLinkedinIn, FaFacebookF, FaImage } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

export default function Hero({ blogPost }) {
  const [copySuccess, setCopySuccess] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

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

  const copyToClipboard = async () => {
    try {
      if (navigator.clipboard && window.isSecureContext) {
        await navigator.clipboard.writeText(window.location.href);
        setCopySuccess(true);
        setTimeout(() => setCopySuccess(false), 2000);
      } else {
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
      alert('Failed to copy link. Please copy manually: ' + window.location.href);
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 min-h-screen md:mt-20 md:min-h-[80vh]">
      {/* Left Column - Content */}
      <div className="order-2 lg:order-1">
        <nav className="mb-8" aria-label="Breadcrumb">
          <div className="flex items-center space-x-2 text-sm text-gray-600">
            <span>Blog</span>
            <span className="text-gray-400">›</span>
            <span>{blogPost.category}</span>
          </div>
        </nav>
        {/* Blog Title */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-16 leading-tight">
          {blogPost.title || 'Blog title heading will go here'}
        </h1>

        {/* Author Metadata */}
        <div className="mb-12">
          <p className="text-sm text-black">
            By <span className="font-semibold">{blogPost.author || 'Ruby Turbett'}</span>
          </p>
          <div className="flex items-center gap-2 text-sm text-black mt-1">
            <time dateTime={blogPost.publishDate}>{blogPost.publishDate || '12 Sept 2025'}</time>
            <span>•</span>
            <span>{blogPost.readTime || '5 min read'}</span>
          </div>
        </div>

        {/* Social Share Section */}
        <div className="mb-8">
          <h2 className="text-base font-semibold text-black mb-3">Share this post</h2>
          <div className="flex items-center gap-3">
            {/* Copy Link Button */}
            <button
              onClick={copyToClipboard}
              className="p-2 text-black hover:text-gray-600 focus:outline-none transition-colors"
              aria-label="Copy link to clipboard"
              title={copySuccess ? "Copied!" : "Copy link"}
            >
              <FaLink className="w-5 h-5" />
            </button>

            {/* LinkedIn Button */}
            <button
              onClick={shareOnLinkedIn}
              className="p-2 text-black hover:text-gray-600 focus:outline-none transition-colors"
              aria-label="Share on LinkedIn"
            >
              <FaLinkedinIn className="w-5 h-5" />
            </button>

            {/* Twitter/X Button */}
            <button
              onClick={shareOnTwitter}
              className="p-2 text-black hover:text-gray-600 focus:outline-none transition-colors"
              aria-label="Share on Twitter"
            >
              <FaXTwitter className="w-5 h-5" />
            </button>

            {/* Facebook Button */}
            <button
              onClick={shareOnFacebook}
              className="p-2 text-black hover:text-gray-600 focus:outline-none transition-colors"
              aria-label="Share on Facebook"
            >
              <FaFacebookF className="w-5 h-5" />
            </button>
          </div>
          {copySuccess && (
            <p className="text-sm text-green-600 mt-2" role="status" aria-live="polite">
              Link copied to clipboard!
            </p>
          )}
        </div>
      </div>

      {/* Right Column - Featured Image */}
      <div className="order-1 lg:order-2">
        <div className="bg-gray-300 aspect-[16/9] overflow-hidden flex items-center justify-center relative">
          {!imageError && blogPost.featuredImage ? (
            <>
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-300 animate-pulse">
                  <FaImage className="w-16 h-16 text-gray-400" />
                </div>
              )}
              <img
                src={blogPost.featuredImage}
                alt={`Featured image for ${blogPost.title}`}
                className={`w-full h-full object-cover transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                loading="lazy"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
              />
            </>
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <FaImage className="w-20 h-20 text-gray-400" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
