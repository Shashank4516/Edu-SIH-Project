import MarqueeOne from "../../../common/MarqueeOne";
import Preloader from "../../../common/Preloader";
import ScrollTop from "../../../common/ScrollTop";
import FooterOne from "../../../layouts/footers/FooterOne";
import HeaderOne from "../../../layouts/headers/HeaderOne";
import AboutHomeOne from "./AboutHomeOne";
import BlogHomeOne from "./BlogHomeOne";
import BrandsHomeOne from "./BrandsHomeOne";
import ChooseHomeOne from "./ChooseHomeOne";
import FeatureHomeOne from "./FeatureHomeOne";
import HeroHomeOne from "./HeroHomeOne";
import PopularCoursesHomeOne from "./PopularCoursesHomeOne";
import TestimonialHomeOne from "./TestimonialHomeOne";

const HomeOne = () => {
  return (
    <>
      <Preloader />
      <HeaderOne />
      <HeroHomeOne />
      <FeatureHomeOne />
      <AboutHomeOne />
      <PopularCoursesHomeOne />
      <MarqueeOne />
      <ChooseHomeOne />
      <TestimonialHomeOne />
      <BrandsHomeOne />
      <BlogHomeOne />
      <MarqueeOne />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default HomeOne;
