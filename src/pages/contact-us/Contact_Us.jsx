import TabProvider from "../../../contexts/TabProvider"
import Navbar from "../../components/Navbar"
import FullDummyLoader from "../../hoc/FullDummyLoader"
import { Contact_Us_FormGroups_Elem, Contact_Us_Header_Elem } from "./Contact_Us_Sections"
import './contact-us.scss'

const Contact_Us = () => {
    return <FullDummyLoader timeout={500}>
        <Navbar />
        <TabProvider>
            <div className="bg-primary-blue-grad min-h-full h-[100vh] grid section-container pt-32 sm:pt-36 pb-24 section-container__contact">
                <Contact_Us_Header_Elem />
                <Contact_Us_FormGroups_Elem />
            </div>
        </TabProvider>
    </FullDummyLoader>
}

export default Contact_Us