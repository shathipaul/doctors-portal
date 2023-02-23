import React, { useContext } from 'react';
import { format } from 'date-fns';
import { AuthContext } from '../../context/AuthProvider';
import toast from 'react-hot-toast';

const AppointmentModal = ({ treatment, setTreatment, selectedDate, refetch }) => {
    const { name, slots } = treatment;
    const { user } = useContext(AuthContext);
    const date = format(selectedDate, 'PP');

    const handleBooking = event => {
        event.preventDefault();
        const form = event.target;
        const slot = form.slot.value;
        const patientName = form.patientName.value;
        const email = form.email.value;
        const phone = form.phone.value;

        const booking = {
            appointmentDate: date,
            treatment: name,
            patient: patientName,
            slot,
            email,
            phone,
        }

        fetch('https://doctors-portal-server-jet-rho.vercel.app/bookings', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(booking)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.acknowledged) {
                    setTreatment(null);
                    toast('Booking Confirmed')
                    refetch();
                }
                else {
                    toast.error(data.message)
                }

            })

        console.log(booking)

    }
    return (
        <div>
            <input type="checkbox" id="appointment-modal" className="modal-toggle" />
            <div className="modal">
                <div className="modal-box relative">
                    <label htmlFor="appointment-modal" className="btn btn-sm btn-circle absolute right-2 top-2">✕</label>
                    <h3 className="text-lg font-bold">{name}</h3>
                    <form onSubmit={handleBooking} className='grid grid-cols-1 gap-4 py-4'>
                        <input type="text" value={date} disabled className="input input-bordered w-full" />
                        <select name='slot' className="select select-bordered w-full">
                            {
                                slots.map((slot, index) => <option
                                    value={slot}
                                    key={index}
                                >{slot}</option>)
                            }
                        </select>
                        <input name='patientName' type="text" defaultValue={user?.patientName} disabled placeholder="Your name" className="input input-bordered w-full" />
                        <input name='email' type="email" defaultValue={user?.email} disabled placeholder="Your email" className="input input-bordered w-full" />
                        <input name='phone' type="phone" placeholder="Your phone no" className="input input-bordered w-full" />
                        <input type="submit" value='Submit' className='w-full btn gray' />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AppointmentModal;