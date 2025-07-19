import React from 'react'
import { useEffect, useState } from 'react'
import { useParams } from "react-router"
import { MENU_API } from '../utils/constants'


const RestaurantMenu = () => {

    const [resInfo, setResInfo] = useState(null);
    let { resId } = useParams();
    //console.log(params);

    useEffect(() => {
        fetchMenu();
    }, [])

    const fetchMenu = async () => {
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json);


        setResInfo(json.data);

    }
    if (!resInfo) return <h2>Loading...</h2>;

    const { name, costForTwoMessage, cuisines, avgRating } = resInfo?.cards[2]?.card?.card?.info;

    // const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
    const itemCards = resInfo?.cards?.[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
        (c) => c?.card?.card?.itemCards
    )?.card?.card?.itemCards || [];

    console.log(itemCards);

    return (
        <div className='menu'>
            <h1>{name}</h1>
            <h3>{avgRating}</h3>
            <p>
                {cuisines.join(", ")} {costForTwoMessage}
            </p>

            <h2>Menu</h2>
            <ul>
                {itemCards.map(item => <li key={item.card.info.id}>{item.card.info.name} Rs.{item.card.info.price || item.card.info.defaultPrice} </li>)}

            </ul>

        </div>


    )
}

export default RestaurantMenu
