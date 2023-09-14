import { IMG_URL } from "../utils/constant";

const RestContainer = (props) => {
    
    const { resName } = props;

    return (
        <div className="res-conatiner">
            <img alt="res image" className="res-image" src={IMG_URL + resName?.info.cloudinaryImageId }/>
            <h3>{resName?.info.name}</h3>
            <p>{resName?.info.cuisines.join(', ')}</p>
            <p>{resName?.info.avgRating}</p>
        </div>    
    )
}

export default RestContainer;