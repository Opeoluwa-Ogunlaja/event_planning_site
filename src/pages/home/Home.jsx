import Navbar from '../../components/Navbar';
import { AboutUsBriefElem, HeroSection, ServicesBriefElem } from './Home_Sections';
import './home.scss'

const Home = () => {
    return <div className=''>
        {/* <Navbar /> */}
        <HeroSection />
        <AboutUsBriefElem />
        <ServicesBriefElem />
    </div>
}

export default Home;