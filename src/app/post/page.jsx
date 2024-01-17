import PostCard from "@/components/postcard/PostCard";

const loadPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const results = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 5000));
  return results;
};

const PostPage = async () => {
  const results = await loadPost();
  return (
    <PostCard posts={results} />
  );
};

export default PostPage;
