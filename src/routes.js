import WordOfTheMonth from "views/WordOfTheMonth.jsx";
import News from "views/News.jsx";
import Rtl from "views/Rtl.jsx";
import Library from "views/Library.jsx";
import Videos from "views/Videos.jsx";
import Fatawa from "views/Fatawa.jsx";
import EditForm from "views/EditForm.jsx";

var routes = [
  {
    path: "/edit-form",
    name: "Edit Form",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: EditForm,
    layout: "/admin"
  },
  {
    path: "/word-of-the-month",
    name: "Word Of The Month",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: WordOfTheMonth,
    layout: "/admin"
  },
  {
    path: "/news",
    name: "News",
    rtlName: "الرموز",
    icon: "tim-icons icon-atom",
    component: News,
    layout: "/admin"
  },
  {
    path: "/fatawa",
    name: "Fatawa",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: Fatawa,
    layout: "/admin"
  },
  {
    path: "/library",
    name: "Library",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-puzzle-10",
    component: Library,
    layout: "/admin"
  },
  {
    path: "/videos",
    name: "Videos",
    rtlName: "طباعة",
    icon: "tim-icons icon-align-center",
    component: Videos,
    layout: "/admin"
  },
  {
    path: "/rtl-support",
    name: "RTL Support",
    rtlName: "ار تي ال",
    icon: "tim-icons icon-world",
    component: Rtl,
    layout: "/rtl"
  }
];
export default routes;
