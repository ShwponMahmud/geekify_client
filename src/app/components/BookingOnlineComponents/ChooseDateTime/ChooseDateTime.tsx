// "use client";
// import { useState } from "react";
// import Calendar from "./Calendar";

// const ChooseDateTime: React.FC = () => {
//   const [selectedDate, setSelectedDate] = useState<string>("");
//   const [selectedTime, setSelectedTime] = useState<string>("09:00am");
//   const [duration, setDuration] = useState<string>("1 Hour 00 Minute");
//   const [showCalendar, setShowCalendar] = useState<boolean>(false);

//   const timeSlots = [
//     "06:00 am",
//     "07:00 am",
//     "08:00 am",
//     "09:00 am",
//     "10:00 am",
//     "11:00 am",
//     "12:00 pm",
//     "1:00 pm",
//     "2:00 pm",
//     "3:00 pm",
//     "4:00 pm",
//     "5:00 pm",
//     "6:00 pm",
//     "7:00 pm",
//   ];

//   return (
//     <div className="container  mx-auto p-6 ">
//       <h2 className="text-xl font-semibold mb-4">
//         Please choose your preferred date and time.
//       </h2>

//       <div className=" w-[50%] mx-auto">
//         <div>
//           {/* Duration Selection */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">
//               Select your booking duration (hours):
//             </label>
//             <select
//               value={duration}
//               onChange={(e) => setDuration(e.target.value)}
//               className="block w-[100%] border border-gray-300 rounded-md p-2"
//             >
//               <option>1 Hour 00 Minute</option>
//               <option>1 Hour 30 Minute</option>
//               <option>2 Hours 00 Minutes</option>
//               <option>2 Hours 30 Minutes</option>
//               <option>3 Hours 00 Minutes</option>
//               <option>3 Hours 30 Minutes</option>
//               <option>4 Hours 00 Minutes</option>
//               <option>4 Hours 30 Minutes</option>
//               <option>5 Hours 00 Minutes</option>
//               <option>5 Hours 30 Minutes</option>
//               <option>6 Hours 00 Minutes</option>
//             </select>
//           </div>

//           {/* Date Selection */}
//           <div className="mb-4">
//             <label className="block text-sm font-medium mb-1">
//               Please choose the date you would like this service:
//             </label>
//             <input
//               type="text"
//               value={selectedDate}
//               readOnly
//               onFocus={() => setShowCalendar(true)}
//               className="block w-full border border-gray-300 rounded-md p-2"
//             />

//             {/* Calendar Popup */}
//             {showCalendar && (
//               <Calendar
//                 selectedDate={selectedDate}
//                 onDateChange={(date) => setSelectedDate(date)}
//                 onClose={() => setShowCalendar(false)}
//               />
//             )}
//           </div>
//         </div>

//         {/* Time Slot Selection */}
//         {selectedDate ? (
//           <div>
//             <label className="block text-sm font-medium mt-7">
//               Please choose the time you would like this service:
//             </label>
//             <div className="grid grid-cols-6 gap-3 mt-4">
//               {timeSlots.map((slot, idx) => (
//                 <button
//                   key={idx}
//                   className={`p-2 border  ${
//                     typeof slot === "string"
//                       ? selectedTime === slot
//                         ? "bg-orange-500 text-white"
//                         : "bg-gray-200"
//                       : selectedTime === slot.time
//                       ? "bg-orange-500 text-white"
//                       : "border-orange-500"
//                   }`}
//                   onClick={() =>
//                     typeof slot === "string"
//                       ? setSelectedTime(slot)
//                       : setSelectedTime(slot.time)
//                   }
//                 >
//                   {typeof slot === "string"
//                     ? slot
//                     : `${slot.time} (${slot.note})`}
//                 </button>
//               ))}
//             </div>
//           </div>
//         ) : (
//           ""
//         )}
//       </div>
//     </div>
//   );
// };

// export default ChooseDateTime;

"use client";
import React, { useState } from "react";
import Calendar from "./Calendar";
import { useAppDispatch } from "@/app/rtk-state/hooks";
import {
  choosePreferredDateAndTime,
  choosePreferredDateAndTimeNextStep,
  serviceAddressParkingSubmitAfterNextStep,
  serviceQuestionInfoNextStep,
} from "@/app/rtk-state/reducers/bookingSlice";

const ChooseDateTime: React.FC = () => {
  const [duration, setDuration] = useState<string>("1 Hour 00 Minute");
  const [selectedDate, setSelectedDate] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<string>("");
  const [showCalendar, setShowCalendar] = useState<boolean>(false);
  const dispatch = useAppDispatch();

  const timeSlots: string[] = [
    "06:00 AM",
    "07:00 AM",
    "08:00 AM",
    "09:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 PM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
    "7:00 PM",
  ];

  const choosePreferredDateTimeData: any = {
    booking_duration: duration,
    booking_schedule: selectedDate,
    selectedTime,
  };

  const ChoosePreferredDateTimeSubmitAndNextHandler = () => {
    dispatch(choosePreferredDateAndTime(choosePreferredDateTimeData));
    dispatch(choosePreferredDateAndTimeNextStep("next"));
    dispatch(serviceQuestionInfoNextStep(""));
  };

  const PrevButtonHandler = () => {
    dispatch(serviceQuestionInfoNextStep(""));
    dispatch(serviceAddressParkingSubmitAfterNextStep("next"));
  };

  return (
    <div className="container mx-auto p-6">
      <h2 className="text-2xl font-semibold mb-4">
        Please choose your preferred date and time.
      </h2>

      <div className="w-[50%] mx-auto mt-10">
        {/* Duration Selection */}
        <div className="mb-4 ">
          <div>
            <label className="block text-sm font-medium mb-1">
              Select your booking duration (hours):
            </label>
            <select
              value={duration}
              onChange={(e) => setDuration(e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2"
            >
              {[
                "1 Hour 00 Minute",
                "1 Hour 30 Minute",
                "2 Hours 00 Minutes",
                "2 Hours 30 Minutes",
                "3 Hours 00 Minutes",
                "3 Hours 30 Minutes",
                "4 Hours 00 Minutes",
                "4 Hours 30 Minutes",
                "5 Hours 00 Minutes",
                "5 Hours 30 Minutes",
                "6 Hours 00 Minutes",
              ].map((option) => (
                <option key={option} value={option}>
                  {option}
                </option>
              ))}
            </select>
          </div>

          {/* Date Selection */}
          <div className="my-4">
            <label className="block text-sm font-medium mb-1">
              Please choose the date you would like this service:
            </label>
            <input
              type="text"
              value={selectedDate}
              readOnly
              onFocus={() => setShowCalendar(true)}
              placeholder="Choose Date"
              className="block w-full border border-gray-300 rounded-md p-2"
            />
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
        {selectedDate && (
          <div>
            <label className="block text-sm font-medium mt-7">
              Please choose the time you would like this service:
            </label>
            <div className="grid grid-cols-5 gap-4 mt-4">
              {timeSlots.map((slot) => (
                <button
                  key={slot}
                  className={`p-2 border rounded-md ${
                    selectedTime === slot
                      ? "bg-orange-500 text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => setSelectedTime(slot)}
                >
                  {slot}
                </button>
              ))}
            </div>
          </div>
        )}
        <div className="flex justify-between mt-10">
          <button
            onClick={PrevButtonHandler}
            className="border border-primaryColor text-primaryColor py-[7px] px-[30px] rounded-md "
          >
            Prev
          </button>
          <button
            onClick={ChoosePreferredDateTimeSubmitAndNextHandler}
            className="bg-grayColor hover:bg-primaryColor transition-[.5s] text-white py-[7px] px-[30px] rounded-md "
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChooseDateTime;
