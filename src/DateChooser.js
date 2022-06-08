import React from 'react'
import DatePicker from 'react-date-picker';

function DateChooser(props) {
    const { date, setDate } = props;
    // const { date, setDate, validator } = props;
    return (
        <div>
            <DatePicker onChange={setDate} value={date} />
        </div>
    )
}
export default DateChooser;