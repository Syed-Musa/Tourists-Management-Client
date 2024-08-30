import { FaRegFlag } from "react-icons/fa";
import { FaDollarSign, FaLocationDot,  } from "react-icons/fa6";
import { IoMdAirplane } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link } from "react-router-dom";

const AllTouristsPerCards = ({alltourists}) => {
    const {_id, image, tourists_spot_name, travel_time, seasonality, average_cost, totalVisitorsPerYear, location, country_name} = alltourists || {};
    console.log(alltourists);

    return (
        <div>
            <div className="card bg-base-100 shadow-xl lg:ml-4 ml-0">
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
                    <div className="flex items-center gap-1">
                        <FaLocationDot className="text-teal-500 text-xl"></FaLocationDot>
                        <p><span className="text-teal-500 font-medium">Location: </span><span className="font-serif italic">{location}</span></p>
                        <FaRegFlag className="text-teal-500 text-xl"></FaRegFlag>
                        <p><span className="text-teal-500 font-medium">Country</span>: <span className="font-serif italic">{country_name}</span></p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/alltourists/${_id}`}><button className="btn bg-teal-600 text-white hover:bg-white hover:text-teal-600 font-serif mt-5">View Details</button></Link>
                        <Link to={`/updateTourSpots/${_id}`}><button className="btn bg-teal-600 font-bold text-white hover:text-teal-600 hover:bg-white font-serif mt-5">Edit</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllTouristsPerCards;