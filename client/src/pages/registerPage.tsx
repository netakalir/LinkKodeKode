import Header from "../components/application-layout/Header";
import RejisterC from "../components/register"

export default function Register() {
    return (
        <div className="page">
            <Header />
            <div className="loginRegister">
                <RejisterC />
            </div>
        </div>
    )
}