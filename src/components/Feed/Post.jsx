const Post = ({ post }) => (
  <div className="p-5 bg-white rounded-lg shadow mb-5 transition-transform transform hover:scale-105">
    <h3 className="text-xl font-bold mb-2">{post.title}</h3>
    <p>{post.content}</p>
  </div>
);

export default Post;
