import PostCard from "@/components/postcard/PostCard";
import "./Post.css";
const loadPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const results = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return results;
};

const PostPage = async () => {
  const posts = await loadPost();
  return (
    <div className="grid">
      {posts.map((post) => (
        <PostCard key={post.id} post={post} />
      ))}
    </div>
  );
};

export default PostPage;
