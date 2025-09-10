import type { PostProps } from "../components/application-layout/Post";
import { useContext, useEffect, useState } from "react";
import { getAllPost, getPostById } from "../api.fetch";
import { useParams } from "react-router";
import { userContext } from "../Context";
import Post from "../components/application-layout/Post";
import Header from "../components/application-layout/Header";

export default function PostPage() {
    const [post, setPost] = useState<PostProps>()
    const [posts, setPosts] = useState<PostProps[]>([])
    const user = useContext(userContext)
    const { postId } = useParams();
    useEffect(() => {
        const fetchPost = async () => {
            const result = await getAllPost(user);
            setPosts(result);
            const correntPost = await getPostById(postId);
            setPost(correntPost);
        };
        fetchPost();
    }, []);

    return (
        <div className="page">
            <Header />
            {post && posts && (
                <div className="currentPost">
                    <Post {...post} />
                </div>
            )}
        </div>
    );
}
