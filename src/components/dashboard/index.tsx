import BreadcrumbCourses from "../../common/breadcrumb/BreadcrumbCourses";
import MarqueeOne from "../../common/MarqueeOne";
import Preloader from "../../common/Preloader";
import ScrollTop from "../../common/ScrollTop";
import FooterOne from "../../layouts/footers/FooterOne";
import HeaderOne from "../../layouts/headers/HeaderOne";
import DashboardContent from "./DashboardContent";

const Dashboard = () => {
  return (
    <>
      <Preloader />
      <HeaderOne />
      <BreadcrumbCourses
        title="Student Dashboard"
        subtitle="Your Personalized Learning Hub"
      />
      <DashboardContent />
      <MarqueeOne style_2={true} />
      <FooterOne />
      <ScrollTop />
    </>
  );
};

export default Dashboard;
