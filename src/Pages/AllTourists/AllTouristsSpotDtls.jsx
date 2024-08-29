import { FaDollarSign, FaLocationDot, FaRegFlag } from "react-icons/fa6";
import { IoMdAirplane } from "react-icons/io";
import { MdAccessTime } from "react-icons/md";
import { TiWeatherPartlySunny } from "react-icons/ti";
import { Link, useLoaderData } from "react-router-dom";
import { VscCheck } from "react-icons/vsc";
import { VscChromeClose } from "react-icons/vsc";
import Swal from "sweetalert2";
import useAuth from "../../Hooks/useAuth";

const AllTouristsSpotDtls = () => {
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
    
        fetch('http://localhost:5000/mylist', {
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
    

    // const BookNow = ()=>{
    //     const value = { name: user.name, email:user.email, tourists_spot_name, image, location, country_name };

    //     fetch('http://localhost:5000/mylist',{
    //       method:'POST',
    //       headers:{
    //         'content-type':'application/json'
    //       },
    //       body:JSON.stringify(value)
    //     })
    //     .then( res => res.json())
    //     .then( data => {
    //       console.log('Success')
    //       Swal.fire(
    //         'Added!',
    //         'The selected Tour Spots have been added!',
    //         'success'
    //     )
    // });

    return (
        <div>
            <img className="w-full h-[800px]" src={data?.image} alt="" />
            <div className=" items-center top-1">
                <div className="mt-20">
                    <p className="text-xl uppercase text-teal-500 tracking-widest font-mono ml-6">Travel Agency</p>
                    <h2 className="text-5xl font-bold uppercase mt-3 ml-5 text-blue-900">{data?.tourists_spot_name}</h2>

                    <div className="flex ml-5 mt-6 gap-3">
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
                            <div className="flex items-center gap-2">
                                <FaLocationDot className="text-xl text-teal-500"></FaLocationDot>
                                <p className="text-gray-600 font-serif">{data?.location}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <FaRegFlag className="text-teal-500 text-xl"></FaRegFlag>
                                <p className="text-gray-600 font-serif">{data?.country_name}</p>
                            </div>
                        </div>

                        <div className="flex gap-24 ml-5 mt-5">
                            <div className="flex items-center gap-2">
                                <MdAccessTime className="text-xl text-teal-500"></MdAccessTime>
                                <p className="text-gray-600 font-serif">Time: {data?.travel_time}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <TiWeatherPartlySunny className="text-teal-500 text-xl"></TiWeatherPartlySunny>
                                <p className="text-gray-600 font-serif">Season: {data?.seasonality}</p>
                            </div>
                        </div>

                        <div className="flex gap-14 font-medium ml-5 mt-5">
                            <div className="flex items-center gap-2">
                                <FaDollarSign className="text-xl text-teal-500"></FaDollarSign>
                                <p className="text-gray-600">Average Cost: {data?.average_cost}</p>
                            </div>
                            <div className="flex items-center gap-2">
                                <IoMdAirplane className="text-xl text-teal-500"></IoMdAirplane>
                                <p className="text-gray-600">Total Visitors: {data?.totalVisitorsPerYear}</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-14 ml-5">
                        <h2 className="text-5xl font-bold text-blue-900">Our Information</h2>
                        <p className="text-gray-600 font-serif italic mt-6">{data?.short_description}</p>
                    </div>


                    <div className="mt-20">
                        <div className="flex items-center ml-5 my-5 gap-40
                        ">
                            <p className="text-xl">Departure</p>
                            <h2 className="text-gray-600 text-xl">ABC International Airport</h2>
                        </div>
                        <hr />
                        <div className="flex items-center ml-5 gap-28 my-6">
                            <p className="text-xl">Departure Time</p>
                            <h2 className="text-gray-600 text-xl">7.00 AM</h2>
                        </div>
                        <hr />
                        <div className="flex items-center ml-5 gap-36 my-6">
                            <p className="text-xl">Return Time</p>
                            <h2 className="text-gray-600 text-xl">Approximately 10.00 PM</h2>
                        </div>
                        <hr />
                        <div className="grid grid-cols-2 ml-5 my-6">
                            <p className="text-xl">Price Includes</p>
                            <h2 className="text-gray-600 text-xl"><p className="flex items-center"><VscCheck className="text-teal-500 mr-3"></VscCheck> Accomondation</p> <br /> <p className="flex items-center"><VscCheck className="text-teal-500 mr-3"></VscCheck> Porter & Personal Guide</p> <br /> <p className="flex items-center"><VscCheck className="text-teal-500 mr-3"></VscCheck> Insurance</p> <br /> <p className="flex items-center"><VscCheck className="text-teal-500 mr-3"></VscCheck> Breakfast</p> <br /> <p className="flex items-center"><VscCheck className="text-teal-500 mr-3"></VscCheck> Transportation / Car</p></h2>
                        </div>
                        <hr />
                        <div className="grid grid-cols-2 ml-5 my-6">
                            <p className="text-xl">Price Excludes</p>
                            <h2 className="text-gray-600 text-xl">
                                <p className="flex items-center"><VscChromeClose className="text-red-700 mr-3"></VscChromeClose> Flights</p> <br />
                                <p className="flex items-center"><VscChromeClose className="text-red-700 mr-3"></VscChromeClose> Typical Souvenir</p> <br />
                                <p className="flex items-center"><VscChromeClose className="text-red-700 mr-3"></VscChromeClose> Sunscreen, and personal items</p>
                            </h2>
                        </div>
                        <hr />
                    </div>

                    <div className='mt-20 container mx-auto'>
                        <h1 className='text-4xl text-blue-900 mb-10 ml-5 font-bold'>Tour Gallery</h1>
                        <div className='grid my-5 mx-5 lg:grid-cols-3 grid-cols-2 gap-5'>
                            <img data-aos="zoom-in" className="h-80 w-full" src={data?.more_images[0]} alt="" />
                            <img data-aos="zoom-in" className="h-80 w-full" src={data?.more_images[1]} alt="" />
                            <img data-aos="zoom-in" className="h-80 w-full" src={data?.more_images[2]} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <button onClick={BookNow} className="btn bg-teal-500 ml-[500px] text-white font-semibold hover:text-teal-500 hover:bg-white uppercase">Book Now</button>
            <Link to='/alltourists'><button className="btn bg-teal-500 mt-14 font-bold uppercase text-white hover:text-teal-500 hover:bg-white">Back</button></Link>
        </div>
    );
};

export default AllTouristsSpotDtls;