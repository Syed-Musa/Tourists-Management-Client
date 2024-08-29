import BeautiSpot from "../../Components/CountriesSpot/BeautiSpot";
import BeautiSpotExt from "../../Components/CountriesSpot/BeautiSpotExt";
import CountrySideSpots from "../../Components/CountrySideSpots/CountrySideSpots";
import TouristsSpot from "../../Components/TouristsSpot/TouristsSpot";
import Agency from "./Agency";
import Banners from "./Banners";
import Reviews from "./Reviews";
import TourCount from "./TourCount";

const Home = () => {
    return (
        <div>
            <Banners></Banners>
            <Agency></Agency>
            <TouristsSpot></TouristsSpot>
            <TourCount></TourCount>
            <BeautiSpot></BeautiSpot>
            <BeautiSpotExt></BeautiSpotExt>
            <Reviews></Reviews>
            <CountrySideSpots></CountrySideSpots>
        </div>
    );
};

export default Home;