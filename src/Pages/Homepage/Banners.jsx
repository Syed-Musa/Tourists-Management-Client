
const Banners = () => {
    return (
        <div>
            <div className="carousel w-full">
                <div id="item1" className="carousel-item bg-cover bg-[url('https://i.ibb.co/J3fXq9F/breathtaking-shot-colosseum-amphitheatre-located-rome-italy.jpg')] overflow-hidden relative h-[700px] w-full">
                    <div className="relative hero-overlay opacity-95"></div>
                        <div className="absolute left-5 right-5 top-1/4 flex     -translate-y-1/2 transform">

                        <div className="mt-28 mx-auto">
                            <p className="font-mono text-center uppercase mt-40 relative text-white tracking-widest mb-10">Let's Travel The World With Us</p>
                            <h2 className="lg:text-7xl text-3xl uppercase text-cyan-500 text-center font-bold">Explore the <br /> world with<br /> <span className="text-white">Vacation</span></h2>
                        </div>
                    </div>
                </div>
                
                <div id="item2" className="carousel-item relative bg-cover bg-[url('https://i.ibb.co/rvrpqPn/5-Machu-Picchu-Per.jpg')] overflow-hidden relative h-[700px] w-full">
                    <div className="relative hero-overlay opacity-95"></div>
                    <div className="absolute left-5 right-5 top-1/4 flex -translate-y-1/2 transform justify-between">

                        <div className="mt-28 mx-auto">
                            <p className="font-mono text-center uppercase mt-40 relative text-white tracking-widest mb-10">Let's Travel The World With Us</p>
                            <h2 className="lg:text-7xl text-3xl text-center font-bold uppercase text-cyan-500"><span className="text-white">Discover</span> the <br /> world with our <br /> guide</h2>
                        </div>
                    </div>
                </div>
                <div id="item3" className="carousel-item bg-cover bg-[url('https://i.ibb.co/vwKrj8Q/rest-sunshine-atoll-bungalow-holiday.jpg')] relative h-[700px] w-full">
                    <div className="relative hero-overlay opacity-95"></div>
                    <div className="absolute left-5 right-5 top-1/4 flex -translate-y-1/2 transform justify-between">

                        <div className="mt-28 mx-auto">
                            <p className="font-mono text-center uppercase mt-40 relative text-white tracking-widest mb-10">Let's Travel The world with us</p>
                            <h2 className="lg:text-7xl text-3xl font-bold text-center uppercase text-cyan-500">Explore Maldive <br /> <span className="text-white">with Vacation</span></h2>
                        </div>
                    </div>
                </div>
                
            </div>
            <div className="flex w-full justify-center gap-2 py-2">
                <a href="#item1" className="btn btn-xs">1</a>
                <a href="#item2" className="btn btn-xs">2</a>
                <a href="#item3" className="btn btn-xs">3</a>
            </div>
        </div>
    );
};

export default Banners;