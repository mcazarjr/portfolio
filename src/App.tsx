import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout />}
      >
        <Route
          index
          element={<Landing />}
        />
        <Route
          path="about"
          element={<About />}
        />
        <Route
          path="projects"
          element={<Projects />}
        />
        <Route
          path="contact"
          element={<Contact />}
        />
        <Route
          path="*"
          element={<div>404</div>}
        />
      </Route>
    </Routes>
  );
};

export default App;
