"use client";
// import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
// import Footer from "../component/shared/Footer/page";
import { Crete_Round } from "next/font/google";
import { signIn } from "next-auth/react";

const creteRound = Crete_Round({
  subsets: ["latin"],
  weight: ["400"], // Crete Round only has a weight of 400
  variable: "--font-crete-round",
});

const Login: React.FC = () => {
  return (
    <div className={`${creteRound.variable} font-serif`}>
      <div className="flex items-center justify-center min-h-[500px] ">
        <div className="md:p-24 sm:p-16 py-4 rounded-lg shadow-md bg-yellow-100">
          <h1 className="text-center text-5xl mb-12">Please Login</h1>

          <div className="grid md:grid-cols-2 sm:grid-cols-1 justify-center gap-16">
            {/* Google Login */}
            <button
              className="flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-md hover:bg-gray-200"
              onClick={() => signIn("google", { callbackUrl: "https://lslam-7grs.vercel.app/dashboard" })}
            >
              <FcGoogle size={80} />
            </button>

            {/* GitHub Login */}
            <button
              className="flex items-center justify-center w-32 h-32 bg-white rounded-full shadow-md hover:bg-gray-200"
              onClick={() => signIn("github", { callbackUrl: "https://lslam-7grs.vercel.app/dashboard" })}
            >
              <FaGithub size={80} />
            </button>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </div>
  );
};

export default Login;
