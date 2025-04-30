import { Link } from "react-router-dom";

function LoginLanding() {
  return (
    <div className="landing">
      <h1>Welcome to PopX</h1>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      <Link to="/register">
        <button className="first">Create Account</button>
      </Link>
      <Link to="/login">
        <button className="second">Already Registered? Login</button>
      </Link>
    </div>
  );
}

export default LoginLanding;