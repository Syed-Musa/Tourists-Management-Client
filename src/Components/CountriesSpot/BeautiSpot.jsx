import { IoLocationOutline } from "react-icons/io5";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoMdTime } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";



const BeautiSpot = () => {
    
    return (
        <div className="mt-28">
            <p className="text-xl font-mono uppercase text-teal-500 ml-6 tracking-widest">Most Popular</p>
            <h2 className="font-bold lg:text-6xl text-3xl uppercase text-blue-800 ml-5"><span className="text-teal-500">Travel</span> Countries</h2>
            <div className="">
                <div>
                    <p className="lg:text-4xl text-2xl font-bold uppercase text-blue-800 mt-14 ml-5">Italy, Europe</p>
                    <p className="text-gray-600 italic mt-5 ml-5">The country is renowned for its historical significance, being the birthplace of the Roman Empire <br /> and the Renaissance. Cities like Rome, Florence, Venice, and Milan are world-famous for their art, <br /> architecture, and cultural heritage. Italy boasts numerous UNESCO World Heritage Sites, from <br /> ancient ruins like the Colosseum and Pompeii to the masterpieces housed in the Vatican Museums.</p>
                    <div className="grid grid-cols-1 lg:grid-cols-3 mt-14 mb-10">
                        <div>
                            <div className="flex items-center text-gray-500 font-medium ml-4 gap-2 mb-5 ">
                                <IoLocationOutline className="text-teal-500 text-2xl"></IoLocationOutline>
                                <p className="text-xl">Rome</p>
                            </div>
                            <div className="flex items-center text-gray-500 font-medium ml-4 gap-2 mb-5">
                                <IoLocationOutline className="text-teal-500 text-xl"></IoLocationOutline>
                                <p className="text-xl">Vanice</p>
                            </div>
                            <div className="flex items-center text-gray-500 font-medium ml-4 gap-2 mb-5">
                                <IoLocationOutline className="text-teal-500 text-xl"></IoLocationOutline>
                                <p className="text-xl">San Marino</p>
                            </div>
                        </div>
                        <div>
                            <div className="flex items-center text-gray-500 font-medium ml-4 gap-2 mb-5">
                                <IoLocationOutline className="text-teal-500 text-xl"></IoLocationOutline>
                                <p className="text-xl">Milan</p>
                            </div>
                            <div className="flex items-center text-gray-500 font-medium ml-4 gap-2 mb-5">
                                <IoLocationOutline className="text-teal-500 text-xl"></IoLocationOutline>
                                <p className="text-xl">Perugia</p>
                            </div>
                            <div className="flex items-center text-gray-500 font-medium ml-4 gap-2 mb-5">
                                <IoLocationOutline className="text-teal-500 text-xl"></IoLocationOutline>
                                <p className="text-xl">Austa</p>
                            </div>
                        </div>
                    </div>
                </div>

                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    centeredSlides={true}
                    pagination={{
                      clickable: true,
                    }}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="bg-[url('https://i.ibb.co/4S7tx9J/The-illuminated-Colosseum-in-Rome-at-dawn.jpg')] bg-cover card h-[450px] lg:w-full w-[200px] opacity-90">
                            <h2 className="mt-[350px] lg:text-3xl text-xl ml-2 mb-2 font-bold text-white">Rome</h2>
                            <hr />
                            <div className="flex items-center">
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <IoMdTime className="lg:text-xl text-xs text-white font-bold"></IoMdTime>
                                    <p className="text-white">3 Days</p>
                                </div>
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <CiUser className="lg:text-xl text-xs text-white font-bold"></CiUser>
                                    <p className="text-white">10+</p>
                                </div>
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <FaLocationDot className="lg:text-xl text-xs text-white font-bold"></FaLocationDot>
                                    <p className="text-white">Italy</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide className="">
                        <div className="bg-[url('https://i.ibb.co/881Hhd8/The-Perfect-2-Day-Venice-Itinerary-How-to-Spend-2-Days-in-Venice.jpg')] bg-cover card h-[450px] lg:w-full w-[200px]">
                        <h2 className="mt-[350px] lg:text-3xl text-xl ml-2 mb-2 font-bold text-white">Venice</h2>
                            <hr />
                            <div className="flex items-center">
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <IoMdTime className="lg:text-xl text-xs text-white font-bold"></IoMdTime>
                                    <p className="text-white">5 Days</p>
                                </div>
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <CiUser className="lg:text-xl text-xs text-white font-bold"></CiUser>
                                    <p className="text-white">11+</p>
                                </div>
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <FaLocationDot className="lg:text-xl text-xs text-white font-bold"></FaLocationDot>
                                    <p className="text-white">Italy</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-[url('https://i.ibb.co/SsBGG7N/Pinterest.jpg')] bg-cover card h-[450px] lg:w-full w-[200px]">
                        <h2 className="mt-[350px] lg:text-3xl text-xl ml-2 mb-2 font-bold text-white">Milan</h2>
                            <hr />
                            <div className="flex items-center">
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <IoMdTime className="lg:text-xl text-xs text-white font-bold"></IoMdTime>
                                    <p className="text-white">4 Days</p>
                                </div>
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <CiUser className="lg:text-xl text-xs text-white font-bold"></CiUser>
                                    <p className="text-white">10+</p>
                                </div>
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <FaLocationDot className="lg:text-xl text-xs text-white font-bold"></FaLocationDot>
                                    <p className="text-white">Italy</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-[url('https://i.ibb.co/f8PWN74/San-Marino-by-Alex-Berger.jpg')] bg-cover card h-[450px] lg:w-full w-[200px]">
                        <h2 className="mt-[350px] lg:text-3xl text-xl ml-2 mb-2 font-bold text-white">San Marino</h2>
                            <hr />
                            <div className="flex items-center">
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <IoMdTime className="lg:text-xl text-xs text-white font-bold"></IoMdTime>
                                    <p className="text-white">7 Days</p>
                                </div>
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <CiUser className="lg:text-xl text-xs text-white font-bold"></CiUser>
                                    <p className="text-white">15+</p>
                                </div>
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <FaLocationDot className="lg:text-xl text-xs text-white font-bold"></FaLocationDot>
                                    <p className="text-white">Italy</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-[url('https://i.ibb.co/StYt72j/perugia1.jpg')] bg-cover card h-[450px] lg:w-full w-[200px]">
                        <h2 className="mt-[350px] lg:text-3xl text-xl ml-2 mb-2 font-bold text-white">Perugia</h2>
                            <hr />
                            <div className="flex items-center">
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <IoMdTime className="lg:text-xl text-xs text-white font-bold"></IoMdTime>
                                    <p className="text-white">6 Days</p>
                                </div>
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <CiUser className="lg:text-xl text-xs text-white font-bold"></CiUser>
                                    <p className="text-white">10+</p>
                                </div>
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <FaLocationDot className="lg:text-xl text-xs text-white font-bold"></FaLocationDot>
                                    <p className="text-white">Italy</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-[url('https://i.ibb.co/Zz7zNG3/The-Matterhorn-Aosta-Valley-Italy.jpg')] bg-cover card h-[450px] lg:w-full w-[200px]">
                        <h2 className="mt-[350px] lg:text-3xl text-xl ml-2 mb-2 font-bold text-white">Aosta</h2>
                            <hr />
                            <div className="flex items-center">
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <IoMdTime className="lg:text-xl text-xs text-white font-bold"></IoMdTime>
                                    <p className="text-white">8 Days</p>
                                </div>
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <CiUser className="lg:text-xl text-xs text-white font-bold"></CiUser>
                                    <p className="text-white">20+</p>
                                </div>
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <FaLocationDot className="lg:text-xl text-xs text-white font-bold"></FaLocationDot>
                                    <p className="text-white">Italy</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default BeautiSpot;