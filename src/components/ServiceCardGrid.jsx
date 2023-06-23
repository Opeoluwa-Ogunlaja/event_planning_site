import { twMerge } from "tailwind-merge";
import ServiceCard from "./ServiceCard";

const ServiceCardGrid = ({ servicesArray, className }) => (<div className="services-grid mt-12 flex w-full flex-wrap justify-center gap-8">
        {servicesArray.map((service, i) => {
          return (
            <ServiceCard
              className={twMerge("w-1/3 min-w-[280px] max-w-[12rem]", className)}
              key={`${service.title}${i}`}
              index={i}
              {...service}
            />
          );
        })}
</div>)

export default ServiceCardGrid