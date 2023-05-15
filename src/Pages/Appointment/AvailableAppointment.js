import { useQuery } from '@tanstack/react-query';
import { format } from 'date-fns';
import React, { useContext, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthProvider';
import Loading from '../../Shared/Loading/Loading';
import AppointmentModal from './AppointmentModal';
import AppointmentOptions from './AppointmentOptions';

const AvailableAppointment = ({ selectedDate }) => {
    const [treatment, setTreatment] = useState(null);
    const date = format(selectedDate, 'PP');
    const { user } = useContext(AuthContext);

    const { data: appointmentOptions = [], refetch, isLoading } = useQuery({
        queryKey: ['appointmentOptions', date],
        queryFn: async () => {
            const res = await fetch(`https://doctors-portal-server-jet-rho.vercel.app/appointmentOptions?date=${date}`)
            const data = await res.json();
            return data;
        }
    })

    if (isLoading) {
        return <Loading />
    }


    return (
        <div>
            <p className='text-lg font-bold text-center '>You have selected date: {format(selectedDate, 'PP')}</p>
            <div className='grid gap-8 lg:grid-cols-3 md:grid-cols-2 p-10'>
                {
                    appointmentOptions.map(appointment => <AppointmentOptions
                        key={appointment._id}
                        appointment={appointment}
                        setTreatment={setTreatment}
                    />)
                }
            </div>
            {
                user?.uid ?
                    treatment &&
                    <AppointmentModal
                        treatment={treatment}
                        setTreatment={setTreatment}
                        selectedDate={selectedDate}
                        refetch={refetch}
                    />
                    : toast('Login to book an appointment')

            }

        </div>
    );
};

export default AvailableAppointment;