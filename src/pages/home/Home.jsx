// import Navbar from '../../components/Navbar';
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
    <div className="">
      <HeroSection />
      <AboutUsBriefElem />
      <ServicesBriefElem />
      <GalleryBriefElem />
      <TestimonialsElem />
      <BookElem/>
    </div>
  );
};

export default Home;
