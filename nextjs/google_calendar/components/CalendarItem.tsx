import { format, isSameDay, isSameMonth, startOfMonth } from "date-fns";
import { cls } from "../libs/utils";

interface Prop {
  day: Date;
  i: number;
  date: string[];
  isFirst: boolean;
  monthStart: Date;
  onItemClick: () => void;
}

const CalendarItem = ({
  day,
  i,
  date,
  isFirst,
  monthStart,
  onItemClick,
}: Prop) => {
  const onClick = () => {
    onItemClick();
  };
  return (
    <div
      onClick={onClick}
      key={day + "" + i}
      className="border-b-[1px] border-r-[1px] flex flex-1 flex-col items-center pt-2"
    >
      {isFirst ? <p className="text-xs mb-1 text-gray-500">{date[i]}</p> : null}
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
};

export default CalendarItem;
