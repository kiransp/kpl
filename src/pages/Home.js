import { useEffect } from "react";
import About from "../components/About/About";
import HomeGallery from "../components/Gallery/HomeGallery";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Prize from "../components/Prize/Prize";
import Story from "../components/Story/Story";
import TeamsCarousel from "../components/TeamsCarousel/TeamsCarousel";
import Schedule from "../components/Schedule/Schedule";
import Confetti from "react-confetti";
const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);

  return (
    <>
      <Confetti width={window.innerWidth} height={2000} numberOfPieces={1000} />
      <HeroBanner />
      <About />
      <Prize />
      <TeamsCarousel />
      <Schedule />
      <HomeGallery />
      <Story />
    </>
  );
};

export default Home;
