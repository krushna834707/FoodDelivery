import react, { useEffect, useState } from "react"
const User = () => {

    const [userData, setUserData] = useState({
        name: "Kishan",
        location: "gujarat",
        avatar_url: "empty",
        bio: ""
    });

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch("https://api.github.com/users/krushna834707");
        const json = await data.json();


        console.log(json);
        setUserData(json);
    }
    return (

        <div className="user-card">
            <h2>About Us</h2>
            <img src={userData.avatar_url} alt="empty" className="avatar" />
            <h2>Name: {userData.name}</h2>
            <h2>Location : {userData.location}</h2>
            <h2>Info :{userData.bio}</h2>
        </div>
    )
}

export default User;
