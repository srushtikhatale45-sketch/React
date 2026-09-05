import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenueCard from "../utils/useRestaurantMenueCard";

const RestaurantMenue = () => {

    const { resId } = useParams();

    // Custom Hook
    const resInfo = useRestaurantMenueCard(resId);

    // Show Shimmer while API data is loading
    if (resInfo === null) {
        return <Shimmer />;
    }

    console.log("Restaurant Info:", resInfo);

    // Restaurant Information
    const restaurantInfo =
        resInfo?.cards?.[2]?.card?.card
            ?.gridElements?.infoWithStyle?.restaurants?.[0]?.info;

    const name = restaurantInfo?.name;
    const cuisines = restaurantInfo?.cuisines;
    const costForTwoMessage = restaurantInfo?.costForTwoMessage;

    // Menu Items
    const itemCards =
        resInfo?.cards?.[4]?.groupedCard
            ?.cardGroupMap?.REGULAR?.cards?.[1]
            ?.card?.card?.itemCards || [];

    return (
        <div className="text-center">

            {/* Restaurant Name */}
            <h1 className="font-bold text-2xl my-6">
                {name}
            </h1>

            {/* Restaurant Details */}
            <p className="text-lg">
                {cuisines?.join(", ")} - {costForTwoMessage}
            </p>

            {/* Menu */}
            <h2 className="font-bold text-xl my-6">
                Menu
            </h2>

            <ul>
                {itemCards.map((item) => {

                    const info = item?.card?.info;

                    return (
                        <li
                            key={info?.id}
                            className="p-3 m-3 border-b border-gray-200"
                        >
                            {info?.name} - Rs.{" "}
                            {(info?.price ||
                                info?.defaultPrice ||
                                0) / 100}
                        </li>
                    );
                })}
            </ul>

        </div>
    );
};

export default RestaurantMenue;
