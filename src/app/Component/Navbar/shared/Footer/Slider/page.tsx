"use client";
import AOS from "aos"; // ✅ Import AOS
import "aos/dist/aos.css"; // ✅ Import AOS styles
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { FaArrowRightLong, FaArrowLeftLong } from "react-icons/fa6";
import { motion } from "framer-motion"; // ✅ Import Framer Motion
import { Crete_Round } from "next/font/google";

const creteRound = Crete_Round({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-crete-round",
});

const Slide = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
//   const [setSwiperInstance] = useState(null);
  const [activeIndex, setActiveIndex] = useState(0); // ✅ Track active slide

  const data = [
    { img: "/asset/bannerimg.jpg" },
    { img: "/asset/ban.jpg" },
    { img: "/asset/banne3.jpg" },
  ];

  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration (1.2s)
      once: false, // Run animation every time it enters viewport
      easing: "ease-in-out", // Smoother animation
    });
  }, []);

    return (
        <div className="relative w-full min-h-screen">
            <div className={`${creteRound.variable} font-serif`}>
            <div className="relative w-full min-h-screen"> {/* Ensure full height */}
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        spaceBetween={30}
        slidesPerView={1}
        navigation={{ prevEl: prevRef.current, nextEl: nextRef.current }}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        effect="fade"
        fadeEffect={{ crossFade: true }}
        speed={1000}
        onSlideChange={(swiper) => setActiveIndex(swiper.activeIndex)}
        className="w-full h-screen" /* Ensure full height */
      >
        {data.map((d, index) => (
          <SwiperSlide key={index}>
            <motion.div
              key={activeIndex}
              className="relative w-full h-screen bg-cover bg-center"
              style={{ backgroundImage: `url(${d.img})` }}
              initial={{ scale: 1.2 }}
              animate={{ scale: 1 }}
              transition={{ duration: 2, ease: "easeOut" }}
            >
              <div className="absolute inset-0 flex flex-col items-center justify-center text-center m-auto px-4">
                  <Image
                    src="/asset/kalma.png"
                    alt="Kalma"
                    width={400}
                    height={100}
                    className="py-2 h-24"
                    data-aos="fade-up" // ✅ AOS Slide-up effect on Kalma image
                  />

                  <div className="py-24 text-center ">
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pb-8">
  <Image
    src="/asset/line.png"
    alt="Line"
    width={250}
    height={150}
    className="w-28 sm:w-40 md:w-60"
    data-aos="fade-up"
  />
  <p className="text-white text-lg sm:text-xl md:text-2xl text-center">Assalamu Alaikum</p>
  <Image
    src="/asset/line.png"
    alt="Line"
    width={250}
    height={100}
    className="w-28 sm:w-40 md:w-60"
    data-aos="fade-up"
  />
</div>

                    <h2 className="text-white font-semibold text-5xl pb-8" data-aos="fade-up">
                      Allah and His angels send blessings
                      <br />
                      <span className="my-3">on the prophet</span>
                    </h2>
                    <p className="text-white pb-8" data-aos="fade-up" data-aos-delay="500">
                      O you who believe! Send your blessings on him and salute him with all respect.
                    </p>
                    <button
                      type="button"
                      className="text-white bg-gradient-to-r from-yellow-300 via-yellow-500 to-yellow-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-yellow-500/50 dark:shadow-lg dark:shadow-yellow-800/80 font-medium rounded-lg text-md px-5 py-1.5 text-center me-2 mb-2 text-[18px] my-3"
                      data-aos="flip-up"
                    >
                      Learn more
                    </button>
                  </div>
                </div>
            </motion.div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Buttons */}
      <div className="absolute bottom-10 right-10 flex gap-2 z-10">
        <button ref={prevRef} className="custom-prev bg-[#E6AC41] text-white w-12 h-12 flex items-center justify-center rounded-sm shadow-md transition-all duration-300 hover:bg-[#D99A2B]">
          <FaArrowLeftLong size={20} />
        </button>
                        <button ref={nextRef} className="custom-next bg-[#E6AC41] text-white w-12 h-12 flex items-center justify-center rounded-sm shadow-md transition-all duration-300 hover:bg-[#D99A2B]  
        
        ">
          <FaArrowRightLong size={20} />
        </button>
      </div>
    </div>
     
    </div>
        </div>
        
    
  );
};

export default Slide;
