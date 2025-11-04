import { useEffect } from 'react';
import Hero from '../components/About/Hero';

const About = () => {
  // Scroll to top when component mounts
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-white overflow-x-hidden min-h-screen max-w-[90vw] flex flex-col mx-auto" >
      <Hero />
    </div>
  );
};

export default About;
