"use client";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const SliderBanner = () => {
    return (
        <div className="hidden md:block">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper mx-auto px-4 lg:px-24"
            >
                <SwiperSlide>
                    <img
                        className="w-full"
                        src="https://shopping-web-app.vercel.app/_next/image?url=%2Fbanner-2.jpg&w=2048&q=75"
                    />
                    <div className="absolute bottom-10 left-4 lg:bottom-40 lg:left-10 space-y-4 lg:space-y-6">
                        <h2 className="text-2xl lg:text-4xl font-semibold text-accent">
                            Tranding Item
                        </h2>
                        <p className="uppercase text-2xl lg:text-4xl font-bold">
                            Womens latest <br /> fashion sale
                        </p>
                        <p className="text-gray-500 text-xl lg:text-3xl font-semibold">
                            Starting From $50
                        </p>
                        <button className="border border-black rounded-lg p-2 lg:p-4 uppercase font-semibold text-accent">
                            SHOP Now
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full"
                        src="https://shopping-web-app.vercel.app/_next/image?url=%2Fbanner-2.jpg&w=2048&q=75"
                    />
                    <div className="absolute bottom-10 left-4 lg:bottom-40 lg:left-10 space-y-4 lg:space-y-6">
                        <h2 className="text-2xl lg:text-4xl font-semibold text-accent">
                            Tranding Item
                        </h2>
                        <p className="uppercase text-2xl lg:text-4xl font-bold">
                            Womens latest <br /> fashion sale
                        </p>
                        <p className="text-gray-500 text-xl lg:text-3xl font-semibold">
                            Starting From $50
                        </p>
                        <button className="border border-black rounded-lg p-2 lg:p-4 uppercase font-semibold text-accent">
                            SHOP Now
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full"
                        src="https://shopping-web-app.vercel.app/_next/image?url=%2Fbanner-2.jpg&w=2048&q=75"
                    />
                    <div className="absolute bottom-10 left-4 lg:bottom-40 lg:left-10 space-y-4 lg:space-y-6">
                        <h2 className="text-2xl lg:text-4xl font-semibold text-accent">
                            Tranding Item
                        </h2>
                        <p className="uppercase text-2xl lg:text-4xl font-bold">
                            Womens latest <br /> fashion sale
                        </p>
                        <p className="text-gray-500 text-xl lg:text-3xl font-semibold">
                            Starting From $50
                        </p>
                        <button className="border border-black rounded-lg p-2 lg:p-4 uppercase font-semibold text-accent">
                            SHOP Now
                        </button>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <img
                        className="w-full"
                        src="https://shopping-web-app.vercel.app/_next/image?url=%2Fbanner-2.jpg&w=2048&q=75"
                    />
                    <div className="absolute bottom-10 left-4 lg:bottom-40 lg:left-10 space-y-4 lg:space-y-6">
                        <h2 className="text-2xl lg:text-4xl font-semibold text-accent">
                            Tranding Item
                        </h2>
                        <p className="uppercase text-2xl lg:text-4xl font-bold">
                            Womens latest <br /> fashion sale
                        </p>
                        <p className="text-gray-500 text-xl lg:text-3xl font-semibold">
                            Starting From $50
                        </p>
                        <button className="border border-black rounded-lg p-2 lg:p-4 uppercase font-semibold text-accent">
                            SHOP Now
                        </button>
                    </div>
                </SwiperSlide>
            </Swiper>
        </div>
    );
};

export default SliderBanner;
