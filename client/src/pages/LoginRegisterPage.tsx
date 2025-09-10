import { Link } from "react-router";
import Header from "../components/application-layout/Header";

export default function LoginRegisterPage() {
    return (
        <div >
            <Header />
            <div className="navBar">
                <Link className="links" to="/registerPage">register</Link>
                <Link className="links" to="/loginPage">login</Link>
            </div>
        </div>
    )
}
