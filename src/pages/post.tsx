import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";


interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Post: React.FC = () => {
  const [, setPost] = useState<Post>();
  const router = useRouter();
  const { id } = router.query;

  useEffect(() => {
    if (id) {
      fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then((response) => response.json())
        .then((json) => setPost(json));
    }
  }, [id]);

  return (
    <div className="flex items-center justify-center h-screen">
      {/* <PostCard id={post?.id} title={post?.title} body={post?.body} /> */}
    </div>
  );
};

export default Post;
