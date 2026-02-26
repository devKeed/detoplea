"use client";

import Image from "next/image";
import { FC } from "react";
import { useRouter } from "next/navigation";

interface BlogPostCardProps {
  id: number;
  slug?: string;
  image: string;
  date: string;
  author: string;
  title: string;
  onReadMore?: () => void;
  excerpt?: string;
}

export const BlogPostCard: FC<BlogPostCardProps> = ({
  id,
  slug,
  image,
  date,
  author,
  title,
  onReadMore,
}) => {
  const router = useRouter();

  const handleReadMore = () => {
    if (onReadMore) {
      onReadMore();
    } else {
      const postIdentifier = slug || id;
      router.push(`/blog/${postIdentifier}`);
    }
  };

  // Use a default placeholder image if image is missing
  const displayImage = image && image !== '' ? image : '/images/22.jpg';

  return (
    <div className="flex flex-col justify-between bg-[#F2F2F2] rounded-3xl items-center h-full">
      <div className="w-full">
        {displayImage && (
          <Image
            src={displayImage}
            alt={`image-${id}`}
            width={1200}
            height={800}
            className="w-full h-auto py-3 px-3 md:py-3 md:px-3 rounded-3xl object-cover"
            sizes="(min-width: 1024px) 480px, (min-width: 640px) 360px, 100vw"
            unoptimized
          />
        )}
        <div className="flex justify-between items-center w-full px-4">
          <p className="text-[13px] md:text-[14px] text-gray-500">{date}</p>
          <p className="text-[13px] md:text-[14px] text-gray-500">-{author}</p>
        </div>
        <h6 className="text-center font-normal px-5 py-3">{title}</h6>
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