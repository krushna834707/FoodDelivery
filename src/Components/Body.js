import RestaurantCard from "./RestaurantCard";
import { useState } from "react";

const Body = () => {

    const [resList, setResList] = useState([
        {
            "idCategory": "5",
            "strCategory": "Miscellaneous",
            "strCategoryThumb": "https://www.themealdb.com/images/category/miscellaneous.png",
            "strCategoryDescription": "General foods that don't fit into another category",
            "avgRating": "4.4",
            "price": 400
        },
        {
            "idCategory": "6",
            "strCategory": "Pasta",
            "strCategoryThumb": "https://www.themealdb.com/images/category/pasta.png",
            "strCategoryDescription": "Pasta is a staple food of traditional Italian cuisine, with the first reference dating to 1154 in Sicily.\r\n\r\nAlso commonly used to refer to the variety of pasta dishes, pasta is typically a noodle made from an unleavened dough of a durum wheat flour mixed with water or eggs and formed into sheets or various shapes, then cooked by boiling or baking. As an alternative for those wanting a different taste, or who need to avoid products containing gluten, some pastas can be made using rice flour in place of wheat.[3][4] Pastas may be divided into two broad categories, dried (pasta secca) and fresh (pasta fresca)."
            , "avgRating": "3.6",
            "price": 500
        },
        {
            "idCategory": "7",
            "strCategory": "Pork",
            "strCategoryThumb": "https://www.themealdb.com/images/category/pork.png",
            "strCategoryDescription": "Pork is the culinary name for meat from a domestic pig (Sus scrofa domesticus). It is the most commonly consumed meat worldwide,[1] with evidence of pig husbandry dating back to 5000 BC. Pork is eaten both freshly cooked and preserved. Curing extends the shelf life of the pork products. Ham, smoked pork, gammon, bacon and sausage are examples of preserved pork. Charcuterie is the branch of cooking devoted to prepared meat products, many from pork.\r\n\r\nPork is the most popular meat in Eastern and Southeastern Asia, and is also very common in the Western world, especially in Central Europe. It is highly prized in Asian cuisines for its fat content and pleasant texture. Consumption of pork is forbidden by Jewish and Muslim dietary law, a taboo that is deeply rooted in tradition, with several suggested possible causes. The sale of pork is limited in Israel and illegal in certain Muslim countries.",
            "avgRating": "4.7",
            "price": 350
        },
        {
            "idCategory": "8",
            "strCategory": "Seafood",
            "strCategoryThumb": "https://www.themealdb.com/images/category/seafood.png",
            "strCategoryDescription": "Seafood is any form of sea life regarded as food by humans. Seafood prominently includes fish and shellfish. Shellfish include various species of molluscs, crustaceans, and echinoderms. Historically, sea mammals such as whales and dolphins have been consumed as food, though that happens to a lesser extent in modern times. Edible sea plants, such as some seaweeds and microalgae, are widely eaten as seafood around the world, especially in Asia (see the category of sea vegetables). In North America, although not generally in the United Kingdom, the term \"seafood\" is extended to fresh water organisms eaten by humans, so all edible aquatic life may be referred to as seafood. For the sake of completeness, this article includes all edible aquatic life.",
            "avgRating": "4.4",
            "price": 400
        },
        {
            "idCategory": "9",
            "strCategory": "Side",
            "strCategoryThumb": "https://www.themealdb.com/images/category/side.png",
            "strCategoryDescription": "A side dish, sometimes referred to as a side order, side item, or simply a side, is a food item that accompanies the entrée or main course at a meal. Side dishes such as salad, potatoes and bread are commonly used with main courses throughout many countries of the western world. New side orders introduced within the past decade[citation needed], such as rice and couscous, have grown to be quite popular throughout Europe, especially at formal occasions (with couscous appearing more commonly at dinner parties with Middle Eastern dishes).",
            "avgRating": "4.4",
            "price": 400
        }
    ]);


    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" onClick={() => {
                    const filteredList = resList.filter(
                        (res) => res.avgRating > 4
                    );
                    setResList(filteredList);
                }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container" >

                {
                    resList.map((restaurant) => (
                        < RestaurantCard key={restaurant.idCategory} resData={restaurant} />
                    ))
                }
            </div>
        </div >
    );
}

export default Body;