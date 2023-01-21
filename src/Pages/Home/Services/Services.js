import React from 'react';
import img1 from '../../../assets/images/services/1.jpg'
import img2 from '../../../assets/images/services/2.jpg'
import img3 from '../../../assets/images/services/3.jpg'
import img4 from '../../../assets/images/services/4.jpg'
import img5 from '../../../assets/images/services/5.jpg'
import img6 from '../../../assets/images/services/6.jpg'

const Services = () => {
    const services = [
        {
            id: 1,
            img: img1,
            name: 'Depression Therapy',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptas?'
        },
        {
            id: 2,
            img: img2,
            name: 'Family Practice',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptas?'
        },
        {
            id: 3,
            img: img3,
            name: 'Individual Coaching',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptas?'
        },
        {
            id: 4,
            img: img4,
            name: 'Couples Therapy',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptas?'
        },
        {
            id: 5,
            img: img5,
            name: 'Group Therapy',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptas?'
        },
        {
            id: 6,
            img: img6,
            name: 'Anxiety Treatment',
            des: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptas?'
        }
    ]
    return (
        <section className="py-8">
            <div className="container mx-auto space-y-8">
                <div className="space-y-2 text-center">
                    <h2 className="text-3xl font-bold">Our Services</h2>
                    <p className="font-serif text-sm text-gray-500" >Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem, voluptas?</p>
                </div>
                <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                    {
                        services.map(data => <div className="card card-compact bg-base-100 shadow-xl">
                            <figure><img src={data.img} alt="" /></figure>
                            <div className="card-body">
                                <h2 className="card-title">{data.name}</h2>
                                <p>{data.des}</p>
                            </div>
                        </div>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;