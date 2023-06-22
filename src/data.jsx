import delivery_truck from "./assets/delivery_truck.svg";
import camera from "./assets/camera.svg";
import chef from "./assets/chef.svg";
import interior_decoration from "./assets/interior_decoration.svg";
import event_planning from "./assets/event_planning.svg";
import galleryImage from "./assets/christmas-dinner.png";
import testimonial_1 from "./assets/testimonial_1.jpg";
import testimonial_2 from "./assets/testimonial_2.jpg";
import testimonial_3 from "./assets/testimonial_3.jpg";

export const nav_links = [
  {
    to: "",
    label: "Home",
  },
  {
    to: "/services",
    label: "Services",
  },
  {
    to: "/contact-us",
    label: "Contact us",
  },
];

export const servicesArr = [
  {
    title: "Event planning",
    img: event_planning,
  },
  {
    title: "Event interior decoration",
    img: interior_decoration,
  },
  {
    title: "Catering",
    img: chef,
  },
  {
    title: "Photography",
    img: camera,
  },
  {
    title: "Transportation",
    img: delivery_truck,
  },
];

export const imgData = [
  {
    img: galleryImage,
    title: "Christmas Dinner",
  },
  {
    img: galleryImage,
    title: "Christmas Dinner",
  },
  {
    img: galleryImage,
    title: "Christmas Dinner",
  },
  {
    img: galleryImage,
    title: "Christmas Dinner",
  },
];


export const testimonialsData = [
  {
    img: testimonial_1,
    name: "Opeoluwa",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
  },
  {
    img: testimonial_2,
    name: "Adeola",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
  },
  {
    img: testimonial_3,
    name: "Anuoluwapo",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
  },
  {
    img: testimonial_3,
    name: "Anuoluwapo",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
  },
  {
    img: testimonial_3,
    name: "Anuoluwapo",
    review: "Lorem ipsum dolor sit amet consectetur adipisicing elit"
  },
];
