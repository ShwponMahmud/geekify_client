"use client";
import { useState } from "react";
import Calendar from "./Calendar";

const ChooseDateTime: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("09:00am");
  const [duration, setDuration] = useState<string>("1 Hour 00 Minute");
  const [showCalendar, setShowCalendar] = useState<boolean>(false);

  const timeSlots = [
    { time: "Flexible", note: "Save $8.10 off", period: "9am–4pm" },
    "08:00am",
    "08:30am",
    "09:00am",
    "09:30am",
    "10:00am",
    "11:00am",
    "12:00pm",
  ];

  return (
    <div className="container  mx-auto p-6 ">
      <h2 className="text-xl font-semibold mb-4">
        Please choose your preferred date and time.
      </h2>

      <div className="flex justify-between">
        <div>
          {/* Duration Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Select your booking duration (hours):
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="block w-[100%] border border-gray-300 rounded-md p-2"
            >
              <option>1 Hour 00 Minute</option>
              <option>2 Hours 00 Minutes</option>
            </select>
          </div>

          {/* Date Selection */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Please choose the date you would like this service:
            </label>
            <input
              type="text"
              value={selectedDate}
              readOnly
              onFocus={() => setShowCalendar(true)}
              className="block w-full border border-gray-300 rounded-md p-2"
            />

            {/* Calendar Popup */}
            {showCalendar && (
              <Calendar
                selectedDate={selectedDate}
                onDateChange={(date) => setSelectedDate(date)}
                onClose={() => setShowCalendar(false)}
              />
            )}
          </div>
        </div>

        {/* Time Slot Selection */}
        {selectedDate ? (
          <div>
            <label className="block text-sm font-medium mb-1">
              Please choose the time you would like this service:
            </label>
            <div className="grid grid-cols-4 gap-5">
              {timeSlots.map((slot, idx) => (
                <button
                  key={idx}
                  className={`p-2 border rounded ${
                    typeof slot === "string"
                      ? selectedTime === slot
                        ? "bg-orange-500 text-white"
                        : "bg-gray-200"
                      : selectedTime === slot.time
                      ? "bg-orange-500 text-white"
                      : "border-orange-500"
                  }`}
                  onClick={() =>
                    typeof slot === "string"
                      ? setSelectedTime(slot)
                      : setSelectedTime(slot.time)
                  }
                >
                  {typeof slot === "string"
                    ? slot
                    : `${slot.time} (${slot.note})`}
                </button>
              ))}
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default ChooseDateTime;
