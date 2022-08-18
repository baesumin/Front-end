import { format, isSameDay, isSameMonth, startOfMonth } from 'date-fns'
import { useEffect, useState } from 'react'
import { cls } from '../libs/utils'

interface Prop {
  day: Date
  i: number
  date: string[]
  isFirst: boolean
  monthStart: Date
  onItemClick: () => void
  curData: []
  setCurData: any
}

const CalendarItem = ({
  day,
  i,
  date,
  isFirst,
  monthStart,
  onItemClick,
  curData,
  setCurData,
}: Prop) => {
  const [isOpen, setIsOpen] = useState(false)
  const [data, setData] = useState([])
  const onClick = () => {
    onItemClick()
    setIsOpen(true)
  }

  useEffect(() => {
    if (isOpen) {
      setData([...data, ...curData])
      setIsOpen(false)
      setCurData([])
    }
  }, [curData, data])

  return (
    <div
      onClick={onClick}
      // key={day + '' + i}
      className="border-b-[1px] border-r-[1px] flex flex-col items-center pt-2 overflow-hidden"
    >
      {isFirst ? <p className="text-xs mb-1 text-gray-500">{date[i]}</p> : null}
      <p
        className={cls(
          'text-xs font-semibold',
          !isSameMonth(day, monthStart) ? 'text-gray-500' : '',
        )}
      >
        {isSameDay(startOfMonth(day), day)
          ? format(day, 'M월 d일')
          : format(day, 'd')}
      </p>
      {data.map((item, index) => {
        return <p key={index}>{item}</p>
      })}
    </div>
  )
}

export default CalendarItem
