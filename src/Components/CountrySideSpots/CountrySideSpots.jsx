import { useEffect, useState } from "react";
import CountrySideSpotCards from "./CountrySideSpotCards";
import { Link } from "react-router-dom";

const CountrySideSpots = () => {
    const [countrySideSpot, setCountrySideSpot] = useState([]);
    useEffect(()=> {
        fetch('https://tourism-management-server-phi.vercel.app/countrySideSpot')
        .then(res => res.json())
        .then(data => setCountrySideSpot(data))
    }, []);

    return (
        <div className="lg:mt-28 mt-[550px]">
            <p data-aos="fade-right" data-aos-duration="1000" className="font-mono text-xl text-teal-500 uppercase tracking-widest ml-5">Top destination countries</p>
            <h2 data-aos="fade-right" data-aos-duration="1500" className="font-bold text-blue-900 uppercase ml-5 lg:text-5xl text-3xl mt-3">Popular <span className="text-teal-500">Destination</span></h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
                {
                    countrySideSpot?.map(countrySideSpot => <CountrySideSpotCards key={countrySideSpot} countrySideSpot={countrySideSpot}></CountrySideSpotCards>)
                }
            </div>
            <Link to='/alltourists'><button className="btn bg-teal-500 text-white uppercase font-serif lg:ml-[600px] ml-40 mt-14 hover:text-teal-500 hover:bg-white">See More</button></Link>
        </div>
    );
};

export default CountrySideSpots;