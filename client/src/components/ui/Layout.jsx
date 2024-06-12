import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';

import { Header } from './Header';
import Footer from './Footer';
import Herosection from './Herosection';

const Layout = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      {location.pathname === "/" && <Herosection />}
      <div className="mx-auto flex min-h-screen max-w-screen-xl flex-col">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
