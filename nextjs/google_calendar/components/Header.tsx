import { NextPage } from "next";
import {
  ChevronLeftIcon,
  ChevronRightIcon,
  MenuIcon,
} from "@heroicons/react/outline";
import Image from "next/image";
import Logo from "../assets/images/logo.png";
import { useAppDispatch, useAppSelector } from "../store";
import headerSlice from "../store/slices/header";
import calendarSlice from "../store/slices/calendar";
import { addMonths, format, parseISO, subMonths } from "date-fns";

const Header: NextPage = () => {
  const dispatch = useAppDispatch();
  const { currentMonth } = useAppSelector((state) => state.calendar);

  const onMenuClick = () => {
    dispatch(headerSlice.actions.setMenuClick());
  };
  const onTodayClick = () => {
    dispatch(calendarSlice.actions.setCurrentMonth(new Date().toISOString()));
  };
  const prevMonth = () => {
    dispatch(
      calendarSlice.actions.setCurrentMonth(
        subMonths(parseISO(currentMonth), 1).toISOString()
      )
    );
  };
  const nextMonth = () => {
    dispatch(
      calendarSlice.actions.setCurrentMonth(
        addMonths(parseISO(currentMonth), 1).toISOString()
      )
    );
  };
  return (
    <div className="h-[65px] flex items-center border-b-[1px]">
      <div
        onClick={onMenuClick}
        className="ml-4 mr-1 cursor-pointer hover:bg-[#F0F0F0] p-3 rounded-full"
      >
        <MenuIcon className="w-5 h-5" />
      </div>
      <Image src={Logo} width={40} height={40} />
      <h1 className="text-[22px] font-normal ml-2 text-gray-500">캘린더</h1>
      <button
        onClick={onTodayClick}
        className="border-[1px] py-[7px] px-[13px] rounded-md ml-[74px] text-sm"
      >
        오늘
      </button>
      <ChevronLeftIcon
        onClick={prevMonth}
        className="w-[18px] ml-7 cursor-pointer"
      />
      <ChevronRightIcon
        onClick={nextMonth}
        className="w-[18px] ml-3 cursor-pointer"
      />
      <span className="ml-7 text-[22px]">
        {format(parseISO(currentMonth), "yyyy년 M월")}
      </span>
    </div>
  );
};

export default Header;
