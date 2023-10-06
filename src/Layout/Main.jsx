import React from 'react';
import Navbar from '../Pages/Shared/Navbar';
import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer';

const Main = () => {
    const location = useLocation();
    const shouldRenderNavbarAndFooter = !['/login', '/signup'].includes(location.pathname);

    return (
        <div>
            {shouldRenderNavbarAndFooter && <Navbar />}
            <Outlet />
            {shouldRenderNavbarAndFooter && <Footer />}
        </div>
    );
};

export default Main;