import {
  addDays,
  differenceInDays,
  endOfMonth,
  endOfWeek,
  parseISO,
  startOfMonth,
  startOfWeek,
} from 'date-fns'
import { useState } from 'react'
import { useOutsideClick } from '../hooks/useOutsideClick'
import CalendarItem from './CalendarItem'
import CalendarModal from './CalendarModal'

const RenderCalendar = ({ currentMonth, selectedDate, onDateClick }: any) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [curData, setCurData] = useState<[]>([])
  const rows: any[] = []
  const monthStart = startOfMonth(parseISO(currentMonth))
  const monthEnd = endOfMonth(monthStart)
  const startDate = startOfWeek(monthStart)
  const endDate = endOfWeek(monthEnd)
  const date = ['일', '월', '화', '수', '목', '금', '토']
  const MonthCount = differenceInDays(endDate, startDate) + 1
  const days: any[] = []
  const day = startDate
  const isFirst = true

  const onItemClick = () => {
    setIsModalOpen((prev) => !prev)
  }
  const ref = useOutsideClick(onItemClick)

  // const a = () => {
  //   while (day <= endDate) {
  //     for (let i = 0; i < 7; i++) {
  //       days.push(
  //         <CalendarItem
  //           onItemClick={onItemClick}
  //           date={date}
  //           day={day}
  //           i={i}
  //           isFirst={isFirst}
  //           monthStart={monthStart}
  //           key={day + ''}
  //           curData={curData}
  //           setCurData={setCurData}
  //         />,
  //       )
  //       day = addDays(day, 1)
  //     }
  //     rows.push(<div>{days}</div>)
  //     isFirst = false
  //     days = []
  //   }
  // }
  // a()

  return (
    <>
      <div className="w-full h-[calc(100vh-65px)] grid grid-cols-7">
        {[...Array(MonthCount)].map((item, index) => (
          <CalendarItem
            onItemClick={onItemClick}
            date={date}
            day={addDays(day, index)}
            i={0}
            isFirst={isFirst}
            monthStart={monthStart}
            key={index}
            curData={curData}
            setCurData={setCurData}
          />
        ))}
        {/* {rows.map((item, index) => {
          return (
            <div className={`flex flex-1`} key={index}>
              {item.props.children}
            </div>
          )
        })} */}
      </div>

      {isModalOpen ? (
        <CalendarModal
          setIsModalOpen={setIsModalOpen}
          curData={curData}
          setCurData={setCurData}
          innerRef={ref}
        />
      ) : null}
    </>
  )
}

export default RenderCalendar
