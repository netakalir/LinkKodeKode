import { useEffect, useState } from "react";
import Header from "../components/application-layout/Header";
import Post, { type PostProps } from "../components/application-layout/Post";
import "./style.css"
import { getAllPost } from "../api.fetch";
// import NewPost from "../components/newPost";
import { useNavigate } from "react-router";


export default function HomePage() {
    const [posts, setPosts] = useState<PostProps[]>([])
    let navigate = useNavigate()
    useEffect(() => {
        const fetchPost = async () => {
            const result = await getAllPost();
            setPosts(result)
            console.log(result);
        }
        fetchPost()
    }, [])
    return (
        <div className="page">
            <Header />
            <div className="posts">
                {posts.map((post, index) => (
                    <Post key={index} {...post} />
                ))}
            </div>
            <button className="newPostBtn" onClick={() => navigate("/NewPostPage")}>newPost</button>
            {/* <button className="currentPostBtn" onClick={() => navigate("/PostPage")}>Post</button> */}
        </div>
    )
}
