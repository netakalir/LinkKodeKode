import { useState } from "react";
import { useNavigate } from "react-router";
import { register } from "../api.fetch";


export default function RejisterC() {
    const [fullName, setFullName] = useState("")
    const [password, setpassword] = useState("")
    const [msg, setMsg] = useState("");
    let navigate = useNavigate()
    const handleRegister = async () => {
        const result = await register(fullName, password);
        if (result) {
            setMsg(`Wellcome to LinkKodeKode😊 
                Remember your ID number: ${result}`);
        }
        else {
            setMsg("Register failed😕");
        }
        setTimeout(() => {
                navigate("/")
            }, 4000); 
    };
    return (
        <>
            <div className="registerC">
                <div className="optionsDiv">
                    <p className="option">register</p>
                </div>
                <div className="inputsDiv">
                    <div className="inputWrapper">
                        <span className="icon">👤</span>
                        <input className="input" type="text" onChange={e => setFullName(e.target.value)} value={fullName} placeholder="Full Name" />
                    </div>

                    <div className="inputWrapper">
                        <span className="icon">🔒</span>
                        <input className="input" type="password" onChange={e => setpassword(e.target.value)} value={password} placeholder="Password" />
                    </div>
                </div>
                <button onClick={handleRegister} className="button">
                    register
                </button>
                <p className="msg">{msg}</p>
            </div>
        </>
    )
}
