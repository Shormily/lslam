// import { MdKeyboardArrowUp } from "react-icons/md";
import ContactPage from "../Component/Navbar/shared/Footer/Contact/page";
// import ScrollToTop from "react-scroll-to-top";

const page: React.FC = () => {
    return (
        <>
            <ContactPage />  
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
        </>
    );
};

export default page;
