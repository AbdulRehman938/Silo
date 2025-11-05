import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Analytics } from "@vercel/analytics/react";
import AppRoutes from './routes';
import ScrollToTop from './components/Common/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen w-full">
        <AppRoutes />
      </div>
      <Analytics />
    </BrowserRouter>
  );
};

export default App;
