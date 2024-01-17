import PostCard from "@/components/postcard/PostCard";
import { resolve } from "styled-jsx/css";

const loadPost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const results = await response.json();
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return results;
};

const PostPage = async () => {
  const results = await loadPost();
  return (
    <PostCard posts={results} />
  );
};

export default PostPage;
