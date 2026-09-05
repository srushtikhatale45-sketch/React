import RestaurantCard from "./RestaurantCard";
import { useState, useEffect } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { withPromottedLabel } from "../utils/useRestaurantMenueCard";

const Body = () => {
    const [listOfRestaurant, setListOfRestaurant] = useState([]);
    const [filteredRestaurant, setFilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const onlineStatus = useOnlineStatus();

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const data = await fetch(
                "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.3850&lng=78.4867&page_type=DESKTOP_WEB_LISTING1003414"
            );

            const json = await data.json();

            console.log(json);

            const restaurants =
                json?.data?.cards?.[2]?.card?.card?.gridElements
                    ?.infoWithStyle?.restaurants || [];

            setListOfRestaurant(restaurants);
            setFilteredRestaurant(restaurants);

        } catch (error) {
            console.error("Error fetching restaurant data:", error);
        }
    };

    if (onlineStatus === false) {
        return (
            <h1>
                Looking like you are offline!
                Please Check Your Internet Connection
            </h1>
        );
    }
    const [restaurantPromotedLabel,setRestaurantWithPromoted] = withPromottedLabel(RestaurantCard);

    if (listOfRestaurant.length === 0) {
        return <Shimmer />;
    }

    return (
        <div className="body">

            <div className="filter flex">

                {/* Search */}
                <div className="search m-4 p-4">

                    <input
                        type="text"
                        className="border border-solid border-black p-2"
                        value={searchText}
                        onChange={(e) => {
                            setSearchText(e.target.value);
                        }}
                        placeholder="Search Restaurant"
                    />

                    <button
                        className="bg-green-100 m-4 px-4 py-2 rounded-lg"
                        onClick={() => {
                            const filtered = listOfRestaurant.filter(
                                (restaurant) =>
                                    restaurant?.info?.name
                                        ?.toLowerCase()
                                        .includes(searchText.toLowerCase())
                            );

                            setFilteredRestaurant(filtered);
                        }}
                    >
                        Search
                    </button>

                </div>

                {/* Top Rated */}
                <div className="search m-4 p-4">

                    <button
                        className="px-4 py-2 bg-gray-100"
                        onClick={() => {
                            const filteredList =
                                listOfRestaurant.filter(
                                    (restaurant) =>
                                        restaurant?.info?.avgRating > 4
                                );

                            setFilteredRestaurant(filteredList);
                        }}
                    >
                        Top Rated Restaurant
                    </button>

                </div>

            </div>

            {/* Restaurant List */}
            <div className="flex flex-wrap rounded-lg">

                {filteredRestaurant.map((restaurant) => (
                    <Link
                        key={restaurant?.info?.id}
                        to={"/restaurant/" + restaurant?.info?.id}
                    >
                        {
                            
                            <RestaurantCard
                            resData={restaurant}
                        />}
                    </Link>
                ))}

            </div>

        </div>
    );
};

export default Body;
