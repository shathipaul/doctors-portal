import React, { useState } from 'react';
import AvailableAppointment from './AvailableAppointment';
import Calender from './Calender';
import img from '../../assets/images/apointment/img.png'


const Appointment = () => {
    const [selectedDate, setSelectedDate] = useState(new Date());
    return (
        <div className='max-w-7xl mx-auto py-10'>
            <div className='md:flex justify-evenly items-center'>
                <img className='md:w-1/4' src={img} alt="" />
                <Calender
                    selectedDate={selectedDate}
                    setSelectedDate={setSelectedDate}
                />
            </div>

            <AvailableAppointment
                selectedDate={selectedDate}
            />
        </div>
    );
};

export default Appointment;