import { TiWeatherPartlySunny } from "react-icons/ti";
import { FaDollarSign } from "react-icons/fa";
import { FaLocationDot, FaRegFlag } from "react-icons/fa6";
import { Link } from "react-router-dom";

const CountrySideSpotCards = ({countrySideSpot}) => {
    const {_id, tourists_spot_name, image, country_name, location, average_cost, seasonality} = countrySideSpot || {};
    console.log(countrySideSpot);

    return (
        <div>
            <div className="card bg-base-100 shadow-xl lg:ml-4 ml-1">
                <figure>
                    <img className="h-80 w-full" src={image} alt="Tours Spot" />
                </figure>
                <div className="card-body">
                    <h2 className="font-semibold uppercase font-serif text-teal-500">Spot Name:  <span className=" text-blue-700 font-normal">{tourists_spot_name}</span></h2>
                    <div className="flex items-center gap-1">
                        <FaRegFlag className="text-teal-500 text-xl"></FaRegFlag>
                        <p><span className="text-teal-500 font-medium">Country</span>: <span className="font-serif italic">{country_name}</span></p>
                        <TiWeatherPartlySunny className="text-teal-500 text-xl"></TiWeatherPartlySunny>
                        <p><span className="text-teal-500 font-medium">Season </span>: <span className="font-serif italic">{seasonality}</span></p>
                    </div>
                    <div className="flex items-center gap-1">
                        <FaLocationDot className="text-teal-500 text-xl"></FaLocationDot>
                        <p><span className="text-teal-500 font-medium">Location: </span><span className="font-serif italic">{location}</span></p>
                        <FaDollarSign className="text-teal-500 text-xl"></FaDollarSign>
                        <p><span className="text-teal-500 font-medium">Ave_Cost </span>: <span className="font-serif italic">{average_cost}</span></p>
                    </div>
                    <div className="card-actions justify-end">
                        <Link to={`/countrySideSpot/${_id}`}><button className="btn bg-teal-600 text-white hover:bg-white hover:text-teal-600 font-serif mt-5">View Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CountrySideSpotCards;