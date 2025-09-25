import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomeOne from "./components/homes/home";
import Wrapper from "./layouts/Wrapper";
import Courses from "./components/courses";
import CoursesGrid from "./components/courses-grid";
import CoursesList from "./components/courses-list";
import CoursesDetails from "./components/courses-details";
import CoursesDetailsTwo from "./components/courses-details-2";
import Event from "./components/event";
import EventDetails from "./components/event-details";
import ShopGrid from "./components/shop-grid";
import ShopList from "./components/shop-list";
import ShopLeftSidebar from "./components/shop-left-sidebar";
import ShopRightSidebar from "./components/shop-right-sidebar";
import ShopDetails from "./components/shop-details";
import ShopCart from "./components/shop-cart";
import Checkout from "./components/checkout";
import About from "./components/about";
import Instructor from "./components/instructor";
import InstructorDetails from "./components/instructor-details";
import Program from "./components/program";
import ProgramDetails from "./components/program-details";
import News from "./components/news";
import NewsDetails from "./components/news-details";
import Gallery from "./components/gallery";
import Pricing from "./components/pricing";
import Faq from "./components/faq";
import SignIn from "./components/sign-in";
import Register from "./components/register";
import Quiz from "./components/quiz";
import Dashboard from "./components/dashboard";
import NotFound from "./components/Error";
import Contact from "./components/contact";
import { AuthProvider } from "./contexts/AuthContext";

const router = createBrowserRouter([
  { path: "/", element: <HomeOne /> },
  { path: "/courses", element: <Courses /> },
  { path: "/courses-grid", element: <CoursesGrid /> },
  { path: "/courses-list", element: <CoursesList /> },
  { path: "/courses-details", element: <CoursesDetails /> },
  { path: "/courses-details-2", element: <CoursesDetailsTwo /> },
  { path: "/event", element: <Event /> },
  { path: "/event-details", element: <EventDetails /> },
  { path: "/shop-grid", element: <ShopGrid /> },
  { path: "/shop-list", element: <ShopList /> },
  { path: "/shop-left-sidebar", element: <ShopLeftSidebar /> },
  { path: "/shop-right-sidebar", element: <ShopRightSidebar /> },
  { path: "/shop-details", element: <ShopDetails /> },
  { path: "/shop-cart", element: <ShopCart /> },
  { path: "/checkout", element: <Checkout /> },
  { path: "/about", element: <About /> },
  { path: "/instructor", element: <Instructor /> },
  { path: "/instructor-details", element: <InstructorDetails /> },
  { path: "/program", element: <Program /> },
  { path: "/program-details", element: <ProgramDetails /> },
  { path: "/news", element: <News /> },
  { path: "/news-details", element: <NewsDetails /> },
  { path: "/gallery", element: <Gallery /> },
  { path: "/pricing", element: <Pricing /> },
  { path: "/faq", element: <Faq /> },
  { path: "/sign-in", element: <SignIn /> },
  { path: "/register", element: <Register /> },
  { path: "/quiz", element: <Quiz /> },
  { path: "/dashboard", element: <Dashboard /> },
  { path: "/contact", element: <Contact /> },

  { path: "*", element: <NotFound /> },
]);

function App() {
  return (
    <AuthProvider>
      <Wrapper>
        <RouterProvider router={router} />
      </Wrapper>
    </AuthProvider>
  );
}

export default App;
