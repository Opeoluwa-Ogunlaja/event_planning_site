import Footer from "../../components/Footer";
import Navbar from "../../components/Navbar";
import FullDummyLoader from "../../hoc/FullDummyLoader";
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
    <FullDummyLoader timeout={800}>
      <Navbar />
      <HeroSection />
      <AboutUsBriefElem />
      <ServicesBriefElem />
      <GalleryBriefElem />
      <TestimonialsElem />
      <BookElem />
      <Footer />
    </FullDummyLoader>
  );
};

export default Home;
