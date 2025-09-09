import "./App.css"
// import type { PostProps } from "./components/application-layout/Post";
import { Route, Routes } from "react-router";
import HomePage from "./pages/homePage";
import NewPostPage from "./pages/newPostPage";
import PostPage from "./pages/PostPage";





export default function App() {
  return (
    <div>
    <Routes>
      <Route path="/"element={<HomePage />}/>
      <Route path="/newPostPage"element={<NewPostPage />}/>
      <Route path="/postPage"element={<PostPage />}/>
    </Routes>
    </div>
  )
}
