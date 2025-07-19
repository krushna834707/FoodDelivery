import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { BrowserRouter, Routes, Route, Outlet } from "react-router";
import RestaurantMenu from "./Components/RestaurantMenu";


const AppLayout = () => {
    return (
        <>
            <Header />
            <Outlet />
        </>
    );
};


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<AppLayout />}>
                <Route index element={<Body />} />
                <Route path="about" element={<About />} />
                <Route path="contact" element={<Contact />} />
                <Route path="restaurant/:resId" element={<RestaurantMenu />} />
            </Route>
        </Routes>
    </BrowserRouter>
);
