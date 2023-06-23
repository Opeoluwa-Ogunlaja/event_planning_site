import Navbar from "../../components/Navbar"
import FullDummyLoader from "../../hoc/FullDummyLoader"
import { ServicesHeader } from "./ServicesSections"

const Services = () => {
    return <FullDummyLoader timeout={500}>
        <Navbar />
        <ServicesHeader />
    </FullDummyLoader>
}

export default Services