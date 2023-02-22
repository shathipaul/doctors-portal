import React from 'react';
import { DayPicker } from 'react-day-picker';
import { format } from 'date-fns';

const Calender = ({ selectedDate, setSelectedDate }) => {
    return (
        <div>
            <DayPicker
                mode='single'
                selected={selectedDate}
                onSelect={setSelectedDate}
            />
        </div>
    );
};

export default Calender;