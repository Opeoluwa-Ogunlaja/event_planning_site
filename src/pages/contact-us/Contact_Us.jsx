import TabProvider from "../../../contexts/TabProvider";
import Navbar from "../../components/Navbar";
import FullDummyLoader from "../../hoc/FullDummyLoader";
import {
  Contact_Us_FormGroups_Elem,
  Contact_Us_Header_Elem,
} from "./Contact_Us_Sections";
import "./contact-us.scss";

const Contact_Us = () => {
  return (
    <FullDummyLoader timeout={500}>
      <Navbar className={"sm:mt-5"} />
      <TabProvider defaultId={1}>
        <div className="section-container section-container__contact grid h-[100vh] min-h-full bg-primary-blue-grad pb-10 pt-28 sm:pt-40">
          <Contact_Us_Header_Elem />
          <Contact_Us_FormGroups_Elem />
        </div>
      </TabProvider>
    </FullDummyLoader>
  );
};

export default Contact_Us;
