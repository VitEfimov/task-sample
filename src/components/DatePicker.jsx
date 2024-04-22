import React from 'react';
import {DayPicker} from 'react-day-picker';
import LocalizedFormat from 'dayjs/plugin/localizedFormat';
import dayjs from 'dayjs';
import 'react-day-picker/dist/style.css';
dayjs.extend(LocalizedFormat)

const DatePicker = ({ handleDateSelection, setShowDatePicker }) => {

    const [selected, setSelected] = React.useState(null)

    // const handleDayClick = (day) => {
    //     setSelected(day);
    //     handleDateSelection(day);
    //     setShowDatePicker(false);
    //     console.log("handleDayClick + day",day);
    // };
    // const handleMonthChange = (newMonth) => {
    //   setSelected(newMonth);

    // };

    const handleDayClick = (day) => {
      setSelected(day);
      handleDateSelection(day);
      setShowDatePicker(false);
      console.log("handleDayClick + day", day);
    };
  
    const handleMonthChange = (newMonth) => {
      setShowDatePicker();
      setSelected(newMonth);
    };


  return (
    <DayPicker
    className='date__picker'
    onDayClick={handleDayClick}
    onMonthChange={handleMonthChange}
    onSelect={setSelected}
    fromYear={2024}
    toYear={2090}
    mode='single'
    // defaultMonth={selected}
    modifiersClassNames={{
        selected: 'my-selected',
        today: 'my-today'
      }}
      modifiersStyles={{
        disabled: { fontSize: '75%' }
      }}
/>
  )
}

export default DatePicker