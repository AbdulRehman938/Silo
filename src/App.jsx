import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';

const App = () => {
  useEffect(() => {
    const scaleFix = () => {
      const ratio = window.devicePixelRatio;
      document.documentElement.style.zoom = 1 / ratio;
    };
    scaleFix();

    window.addEventListener('resize', scaleFix);
    return () => window.removeEventListener('resize', scaleFix);
  }, []);

  return (
    <BrowserRouter>
      <div className="min-h-screen w-full">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
