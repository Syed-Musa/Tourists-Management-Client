import { FaDollarSign, FaLocationDot, FaRegFlag } from "react-icons/fa6";
import { IoMdAirplane } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link, useLoaderData } from "react-router-dom";
import { VscCheck } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import useAuth from "../../Hooks/useAuth";
import Swal from "sweetalert2";

const CountrySideSpotDtls = () => {
    const {user} = useAuth();
    const data = useLoaderData();
    console.log(data);
    const { image, tourists_spot_name, location, country_name} = data;

    const BookNow = () => {
        const value = { 
            name: user?.name, 
            email: user?.email, 
            tourists_spot_name, 
            image, 
            location, 
            country_name 
        };
    
        fetch('https://tourism-management-server-phi.vercel.app/mylist', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(value)
        })
        .then(res => {
            if (!res.ok) {
                throw new Error('Network response was not ok');
            }
            return res.json();
        })
        .then(data => {
            console.log('Success:', data);
            Swal.fire(
                'Added!',
                'The selected Tour Spots have been added!',
                'success'
            );
        })
        .catch(error => {
            console.error('There was a problem with the fetch operation:', error);
            Swal.fire(
                'Error!',
                'There was a problem adding the Tour Spots.',
                'error'
            );
        });
    };

    return (
        <div>
            <img className="w-full h-[700px]" src={data?.image} alt="" />
            <div className="items-center top-1">
                <div className="mt-20">
                    <p data-aos="fade-right" className="text-xl uppercase text-teal-500 tracking-widest font-mono ml-6">Travel Agency</p>
                    <h2 data-aos="fade-right" className="lg:text-5xl text-3xl font-bold uppercase mt-3 ml-5 text-blue-900">{data?.tourists_spot_name}</h2>

                    <div data-aos="fade-right" className="flex ml-5 mt-6 gap-3">
                        <div className="rating text-xs">
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input
                                type="radio"
                                name="rating-2"
                                className="mask mask-star-2 bg-orange-400"
                                defaultChecked />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                            <input type="radio" name="rating-2" className="mask mask-star-2 bg-orange-400" />
                        </div>
                        <p className="text-gray-600 font-medium">(2 Reviews)</p>
                    </div>

                    <div>
                        <div className="flex gap-28 ml-5 mt-10">
                            <div data-aos="fade-right" data-aos-duration="800" className="flex items-center gap-2">
                                <FaLocationDot className="text-xl text-teal-500"></FaLocationDot>
                                <p className="text-gray-600 font-serif">{data?.location}</p>
                            </div>
                            <div data-aos="fade-right" data-aos-duration="1000" className="flex items-center gap-2">
                                <FaRegFlag className="text-teal-500 text-xl"></FaRegFlag>
                                <p className="text-gray-600 font-serif">{data?.country_name}</p>
                            </div>
                        </div>

                        <div className="flex gap-32 ml-5 mt-5">
                            <div data-aos="fade-right" data-aos-duration="800" className="flex items-center gap-2">
                                <MdAccessTime className="text-xl text-teal-500"></MdAccessTime>
                                <p className="text-gray-600 font-serif">Time: {data?.travel_time}</p>
                            </div>
                            <div data-aos="fade-right" data-aos-duration="1000" className="flex items-center gap-2">
                                <TiWeatherPartlySunny className="text-teal-500 text-xl"></TiWeatherPartlySunny>
                                <p className="text-gray-600 font-serif">Season: {data?.seasonality}</p>
                            </div>
                        </div>

                        <div className="flex gap-8 ml-5 mt-5">
                            <div data-aos="fade-right" data-aos-duration="800" className="flex items-center gap-2">
                                <FaDollarSign className="text-xl text-teal-500"></FaDollarSign>
                                <p className="text-gray-600">Average Cost: {data?.average_cost}</p>
                            </div>
                            <div data-aos="fade-right" data-aos-duration="1000" className="flex items-center gap-2">
                                <IoMdAirplane className="text-xl text-teal-500"></IoMdAirplane>
                                <p className="text-gray-600">Total Visitors: {data?.totalVisitorsPerYear}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-14 ml-5">
                        <h2 data-aos="fade-down" data-aos-duration="600"  className="text-5xl font-bold text-blue-900">Our Information</h2>
                        <p data-aos="fade-right" data-aos-duration="600" className="text-gray-600 font-serif italic mt-6">{data?.short_description}</p>
                    </div>


                    <div className="mt-20">
                        <div className="flex items-center ml-5 my-5 gap-40
                        ">
                            <p data-aos="fade-right" data-aos-duration="600" className="text-xl">Departure</p>
                            <h2 data-aos="fade-right" data-aos-duration="600" className="text-gray-600 text-xl">ABC International Airport</h2>
                        </div>
                        <hr />
                        <div className="flex items-center ml-5 gap-28 my-6">
                            <p data-aos="fade-right" data-aos-duration="600" className="text-xl">Departure Time</p>
                            <h2 data-aos="fade-right" data-aos-duration="600" className="text-gray-600 text-xl">7.00 AM</h2>
                        </div>
                        <hr />
                        <div className="flex items-center ml-5 gap-36 my-6">
                            <p data-aos="fade-right" data-aos-duration="600" className="text-xl">Return Time</p>
                            <h2 data-aos="fade-right" data-aos-duration="600" className="text-gray-600 text-xl">Approximately 10.00 PM</h2>
                        </div>
                        <hr />
                        <div className="grid grid-cols-2 ml-5 my-6">
                            <p data-aos="fade-right" data-aos-duration="500" className="text-xl">Price Includes</p>
                            <h2 data-aos="fade-right" data-aos-duration="500" className="text-gray-600 text-xl">
                                <p className="flex items-center"><VscCheck className="text-teal-500 mr-3"></VscCheck> Accomondation</p> <br /> 
                                <p className="flex items-center"><VscCheck className="text-teal-500 mr-3"></VscCheck> Porter & Personal Guide</p> <br /> 
                                <p className="flex items-center"><VscCheck className="text-teal-500 mr-3"></VscCheck> Insurance</p> <br /> 
                                <p className="flex items-center"><VscCheck className="text-teal-500 mr-3"></VscCheck> Breakfast</p> <br /> 
                                <p className="flex items-center"><VscCheck className="text-teal-500 mr-3"></VscCheck> Transportation / Car</p>
                            </h2>
                        </div>
                        <hr />
                        <div className="grid grid-cols-2 ml-5 my-6">
                            <p data-aos="fade-right" data-aos-duration="500" className="text-xl">Price Excludes</p>
                            <h2 data-aos="fade-right" data-aos-duration="500"  className="text-gray-600 text-xl">
                                <p className="flex items-center"><VscChromeClose className="text-red-700 mr-3"></VscChromeClose> Flights</p> <br />
                                <p className="flex items-center"><VscChromeClose className="text-red-700 mr-3"></VscChromeClose> Typical Souvenir</p> <br />
                                <p className="flex items-center"><VscChromeClose className="text-red-700 mr-3"></VscChromeClose> Sunscreen, and personal items</p>
                            </h2>
                        </div>
                        <hr />
                    </div>

                    <div className='mt-20 container mx-auto'>
                        <h1 data-aos="fade-right" data-aos-duration="600" className='text-4xl text-blue-900 mb-10 ml-5 font-bold'>Tour Gallery</h1>
                        <div className='grid my-5 mx-5 lg:grid-cols-3 grid-cols-2 gap-5'>
                            <img data-aos="zoom-in" className="h-80 w-full" src={data?.more_images[0]} alt="" />
                            <img data-aos="zoom-in" className="h-80 w-full" src={data?.more_images[1]} alt="" />
                            <img data-aos="zoom-in" className="h-80 w-full" src={data?.more_images[2]} alt="" />
                        </div>
                    </div>
                </div>

                <div className="flex">
                    <button onClick={BookNow} className="btn bg-teal-500 text-white font-semibold ml-[200px] lg:ml-[550px] mt-14 hover:text-teal-500 hover:bg-white uppercase">Book Now</button>
                    <Link to='/'><button className="btn bg-teal-500 text-white font-semibold mt-14 hover:text-teal-500 hover:bg-white uppercase">Back</button></Link>
                </div>
            </div>
        </div>
    );
};

export default CountrySideSpotDtls;