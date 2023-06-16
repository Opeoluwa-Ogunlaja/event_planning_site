import SectionWrapper from "../../hoc/SectionWraper";
// import { Carousel } from 'react-responsive-carousel'
import bgBlueImg from "../../assets/bg-blue.jpg";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../utils/motion";
import PartySVG from "../../assets/Party_Monochromatic.svg";
import HexSVG from "../../assets/Hexagon.svg";
// import { useNavigate } from "react-router-dom";
import BookBtn from "../../components/BookBtn";
import ServiceCard from "../../components/ServiceCard";
import logo from "../../assets/logo.svg";
import { servicesArr } from "../../data";
import { trimArr } from "../../utils";
import SeeMore from "../../components/SeeMore";

const HeroSectionElem = () => {
  return (
    <header className="hero-section relative">
      <div className="stack grid max-h-fit min-h-[587px]">
        <div className="container">
          <div className="after-mask relative -z-10 h-full w-full overflow-hidden after:bg-light-blue after:opacity-95 after:mix-blend-normal sm:after:mix-blend-lighten">
            <img
              src={bgBlueImg}
              alt="background-party event image"
              className="pointer-events-none absolute left-0 top-0 h-full w-full"
            />
          </div>
          <img
            src={HexSVG}
            alt="background-Hexagon pattern"
            className="pointer-events-none absolute left-0 top-0 -z-10 h-full w-full opacity-30 sm:w-7/12"
          />
        </div>
        <div className="section-container section-container__hero my-auto grid h-fit min-h-[250px] pt-24 sm:pt-0">
          <div className="mb-5 flex flex-col items-center gap-3 py-2 text-center sm:mb-0 sm:items-start sm:gap-6 sm:py-8 sm:text-start">
            <h2 className="text-5xl font-bold uppercase leading-tight tracking-widest text-highlight-blue">
              Make events <br /> <span className="text-white">memorable</span>
            </h2>
            <p className="max-w-[30ch] font-medium leading-normal text-dark sm:max-w-[40ch]">
              Make your events memorable by choosing our team of experts to help
              you with every aspect of your event at low cost.
            </p>
            <BookBtn className={"mt-4 sm:mt-0"} />
          </div>
          <div className="w-full">
            <div className="h-full">
              <img
                src={PartySVG}
                className="h-full min-h-[250px] w-full object-cover"
                alt="hero party illustration"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="mx-auto -mt-5 flex h-10 w-6 items-start justify-center rounded-3xl border-4 border-blue-300 p-2 sm:-mt-10 sm:h-16 sm:w-[35px]">
        <motion.div
          animate={{
            y: [0, 24, 0],
          }}
          transition={{
            duration: 1,
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="h-1 w-1 rounded-full bg-primary-blue-grad sm:h-3 sm:w-3"
        />
      </div>
    </header>
  );
};

export const HeroSection = SectionWrapper(HeroSectionElem, "intro");

const AboutUsBrief = () => {
  return (
    <motion.div
      variants={fadeIn("right", "", 0.1, 0.75)}
      className="section-container section-container__about mt-20 w-full text-center sm:mt-32 "
    >
      {/* <div className="section-container section-container__about mt-20 w-full text-center sm:mt-28 "> */}
      <h3 className="font-medium text-light">What we are about</h3>
      <h2 className="text-3xl font-bold text-highlight-blue">About Us</h2>
      {/* </div> */}
      <div className="mx-auto flex w-fit flex-1 flex-col items-center sm:flex-row sm:gap-6">
        <img
          src={logo}
          alt="site_logo"
          className="aspect-square w-52 shadow-primary drop-shadow-lg"
        />
        <p className="max-w-[50ch] tracking-widest text-light sm:text-start sm:tracking-wider">
          <strong className="text-dark">Supris</strong> is a full-service event
          planning agency that specializes in creating unforgettable
          experiences. We have a team of experienced professionals who can help
          you with every aspect of your event, from planning and coordination to
          execution and follow-up
        </p>
      </div>
    </motion.div>
  );
};

export const AboutUsBriefElem = SectionWrapper(AboutUsBrief, "about");

const servicesTrimArr = trimArr(servicesArr, 6);

const ServicesBrief = () => {
  return (
    <motion.div
      variants={fadeIn("right", "", 0.1, 0.75)}
      className="section-container section-container__services mt-20 w-full text-center sm:mt-32 "
    >
      {/* <div className="section-container section-container__about mt-20 w-full text-center sm:mt-28 "> */}
      <h3 className="font-medium text-light">What we do</h3>
      <h2 className="text-3xl font-bold text-highlight-blue">Our Services</h2>
      <p className="mx-auto mt-4 max-w-[35ch] tracking-wide text-light">
        Our company can generally adapt to any kind of event but here are some
        services that we specialize in, including{" "}
        <span className="text-dark">
          Birthday Events, Wedding Events and more...
        </span>
      </p>
      {/* </div> */}

      <div className="services-grid mt-12 flex w-full flex-wrap justify-center gap-8">
        {servicesTrimArr.map((service, i) => {
          return (
            <ServiceCard
              className={"min-h-[13rem] w-1/3 min-w-[280px] max-w-[12rem]"}
              key={`${service.title}${i}`}
              {...service}
            />
          );
        })}
      </div>

      <div className="mt-14 flex flex-col gap-5 justify-center">
        <SeeMore to={'services'}/>
        <BookBtn className={'mx-auto px-20'}/>
      </div>
    </motion.div>
  );
};

export const ServicesBriefElem = SectionWrapper(ServicesBrief, "services");
