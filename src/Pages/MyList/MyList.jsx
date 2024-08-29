import { Link, useLoaderData } from "react-router-dom";
import { useState } from "react";

const MyList = () => {
    const listedSpots = useLoaderData();
    const [mylist, setMyList] = useState(listedSpots);

    const handleDelete = id => {
        fetch(`http://localhost:5000/mylist/${id}`, {
            method: 'DELETE'
        })
        .then(res => res.json())
        .then(data => {
            if(data?.deletedCount > 0){
                console.log('deleted successfully');
                const remaininListed = mylist?.filter(listedSpots => listedSpots._id !== id);
                setMyList(remaininListed);
            }
        })
    }

    return (
        <div>
            <div className="bg-[url('https://i.ibb.co/jwh9PgT/breathtaking-shot-colosseum-amphitheatre-located-rome-italy.jpg')] bg-cover bg-fixed bg-black w-full h-[600px]">
                <div className="hero-overlay opacity-90">
                    <p className="text-xl text-center font-mono uppercase tracking-widest text-white ml-6 pt-52">Wherever i go</p>
                    <h2 className="text-6xl text-center font-bold mt-3 text-blue-900 uppercase ml-5"><span className="text-white">Our Favourite</span> Tours</h2>
                </div>
            </div>
            <div>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr className="">
                                <th className="text-[15px] font-medium font-serif">Del</th>
                                <th className="text-[15px] font-medium font-serif">Image</th>
                                <th className="text-[15px] font-medium font-serif">Spot Name</th>
                                <th className="text-[15px] font-medium font-serif">Location</th>
                                <th className="text-[15px] font-medium font-serif">Country</th>
                                
                            </tr>
                        </thead>
                        <tbody className="">
                            {
                                mylist?.map(listedSpots => <tr key={listedSpots._id}>
                                    <td><button onClick={()=> handleDelete(listedSpots?._id)} className="btn bg-red-700 text-white font-bold">X</button></td>
                                    <td><img className="h-16 w-20" src={listedSpots?.image} alt="" /></td>
                                    <td className="font-serif italic">{listedSpots?.tourists_spot_name}</td>
                                    <td className="font-serif italic">{listedSpots?.location}</td>
                                    <th className="font-serif italic">{listedSpots?.country_name}</th>
                                    
                                </tr>)
                            }
                        </tbody>
                        
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyList;