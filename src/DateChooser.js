import React from 'react'
import DatePicker from 'react-date-picker';

function DateChooser(props) {
    const { date, setDate } = props;
    // const { date, setDate, validator } = props;
    return (
        <span style={{marginLeft:'1rem'}}>
            <DatePicker onChange={setDate} value={date} />
        </span>
    )
}
export default DateChooser;