import { Routes, Route } from "react-router-dom";
import Home from "./legacy-pages/home";
import Portfolio from "./legacy-pages/portfolio/portfolio";
import NotFound from "./legacy-pages/notFound";
import { Services } from "./legacy-pages/services";
import { Blog } from "./legacy-pages/blog";
import { Contact } from "./legacy-pages/contact";
import Layout from "./components/Layout";
import { Starthere } from "./legacy-pages/starthere";
import Readmore from "./legacy-pages/readmore";
import BlogPost from "./legacy-pages/blog/[id]";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="starthere" element={<Starthere />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="services" element={<Services />} />
        <Route path="blog" element={<Blog />} />
        <Route path="blog/:slug" element={<BlogPost />} />
        <Route path="contact" element={<Contact />} />
        <Route path="readmore" element={<Readmore />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  );
}

export default App;
