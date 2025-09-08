import Header from "../components/application-layout/Header";
import Post, { type PostProps } from "../components/application-layout/Post";
import "./style.css"

export const posts: PostProps[] = [{
  img: "src/assets/logo.jpg",
  discrption: "ugvihkbkjbvkglihkbk.h gcluivbk",
  likes: 20,
  owner: "neta",
  date: new Date().toLocaleString()
}, {
  img: "src/assets/logo.jpg",
  discrption: "ugvihkbkjbvkglihkbk.h gcluivbk",
  likes: 10,
  owner: "namoi",
  date: new Date().toLocaleString()

}, {
  img: "src/assets/logo.jpg",
  discrption: "ugvihkbkjbvkglihkbk.h gcluivbk",
  likes: 50,
  owner: "netanel",
  date: new Date().toLocaleString()

}, {
  img: "src/assets/logo.jpg",
  discrption: "ugvihkbkjbvkglihkbk.h gcluivbk",
  likes: 100,
  owner: "ali",
  date: new Date().toLocaleString()

}, {
  img: "src/assets/logo.jpg",
  discrption: "ugvihkbkjbvkglihkbk.h gcluivbk",
  likes: 100,
  owner: "ali",
  date: new Date().toLocaleString()

}, {
  img: "src/assets/logo.jpg",
  discrption: "ugvihkbkjbvkglihkbk.h gcluivbk",
  likes: 100,
  owner: "ali",
  date: new Date().toLocaleString()

}, {
  img: "src/assets/logo.jpg",
  discrption: "ugvihkbkjbvkglihkbk.h gcluivbk",
  likes: 100,
  owner: "ali",
  date: new Date().toLocaleString()

}]

export default function HomePage() {
    return (
        <div className="page">
            <Header />
            <div className="posts">
                {posts.map((post, index) => (
                    <Post key={index} {...post} />
                ))}
            </div>
        </div>
    )
}
