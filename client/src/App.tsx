import "./App.css"
// import type { PostProps } from "./components/application-layout/Post";
import { Route, Routes } from "react-router";
import HomePage from "./pages/HomePage";
import NewPostPage from "./pages/NewPostPage";
import PostPage from "./pages/PostPage";





export default function App() {
  return (
    <div>
    <Routes>
      <Route path="/"element={<HomePage />}/>
      <Route path="/newPostPage"element={<NewPostPage />}/>
      <Route path="/postPage/"element={<PostPage />}/>
    </Routes>
    </div>
  )
}
