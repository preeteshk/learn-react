import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { info } = props.restaurantData;
    const { cloudinaryImageId, name, costForTwo, cuisines, sla } = info;
    const { slaString } = sla;
    return (
        <div className="res-card-container">
            <div className="res-image">
                <img src={CDN_URL + cloudinaryImageId} />
            </div>
            <div className="res-content">
                <div>{name}</div>
                <div>{costForTwo}</div>
                <div>Delivery in {slaString}</div>
                <div>{cuisines.join(", ")}</div>
            </div>
        </div >
    );
};

export default RestaurantCard;
