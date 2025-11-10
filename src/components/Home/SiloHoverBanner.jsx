import { useRef } from 'react';
import { useSiloHoverPixi } from '../../hooks/useSiloHoverPixi';

export const SiloHoverBanner = ({ 
  svgSrc = 'https://res.cloudinary.com/di9tb45rl/image/upload/v1762717235/hero_hyl0xu.svg', 
  intensity = 40, 
  className = '' 
}) => {
  const hostRef = useRef(null);
  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
  const height = isMobile ? 340 : 498;

  useSiloHoverPixi({ hostRef, svgSrc, height, intensity, isMobile });

  return (
    <section
      className={`relative w-full overflow-hidden ${className}`}
      // style={{
      //   paddingTop: isMobile ? '40px' : 'clamp(88px, 7vw, 104px)',
      //   paddingBottom: isMobile ? '60px' : 'clamp(80px, 8vw, 112px)',
      // }}
    >
      <div className='w-full px-4 md:px-8 lg:px-12'>
        <div className='flex items-center justify-center md:mt-0 mt-10 w-full md:min-h-[350px] mx-auto max-w-[2160px]'>
          {!isMobile ? (
            <div ref={hostRef} className='relative w-full flex items-center justify-center' />
          ) : (
            <div className='flex justify-center items-center w-full h-full'>
              <img src={svgSrc} alt='Silo logo' className='w-full max-w-[1440px] h-auto object-contain' />
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
