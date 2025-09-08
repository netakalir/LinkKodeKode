import "./App.css"
// import type { PostProps } from "./components/application-layout/Post";
import { Route, Routes } from "react-router";
import HomePage from "./pages/homePage";
import NewPostPage from "./pages/newPostPage";





export default function App() {
  return (
    <div>
    <Routes>
      <Route path="/"element={<HomePage />}/>
      <Route path="/newPost"element={<NewPostPage />}/>
    </Routes>
    </div>
  )
}
