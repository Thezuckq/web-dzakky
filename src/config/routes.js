import { Home, Contact, Portofolio } from "../pages";

const routes = [
  {
    path: "/home",
    component: Home,
    isPublic: true,
  },
  // {
  //   path: '/experiences',
  //   component: Contact,
  //   isPublic: true,
  // },
  // {
  //   path: '/education',
  //   component: Home,
  //   isPublic: true,
  // },
  {
    path: "/portofolio",
    component: Portofolio,
    isPublic: true,
  },
  {
    path: "/contact",
    component: Contact,
    isPublic: true,
  },
  {
    path: "/",
    component: Home,
    isPublic: true,
  },
];

export default routes;
