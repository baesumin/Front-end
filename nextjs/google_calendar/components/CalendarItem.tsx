import { format, isSameDay, isSameMonth, startOfMonth } from 'date-fns'
import { cls } from '../libs/utils'

interface Prop {
  day: Date
  monthStart: Date
  onItemClick: () => void
  itemIndex: number
  data: {
    [x: string]: any
    index: number
    arr: {
      content: string
      isContinue: boolean
      endIndex?: number
    }[]
  }
}

const date = ['일', '월', '화', '수', '목', '금', '토']

const CalendarItem = ({
  day,
  monthStart,
  onItemClick,
  itemIndex,
  data,
}: Prop) => {
  const onClick = () => {
    onItemClick()
  }

  return (
    <div
      onClick={onClick}
      className="border-b-[1px] border-r-[1px] flex flex-col items-center pt-2"
    >
      {itemIndex < 7 ? (
        <p className="text-xs mb-1 text-gray-500">{date[itemIndex]}</p>
      ) : null}
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
      <div className="w-full h-full space-y-1 flex flex-col ">
        {data?.map((item: any, index: number) => {
          if (
            parseInt(format(day, 'd')) === item.index &&
            isSameMonth(day, monthStart)
          ) {
            return item.arr.map((item2: any, index2: number) => {
              if (item2?.isContinue) {
                if (item2?.endIndex === parseInt(format(day, 'd'))) {
                  return (
                    <div
                      key={index2}
                      className=" cursor-pointer ml-[-1px] indent-3 bg-[#7986CB] h-[20px] w-full mr-2 rounded-r-[4px] flex items-center text-xs text-white"
                    ></div>
                  )
                } else {
                  return (
                    <div
                      key={index2}
                      className="cursor-pointer indent-3 bg-[#7986CB] h-[20px] w-full rounded-l-[4px] flex items-center text-xs text-white"
                    >
                      {item2?.content}
                    </div>
                  )
                }
              } else {
                return (
                  <div
                    key={index2}
                    className="cursor-pointer indent-3  h-[20px] w-full rounded-l-[4px] flex items-center text-xs "
                  >
                    <div className="ml-2 w-2 h-2 bg-yellow-400 rounded-full" />
                    <span>{item2?.content}</span>
                  </div>
                )
              }
            })
          }
        })}
        {/* {data?.index === parseInt(format(day, 'd'))
          ? data?.arr?.map((item: any, index: number) => {
              if (item?.isContinue) {
                if (item?.endIndex === itemIndex + 1) {
                  return (
                    <div
                      key={index}
                      className=" cursor-pointer ml-[-1px] indent-3 bg-[#7986CB] h-[20px] w-full mr-2 rounded-r-[4px] flex items-center text-xs text-white"
                    ></div>
                  )
                } else {
                  return (
                    <div
                      key={index}
                      className="cursor-pointer indent-3 bg-[#7986CB] h-[20px] w-full rounded-l-[4px] flex items-center text-xs text-white"
                    >
                      {item?.content}
                    </div>
                  )
                }
              } else {
              }
            })
          : null} */}
      </div>
    </div>
  )
}

export default CalendarItem
