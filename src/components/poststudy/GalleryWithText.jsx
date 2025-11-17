import { useEffect, useRef, useState } from 'react'

const GalleryWithText = ({ heading, text, images }) => {
  const defaultImages = [
    { src: null, alt: "Gallery image 1" },
    { src: null, alt: "Gallery image 2" },
    { src: null, alt: "Gallery image 3" }
  ]

  const displayImages = images || defaultImages
  const containerRef = useRef(null)
  const textRef = useRef(null)
  const textWrapperRef = useRef(null)
  const [isSticky, setIsSticky] = useState(false)
  const [leftPosition, setLeftPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current || !textRef.current || !textWrapperRef.current) return

      // Disable sticky on mobile (screens smaller than 1024px / lg breakpoint)
      const isMobile = window.innerWidth < 1024
      if (isMobile) {
        setIsSticky(false)
        return
      }

      const containerRect = containerRef.current.getBoundingClientRect()
      const textWrapperRect = textWrapperRef.current.getBoundingClientRect()
      const textHeight = textRef.current.offsetHeight
      
      // Calculate left position for fixed element
      setLeftPosition(textWrapperRect.left)
      
      // Only stick when scrolling down and container top reaches threshold
      // And container bottom hasn't passed the text
      if (containerRect.top <= 96 && containerRect.bottom >= textHeight + 96 + 64) {
        setIsSticky(true)
      } else {
        setIsSticky(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleScroll)
    handleScroll() // Initial check
    
    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleScroll)
    }
  }, [])

  return (
    <div ref={containerRef} className='w-full bg-white py-16 md:py-24 relative'>
      <div className='max-w-[90vw] mx-auto'>
        <div className='flex flex-col lg:flex-row gap-8 lg:gap-16 items-start'>
          {/* Left: Scrolling Images */}
          <div className='w-full lg:w-1/2 flex flex-col gap-6 order-2 lg:order-1'>
            {displayImages.map((image, index) => (
              <div key={index} className='w-full aspect-[4/3] bg-[#DBDBDB] overflow-hidden'>
                {image.src ? (
                  <img 
                    src={image.src} 
                    alt={image.alt || `Gallery image ${index + 1}`} 
                    className='w-full h-full object-cover'
                  />
                ) : (
                  <div className='w-full h-full flex items-center justify-center bg-[#DBDBDB]'>
                    <svg 
                      className='w-20 h-20 text-[#BABABA]' 
                      fill='currentColor' 
                      viewBox='0 0 24 24'
                    >
                      <path d='M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z'/>
                    </svg>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right: Sticky Text */}
          <div ref={textWrapperRef} className='w-full lg:w-1/2 relative order-1 lg:order-2'>
            <div 
              ref={textRef}
              className={`${isSticky ? 'fixed top-32' : 'relative'}`}
              style={isSticky ? { left: `${leftPosition}px`, width: textWrapperRef.current?.offsetWidth + 'px' } : {}}
            >
              <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold text-black mb-6'>
                {heading || "Short heading goes here"}
              </h2>
              <p className='text-base md:text-lg text-gray-700 leading-relaxed'>
                {text || "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat. Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default GalleryWithText
