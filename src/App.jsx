import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Feed from "./components/Feed/Feed";
import Auth from "./components/Auth/Auth";
import ProtectedRoute from "./components/ProtectedRoute";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import NewPostPage from "./components/NewPostPage/NewPostPage";
import { NotificationProvider } from "./context/NotificationContext";

const App = () => {
  const [posts, setPosts] = useState([]);
  const addPost = (newPost) => {
    setPosts((prevPosts) => [{ id: Date.now(), ...newPost }, ...prevPosts]);
  };

  return (
    <NotificationProvider>
      <Router>
        <div className="min-h-screen flex flex-col items-center bg-gradient-to-r from-blue-500 to-purple-600 pt-16">
          <Header />
          <div className="w-full max-w-4xl p-5">
            <Routes>
              <Route path="/auth" element={<Auth />} />
              <Route
                path="/"
                element={
                  <ProtectedRoute>
                    <Feed posts={posts} />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/new-post"
                element={
                  <ProtectedRoute>
                    <NewPostPage addPost={addPost} />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </NotificationProvider>
  );
};

export default App;
