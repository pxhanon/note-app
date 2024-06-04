import "./topbar.css";

import { Link } from "react-router-dom";

export default function Topbar() {
  return (
      <div className="topbar">
      <div className="topbarLeft">
            <a href="#header">
              <img class="w-8 mr-5" src="assets/icon/cat.png" alt="" />
            </a>
            <a href="#header" className="barbrand">catlist</a>
      </div>
      <div className="topbarCenter">
        <ul className="topbarList">
          <a href="#header" className="topbarListItem hover:text-yellow-main">home</a>
          <a href="#feature" className="topbarListItem hover:text-yellow-main">feature</a>
          <a href="#contact" className="topbarListItem hover:text-yellow-main">about</a>
        </ul>
        </div>
      <div className="topbarRight">
        <ul className="topbarList">
          <li className="topbarListItem2">
            <Link className="barlink" to="/login">Log In</Link>
          </li>
          <li className="topbarListItem2">
            <Link className="barlink bg-yellow-main text-black-main font-medium py-2 px-3 rounded focus:outline-none focus:shadow-outline" to="/register">Sign Up</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}