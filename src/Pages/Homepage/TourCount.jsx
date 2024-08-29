import { ImAirplane } from "react-icons/im";
import { FaHouse } from "react-icons/fa6";
import { GiCruiser } from "react-icons/gi";
import { TiTicket } from "react-icons/ti";

const TourCount = () => {
    return (
        <div className="mt-14">
            <div className="bg-[url('https://i.ibb.co/jVCxxTk/Mad-for-the-Maldives-Check-out-these-resorts-for-all-budgets.jpg')] h-[600px] w-full bg-cover bg-black bg-fixed">
            <div className="grid grid-cols-2 md:grid-cols-2 hero-overlay opacity-90 lg:grid-cols-4 gap-10 pl-10 justify-center">
                <div className="mt-52 text-center">
                    <ImAirplane className="text-white lg:text-5xl text-3xl ml-24 mb-10"></ImAirplane>
                    <h2 className="font-bold lg:text-4xl text-2xl text-white count">550</h2>
                    <p className="font-semibold lg:text-2xl text-xl text-white mt-4">Flight Booking</p>
                </div>
                <div className="mt-52 text-center">
                    <FaHouse className="text-white lg:text-5xl text-3xl ml-24 mb-10"></FaHouse>
                    <h2 className="font-bold lg:text-4xl text-2xl text-white">270</h2>
                    <p className="font-semibold lg:text-2xl text-xl text-white mt-4">Amazing Tour</p>
                </div>
                <div className="mt-52 text-center">
                    <GiCruiser className="text-white lg:text-7xl text-4xl ml-24 mb-10"></GiCruiser>
                    <h2 className="font-bold lg:text-4xl text-2xl text-white">80</h2>
                    <p className="font-semibold lg:text-2xl text-xl text-white mt-4">Cruiser Booking</p>
                </div>
                <div className="mt-56 text-center">
                    <TiTicket className="text-white lg:text-6xl text-xl ml-24 mb-10"></TiTicket>
                    <h2 className="font-bold lg:text-4xl text-2xl text-white">110</h2>
                    <p className="font-semibold lg:text-2xl text-xl text-white mt-4">Ticket Booking</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default TourCount;