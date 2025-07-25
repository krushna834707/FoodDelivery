import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

    const [btnName, setbtnName] = useState("Login");
    //custom hook
    const onlineStatus = useOnlineStatus();

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} />
            </div>
            <div className="nav-items">
                <ul>
                    <li className="status">status : {onlineStatus === true ? "🟢" : "🔴"}</li>
                    <li><Link to="/">Home</Link></li>

                    <li><Link to="/about">About </Link></li>
                    <li><Link to="/contact">Contact us </Link></li>
                    <li>Cart</li>
                    <li><button className="login-btn" onClick={() => {
                        setbtnName(btnName === "Login" ? "LogOut" : "Login");
                    }}>{btnName}</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;