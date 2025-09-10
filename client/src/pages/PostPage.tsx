import { useContext, useEffect, useState } from "react";
import Header from "../components/application-layout/Header";
import type { PostProps } from "../components/application-layout/Post";
import { getAllPost, getPostById } from "../api.fetch";
import Post from "../components/application-layout/Post";
import { useParams } from "react-router";
import { userContext } from "../Context";

export default function PostPage() {
    const [post, setPost] = useState<PostProps>()
    const [posts, setPosts] = useState<PostProps[]>([])
    const user = useContext(userContext)
    const { postId } = useParams();
    console.log("postId",postId);
    

    useEffect(() => {
        const fetchPost = async () => {
            const result = await getAllPost(user);
            setPosts(result);
            const correntPost = await getPostById(postId,user);
            console.log("postId", postId);

            console.log("correntPost",correntPost);

            setPost(correntPost);
        };
        fetchPost();
    }, []);

    useEffect(() => {

    })
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
