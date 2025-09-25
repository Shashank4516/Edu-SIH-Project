import BreadcrumbEvent from "../../common/breadcrumb/BreadcrumbEvent";
import MarqueeOne from "../../common/MarqueeOne";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import BrandsHomeOne from "../homes/home/BrandsHomeOne";
import TestimonialHomeOne from "../homes/home/TestimonialHomeOne";
import AboutArea from "./AboutArea";
import AboutCounter from "./AboutCounter";
import FeatureArea from "./FeatureArea";

const About = () => {
  return (
    <>
      <Preloader />
      <HeaderOne />
      <BreadcrumbEvent title="About" subtitle="About" />
      <AboutArea />
      <FeatureArea />
      <AboutCounter />
      <TestimonialHomeOne />
      <BrandsHomeOne />
      <MarqueeOne style_2={true} />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default About;
