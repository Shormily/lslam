import React from 'react';
import Slide from '../Component/Navbar/shared/Footer/Slider/page';
import EventBanner from '../Component/Navbar/shared/Footer/EventBanner/EventBanner';
import Events from '../Component/Navbar/shared/Footer/Event/Event';
import FivePillars from '../Component/Navbar/shared/Footer/Five/page';

const page = () => {
    return (
        <>
            <Slide />
            <EventBanner />
            <Events />
            <FivePillars />
            
        </>
    );
};

export default page;