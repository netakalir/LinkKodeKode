import "./post.css"
// import "src/assets/logo.jpg"


export type PostProps = {
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
                <img className="img" src={post.img} alt="" />
                <h2 className="discrption">{`discrption: ${post.discrption}`}</h2>
                <div className="details">
                    <p >{`like: ${post.likes}`}</p>
                    <p >{`owner: ${post.owner}`}</p>
                    <p >{`date: ${post.date}`}</p>
                </div>
            </div>
        </>
    )
}
