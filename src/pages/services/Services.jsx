import DataProvider from "../../../contexts/DataProvider"
import Footer from "../../components/Footer"
import Navbar from "../../components/Navbar"
import FullDummyLoader from "../../hoc/FullDummyLoader"
import ServiceSearchProvider from "./ServiceSearchContext"
import { ServicesBody, ServicesHeader } from "./ServicesSections"

const Services = () => {
    return <FullDummyLoader timeout={500}>
        <Navbar />
        <ServiceSearchProvider>
            <ServicesHeader />
            <ServicesBody />
        </ServiceSearchProvider>
        <Footer className={'py-6 sm:py-2 mt-32'}/>
    </FullDummyLoader>
}

export default Services