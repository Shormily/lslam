import React from 'react';
import Slide from '../Component/Navbar/shared/Footer/Slider/page';
import EventBanner from '../Component/Navbar/shared/Footer/EventBanner/EventBanner';
import Events from '../Component/Navbar/shared/Footer/Event/Event';
import FivePillars from '../Component/Navbar/shared/Footer/Five/page';
import { MdKeyboardArrowUp } from 'react-icons/md';
import ScrollToTop from 'react-scroll-to-top';

const page = () => {
    return (
        <>
            <Slide />
            <EventBanner />
            <Events />
            <FivePillars />
            <ScrollToTop
      style={{
    boxShadow: "none",
    backgroundColor: "#023020",
    borderRadius: "50%",
    right: 20,
    zIndex: 20,
    
  }}
  className="my-12 outline outline-2 outline-[#F0ECE5]"
  component={
    <MdKeyboardArrowUp
      style={{ fontSize: "20px", margin: "0 auto", color: "#fff" }}
      size={28}
    />
  }
   smooth
      top={500} />
        </>
    );
};

export default page;