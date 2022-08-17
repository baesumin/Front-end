import {
  addDays,
  endOfMonth,
  endOfWeek,
  format,
  isSameDay,
  isSameMonth,
  parse,
  parseISO,
  startOfMonth,
  startOfWeek,
} from "date-fns";
import { useEffect, useState } from "react";
import { cls } from "../libs/utils";

const RenderCells = ({ currentMonth, selectedDate, onDateClick }: any) => {
  const rows: any[] = [];
  const [rowsCount, setRowsCount] = useState(0);
  const monthStart = startOfMonth(parseISO(currentMonth));
  const monthEnd = endOfMonth(monthStart);
  const startDate = startOfWeek(monthStart);
  const endDate = endOfWeek(monthEnd);
  const date = ["일", "월", "화", "수", "목", "금", "토"];
  let days = [];
  let day = startDate;
  let isFirst = true;

  while (day <= endDate) {
    for (let i = 0; i < 7; i++) {
      const cloneDay = day;

      days.push(
        <div
          key={day + "" + i}
          className="border-b-[1px] border-r-[1px] flex flex-1 flex-col items-center pt-2"
        >
          {isFirst ? (
            <p className="text-xs mb-1 text-gray-500">{date[i]}</p>
          ) : null}
          <p
            className={cls(
              "text-xs font-semibold",
              !isSameMonth(day, monthStart) ? "text-gray-500" : ""
            )}
          >
            {isSameDay(startOfMonth(day), day)
              ? format(day, "M월 d일")
              : format(day, "d")}
          </p>
        </div>
      );
      day = addDays(day, 1);
    }
    rows.push(
      <div className={cls(`flex`, `h-1/${rowsCount}`)} key={day + ""}>
        {days}
      </div>
    );
    isFirst = false;
    days = [];
  }
  useEffect(() => {
    setRowsCount(rows.length);
  }, [currentMonth, rows]);

  if (rowsCount === 0) return null;
  return <div className="flex-col w-full h-[calc(100vh-65px)]">{rows}</div>;
};

export default RenderCells;
