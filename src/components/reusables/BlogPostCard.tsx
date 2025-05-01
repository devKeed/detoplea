import { FC } from "react";
import { useNavigate } from "react-router-dom";

interface BlogPostCardProps {
  id: number;
  image: string;
  date: string;
  author: string;
  title: string;
  onReadMore?: () => void;
  excerpt?: string; // Optional short excerpt of the post
}

export const BlogPostCard: FC<BlogPostCardProps> = ({
  id,
  image,
  date,
  author,
  title,
  onReadMore,
  // excerpt,
}) => {
  const navigate = useNavigate();

  const handleReadMore = () => {
    if (onReadMore) {
      onReadMore();
    } else {
      navigate(`/blog/${id}`);
    }
  };

  return (
    <div className="flex flex-col justify-between bg-[#F2F2F2] rounded-3xl items-center h-full">
      <div className="w-full">
        <img
          src={image}
          alt={`image-${id}`}
          className="w-full h-auto py-3 px-3 md:py-3 md:px-3 rounded-3xl"
        />
        <div className="flex justify-between items-center w-full px-4">
          <p className="text-[13px] md:text-[14px] text-gray-500">{date}</p>
          <p className="text-[13px] md:text-[14px] text-gray-500">-{author}</p>
        </div>
        <h6 className="text-center font-normal px-5 py-3">{title}</h6>
        {/* {excerpt && (
          <p className="text-sm px-5 pb-3 text-gray-600 line-clamp-2">
            {excerpt}
          </p>
        )} */}
      </div>
      <button
        onClick={handleReadMore}
        className="bg-white border text-[14px] border-black px-4 py-2 mb-4 md:mb-7 rounded-xl hover:bg-gray-500 hover:text-white transition"
      >
        Read More
      </button>
    </div>
  );
};
