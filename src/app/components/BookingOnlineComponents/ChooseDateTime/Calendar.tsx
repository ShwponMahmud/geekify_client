// components/Calendar.tsx
import { useState } from "react";

interface CalendarProps {
  selectedDate: string;
  onDateChange: (date: string) => void;
  onClose: () => void;
}

const Calendar: React.FC<CalendarProps> = ({ selectedDate, onDateChange, onClose }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());

  const daysInMonth = (year: number, month: number) => new Date(year, month + 1, 0).getDate();

  const getDates = () => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();
    const totalDays = daysInMonth(year, month);

    return Array.from({ length: totalDays }, (_, i) => new Date(year, month, i + 1));
  };

  const handleDateClick = (date: Date) => {
    onDateChange(date.toLocaleDateString("en-US", { day: "2-digit", month: "long", year: "numeric" }));
    onClose();
  };

  const goToNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() + 1)));
  };

  const goToPreviousMonth = () => {
    setCurrentMonth(new Date(currentMonth.setMonth(currentMonth.getMonth() - 1)));
  };

  return (
    <div className="absolute bg-white shadow-lg p-4 rounded-md w-64 z-50">
      <div className="flex justify-between items-center mb-3">
        <button onClick={goToPreviousMonth} className="text-sm font-bold">&lt;</button>
        <span className="text-sm font-semibold">
          {currentMonth.toLocaleDateString("en-US", { month: "long", year: "numeric" })}
        </span>
        <button onClick={goToNextMonth} className="text-sm font-bold">&gt;</button>
      </div>

      <div className="grid grid-cols-7 text-center gap-1">
        {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day, index) => (
          <span key={index} className="text-xs font-medium">
            {day}
          </span>
        ))}
        {getDates().map((date) => (
          <button
            key={date.toDateString()}
            className={`p-2 text-xs rounded ${
              selectedDate === date.toLocaleDateString("en-US", { day: "2-digit", month: "long", year: "numeric" })
                ? "bg-orange-500 text-white"
                : "bg-gray-100"
            }`}
            onClick={() => handleDateClick(date)}
          >
            {date.getDate()}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
