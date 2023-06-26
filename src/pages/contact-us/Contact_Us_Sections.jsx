// import { motion } from "framer-motion"
// import { textVariant } from "../../utils/motion"
// import ExpandableText from "../../components/ExpandableText"
// import useMediaQuery from "../../hooks/useMediaQuery"

import TabProvider, { useTab } from "../../../contexts/TabProvider";
import {
  Mail_Icon,
  Map_Pin_Icon,
  Phone_Icon,
} from "../../assets/icons/regular";

export const Contact_Us_Header_Elem = () => {
  return (
    <div className="contact-column items-start justify-center">
      <div className="space-y-3 text-center text-white sm:py-24 sm:text-start">
        <h2 className="text-2xl font-bold sm:text-4xl">Get in Touch</h2>
        <p className="mx-auto max-w-[30ch] text-base sm:mx-0 sm:max-w-max sm:text-lg">
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

export const Contact_Us_FormGroups_Elem = () => {
  const { tab, setTab } = useTab();
  return (
    <div className="contact-column p-2">
      <header className="tab_header grid px-10">
        {header_buttons_arr.map((Item, i) => (
          <div
            key={Item.label + i}
            className="grid h-full w-full place-items-center"
          >
            <button
              className={`p-4 flex flex-col items-center justify-center gap-3 rounded-md ${tab == i ? 'bg-white text-highlight-blue' : 'text-white'} transition-all hover:bg-white hover:text-highlight-blue`}
              onClick={() => setTab(i)}
            >
              <Item.Icon />
              <span>{Item.label}</span>
            </button>
          </div>
        ))}
      </header>
    </div>
  );
};
