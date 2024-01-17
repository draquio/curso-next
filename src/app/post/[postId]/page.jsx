const loadPost = async (id) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  const results = await response.json();
  return results;
};
const PostPage = async (props) => {
  const { params } = props;
  const postId = params.postId;
  const post = await loadPost(postId)
  return (
    <div>
      <h2>Esta es la id {postId}</h2>
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
};

export default PostPage;
