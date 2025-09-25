import demo_img_1 from "../../public/assets/img/header/home-1.jpg";

interface DataType {
  id: number;
  title?: string;
  link: string;
  icon: string;
  img_dropdown?: boolean;
  has_dropdown?: boolean;
  has_dropdown_inner?: boolean;
  sub_menus?: {
    link?: string;
    title?: string;
    title2?: string | any;
    btn_title?: string;
    one_page_link?: string | any;
    one_page_title?: string;
    demo_img?: string | any;
    inner_menu?: boolean;
    inner_menus?: {
      link?: string;
      title?: string;
    }[];
  }[];
}

// menu data
const menu_data: DataType[] = [
  {
    id: 1,
    title: "Home",
    link: "#",
    icon: "fas fa-home-lg",
    img_dropdown: true,
    sub_menus: [
      {
        link: "/",
        demo_img: demo_img_1,
        title: "CollegeMatch",
        title2: "CollegeMatch",
      },
    ],
  },
  {
    id: 2,
    title: "Colleges",
    link: "#colleges",
    icon: "fas fa-university",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Quiz",
    link: "#quiz",
    icon: "fas fa-question-circle",
    has_dropdown: false,
  },
  {
    id: 4,
    title: "About",
    link: "#about",
    icon: "fas fa-info-circle",
    has_dropdown: false,
  },
  {
    id: 5,
    title: "Team",
    link: "#team",
    icon: "fas fa-users",
    has_dropdown: false,
  },
  {
    id: 6,
    title: "Contact",
    link: "/contact",
    icon: "fas fa-phone-rotary",
    has_dropdown: false,
  },
];
export default menu_data;
