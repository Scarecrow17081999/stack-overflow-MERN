import { useState } from "react";
import "./Auth.css";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";
import { Message } from "semantic-ui-react";
import { auth, provider } from "../firebase";
import Loader from "../loader/Loader";
import { useSelector } from "react-redux";
import { Navigate } from "react-router";
const Auth = () => {
  const { user } = useSelector((state) => state.user);
  const [register, setRegister] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSignInGoogle = async () => {
    try {
      setLoading(true);
      const res = await signInWithPopup(auth, provider);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  const handleRegister = async (e) => {
    setError("");
    setLoading(true);
    try {
      if (email === "" || password === "" || username === "") {
        setLoading(false);
        setError("Required fields are empty");
      } else {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log(error);
    }
  };
  const handleSignIn = async (e) => {
    try {
      setError("");
      setLoading(true);
      if (email === "" || password === "") {
        setLoading(false);
        setError("Please enter your email and password");
      } else {
        setLoading(true);
        const res = await signInWithEmailAndPassword(auth, email, password);
        setLoading(false);
      }
    } catch (error) {
      setError(error.message);
      setLoading(false);
      console.log(error);
    }
  };

  if (user) {
    return <Navigate to="/" />;
  }
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="auth">
          <div className="auth-container">
            <p>Add anther way to login usin any of the following options.</p>
            <div className="sign-option">
              <div onClick={handleSignInGoogle} className="single-option">
                <img
                  style={{ height: "100%" }}
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/706px-Google_%22G%22_Logo.svg.png"
                  alt="google"
                />
                <p>Sign in with google</p>
              </div>
            </div>

            <div className="auth-login">
              <div className="auth-login-container">
                {register ? (
                  <div className="input-field">
                    <p>Username</p>
                    <input
                      value={username}
                      onChange={(e) => setUsername(e.target.value)}
                      type="text"
                      placeholder="Username"
                      name=""
                    />
                    <p>Email</p>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                      name=""
                    />
                    <p>Password</p>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name=""
                      id=""
                      placeholder="Password"
                    />
                    <button
                      disabled={loading}
                      onClick={() => handleRegister()}
                      className="loginregisterbutton"
                    >
                      Register
                    </button>
                  </div>
                ) : (
                  <div className="input-field">
                    <p>Email</p>
                    <input
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      type="email"
                      placeholder="Email"
                      name=""
                    />
                    <p>Password</p>
                    <input
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      name=""
                      placeholder="Password"
                    />
                    <button
                      disabled={loading}
                      onClick={() => handleSignIn()}
                      className="loginregisterbutton"
                    >
                      Login
                    </button>
                  </div>
                )}
                <p
                  onClick={() => setRegister(!register)}
                  className="loginRegister"
                >
                  {register ? "Login" : "Register?"}
                </p>
              </div>
            </div>
          </div>

          {error && (
            <Message
              style={{ width: "fit-content", margin: "auto" }}
              error
              header={error}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Auth;
