import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Portfolio from "./pages/portfolio";
import NotFound from "./pages/notFound";
import { Services } from "./pages/services";
import { Blog } from "./pages/blog";
import { Contact } from "./pages/contact";
import Layout from "./components/Layout";
import { Starthere } from "./pages/starthere";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="starthere" element={<Starthere />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
