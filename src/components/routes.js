// src/components/routes.js
import { lazy } from "react";

const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Service = lazy(() => import("../pages/Service"));
const Gallery = lazy(() => import("../pages/Gallery"));
const Membership = lazy(() => import("../pages/Membership"));
const Contact = lazy(() => import("../pages/Contact"));
const Policy = lazy(() => import("../pages/Policy"));

const routes = [
  {
    name: "Home",
    path: "/",
    element: Home,
    showInNav: true,
  },
  {
    name: "About",
    path: "/about",
    element: About,
    showInNav: true,
  },
  {
    name: "Services",
    path: '/service',
    element: Service,
    showInNav: true,
  },
  {
    name: "Gallery",
    path: '/gallery',
    element: Gallery,
    showInNav: true,
  },
  {
    name: "Membership",
    path: '/membership',
    element: Membership,
    showInNav: true,
  },
  {
    name: "Contact",
    path: "/contact",
    element: Contact,
    showInNav: true,
  },
  {
    name: "Policy",
    path: "/policy",
    element: Policy,
    showInNav: false,
  }
];

export default routes;