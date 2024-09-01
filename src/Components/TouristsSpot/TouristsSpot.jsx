import { useEffect, useState } from "react";
import TouristsSpotPerCards from "./TouristsSpotPerCards";

const TouristsSpot = () => {
    const [touristsSpot, setTouristsSpot] = useState([]);
    useEffect(()=> {
        fetch('https://tourism-management-server-phi.vercel.app/touristsSpot')
        .then(res => res.json())
        .then(data => setTouristsSpot(data))
    }, [])

    return (
        <div className="mt-28">
            <h2 data-aos="fade-right" data-aos-duration="1000" className="text-xl font-mono uppercase tracking-widest text-teal-500 ml-6">Choose your place</h2>
            <h1 data-aos="fade-right" data-aos-duration="1500" className="text-6xl font-bold mt-3 text-blue-900 uppercase ml-5">Popular <span className="text-teal-500">Tour</span></h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-14">
                {
                    touristsSpot?.map(touristsSpot => <TouristsSpotPerCards key={touristsSpot.id} touristsSpot={touristsSpot}></TouristsSpotPerCards>)
                }
            </div>
        </div>
    );
};

export default TouristsSpot;