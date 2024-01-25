'use client'

import Link from "next/link";

const PostCard = (props) => {
  const { post } = props;
  return (
    <div className="post_item bg-gray-100 p-10 text-black rounded-xl">
        <div key={post.id}>
          <h3 className="text-xl font-bold mb-4">{post.title}</h3>
          <p className="text-slate-700 mb-5">{post.body}</p>
          <Link className="font-bold" href={`/post/${post.id}`}>
            Leer completo
          </Link>
        </div>
    </div>
  );
};

export default PostCard;
