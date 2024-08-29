import { MdAccessTime } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaDollarSign } from "react-icons/fa";
import { IoMdAirplane } from "react-icons/io";
import { Link } from "react-router-dom";

const TouristsSpotPerCards = ({touristsSpot}) => {
    const {_id, tourists_spot_name, image, average_cost, totalVisitorsPerYear, travel_time, seasonality} = touristsSpot || {};
    console.log(touristsSpot)

    return (
        <div>
            <div className="card bg-base-100 shadow-xl ml-4">
                <figure>
                    <img className="h-80 w-full" src={image} alt="Tours Spot" />
                    
                </figure>
                <div className="card-body">
                    <h2 className="font-semibold uppercase font-serif text-teal-500">Spot Name: <span className=" text-blue-700 font-normal">{tourists_spot_name}</span></h2>
                    <div className="flex items-center gap-1">
                        <MdAccessTime className="text-teal-500 text-xl"></MdAccessTime> 
                        <p><span className="text-teal-500 font-medium">Time </span>: <span className="font-serif italic">{travel_time}</span></p>
                        <TiWeatherPartlySunny className="text-teal-500 text-xl"></TiWeatherPartlySunny>
                        <p><span className="text-teal-500 font-medium">Season </span>: <span className="font-serif italic">{seasonality}</span></p>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaDollarSign className="text-teal-500 text-xl"></FaDollarSign>
                        <p><span className="text-teal-500 font-medium">Ave_Cost </span>: <span className="font-serif italic">{average_cost}</span></p>
                        <IoMdAirplane className="text-teal-500 text-xl"></IoMdAirplane>
                        <p><span className="text-teal-500 font-medium">Year of Visitors</span>: <span className="font-serif italic">{totalVisitorsPerYear}</span></p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/touristsSpot/${_id}`}><button className="btn bg-teal-600 text-white hover:bg-white hover:text-teal-600 font-serif mt-5">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default TouristsSpotPerCards;