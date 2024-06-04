import "./topbarForLogin.css";

import { Link } from "react-router-dom";

export default function TopbarForLogin() {
  return (
      <div className="top">
      <div className="topLeft">
          <Link className="link" to="/intro">
            <img class="w-8 mr-5" src="assets/icon/cat.png" alt="" />
          </Link>
          <Link className="link" to="/intro">
            <span className="brand">catlist</span>
          </Link>
      </div>
      <div className="topCenter">
        <ul className="topList">
        </ul>
        </div>
      <div className="topRight">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/login">Log In</Link>
          </li>
          <li className="topListItem">
            <Link className="link bg-yellow-main text-black-main font-medium py-2 px-3 rounded focus:outline-none focus:shadow-outline" to="/register">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
