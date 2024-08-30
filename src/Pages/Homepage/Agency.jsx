import { FaPhone } from "react-icons/fa";
import { RiCheckboxCircleLine } from "react-icons/ri";

const Agency = () => {
    return (
        <div className="bg-gray-100 p-5">
            <div className="mt-28 ml-10 grid grid-cols-1 lg:grid-cols-2">
                <div className="">
                    <p className="text-xl mb-5 font-mono uppercase tracking-widest text-teal-600">The best travel agency</p>
                    <h2 className="lg:text-6xl text-4xl font-bold text-blue-900     uppercase">Discover the <br /> <span     className="text-teal-600">world</span> with our <br /> guide</h2>
                    <p className="text-gray-600 mt-6 text-xl">We believe that travel is more than just a journey—it's an experience that creates lasting memories. With years of expertise in the travel industry, we specialize in crafting personalized trips that cater to your unique interests and preferences. Whether you're seeking a relaxing beach getaway, an adventurous mountain trek, or a cultural city exploration, our dedicated team is here to make your dream vacation a reality. <br /> We offer a wide range of services, including flight bookings, hotel accommodations, guided tours, and travel insurance, ensuring that every detail of your trip is taken care of. Our partnerships with top travel providers around the world allow us to offer competitive prices without compromising on quality.</p>
                </div>
                <div className="relative">
                    <img className="w-[50%] absolute lg:ml-60 ml-36 shadow-2xl" src="/Images/Images.jpg" alt="" />
                    <img className="w-[50%] lg:ml-64 ml-40 mt-8" src="/Images/Images.jpg" alt="" />
                </div>
            </div>
            <div className="mt-10 ml-10 text-xl">
                <div className="flex items-center">
                    <RiCheckboxCircleLine className="text-3xl bg-teal-500 rounded-full text-white"></RiCheckboxCircleLine>
                    <p className="ml-2 font-extralight">10 Years of Experience</p>
                </div>
                <div className="mt-3 flex items-center">
                    <RiCheckboxCircleLine className="text-3xl bg-teal-500 rounded-full text-white"></RiCheckboxCircleLine>
                    <p className="ml-2 font-extralight">100+ Tour Destinations</p>
                </div>
                <div className="mt-7 flex items-center">
                    <FaPhone className="text-5xl text-teal-500"></FaPhone>
                    <div className="ml-5">
                        <p className="font-extralight">For information</p>
                        <p className="font-medium text-teal-500 text-xl mt-3">3567 999 5252</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Agency;