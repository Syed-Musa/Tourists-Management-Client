import { IoLocationOutline } from "react-icons/io5";
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { IoMdTime } from "react-icons/io";
import { CiUser } from "react-icons/ci";
import { FaLocationDot } from "react-icons/fa6";

const BeautiSpotExt = () => {
    return (
        <div>
            <div className="mr-6">
                <h2 className="lg:text-4xl text-2xl font-bold uppercase text-blue-800 mt-14 ml-5">France, Europe</h2>
                <p className="text-gray-600 italic mt-5 ml-5">French cuisine is celebrated worldwide, with an emphasis on fine dining, wine, cheese, and pastries. <br /> The country's culinary traditions are as diverse as its regions, each offering its own specialties. Whether <br /> exploring the medieval towns, skiing in the Alps, or relaxing on the Mediterranean beaches, France <br /> offers a wide array of experiences that reflect its status as a cultural and historical powerhouse in Europe.</p>

                <div className="grid grid-cols-1 lg:grid-cols-3 mt-14 mb-10">
                    <div>
                        <div className="flex items-center text-gray-500 font-medium ml-4 gap-2 mb-5 ">
                            <IoLocationOutline className="text-teal-500 text-2xl"></IoLocationOutline>
                            <p className="text-xl">Paris</p>
                        </div>
                        <div className="flex items-center text-gray-500 font-medium ml-4 gap-2 mb-5">
                            <IoLocationOutline className="text-teal-500 text-xl"></IoLocationOutline>
                            <p className="text-xl">Lyon</p>
                        </div>
                        <div className="flex items-center text-gray-500 font-medium ml-4 gap-2 mb-5">
                            <IoLocationOutline className="text-teal-500 text-xl"></IoLocationOutline>
                            <p className="text-xl">Marseillie</p>
                        </div>
                    </div>

                    <div>
                        <div className="flex items-center text-gray-500 font-medium ml-4 gap-2 mb-5">
                            <IoLocationOutline className="text-teal-500 text-xl"></IoLocationOutline>
                            <p className="text-xl">Bordeaux</p>
                        </div>
                        <div className="flex items-center text-gray-500 font-medium ml-4 gap-2 mb-5">
                            <IoLocationOutline className="text-teal-500 text-xl"></IoLocationOutline>
                            <p className="text-xl">Normandiya</p>
                        </div>
                        <div className="flex items-center text-gray-500 font-medium ml-4 gap-2 mb-5">
                            <IoLocationOutline className="text-teal-500 text-xl"></IoLocationOutline>
                            <p className="text-xl">Cannes</p>
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
                        <div className="bg-[url('https://i.ibb.co/TMH7DLf/Sightseeing-in-Paris-Tour-of-the-Eiffel-Tower-and-More.jpg')] bg-cover card h-[450px] lg:w-full w-[200px] opacity-90">
                            <h2 className="mt-[350px] lg:text-3xl text-xl ml-2 mb-2 font-bold text-white">Paris</h2>
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
                                    <p className="text-white">France</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-[url('https://i.ibb.co/ckfRNVw/How-to-Spend-the-Perfect-1-Day-in-Bordeaux-France.jpg')] bg-cover card h-[450px] lg:w-full w-[200px]">
                        <h2 className="mt-[350px] lg:text-3xl text-xl ml-2 mb-2 font-bold text-white">Bordeaux</h2>
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
                                    <p className="text-white">France</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-[url('https://i.ibb.co/vB7m8g2/D-couvrir-Lyon-et-ses-secrets.jpg')] bg-cover card h-[450px] lg:w-full w-[200px]">
                        <h2 className="mt-[350px] lg:text-3xl text-xl ml-2 mb-2 font-bold text-white">Lyon</h2>
                            <hr />
                            <div className="flex items-center">
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <IoMdTime className="lg:text-xl text-xs text-white font-bold"></IoMdTime>
                                    <p className="text-white">5 Days</p>
                                </div>
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <CiUser className="lg:text-xl text-xs text-white font-bold"></CiUser>
                                    <p className="text-white">10+</p>
                                </div>
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <FaLocationDot className="lg:text-xl text-xs text-white font-bold"></FaLocationDot>
                                    <p className="text-white">France</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-[url('https://i.ibb.co/9TGsv0x/a-r-i-e-l.jpg')] bg-cover card h-[450px] lg:w-full w-[200px]">
                        <h2 className="mt-[350px] lg:text-3xl text-xl ml-2 mb-2 font-bold text-white">Normandiya</h2>
                            <hr />
                            <div className="flex items-center">
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <IoMdTime className="lg:text-xl text-xs text-white font-bold"></IoMdTime>
                                    <p className="text-white">4 Days</p>
                                </div>
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <CiUser className="lg:text-xl text-xs text-white font-bold"></CiUser>
                                    <p className="text-white">11+</p>
                                </div>
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <FaLocationDot className="lg:text-xl text-xs text-white font-bold"></FaLocationDot>
                                    <p className="text-white">France</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-[url('https://i.ibb.co/yy1kq8P/Dressing-for-Dream-Destinations-France.jpg')] bg-cover card h-[450px] lg:w-full w-[200px]">
                        <h2 className="mt-[350px] lg:text-3xl text-xl ml-2 mb-2 font-bold text-white">Marsellie</h2>
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
                                    <p className="text-white">France</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="bg-[url('https://i.ibb.co/dPGxbZn/Sunny-Shorelines-of-Cannes.jpg')] bg-cover card h-[450px] lg:w-full w-[200px]">
                        <h2 className="mt-[350px] lg:text-3xl text-xl ml-2 mb-2 font-bold text-white">Cannes</h2>
                            <hr />
                            <div className="flex items-center">
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <IoMdTime className="lg:text-xl text-xs text-white font-bold"></IoMdTime>
                                    <p className="text-white">5 Days</p>
                                </div>
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <CiUser className="lg:text-xl text-xs text-white font-bold"></CiUser>
                                    <p className="text-white">10+</p>
                                </div>
                                <div className="flex gap-2 ml-2 items-center mt-2">
                                    <FaLocationDot className="lg:text-xl text-xs text-white font-bold"></FaLocationDot>
                                    <p className="text-white">France</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default BeautiSpotExt;