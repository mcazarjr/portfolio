import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";

const App = () => {
  return (
    <Routes>
      <Route
        index
        element={<Layout />}
      />
      <Route
        path="*"
        element={<div>404</div>}
      />
    </Routes>
  );
};

export default App;
