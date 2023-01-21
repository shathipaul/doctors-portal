import React from 'react';
import img from '../../../assets/images/apointment/doc.png'
import bg from '../../../assets/images/apointment/bg.png'

const Feature = () => {
    return (
        <section className='mt-24 rounded-lg'
            style={{
                background: `url(${bg})`
            }}
        >
            <div className='flex lg:flex-row-reverse px-10'>

                <div className='text-white w-full my-auto p-8 lg:px-20'>
                    <h1 className="text-4xl font-bold">Make an appointment today</h1>
                    <p className="py-6 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eaque voluptas suscipit non ab asperiores maiores magnam deserunt sapiente alias explicabo!</p>
                    <button className="btn btn-outline hover:btn-primary text-white">Appointment</button>
                </div>
                <div className='-mt-10'>
                    <img src={img} className='hidden lg:block ' alt="" />
                </div>
            </div>
        </section>
    );
};

export default Feature;