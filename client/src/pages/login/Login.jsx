import "./login.css";

import { Link } from "react-router-dom";

import axios from "axios";
import { useContext, useRef } from "react";
import { Context } from "../../context/Context";

export default function Login() {

    const userRef = useRef();
    const passwordRef = useRef();
    const { dispatch, isFetching } = useContext(Context);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      dispatch({ type: "LOGIN_START" });
      try {
        const res = await axios.post("/auth/login", {
          username: userRef.current.value,
          password: passwordRef.current.value,
        });
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
      } catch (err) {
        dispatch({ type: "LOGIN_FAILURE" });
      }
    };
    
    return (
        <div className="login">
            <div className="loginWrapper">
                <div className="loginLeft">
                    <h3 className="loginLogo">catlist</h3>
                    <span className="loginDesc">
                        Join us and lest's plan for your productive life.
                    </span>
                </div>  
                <div className="loginRight" >
                    <form className="loginBox" onSubmit={handleSubmit}>
                        <input placeholder="Username" required className="loginInput rounded " ref={userRef} />
                        <input placeholder="Password" type="password" required minLength="6" className="passwordInput rounded" ref={passwordRef} />
                        <button className="loginButton" type="submit" disabled={isFetching}>
                            Log In
                        </button>
                        {/* <span className="loginForgot">Forgot Password ?</span> */}
                        <button className="loginRegisterButton" type="submit">
                                <Link className="link" to="/register">Create a New Account</Link>
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}
