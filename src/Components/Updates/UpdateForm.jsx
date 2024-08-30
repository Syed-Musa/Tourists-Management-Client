import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateTourSpots = () => {
    const data = useLoaderData();
    const {_id, name, email, tourists_spot_name, country_name, seasonality, location, average_cost, travel_time, totalVisitorsPerYear, image, short_description} = data || {};
    console.log(data);

    const handleUpdateTourSpots = e =>{
        e.preventDefault();
        const form = e.target;
        const name = form?.name.value;
        const email = form?.email.value;
        const tourists_spot_name = form?.tourists_spot_name.value;
        const country_name = form?.country_name.value;
        const seasonality = form?.seasonality.value;
        const location = form?.location.value;
        const average_cost = form?.average_cost.value;
        const travel_time = form?.travel_time.value;
        const totalVisitorsPerYear = form?.totalVisitorsPerYear.value;
        const image = form?.image.value;
        const short_description = form?.short_description.value;

        const updateTourSpot = {name, email, tourists_spot_name, country_name, seasonality, location, average_cost, travel_time, totalVisitorsPerYear, image, short_description}
        console.log(updateTourSpot);

        fetch(`https://tourism-management-server-phi.vercel.app/alltourists/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateTourSpot)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);

            if(data.insertedId){
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Update Tour Spot has been success',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/jwh9PgT/breathtaking-shot-colosseum-amphitheatre-located-rome-italy.jpg')] bg-cover bg-fixed bg-black w-full h-[600px]">
                <div className="hero-overlay opacity-90">
                    <p className="text-xl text-center font-mono uppercase tracking-widest text-white ml-6 pt-52">Update Tour Spots</p>
                    <h2 className="text-6xl text-center font-bold mt-3 text-blue-900 uppercase ml-5"><span className="text-white">Created</span> Tours</h2>
                </div>
            </div>

            <div className="p-10">
                <form onSubmit={handleUpdateTourSpots}>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 justify-around">
                        {/* User Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold font-serif">User Name</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="name"
                                    defaultValue={name}
                                    placeholder="name"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                        {/* User Email */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold font-serif">User Email</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="email"
                                    name="email"
                                    defaultValue={email}
                                    placeholder="email"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>

                        {/* Spots Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold font-serif">Spots Name</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="tourists_spot_name"
                                    defaultValue={tourists_spot_name}
                                    placeholder="Spots name"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>

                        {/* Country Name */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold font-serif">Country Name</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="country_name"
                                    defaultValue={country_name}
                                    placeholder="Country name"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>

                        {/* Seasonality */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold font-serif">Seasonality</span>
                            </label>
                            <select type="text" name="seasonality" defaultValue={seasonality} className="select select-bordered w-full max-w-xs font-bold font-serif">
                                <option disabled selected>Select to Season</option>
                                <option className="font-serif font-bold">Summer</option>
                                <option className="font-serif font-bold">Winter</option>
                            </select>
                        </div>

                        {/* Location */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold font-serif">Location</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="location"
                                    defaultValue={location}
                                    placeholder="location"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>

                        {/* Average Cost */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold font-serif">Average Cost</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="average_cost"
                                    defaultValue={average_cost}
                                    placeholder="average cost"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>

                        {/* Rating */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold font-serif">Travel Time</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="travel_time"
                                    defaultValue={travel_time}
                                    placeholder="travel time"
                                    className="input input-bordered w-full"
                                    
                                />
                            </label>
                        </div>

                        {/* Number of Page */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold font-serif">Total Visitors</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="number"
                                    name="totalVisitorsPerYear"
                                    defaultValue={totalVisitorsPerYear}
                                    placeholder="totalVisitorsPerYear"
                                    className="input input-bordered w-full"
                                    min="10000"
                                    max="100000"
                                    step="0.1"
                                />
                            </label>
                        </div>

                        {/* Photo URL */}
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text font-bold font-serif">Images</span>
                            </label>
                            <label className="input-group">
                                <input
                                    type="text"
                                    name="image"
                                    defaultValue={image}
                                    placeholder="image"
                                    className="input input-bordered w-full"
                                />
                            </label>
                        </div>
                    </div>

                    {/* Details */}
                    <h2 className="font-bold mt-4">Short Description</h2>
                    <textarea name="short_description" defaultValue={short_description} className="textarea textarea-bordered w-full" placeholder="short description"></textarea>

                    {/* Add Books */}
                    <input type="submit" name="Update Spots" value="Update Spots" className="w-full my-4 btn bg-green-400 text-white" />
                </form>
            </div>
        </div>
    );
};

export default UpdateTourSpots;