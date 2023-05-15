import { Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="page1" element={<Home />} />
    </Routes>
  );
}

export default Router;
