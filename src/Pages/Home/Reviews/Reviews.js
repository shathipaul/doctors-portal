import React from "react";
import people from '../../../assets/images/review/people3.png'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { FreeMode, Pagination, Navigation } from "swiper";

// breakpoints: {
//     // when window width is >= 320px
//     320: {
//       slidesPerView: 2,
//       spaceBetween: 20
//     },
//     // when window width is >= 480px
//     480: {
//       slidesPerView: 3,
//       spaceBetween: 30
//     },
//   }

const Reviews = () => {
    const reviews = [
        { id: 1, name: 'Tina Khan', location: 'USA', img: people, review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, inventore?' },
        { id: 2, name: 'Mina Khan', location: 'USA', img: people, review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, inventore?' },
        { id: 3, name: 'Rina Khan', location: 'USA', img: people, review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, inventore?' },
        { id: 4, name: 'Pina Khan', location: 'USA', img: people, review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, inventore?' },
        { id: 5, name: 'Dina Khan', location: 'USA', img: people, review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, inventore?' },
        { id: 6, name: 'Bina Khan', location: 'USA', img: people, review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, inventore?' },
        { id: 7, name: 'Nina Khan', location: 'USA', img: people, review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, inventore?' },
        { id: 8, name: 'Fina Khan', location: 'USA', img: people, review: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Facere, inventore?' },
    ]
    return (
        <section className="mt-24 ">
            <div className="space-y-2 text-center mb-8">
                <h4 className="font-bold text-lg">Testimonial</h4>
                <h3 className="text-3xl font-bold">What Our Patients Says</h3>
            </div>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                navigation={true}
                freeMode={true}
                loop={true}
                pagination={{
                    clickable: true
                }}
                modules={[Navigation, FreeMode, Pagination]}
                className="mySwiper"
            >
                <div>
                    {
                        reviews.map(data => <SwiperSlide className="shadow-xl rounded-xl mb-16  p-8">
                            <p>{data.review}</p>
                            <div className="flex pt-4 gap-6">
                                <div className="avatar">
                                    <div className="w-12 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                        <img src={data.img} alt='' />
                                    </div>
                                </div>
                                <div className="flex-col">
                                    <h4 className="font-semibold text-gray-600">{data.name}</h4>
                                    <p className="text-sm">{data.location}</p>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </div>
            </Swiper>
        </section>
    );
};

export default Reviews;