import { useState } from "react"
import { createNewPost } from "../api.fetch";
import "./newPost.css"
import { useNavigate } from "react-router";
export default function NewPost() {
    const [owner, setOwner] = useState("")
    const [discription, setDiscription] = useState("")
    const [msg, setMsg] = useState("");
    let navigate = useNavigate()
    const handelCreateNewPost = async () => {
        const result = await createNewPost(owner, discription)
        setMsg(result)
        
        setTimeout(() => {
            navigate("/")
        }, 3000);
    }
    return (
        <div className="newPost">
            <div className="optionsDiv">
                <p className="option">new post</p>
            </div>
            <div className="inputsDiv">
                <div className="inputWrapper">
                    <span className="icon">👤</span>
                    <input className="ownerInput" type="text" onChange={e => setOwner(e.target.value)} value={owner} placeholder="owner" />
                </div>

                <div className="inputWrapper">
                    <span className="icon">✉️</span>
                    <textarea className="discriptionTextarea" onChange={e => setDiscription(e.target.value)} value={discription} placeholder="discription"></textarea>
                </div>
            </div>
            <button onClick={handelCreateNewPost} className="button">
                create
            </button>
            <p className="msg">{msg}</p>
        </div>
    )
}
