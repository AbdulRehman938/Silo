import { useState, useEffect, useRef } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { toast } from 'react-toastify';

export default function NewsletterSubscription({ onSubmit, isSubmitting, message, messageType, containerRef }) {
  const [isSticky, setIsSticky] = useState(false);
  const [leftPosition, setLeftPosition] = useState(0);
  const newsletterRef = useRef(null);
  const wrapperRef = useRef(null);

  // Validation schema
  const validationSchema = Yup.object({
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
  });

  // Formik setup
  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values, { setSubmitting, resetForm }) => {
      // Handle form submission here
      console.log('Newsletter subscription:', values.email);
      
      // Get existing data from localStorage
      const existingData = JSON.parse(localStorage.getItem('newsletterSubscriptions') || '[]');
      
      // Add new subscription with timestamp
      const newSubscription = {
        email: values.email,
        submittedAt: new Date().toISOString()
      };
      
      // Add to array and store in localStorage
      const updatedData = [...existingData, newSubscription];
      localStorage.setItem('newsletterSubscriptions', JSON.stringify(updatedData));
      
      // Log all stored data
      console.log('All newsletter subscriptions:', updatedData);
      
      // Show success toast
      toast.success('Successfully subscribed to newsletter!');
      
      // Reset form
      resetForm();
      setSubmitting(false);
      
      // Reload page after successful submit
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    },
  });

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
        className={`bg-white border-2 mt-10 border-black p-6 ${isSticky ? 'fixed top-24' : 'relative'}`}
        style={isSticky ? { left: `${leftPosition}px`, width: wrapperRef.current?.offsetWidth + 'px' } : {}}
      >
      <h3 className="text-xl font-bold text-black mb-3">Subscribe to newsletter</h3>
      <p className="text-base font-normal text-black mb-5 leading-relaxed">
        Subscribe to receive the latest blog posts to your inbox every week.
      </p>
      
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <input
            type="email"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            placeholder="Enter your email"
            className={`w-full border px-4 py-2 text-sm focus:ring-2 focus:ring-red-500 focus:border-red-500 outline-none ${
              formik.touched.email && formik.errors.email
                ? 'border-red-500'
                : 'border-black'
            }`}
            disabled={formik.isSubmitting}
          />
          {formik.touched.email && formik.errors.email && (
            <p className="mt-1 text-sm text-red-500">{formik.errors.email}</p>
          )}
        </div>
        
        <button
          type="submit"
          disabled={formik.isSubmitting}
          className="w-full bg-red-500 text-black px-4 py-3 font-medium hover:bg-red-600 focus:ring-2 focus:ring-red-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
        >
          {formik.isSubmitting ? 'Subscribing...' : 'Subscribe'}
        </button>
      </form>

      

        <p className="text-xs text-black mt-3">
          By subscribing you agree to with our{' '}
          <a href="/privacy-policy" className="underline hover:text-black">Privacy Policy</a>
        </p>
      </div>
    </div>
  );
}
