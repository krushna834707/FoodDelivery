const RestaurantCard = (props) => {
    const { resData } = props;

    return (
        <div className="res-card" style={{ backgroundColor: "#f0f0f0" }}>
            <img className="res-logo" alt="" src={resData.strCategoryThumb} />
            <h3>{resData.idCategory}</h3>
            <h4>{resData.strCategory}</h4>
            <h4>{resData.avgRating}</h4>
            <h4>{resData.price}</h4>
        </div>
    );
}

export default RestaurantCard;