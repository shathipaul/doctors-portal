import React from 'react';
import bg from '../../../assets/images/apointment/bg.png'


const ReachUs = () => {
    return (
        <section className='my-16 rounded-lg'
            style={{
                background: `url(${bg})`
            }}
        >
            <div className="hero">
                <div className="hero-content flex-col">
                    <div className="text-center text-white">
                        <h1 className="font-bold text-lg">Contact Us</h1>
                        <p className="text-3xl font-bold">Stay connected with us</p>
                    </div>
                    <div className="card flex-shrink-0 w-full">
                        <div className="card-body">
                            <div className="form-control">
                                <input type="text" placeholder="Email" className="input w-full max-w-xs text-sm" />
                            </div>
                            <div className="form-control">
                                <input type="text" placeholder="Subject" className="input w-full max-w-xs text-sm" />
                            </div>
                            <div className="form-control">
                                <textarea placeholder="Your message" className="textarea"></textarea>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-outline hover:btn-primary text-white">Submit</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ReachUs;