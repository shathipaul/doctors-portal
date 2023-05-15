import React from 'react';
import img1 from '../../../assets/images/banner/img1.png'
import img2 from '../../../assets/images/banner/img2.png'
import img3 from '../../../assets/images/banner/img3.png'
import img4 from '../../../assets/images/banner/img4.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

const Banner = () => {
    const bannerData = [
        {
            img: img1,
            id: 1
        },
        {
            img: img2,
            id: 2
        },
        {
            img: img3,
            id: 3
        },
        {
            img: img4,
            id: 4
        },
    ]
    return (
        <section>
            <Swiper navigation={true} modules={[Navigation]}
                freeMode={true}
                loop={true}
                pagination={{
                    clickable: true
                }} className="mySwiper rounded-lg">
                {
                    bannerData.map(bD => <SwiperSlide key={bD.id} className=" w-full text-white">

                        <div className='img-gradient'>
                            <img alt='' src={bD.img} className="w-full " />
                        </div>

                        <div className="absolute flex-col justify-evenly transform -translate-y-1/2 left-16 right-5 top-1/2">
                            <h1 className='text-2xl md:text-6xl font-bold pb-8'>Healthy Mind, <br /> Healthy You.</h1>
                            <p className='w-1/2 pb-8 hidden lg:block'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi animi, temporibus eos voluptas nobis iste. Itaque ea nemo, maiores, sit consequuntur dolore pariatur impedit possimus praesentium provident officia necessitatibus cum.</p>
                            <button className="btn btn-outline hover:btn-primary text-white hidden md:block">Appointment</button>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Banner;