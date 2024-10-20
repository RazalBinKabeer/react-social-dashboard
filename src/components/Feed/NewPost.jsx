import { useState } from "react";
import { useNotification } from "../../context/NotificationContext";

const NewPost = ({ addPost }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const { addNotification } = useNotification();

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    addNotification("New post created!");
    setTitle("");
    setContent("");
  };

  return (
    <div className="p-5 bg-white rounded-lg shadow m-5">
      <h2 className="text-2xl font-bold mb-4">Create New Post</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <textarea
          placeholder="Content"
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>
        <button
          type="submit"
          className="w-full py-2 px-4 bg-blue-500 text-white font-bold rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Post
        </button>
      </form>
    </div>
  );
};

export default NewPost;
