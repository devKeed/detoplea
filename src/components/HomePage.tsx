import { Routes, Route } from "react-router-dom";
import Home from "../pages/home";
// import Post from "../pages/dambe";
import { Dambe } from "../pages/dambe";
import { Watch } from "../pages/watch";
import NotFound from "../pages/notFound";
import { Warriors } from "../pages/warriors";
import { Shop } from "../pages/shop";
import { Socials } from "../pages/socials";
import { News } from "../pages/news";

function HomePage() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/post/:id" element={<Post />} /> */}
        <Route path="/watch" element={<Watch />} />
        <Route path="/dambe" element={<Dambe />} />
        <Route path="/warriors" element={<Warriors />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/socials" element={<Socials />} />
        <Route path="/news" element={<News />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default HomePage;
