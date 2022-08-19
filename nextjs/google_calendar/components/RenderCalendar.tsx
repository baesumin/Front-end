import {
  addDays,
  differenceInDays,
  endOfMonth,
  endOfWeek,
  format,
  parseISO,
  startOfMonth,
  startOfWeek,
} from 'date-fns'
import { useState } from 'react'
import { useOutsideClick } from '../hooks/useOutsideClick'
import { useAppSelector } from '../store'
import CalendarItem from './CalendarItem'
import CalendarModal from './CalendarModal'

const RenderCalendar = ({ currentMonth, selectedDate, onDateClick }: any) => {
  const { calendarData } = useAppSelector((state) => state.calendar)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const monthStart = startOfMonth(parseISO(currentMonth))
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)
  const MonthCount = differenceInDays(endDate, startDate) + 1
  const day = startDate

  const onItemClick = () => {
    setIsModalOpen((prev) => !prev)
  }
  const ref = useOutsideClick(onItemClick)
  // console.log(calendarData[parseInt(format(monthStart, 'M')) - 1])

  return (
    <>
      <div className="w-full grid grid-cols-7">
        {[...Array(MonthCount)].map((_, index) => {
          return (
            <CalendarItem
              onItemClick={onItemClick}
              day={addDays(day, index)}
              monthStart={monthStart}
              key={index}
              itemIndex={index}
              data={calendarData[parseInt(format(monthStart, 'M')) - 1]}
            />
          )
        })}
      </div>

      {isModalOpen ? (
        <CalendarModal setIsModalOpen={setIsModalOpen} innerRef={ref} />
      ) : null}
    </>
  )
}

export default RenderCalendar
