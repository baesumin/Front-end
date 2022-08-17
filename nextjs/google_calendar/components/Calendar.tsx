import { NextPage } from "next";
import { useState } from "react";
import { useAppSelector } from "../store";
import RenderCells from "./RenderCells";

const Calendar: NextPage = () => {
  const { currentMonth } = useAppSelector((state) => state.calendar);
  const [selectedDate, setSelectedDate] = useState(new Date());

  const onDateClick = (day: any) => {
    setSelectedDate(day);
  };

  return (
    <RenderCells
      currentMonth={currentMonth}
      selectedDate={selectedDate}
      onDateClick={onDateClick}
    />
  );
};

export default Calendar;
