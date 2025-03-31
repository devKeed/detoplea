import NewsTopLayout from "../components/news/NewsTopLayout";
import TrendingNews from "../components/news/TrendingNews";
import Footer from "../components/shared/Footer";
import Header from "../components/shared/Header";

export const News = () => {
  return (
    <div>
      <div className="text-center pt-16">
        <Header />
        <NewsTopLayout />
        <TrendingNews />
        <Footer />
      </div>
    </div>
  );
};
