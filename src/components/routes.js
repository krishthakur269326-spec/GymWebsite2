// src/components/routes.js
import Home from "../pages/Home"
import About from "../pages/About"
import Service from "../pages/Service"
import Gallery from "../pages/Gallery"
import Membership from "../pages/Membership"
import Contact from "../pages/Contact"
import Policy from "../pages/Policy"

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