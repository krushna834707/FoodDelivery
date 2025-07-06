import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://static.vecteezy.com/system/resources/previews/004/986/463/non_2x/food-delivery-logo-design-vector.jpg" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Contact us</li>
                    <li>Cart</li>

                </ul>
            </div>
        </div>
    );
};

const RestaurantCard = () => {
    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="" src="https://tse4.mm.bing.net/th/id/OIP.Fom27-gwWa5o-ARGkDrBVQHaFM?rs=1&pid=ImgDetMain&o=7&rm=3" />
            <h3>Meghana Foods</h3>
            <h4>Dhosa,NorthIndian,Asian</h4>
            <h4>4.4 stars</h4>
            <h4>38 Minutes</h4>
        </div>
    );
}
const Body = () => {
    return (
        <div className="body">
            <div className="search">Search</div>
            <div className="res-container" >
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />
                <RestaurantCard />

            </div>
        </div>
    );
}
const AppLayout = () => {
    return (
        <div className="app">
            <Header />
            <Body />
        </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);


