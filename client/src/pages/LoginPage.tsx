import Header from "../components/application-layout/Header";
import LoginC from "../components/Login";

export default function Login() {
  return (
    <div className="page">
      <Header />
      <div className="loginRegister">
        <LoginC />
      </div>
    </div>
  )
}