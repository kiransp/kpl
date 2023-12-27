import { useEffect } from "react";
import About from "../components/About/About";
import HomeGallery from "../components/Gallery/HomeGallery";
import HeroBanner from "../components/HeroBanner/HeroBanner";
import Prize from "../components/Prize/Prize";
import Story from "../components/Story/Story";

const Home = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <HeroBanner />
      <About />
      <Prize />
      <HomeGallery />
      <Story />
    </>
  );
};

export default Home;
