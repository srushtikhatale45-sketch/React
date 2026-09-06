import { CDN_URL } from "../utils/constants";

const RestaurantCard = (props) => {
    const { resData } = props;

    const {
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
    } = resData?.info || {};

    const {cloudinaryImageId}=resData?.info|| {};
  

    const imageUrl = cloudinaryImageId
        ? CDN_URL + cloudinaryImageId
        : "/no-image.png";

    

    return (
        <div className="m-4 p-4 w-[200px] rounded-lg bg-gray-50 hover:bg-gray-200">
            <img
                className="rounded-lg w-full h-[150px] object-cover"
                src={imageUrl}
                alt={name || "Restaurant"}
                
            />

            <h3 className="font-bold py-4 text-xl">
                {name}
            </h3>

            <h4>
                {cuisines?.join(", ")}
            </h4>

            <h4>
                ⭐ {avgRating}
            </h4>

            <h4>
                {costForTwo} FOR TWO
            </h4>

            <h4>
                {sla?.slaString}
            </h4>

        </div>
    );
};
//Higher Order Component(HOC) is a function which takes a component as an argument and returns a new component with additional functionality or modified behavior. HOCs are used to reuse component logic, enhance components, and separate concerns in React applications. 
// 

export const withPromottedLabel=(RestaurantCard)=>{

    return (props)=>{
        return(
            <div>
                <label className="bg-black text-white m-2 p-2  rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
}
};

export default RestaurantCard;
