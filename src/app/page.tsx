import FirstPage from "./Component/Navbar/shared/Footer/FirstPage/page";
import { Crete_Round } from "next/font/google";

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
       
      </div>

    </>
  );
}
