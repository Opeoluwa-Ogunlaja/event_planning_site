import { motion } from "framer-motion";
import bgHeaderImg from "../../assets/makeup_kit.jpg";
import SectionWrapper from "../../hoc/SectionWraper";
import { fadeIn, textVariant } from "../../utils/motion";
import ExpandableText from "../../components/ExpandableText";
import useMediaQuery from "../../hooks/useMediaQuery";
import ServiceCardGrid from "../../components/ServiceCardGrid";
import { servicesArr } from "../../data";
import BookBtn from "../../components/BookBtn";
import { useServiceSearchContext } from "./ServiceSearchContext";
import { useDeferredValue } from "react";

const ServiceHeaderSearch = () => {
  const [ searchValue, setSearchValue ] = useServiceSearchContext()

  const handleInputChange = (e) => {
    setSearchValue(e.target.value)
  }

  return (
    <div className="mx-auto -mt-10 mb-10 w-4/5 rounded-md bg-primary-blue-grad p-3 shadow-lg shadow-primary sm:w-3/5">
      <input
        type="text"
        value={searchValue}
        onChange={handleInputChange}
        className="h-full w-full rounded-md px-10 py-3.5 text-lg font-bold text-dark shadow-inner placeholder:font-medium placeholder:text-opacity-40 focus:outline-none"
        placeholder="Search services"
      />
    </div>
  );
};

const ServicesHeaderElem = () => {
  const smallScreen = useMediaQuery("(max-width:640px)");

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
        <div className="section-container mx-auto mb-4 mt-16 flex w-full flex-col items-center py-12 text-center sm:w-2/3 sm:py-16">
          <motion.div
            variants={textVariant()}
            className="mt-4 flex flex-col justify-center gap-2"
          >
            <h2 className="text-3xl font-bold text-highlight-blue">
              Our Services
            </h2>
            <ExpandableText
              minCharacters={smallScreen ? 194 : 300}
              className="mx-auto mt-4 max-w-[50ch] tracking-wide text-dark"
            >
              Our company offers various types of services in various
              categories. Here are the services we offer. Feel free to grace
              through them to find one adequate for your event purpose. You can
              also use the search below to search for specific services to
              reduce the time you'd spend seeking.
            </ExpandableText>
          </motion.div>
        </div>
      </div>

      <ServiceHeaderSearch />
    </header>
  );
};

export const ServicesHeader = SectionWrapper(ServicesHeaderElem, "header");

const NoServiceError = () => {
  return <>Sorry, We don't offer thise service yet. Please, Make sure to check back later.</>
}

const ServicesBodyElem = () => {
  const [ searchValue ] = useServiceSearchContext()
  const deferredSearchValue = useDeferredValue(searchValue) 

  const filteredServices = servicesArr.filter(item => {
    return item.title.toLowerCase().indexOf(deferredSearchValue) > -1
  })

  return (
    <motion.section
      variants={fadeIn("right", "", 0.1, 0.75)}
      className="section-container my-16 sm:my-28 text-center"
    >
      { filteredServices.length > 0 ? <ServiceCardGrid servicesArray={filteredServices} /> : <NoServiceError/>}
      <div className="mt-14 flex flex-col justify-center gap-5">
        <BookBtn className={"mx-auto px-20"} />
      </div>
    </motion.section>
  );
};

export const ServicesBody = SectionWrapper(ServicesBodyElem, "services-grid");
