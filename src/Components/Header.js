import { LOGO_URL } from "../utils/constants";
import { useState } from "react";
import { Link } from "react-router";
import useOnlineStatus from "../utils/useOnlineStatus";
const Header = () => {

    const [btnName, setbtnName] = useState("Login");
    //custom hook
    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between items-center font-bold text-lg  bg-blue-50 text-blue-900 hover-bg-blue-500">
            <div className="mx-1 p-2  ">
                <img className="mx-1 ml-2 p-1 w-20 rounded-xl" src={LOGO_URL} />
            </div>
            <div className="flex items-center justify-between">
                <ul className="flex  ">
                    <li className="m-2 p-2 ">status : {onlineStatus === true ? "🟢" : "🔴"}</li>
                    <li className="m-2 p-2"><Link to="/">Home</Link></li>

                    <li className="m-2 p-2"><Link to="/about">About </Link></li>
                    <li className="m-2 p-2"><Link to="/contact">Contact us </Link></li>
                    <li className="m-2 p-2">Cart</li>
                    <li className="m-2 p-2"><button className="login-btn" onClick={() => {
                        setbtnName(btnName === "Login" ? "LogOut" : "Login");
                    }}>{btnName}</button></li>
                </ul>
            </div>
        </div>
    );
};

export default Header;