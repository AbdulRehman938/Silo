import React, { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoutes from './routes';
import ScrollToTop from './components/Common/ScrollToTop';

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen w-full">
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;
