import React from 'react';

const AppointmentOptions = ({ appointment, setTreatment }) => {
    const { name, slots } = appointment;
    return (
        <div className="card gray text-white shadow-xl">
            <div className="card-body text-center">
                <h2 className="text-xl font-bold">{name}</h2>
                <p>{slots.length > 0 ? appointment.slots[0]
                    : 'Try another day'}</p>
                <p>{slots.length} {slots.length > 1 ? 'spaces' : 'space'} available</p>
                <div className="card-actions justify-center">
                    <label
                        disabled={slots.length === 0}
                        htmlFor="appointment-modal"
                        className="btn btn-outline hover:btn-primary text-white"
                        onClick={() => setTreatment(appointment)}
                    >Book Appointment</label>
                </div>
            </div>
        </div>
    );
};

export default AppointmentOptions;