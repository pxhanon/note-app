import "./sidebar.css"

import { Adb } from "@mui/icons-material";

import { SidebarData } from './sidebarData';

import { Link } from 'react-router-dom';
import { useContext } from "react";

import { Context } from "../../context/Context";

export default function Sidebar() {

    const { user, dispatch } = useContext(Context);
    const PF = "http://localhost:5000/images/";

    const handleLogout = () => {
        dispatch({ type: "LOGOUT" });
    };

    return (
        <div className="backgroundAllPage">
            <div className='navbar'>
                <img class="w-10 ml-7 mr-4" src="assets/icon/cat.png" alt="" />
                <Link to="/">
                    <h1 class="text-4xl font-normal text-black cursor">catlist</h1>
                </Link>
                <Link to="/settings" >
                    <img src={PF+user.profilePic} className="profilePicture" alt="" />
                </Link>
                <h2 className="logoutSidebar" onClick={handleLogout}>{ user && "Logout"}</h2>
            </div>
            <nav className='nav-menu'>
                <ul className='nav-menu-items'>
                  
                    {SidebarData.map((item, index) => {
                        return (
                                <li key={index} className={item.cName}>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span className="spanMain">{item.title}</span>
                                    </Link>
                                 </li>
                        );
                    })}
                </ul>
            </nav>
        </div>     
    );
}
