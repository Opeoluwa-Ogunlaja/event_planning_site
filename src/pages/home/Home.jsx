import Navbar from "../../components/Navbar";
import {
  AboutUsBriefElem,
  BookElem,
  GalleryBriefElem,
  HeroSection,
  ServicesBriefElem,
  TestimonialsElem,
} from "./Home_Sections";
import "./home.scss";

const Home = () => {
  return (
    <>
      <Navbar />
      <HeroSection />
      <AboutUsBriefElem />
      <ServicesBriefElem />
      <GalleryBriefElem />
      <TestimonialsElem />
      <BookElem />
    </>
  );
};

export default Home;
