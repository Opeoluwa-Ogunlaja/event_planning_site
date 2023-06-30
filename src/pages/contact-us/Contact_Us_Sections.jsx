// import { motion } from "framer-motion"
// import { textVariant } from "../../utils/motion"
// import ExpandableText from "../../components/ExpandableText"
// import useMediaQuery from "../../hooks/useMediaQuery"

import { Formik } from "formik";
import { useTab } from "../../../contexts/TabProvider";
import {
  Mail_Icon,
  Map_Pin_Icon,
  Phone_Icon,
} from "../../assets/icons/regular";
import { Tab } from "../../hoc/";

export const Contact_Us_Header_Elem = () => {
  return (
    <div className="contact-column max-h-[5rem] items-start justify-center sm:max-h-[initial]">
      <div className="space-y-1 text-center text-white sm:space-y-3 sm:py-12 sm:text-center lg:py-24 lg:text-start">
        <h2 className="text-3xl font-bold sm:text-4xl">Get in Touch</h2>
        <p className="mx-auto max-w-[30ch] text-base tracking-[3%] sm:max-w-max sm:text-lg lg:mx-0">
          Feel free to contact us for information on our services
        </p>
      </div>
    </div>
  );
};

const header_buttons_arr = [
  {
    Icon: Map_Pin_Icon,
    label: "1 street, USA",
  },
  {
    Icon: Phone_Icon,
    label: "+234 5678901065",
  },
  {
    Icon: Mail_Icon,
    label: "contact@supris.com",
  },
];

const ContactInfo = () => {
  return (
    <div className="h-full w-full rounded-md bg-white px-8 py-4 sm:mx-auto sm:w-11/12">
      <h3 className="text-xl font-bold text-normal">Contact Information</h3>
      <ul className="flex flex-col gap-4">
        <li></li>
        <li></li>
        <li></li>
      </ul>
    </div>
  );
};

const ContactForm = () => {
  return (
    <Formik>
      {({ handleSubmit }) => {
        return (
          <form
            onSubmit={handleSubmit}
            className="h-full w-full rounded-md bg-white sm:mx-auto sm:w-11/12"
          >
            <div className="container px-8 py-4">
              <h3 className="text-xl font-bold text-normal">Contact us</h3>
            </div>
          </form>
        );
      }}
    </Formik>
  );
};

export const Contact_Us_FormGroups_Elem = () => {
  const { tab, setTab } = useTab();
  return (
    <div className="contact-column mt-6 w-full grid-cols-1 justify-start lg:mt-0 lg:grid-cols-none lg:justify-end">
      <header className="tab_header grid h-24 max-h-48 w-full justify-evenly gap-2 sm:justify-stretch sm:gap-4">
        {header_buttons_arr.map((Item, i) => (
          <div
            key={Item.label + i}
            className="flex place-items-center sm:h-full sm:w-full"
          >
            <button
              className={`flex w-full flex-col items-center justify-center gap-3 rounded-md p-4 ${
                tab == i ? "bg-white text-highlight-blue" : "text-white"
              } transition-all hover:bg-white hover:text-highlight-blue`}
              onClick={() => setTab(i)}
            >
              <Item.Icon className="aspect-square w-6 sm:w-auto" />
              <span className="hidden lg:inline-block">{Item.label}</span>
            </button>
          </div>
        ))}
      </header>
      <div className="tabs h-full">
        <Tab isActive={tab == 0}>Hello</Tab>
        <Tab isActive={tab == 1}>
          <ContactInfo />
        </Tab>
        <Tab isActive={tab == 2}>
          <ContactForm />
        </Tab>
      </div>
    </div>
  );
};
