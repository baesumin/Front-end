import { useState } from 'react'

const CalendarModal = ({ innerRef, setIsModalOpen }: any) => {
  const [text, setText] = useState('')
  const onButtonClick = () => {
    setIsModalOpen(false)
  }
  return (
    <div className="shadow-2xl bg-white w-[450px] h-[520px] fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
      <input
        onChange={(e) => setText(e.target.value)}
        placeholder="제목 및 시간 추가"
        className="border-b-gray-100 border-b-[1px]"
      />
      <button
        onClick={() => onButtonClick()}
        className="hover:bg-blue-700 w-[80px] h-[40px] bg-blue-600 rounded-md text-white cursor-pointer"
      >
        저장
      </button>
    </div>
  )
}

export default CalendarModal
