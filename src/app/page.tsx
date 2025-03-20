"use client" 
// import ScrollToTop from "react-scroll-to-top";
import FirstPage from "./Component/Navbar/shared/Footer/FirstPage/page";
import { Crete_Round } from "next/font/google";
// import { MdKeyboardArrowUp } from "react-icons/md";

const creteRound = Crete_Round({
  subsets: ["latin"],
  weight: ["400"], // Crete Round only has a weight of 400
  variable: "--font-crete-round",
});

export default function Home() {
  return (
    <>
      <div className={`${creteRound.variable} font-serif`}>
        
        <FirstPage />
        {/* <ScrollToTop
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
      top={500} /> */}
      </div>

    </>
  );
}
