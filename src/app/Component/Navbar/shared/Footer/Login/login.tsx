"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import { Crete_Round } from "next/font/google";
import AOS from "aos";
import "aos/dist/aos.css"; // Import AOS styles
import { useEffect } from "react";

const creteRound = Crete_Round({
  subsets: ["latin"],
  weight: ["400"], 
  variable: "--font-crete-round",
});

const Login: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1200,
      once: false,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className={`${creteRound.variable} font-serif min-h-[500px] flex items-center justify-center bg-gray-100`}>
      <div 
        className="p-8 sm:p-16 md:p-24 rounded-lg shadow-md bg-yellow-100"
        data-aos="fade-down"
        data-aos-duration="1500"
      >
        <h1 className="text-center text-5xl mb-12 text-gray-800" data-aos="fade-up">
          Please Login
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-16 justify-center items-center m-auto">
          {/* Google Login */}
          <button
            className="flex items-center justify-center m-auto w-32 h-32 bg-white rounded-full shadow-md hover:bg-gray-200 transition-all duration-300"
            onClick={() => signIn("google", { callbackUrl: "/dashboard" })}
            data-aos="zoom-in"
            data-aos-delay="300"
          >
            <FcGoogle size={80} />
          </button>

          {/* GitHub Login */}
          <button
            className="flex items-center m-auto justify-center w-32 h-32 bg-white rounded-full shadow-md hover:bg-gray-200 transition-all duration-300"
            onClick={() => signIn("github", { callbackUrl: "/dashboard" })}
            data-aos="zoom-in"
            data-aos-delay="500"
          >
            <FaGithub size={80} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;
