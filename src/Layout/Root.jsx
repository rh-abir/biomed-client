import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';


const Root = () => {
    return (
        <div>
            {/* <Header /> */}
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;