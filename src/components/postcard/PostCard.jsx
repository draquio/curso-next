'use client'

import Link from "next/link";

const PostCard = (props) => {
  const { posts } = props;
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          
          {/* <button
            onClick={() => {
              alert(post.title);
            }}
          > */}
          <Link href={`/post/${post.id}`}>
            Click me
          {/* </button> */}
          </Link>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
