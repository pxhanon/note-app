import "./register.css";

import { Link } from "react-router-dom";

import { useState } from "react";
import axios from "axios";


export default function Register() {

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(false);
        try {
          const res = await axios.post("/auth/register", {
            username,
            email,
            password,
          });
          res.data && window.location.replace("/login");
        } catch (err) {
          setError(true);
        }
    };

    return (
        <div className="register">
            <div className="regWrapper">
                <div className="regLeft">
                    <h3 className="regLogo">catlist</h3>
                    <span className="regDesc">
                        Join us and lest's plan for your productive life.
                    </span>
                </div>  
                <div className="regRight">
                    <form className="regBox" onSubmit={handleSubmit} >
                        <input placeholder="Username" required className="regInput rounded" 
                            onChange={(e) => setUsername(e.target.value)} />
                        <input placeholder="Email" required className="regInput rounded" type="email" 
                            onChange={(e) => setEmail(e.target.value)} />
                        <input placeholder="Password" required className="regInput rounded" type="password" minLength="6" 
                            onChange={(e) => setPassword(e.target.value)} />
                        <button className="regButton" type="submit">Sign Up</button>
                        <button className="loginRegisterButton">
                            <Link className="link" to="/login">Log into Account</Link>
                        </button>
                    </form>
                    {error && <span className="spanRegister">Something went wrong !</span>}
                </div>
            </div>
        </div>
    );
}
