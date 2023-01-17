import React from 'react';
import img1 from '../../../assets/images/banner/img1.png'
import img2 from '../../../assets/images/banner/img2.png'
import img3 from '../../../assets/images/banner/img3.png'
import img4 from '../../../assets/images/banner/img4.png'

const Banner = () => {
    const bannerData = [
        {
            img: img1,
            prev: 4,
            id: 1,
            next: 2
        },
        {
            img: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            img: img3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            img: img4,
            prev: 3,
            id: 4,
            next: 1
        },
    ]
    return (
        <div className="carousel max-w-7xl mx-auto rounded-lg">
            {
                bannerData.map(bD => <div key={bD.id} id={`slide${bD.id}`} className="carousel-item relative w-full text-white">

                    <div className='img-gradient'>
                        <img alt='' src={bD.img} className="w-full " />
                    </div>

                    <div className="absolute flex-col justify-evenly transform -translate-y-1/2 left-16 right-5 top-1/2">
                        <h1 className='text-4xl lg:text-6xl font-bold'>Helthy Mind, <br /> Healthy You.</h1>
                        <p className='w-1/2 py-8'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi animi, temporibus eos voluptas nobis iste. Itaque ea nemo, maiores, sit consequuntur dolore pariatur impedit possimus praesentium provident officia necessitatibus cum.</p>
                        <button className="btn btn-outline hover:btn-primary text-white">Appointment</button>
                    </div>

                    <div className="absolute flex justify-between transform -translate-y-1/2 left-4 right-4 top-1/2">
                        <a href={`#slide${bD.prev}`} className="btn">❮</a>
                        <a href={`#slide${bD.next}`} className="btn">❯</a>
                    </div>
                </div>)
            }

        </div>
    );
};

export default Banner;