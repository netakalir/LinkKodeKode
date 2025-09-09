import Header from "../components/application-layout/Header";
import NewPost from "../components/newPost"
import "./style.css"

export default function NewPostPage() {
  return (
    <div className="page">
        <Header />
        <NewPost />
    </div>
  )
}
