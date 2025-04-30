import { FC } from "react";

interface BlogPostCardProps {
  id: number;
  image: string;
  date: string;
  author: string;
  title: string;
  onReadMore?: () => void;
}

export const BlogPostCard: FC<BlogPostCardProps> = ({
  id,
  image,
  date,
  author,
  title,
  onReadMore,
}) => {
  return (
    <div className="flex flex-col justify-between bg-[#F2F2F2] rounded-3xl items-center">
      <div>
        <img
          src={image}
          alt={`image-${id}`}
          className="w-full h-auto py-3 px-3 md:py-3 md:px-3 rounded-3xl"
        />
        <div className="flex justify-between items-center w-full px-4 ">
          <p className="text-[14px] md:text-[15px] text-gray-500">{date}</p>
          <p className="text-[14px] md:text-[15px] text-gray-500">-{author}</p>
        </div>
        <h6 className="text-center font-normal px-5 py-5">{title}</h6>
      </div>
      <button
        onClick={onReadMore}
        className="bg-white border text-xs border-black px-10 py-2 mb-4 md:mb-7 rounded-xl hover:bg-gray-500 hover:text-white transition"
      >
        Read More
      </button>
    </div>
  );
};
