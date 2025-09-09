import Header from "../components/application-layout/Header";
import NewPost from "../components/NewPost"
import "./style.css"

export default function NewPostPage() {
  return (
    <div className="page">
        <Header />
        <NewPost />
    </div>
  )
}
