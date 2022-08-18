import { useState } from 'react'
import { useAppSelector } from '../store'
import RenderCalendar from './RenderCalendar'

const Calendar = () => {
  const { currentMonth } = useAppSelector((state) => state.calendar)
  const [selectedDate, setSelectedDate] = useState(new Date())

  const onDateClick = (day: any) => {
    setSelectedDate(day)
  }

  return (
    <RenderCalendar
      currentMonth={currentMonth}
      selectedDate={selectedDate}
      onDateClick={onDateClick}
    />
  )
}

export default Calendar
