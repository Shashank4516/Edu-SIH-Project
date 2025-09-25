import BreadcrumbCourses from "../../common/breadcrumb/BreadcrumbCourses";
import MarqueeOne from "../../common/MarqueeOne";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import QuizForm from "./QuizForm";

const Quiz = () => {
  return (
    <>
      <Preloader />
      <HeaderOne />
      <BreadcrumbCourses
        title="Career Guidance Quiz"
        subtitle="Find Your Perfect College"
      />
      <QuizForm />
      <MarqueeOne style_2={true} />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default Quiz;
