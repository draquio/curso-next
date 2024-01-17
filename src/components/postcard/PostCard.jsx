'use client'
const PostCard = (props) => {
  const { posts } = props;
  return (
    <div>
      {posts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
          <button
            onClick={() => {
              alert(post.title);
            }}
          >
            Click me
          </button>
        </div>
      ))}
    </div>
  );
};

export default PostCard;
