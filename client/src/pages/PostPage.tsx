import { useEffect, useState } from "react";
import Header from "../components/application-layout/Header";
import type { PostProps } from "../components/application-layout/Post";
import { getAllPost, getPostById } from "../api.fetch";
import Post from "../components/application-layout/Post";

export default function PostPage() {
    const [post, setPost] = useState<PostProps>()
    const [posts, setPosts] = useState<PostProps[]>([])
    useEffect(() => {
        const fetchPost = async () => {
            const result = await getAllPost();
            setPosts(result);
            const postId = 1; 
            const correntPost = await getPostById(postId);
            setPost(correntPost);
        };
        fetchPost();
    }, []);

    useEffect(() => {

    })
    return (
        <div className="page">
            <Header />
            {post && (
                <div className="currentPost">
                    <Post {...post} />
                </div>
            )}
        </div>
    );
}
