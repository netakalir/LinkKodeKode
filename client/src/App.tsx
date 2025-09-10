import "./App.css"
// import type { PostProps } from "./components/application-layout/Post";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import NewPostPage from "./pages/NewPostPage";
import PostPage from "./pages/PostPage";
import Login from "./pages/LoginPage";
import Register from "./pages/registerPage";
import { userContext, type User } from "./Context";
import { useState } from "react";
import LoginRegisterPage from "./pages/LoginRegisterPage";





export default function App() {
  const [user, setUser] = useState<User | null>(null)

  return (
    <div>
      <userContext.Provider value={{ user, setUser, }}>
        <Routes>
          <Route path="/" element={<LoginRegisterPage />} />
          <Route path="/registerPage" element={<Register />} />
          <Route path="/loginPage" element={<Login />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/newPostPage" element={<NewPostPage />} />
          <Route path="/PostPage/:postId" element={<PostPage />} />
        </Routes>
      </userContext.Provider>
    </div>
  )
}
