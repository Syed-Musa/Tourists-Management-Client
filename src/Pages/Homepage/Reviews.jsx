import { FiPhoneCall } from "react-icons/fi";

const Reviews = () => {
    return (
        <div className="mt-14">
            <div className="bg-[url('https://i.ibb.co/jVCxxTk/Mad-for-the-Maldives-Check-out-these-resorts-for-all-budgets.jpg')] h-[600px] w-full bg-cover bg-black bg-fixed">
                <div className="grid grid-cols-1 lg:grid-cols-2 hero-overlay opacity-90">
                    <div data-aos="fade-right" data-aos-offset="600" data-aos-easing="ease-in-sine" className="mt-52 ml-20">
                        <h2 className="lg:text-4xl text-2xl font-bold text-white">We Provide Top Destinations <br /> Expecially For You Book Now and <br /> Enjoy!</h2>

                        <div className="flex items-center mt-10">
                            <FiPhoneCall className="lg:text-5xl text-3xl font-bold text-white mr-5"></FiPhoneCall>
                            <div>
                                <p className="lg:text-2xl text-xl font-mono text-white">Call Now</p>
                                <h2 className="text-3xl font-bold text-white">855 345 9875</h2>
                                <p className="text-white mt-5">Call us, It's Tall Free</p>
                            </div>
                        </div>
                    </div>

                    <div data-aos="fade-left" data-aos-offset="600" data-aos-easing="ease-in-sine" className="card bg-base-100 w-96 shadow-xl mt-16 lg:ml-28 ml-5">
                        <div className="card-body">
                            <p className="font-mono uppercase text-teal-500 tracking-widest">Testimonials</p>
                            <h2 className="lg:text-4xl text-2xl font-bold text-blue-900">Travelers <br /> Reviews</h2>
                            <p className="text-gray-500 italic mt-3">Europe is like a treasure trove of beauty and history. Each country offers something unique, and every place is a new adventure. In Italy, I was blown away by the art and history in Rome, the romantic canals of Venice, and the rolling hills of Tuscany. France was another highlight with Paris’ elegance, the stunning castles in the Loire Valley, and the charm of Provence. Switzerland’s landscapes were breathtaking, especially the Swiss Alps. Every corner of Europe has something magical to offer, from medieval towns to modern cities.</p>
                            <div className="flex items-center gap-10 mt-5">
                                <img src="/public/Images/Discover The Sophisticated Undercut Men From All Over The World Sport Proudly.jpeg" alt="Man" className="w-20 rounded-full h-20" />

                                <div>
                                    <div className="rating">
                                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                        <input
                                            type="radio"
                                            name="rating-3"
                                            className="mask mask-star-2 bg-orange-400"
                                            defaultChecked />
                                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                        <input type="radio" name="rating-3" className="mask mask-star-2 bg-orange-400" />
                                    </div>
                                    <h2 className="text-sky-700">Mattew White</h2>
                                    <p className="text-gray-500 font-mono">Guest review</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;