/*!

=========================================================
* Black Dashboard React v1.2.0
=========================================================

* Product Page: https://www.creative-tim.com/product/black-dashboard-react
* Copyright 2020 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import Dashboard from "views/Dashboard.js";
import Icons from "views/Icons.js";
import Map from "views/Map.js";
import Notifications from "views/Notifications.js";
import Rtl from "views/Rtl.js";
import TableList from "views/TableList.js";
import Typography from "views/Typography.js";
import UserProfile from "views/UserProfile.js";

var routes = [
  {
    path: "/dashboard",
    name: "Home",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/icons",
    name: "Upcomming sessions",
    rtlName: "الرموز",
    icon: "tim-icons icon-calendar-60",
    component: Icons,
    layout: "/admin"
  },
  // {
  //   path: "/map",
  //   name: "Map",
  //   rtlName: "خرائط",
  //   icon: "tim-icons icon-pin",
  //   component: Map,
  //   layout: "/admin",
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   rtlName: "إخطارات",
  //   icon: "tim-icons icon-bell-55",
  //   component: Notifications,
  //   layout: "/admin",
  // },
  {
    path: "/user-profile",
    name: "Feedback & Attendance",
    rtlName: "ملف تعريفي للمستخدم",
    icon: "tim-icons icon-single-02",
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/tables",
    name: "Assignment",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-paper",
    component: TableList,
    layout: "/admin"
  },
  {
    path: "/typography",
    name: "Discussion forum",
    rtlName: "طباعة",
    icon: "tim-icons icon-chat-33",
    component: Typography,
    layout: "/admin"
  },
  // {
  //   path: "/rtl-support",
  //   name: "RTL Support",
  //   rtlName: "ار تي ال",
  //   icon: "tim-icons icon-world",
  //   component: Rtl,
  //   layout: "/rtl",
  // },
  {
    path: "/tables",
    name: "Schedule sessions",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-paper",
    component: schedulesessions,
    layout: "/admin"
  }
];
export default routes;
