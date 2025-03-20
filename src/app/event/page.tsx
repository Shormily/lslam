import React from 'react';
import Slide from '../Component/Navbar/shared/Footer/Slider/page';
import EventBanner from '../Component/Navbar/shared/Footer/EventBanner/EventBanner';
import Events from '../Component/Navbar/shared/Footer/Event/Event';

const page = () => {
    return (
        <>
            <Slide />
            <EventBanner />
            <Events/>
        </>
    );
};

export default page;