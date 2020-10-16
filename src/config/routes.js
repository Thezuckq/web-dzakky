import { Contact, Portofolio } from "../pages";

const routes = [
  // {
  //   path: '/about',
  //   component: Profile,
  //   isPublic: false,
  // },
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
  //   {
  //     path: '/',
  //     component: About,
  //     isPublic: true,
  //   },
];

export default routes;
