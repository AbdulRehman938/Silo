import { useState, useEffect, useRef } from 'react';

export default function NewsletterSubscription({ onSubmit, isSubmitting, message, messageType, containerRef }) {
  const [email, setEmail] = useState('');
  const [isSticky, setIsSticky] = useState(false);
  const [leftPosition, setLeftPosition] = useState(0);
  const newsletterRef = useRef(null);
  const wrapperRef = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && !isSubmitting) {
      onSubmit(email);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef?.current || !newsletterRef.current || !wrapperRef.current) return;

      // Disable sticky on mobile (screens smaller than 1024px / lg breakpoint)
      const isMobile = window.innerWidth < 1024;
      if (isMobile) {
        setIsSticky(false);
        return;
      }

      const containerRect = containerRef.current.getBoundingClientRect();
      const wrapperRect = wrapperRef.current.getBoundingClientRect();
      const newsletterHeight = newsletterRef.current.offsetHeight;
      
      // Calculate left position for fixed element
      setLeftPosition(wrapperRect.left);
      
      // Stick when scrolling and container is in view
      // Start sticking when container top is at or above 96px from top
      // Stop sticking when container bottom is less than newsletter height + top offset
      if (containerRect.top <= 96 && containerRect.bottom >= newsletterHeight + 160) {
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
  }, [containerRef]);

  return (
    <div ref={wrapperRef} className="relative">
      <div 
        ref={newsletterRef}
        className={`bg-white border-2 border-gray-300 rounded-lg p-6 ${isSticky ? 'fixed top-24' : 'relative'}`}
        style={isSticky ? { left: `${leftPosition}px`, width: wrapperRef.current?.offsetWidth + 'px' } : {}}
      >
      <h3 className="text-xl font-bold text-black mb-3">Subscribe to newsletter</h3>
      <p className="text-sm text-gray-600 mb-5 leading-relaxed">
        Subscribe to receive the latest blog posts to your inbox every week.
      </p>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Enter your email"
          className="w-full border border-gray-300 rounded px-4 py-3 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none"
          disabled={isSubmitting}
          required
        />
        
        <button
          type="submit"
          disabled={isSubmitting || !email}
          className="w-full bg-red-500 text-white px-4 py-3 rounded font-medium hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
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
    </div>
  );
}
