import config from "../configs";

import Home from "../pages/Home";
import About from "../pages/About";
import Projects from "../pages/Projects";
import Contact from "../pages/Contact";

const myRoutes = [
  { path: config.routes.home, component: Home },
  { path: config.routes.about, component: About },
  { path: config.routes.projects, component: Projects },
  { path: config.routes.contact, component: Contact },
];

export { myRoutes };
