import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';


const Root = () => {
    return (
        <div className='dark:bg-gray-800'>
            <Header />
            <Outlet />
            <Footer />
        </div>
    );
};

export default Root;