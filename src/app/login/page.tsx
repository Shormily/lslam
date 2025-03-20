import React from 'react';
import Login from '../Component/Navbar/shared/Footer/Login/login';
import Navbar from '../Component/Navbar/Navbar';
import Footer from '../Component/Navbar/shared/Footer/Footer';

const page = () => {
    return (
        <>
            <Navbar/>
            <Login />  
            <Footer/>
        </>
    );
};

export default page;