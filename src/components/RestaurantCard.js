import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
       const {resData}=props;
       const{cloudinaryImageId, name, cuisines, avgRating, costForTwo, deliveryTime,id}=resData?.info;
  
        return(
        <div className="res-card" style={{backgroundColor:"#b49999"}}>
            <img className="res-logo" src={CDN_URL+cloudinaryImageId} alt="Restaurant Logo"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo} FOR TWO</h4>
            <h4>{deliveryTime} minutes</h4>

        </div>
    )
}
export default RestaurantCard;