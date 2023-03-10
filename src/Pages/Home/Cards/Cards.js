import React from 'react';
import clock from '../../../assets/images/icons/clock.svg'
import location from '../../../assets/images/icons/location.svg'
import phone from '../../../assets/images/icons/phone.svg'

const Cards = () => {
    const cardData = [
        {
            id: 1,
            name: 'Opening Hours',
            des: 'Opens at 9 am to 5.00pm everyday',
            icon: clock,
            bgClass: ''
        },
        {
            id: 2,
            name: 'Our Location',
            des: 'Plot 15, Road 71, Gulshan, Dhaka-1212',
            icon: location,
            bgClass: ''
        },
        {
            id: 3,
            name: 'Contact Us',
            des: '+880-1771111222',
            icon: phone,
            bgClass: ''
        }
    ]
    return (
        <section className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mx-20 my-10 '>
            {
                cardData.map(data => <div className="card card-side gray text-white px-4 shadow-xl ">
                    <figure><img src={data.icon} alt="icon" /></figure>
                    <div className="card-body">
                        <h2 className="card-title">{data.name}</h2>
                        <p>{data.des}</p>
                    </div>
                </div>)
            }

        </section>
    );
};

export default Cards;