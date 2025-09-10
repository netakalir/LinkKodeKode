import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { userContext } from "../Context";
import { login } from "../api.fetch";






export default function LoginC() {
    const [fullName, setFullName] = useState<string>("")
    const [password, setPassword] = useState<string>("")
    const [userId, setUserId] = useState<string>("")
    const [msg, setMsg] = useState("");
    const user = useContext(userContext)
    let navigate = useNavigate()
    const handleLogin = async () => {
        const result = await login(fullName, password, userId);
        user.setUser(result)
        console.log(result);
        if (result) {
            setMsg("login successfully😊: A few seconds and we're there.");
            if (result.token) {
                setTimeout(() => {
                    navigate("/HomePage")
                }, 3000);
            }
            else {
                setTimeout(() => {
                    setMsg("login fild😒:Returning you to the home page");
                    navigate("/")
                }, 2000);
            }
        }
    };
    return (
        <>
            <div className="loginC">
                <div className="optionsDiv">
                    <p className="option">login</p>
                </div>
                <div className="inputsDiv">
                    <div className="inputWrapper">
                        <span className="icon">👤</span>
                        <input className="input" type="number" onChange={e => setUserId(e.target.value)} value={userId} placeholder="userId" />
                    </div>

                    <div className="inputWrapper">
                        <span className="icon">👤</span>
                        <input className="input" type="text" onChange={e => setFullName(e.target.value)} value={fullName} placeholder="Full Name" />
                    </div>

                    <div className="inputWrapper">
                        <span className="icon">🔒</span>
                        <input className="input" type="password" onChange={e => setPassword(e.target.value)} value={password} placeholder="Password" />
                    </div>
                </div>
                <button onClick={handleLogin} className="button">
                    login
                </button>
                <p className="msg">{msg}</p>
            </div>
        </>
    )
}
