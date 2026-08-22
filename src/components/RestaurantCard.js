import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{
       const {resData}=props;
       const{
badgesV2, name, cuisines, avgRating, costForTwo, sla,id}=resData?.info;
  
        return(
        <div className="res-card" style={{backgroundColor:"#b49999"}}>
            <img className="res-logo" src={CDN_URL+badgesV2.
cloudinaryImageId
} alt="Restaurant Logo"/>
            <h3>{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <h4>{avgRating}</h4>
            <h4>{costForTwo} FOR TWO</h4>
            <h4>{sla?.slaString}</h4>

        </div>
    )
}
export default RestaurantCard;