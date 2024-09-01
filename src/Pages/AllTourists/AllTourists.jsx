import { useEffect, useState } from "react";
import AllTouristsPerCards from "./AllTouristsPerCards";
import { Link } from "react-router-dom";

const AllTourists = () => {
    const [alltourists, setAllTourists] = useState([]);
    useEffect(()=> {
        fetch('https://tourism-management-server-phi.vercel.app/alltourists')
        .then(res => res.json())
        .then(data => setAllTourists(data))
    }, []);

    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/jwh9PgT/breathtaking-shot-colosseum-amphitheatre-located-rome-italy.jpg')] bg-cover bg-fixed bg-black w-full h-[600px]">
                <div className="hero-overlay opacity-90">
                    <p className="text-xl text-center font-mono uppercase tracking-widest text-white ml-6 pt-52">Choose your Tour</p>
                    <h2 className="lg:text-6xl text-3xl text-center font-bold mt-3 text-blue-900 uppercase ml-5"><span className="text-white">Most Popular</span> Tours</h2>
                </div>
            </div>

            <div className="mt-28">
                <p data-aos="fade-right" data-aos-duration="1000" className="text-xl font-mono uppercase tracking-widest text-teal-500 ml-6 mt-10">Choose your Place</p>
                <h2 data-aos="fade-right" data-aos-duration="1500"  className="lg:text-5xl text-3xl font-bold uppercase mt-3 text-blue-900 ml-5">Popular <span className="text-teal-500">Tours</span></h2>
            </div>

            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
                {
                    alltourists?.map(alltourists => <AllTouristsPerCards key={alltourists.id} alltourists={alltourists}></AllTouristsPerCards>)
                }
            </div>
            
        </div>
    );
};

export default AllTourists;