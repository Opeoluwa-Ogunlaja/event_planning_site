import { motion } from "framer-motion";
import bgHeaderImg from "../../assets/makeup_kit.jpg";
import SectionWrapper from "../../hoc/SectionWraper";
import { textVariant } from "../../utils/motion";
import { useSearchParams } from "react-router-dom";
import ExpandableText from "../../components/ExpandableText";
import useMediaQuery from "../../hooks/useMediaQuery";

const ServiceHeaderSearch = () => {

}

const ServicesHeaderElem = () => {
  const smallScreen = useMediaQuery('(max-width:640px)')

  return (
    <header>
      <div className="stack grid h-fit min-h-[350px]">
        <div className="container">
          <div className="after-mask relative -z-10 h-full w-full overflow-hidden after:bg-light-blue after:opacity-95 after:mix-blend-normal sm:after:mix-blend-lighten">
            {/* <img
              src={bgHeaderImg}
              alt="background-party event image"
              className="pointer-events-none absolute left-0 top-0 h-full w-full"
            /> */}
          </div>
        </div>
        <div className="mx-auto mt-16 flex w-full sm:w-2/3 flex-col items-center text-center py-10 sm:py-16 section-container">
          <motion.div
            variants={textVariant()}
            className="mt-4 flex flex-col justify-center gap-2"
          >
            <h2 className="text-3xl font-bold text-highlight-blue">
              Our Services
            </h2>
            <ExpandableText minCharacters={smallScreen ? 194 : 300} className="mx-auto mt-4 max-w-[50ch] tracking-wide text-dark">
              Our company offers various types of services in various
              categories. Here are the services we offer. Feel free to grace
              through them to find one adequate for your event purpose. You can
              also use the search below to search for specific services to
              reduce the time you'd spend seeking.
            </ExpandableText>
          </motion.div>
        </div>
      </div>

      <ServiceHeaderSearch/>
    </header>
  );
};

export const ServicesHeader = SectionWrapper(ServicesHeaderElem, "header");
