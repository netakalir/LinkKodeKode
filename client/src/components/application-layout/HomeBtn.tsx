import { Link } from "react-router"
import "./header.css"
export default function HomeBtn() {
    return (
        <div>
            <Link  to="/"><img className="logo" src="src\assets\logo.jpg" alt="home" /></Link>
        </div>
    )
}
