import { Link } from "react-router"
import "./post.css"


export type PostProps = {
    id: number
    img: string,
    discrption: string,
    likes: number,
    owner: string,
    date: string
}
export default function Post(post: PostProps) {
    return (
        <>
            <div className="post" >
                <Link to={`/PostPage/${post.id}`}>
                    <img className="img" src={post.img} alt="profileImg" />
                    <h2 className="discrption">{`discrption: ${post.discrption}`}</h2>
                    <div className="details">
                        <p >{`like: ${post.likes}`}</p>
                        <p >{`owner: ${post.owner}`}</p>
                        <p >{`date: ${post.date}`}</p>
                    </div>
                </Link>
            </div>
        </>
    )
}
