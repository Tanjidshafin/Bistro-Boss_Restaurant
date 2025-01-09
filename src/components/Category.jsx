import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from "../assets/home/slide1.jpg"
import slide2 from "../assets/home/slide2.jpg"
import slide3 from "../assets/home/slide3.jpg"
import slide4 from "../assets/home/slide4.jpg"
import slide5 from "../assets/home/slide5.jpg"

const Category = () => {
    return (
        <div className='my-10'>
            <div className='mb-5'>
                <div className="text-center">
                    <i className='text-yellow-600 text-center'>---From 11.00am to 10.00pm---</i>
                </div>

                <div className='flex justify-center'>
                    <p className='uppercase border-y-2 flex items-center justify-center h-20 w-1/4 text-center my-4 text-4xl'>Order Online</p>
                </div>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                centeredSlides={false}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper"
            >
                <SwiperSlide className='relative'>
                    <img className='object-cover w-full' src={slide1} alt="" />
                    <p className='md:text-3xl text-md sm:text-xl lg:text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-3 md:translate-y-20 sm:translate-y-14 lg:translate-y-40 uppercase text-center text-white font-bold'>Text</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='object-cover w-full' src={slide2} alt="" />
                    <p className='md:text-3xl text-md sm:text-xl lg:text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-3 md:translate-y-20 sm:translate-y-14 lg:translate-y-40 uppercase text-center text-white font-bold'>Text</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='object-cover w-full' src={slide3} alt="" />
                    <p className='md:text-3xl text-md sm:text-xl lg:text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-3 md:translate-y-20 sm:translate-y-14 lg:translate-y-40 uppercase text-center text-white font-bold'>Text</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='object-cover w-full' src={slide4} alt="" />
                    <p className='md:text-3xl text-md sm:text-xl lg:text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-3 md:translate-y-20 sm:translate-y-14 lg:translate-y-40 uppercase text-center text-white font-bold'>Text</p>
                </SwiperSlide>
                <SwiperSlide>
                    <img className='object-cover w-full' src={slide5} alt="" />
                    <p className='md:text-3xl text-md sm:text-xl lg:text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-3 md:translate-y-20 sm:translate-y-14 lg:translate-y-40 uppercase text-center text-white font-bold'>Text</p>
                </SwiperSlide>

            </Swiper>

        </div>
    )
}

export default Category