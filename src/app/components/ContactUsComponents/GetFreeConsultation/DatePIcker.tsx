// import React, { useState } from "react";

// const DateTimePicker: React.FC = () => {
//   const [showCalendar, setShowCalendar] = useState<boolean>(false);
//   const [showTimePicker, setShowTimePicker] = useState<boolean>(false);

//   const [selectedDate, setSelectedDate] = useState<string>("");
//   const [selectedTime, setSelectedTime] = useState<string>("12:00 PM");

//   const handleDateClick = (day: number) => {
//     const date = `2024-12-${day.toString().padStart(2, "0")}`;
//     setSelectedDate(date);
//     setShowCalendar(false);
//     setShowTimePicker(true);
//   };

//   return (
//     <div className="w-full max-w-sm mx-auto relative">
//       {/* Input Field */}
//       <div>
//         <label htmlFor="datetime" className="block text-gray-700 font-medium mb-1">
//           When do you need this done?
//         </label>
//         <input
//           id="datetime"
//           type="text"
//           value={
//             selectedDate
//               ? `${new Date(selectedDate).toLocaleDateString("en-GB")} ${selectedTime}`
//               : ""
//           }
//           placeholder="Select date and time"
//           readOnly
//           onClick={() => {
//             setShowCalendar(true);
//             setShowTimePicker(false);
//           }}
//           className="w-full p-2.5 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
//         />
//       </div>

//       {/* Calendar Picker */}
//       {showCalendar && (
//         <div className="absolute bg-white shadow-lg rounded-lg p-4 border w-full mt-1 z-10">
//           <div className="flex justify-between items-center mb-2">
//             <span className="font-medium text-gray-800">December 2024</span>
//             <div>
//               <button className="text-gray-500 hover:text-gray-700">&lt;</button>
//               <button className="text-gray-500 hover:text-gray-700 ml-2">&gt;</button>
//             </div>
//           </div>
//           <div className="grid grid-cols-7 text-center text-gray-600">
//             <div>S</div> <div>M</div> <div>T</div> <div>W</div> <div>T</div> <div>F</div> <div>S</div>
//             {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
//               <div
//                 key={day}
//                 onClick={() => handleDateClick(day)}
//                 className="cursor-pointer p-2 rounded-full hover:bg-blue-200 text-gray-800"
//               >
//                 {day}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Time Picker */}
//       {showTimePicker && (
//         <div className="absolute bg-white shadow-lg rounded-lg p-4 border w-full mt-1 z-10">
//           <div className="flex items-center justify-between">
//             {/* Hours */}
//             <select
//               value={selectedTime.split(":")[0]}
//               onChange={(e) =>
//                 setSelectedTime(`${e.target.value}:${selectedTime.split(":")[1]}`)
//               }
//               className="border rounded-md p-2 focus:ring-blue-500"
//             >
//               {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
//                 <option key={hour} value={hour.toString().padStart(2, "0")}>
//                   {hour}
//                 </option>
//               ))}
//             </select>

//             <span className="mx-2">:</span>

//             {/* Minutes */}
//             <select
//               value={selectedTime.split(":")[1].split(" ")[0]}
//               onChange={(e) =>
//                 setSelectedTime(
//                   `${selectedTime.split(":")[0]}:${e.target.value} ${selectedTime.split(" ")[1]}`
//                 )
//               }
//               className="border rounded-md p-2 focus:ring-blue-500"
//             >
//               {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
//                 <option key={minute} value={minute.toString().padStart(2, "0")}>
//                   {minute.toString().padStart(2, "0")}
//                 </option>
//               ))}
//             </select>

//             {/* AM/PM */}
//             <select
//               value={selectedTime.split(" ")[1]}
//               onChange={(e) =>
//                 setSelectedTime(
//                   `${selectedTime.split(":")[0]}:${selectedTime.split(":")[1].split(" ")[0]} ${
//                     e.target.value
//                   }`
//                 )
//               }
//               className="border rounded-md p-2 focus:ring-blue-500"
//             >
//               <option value="AM">AM</option>
//               <option value="PM">PM</option>
//             </select>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default DateTimePicker;

// import React, { useState } from "react";

// const DateTimePicker: React.FC = () => {
//   const [showCalendar, setShowCalendar] = useState<boolean>(false);
//   const [showTimePicker, setShowTimePicker] = useState<boolean>(false);

//   const [formData, setFormData] = useState({
//     request_for: "",
//     date_time: "01/12/2024 07:07 AM", // Default value
//     message: "",
//   });

//   console.log(formData);

//   const handleDateClick = (day: number) => {
//     const selectedDate = `17/12/2024`; // Example date, you can dynamically format it
//     setFormData({
//       ...formData,
//       date_time: `${selectedDate} ${formData.date_time.split(" ")[1]}`, // Keep the time
//     });
//     setShowCalendar(false);
//     setShowTimePicker(true);
//   };

//   const handleTimeChange = (type: "hour" | "minute" | "ampm", value: string) => {
//     const [currentHour, currentMinute] = formData.date_time.split(" ")[1].split(":");
//     const ampm = formData.date_time.split(" ")[2];

//     const newTime =
//       type === "hour"
//         ? `${value.padStart(2, "0")}:${currentMinute}`
//         : type === "minute"
//         ? `${currentHour}:${value.padStart(2, "0")}`
//         : `${currentHour}:${currentMinute} ${value}`;

//     setFormData({
//       ...formData,
//       date_time: `${formData.date_time.split(" ")[0]} ${newTime}`,
//     });
//   };

//   return (
//     <div className="w-full max-w-sm mx-auto relative">
//       {/* Input Field */}
//       <div>
//         <label htmlFor="datetime" className="block text-gray-700 font-medium mb-1">
//           When do you need this done?
//         </label>
//         <input
//           id="datetime"
//           type="text"
//           value={formData.date_time}
//           placeholder="Select date and time"
//           readOnly
//           onClick={() => {
//             setShowCalendar(true);
//             setShowTimePicker(false);
//           }}
//           className="w-full p-2.5 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 cursor-pointer"
//         />
//       </div>

//       {/* Calendar Picker */}
//       {showCalendar && (
//         <div className="absolute bg-white shadow-lg rounded-lg p-4 border w-full mt-1 z-10">
//           <div className="flex justify-between items-center mb-2">
//             <span className="font-medium text-gray-800">December 2024</span>
//             <div>
//               <button className="text-gray-500 hover:text-gray-700">&lt;</button>
//               <button className="text-gray-500 hover:text-gray-700 ml-2">&gt;</button>
//             </div>
//           </div>
//           <div className="grid grid-cols-7 text-center text-gray-600">
//             <div>S</div> <div>M</div> <div>T</div> <div>W</div> <div>T</div> <div>F</div> <div>S</div>
//             {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
//               <div
//                 key={day}
//                 onClick={() => handleDateClick(day)}
//                 className="cursor-pointer p-2 rounded-full hover:bg-blue-200 text-gray-800"
//               >
//                 {day}
//               </div>
//             ))}
//           </div>
//         </div>
//       )}

//       {/* Time Picker */}
//       {showTimePicker && (
//         <div className="absolute bg-white shadow-lg rounded-lg p-4 border w-full mt-1 z-10">
//           <div className="flex items-center justify-between">
//             {/* Hours */}
//             <select
//               value={formData.date_time.split(" ")[1].split(":")[0]}
//               onChange={(e) => handleTimeChange("hour", e.target.value)}
//               className="border rounded-md p-2 focus:ring-blue-500"
//             >
//               {Array.from({ length: 12 }, (_, i) => i + 1).map((hour) => (
//                 <option key={hour} value={hour.toString().padStart(2, "0")}>
//                   {hour}
//                 </option>
//               ))}
//             </select>

//             <span className="mx-2">:</span>

//             {/* Minutes */}
//             <select
//               value={formData.date_time.split(" ")[1].split(":")[1]}
//               onChange={(e) => handleTimeChange("minute", e.target.value)}
//               className="border rounded-md p-2 focus:ring-blue-500"
//             >
//               {Array.from({ length: 60 }, (_, i) => i).map((minute) => (
//                 <option key={minute} value={minute.toString().padStart(2, "0")}>
//                   {minute.toString().padStart(2, "0")}
//                 </option>
//               ))}
//             </select>

//             {/* AM/PM */}
//             <select
//               value={formData.date_time.split(" ")[2]}
//               onChange={(e) => handleTimeChange("ampm", e.target.value)}
//               className="border rounded-md p-2 focus:ring-blue-500"
//             >
//               <option value="AM">AM</option>
//               <option value="PM">PM</option>
//             </select>
//           </div>
//         </div>
//       )}

//       {/* Debug View */}
//       <div className="mt-4">
//         <p className="text-gray-700">Selected Date & Time: {formData.date_time}</p>
//       </div>
//     </div>
//   );
// };

// export default DateTimePicker;

// import React, { useState } from "react";

// const DateTimePicker: React.FC = () => {
//   const [showCalendar, setShowCalendar] = useState<boolean>(false);
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [time, setTime] = useState({ hour: "12", minute: "00", period: "PM" });

//   const [formData, setFormData] = useState({
//     request_for: "",
//     date_time: "",
//     message: "",
//   });

//   console.log(formData);

//   const handleDateClick = (day: number) => {
//     const date = new Date(2024, 11, day); // Month is 0-based (11 = December)
//     setSelectedDate(date);
//     setShowCalendar(false);
//   };

//   const handleTimeChange = (field: "hour" | "minute" | "period", value: string) => {
//     setTime({ ...time, [field]: value });
//   };

//   const formattedDateTime = () => {
//     if (!selectedDate) return "";
//     const datePart = selectedDate.toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "long",
//       year: "numeric",
//     });
//     return `${datePart} ${time.hour}:${time.minute} ${time.period}`;
//   };

//   return (
//     <div className="w-full max-w-sm mx-auto relative">
//       {/* Input Field */}
//       <label htmlFor="datetime" className="block text-gray-700 font-medium mb-1">
//         When do you need this done?
//       </label>
//       <input
//         id="datetime"
//         type="text"
//         value={formattedDateTime()}
//         readOnly
//         placeholder="Select date and time"
//         onClick={() => setShowCalendar(!showCalendar)}
//         className="w-full p-2.5 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 cursor-pointer"
//       />

//       {/* Calendar Picker */}
//       {showCalendar && (
//         <div className="absolute top-16 left-0 w-80 bg-white border rounded-lg shadow-lg p-4 z-10">
//           <div className="flex justify-between items-center mb-4">
//             <button>&lt;</button>
//             <span className="font-semibold">December 2024</span>
//             <button>&gt;</button>
//           </div>
//           <div className="grid grid-cols-7 text-center text-gray-500 mb-2">
//             <span>S</span>
//             <span>M</span>
//             <span>T</span>
//             <span>W</span>
//             <span>T</span>
//             <span>F</span>
//             <span>S</span>
//           </div>
//           <div className="grid grid-cols-7 text-center">
//             {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
//               <button
//                 key={day}
//                 onClick={() => handleDateClick(day)}
//                 className={`p-2 rounded-full hover:bg-blue-100 ${
//                   selectedDate?.getDate() === day ? "bg-blue-500 text-white" : "text-gray-700"
//                 }`}
//               >
//                 {day}
//               </button>
//             ))}
//           </div>

//           {/* Time Picker */}
//           {selectedDate && (
//             <div className="mt-4 flex items-center justify-center space-x-2">
//               <span className="text-gray-700">TUE DEC {selectedDate.getDate()}</span>
//               <select
//                 value={time.hour}
//                 onChange={(e) => handleTimeChange("hour", e.target.value)}
//                 className="p-1 border rounded-md"
//               >
//                 {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0")).map(
//                   (hour) => (
//                     <option key={hour} value={hour}>
//                       {hour}
//                     </option>
//                   )
//                 )}
//               </select>
//               <span>:</span>
//               <select
//                 value={time.minute}
//                 onChange={(e) => handleTimeChange("minute", e.target.value)}
//                 className="p-1 border rounded-md"
//               >
//                 {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0")).map((minute) => (
//                   <option key={minute} value={minute}>
//                     {minute}
//                   </option>
//                 ))}
//               </select>
//               <select
//                 value={time.period}
//                 onChange={(e) => handleTimeChange("period", e.target.value)}
//                 className="p-1 border rounded-md"
//               >
//                 <option value="AM">AM</option>
//                 <option value="PM">PM</option>
//               </select>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DateTimePicker;

// import React, { useState } from "react";

// const DateTimePicker: React.FC = () => {
//   const [showCalendar, setShowCalendar] = useState<boolean>(false);
//   const [selectedDate, setSelectedDate] = useState<Date | null>(null);
//   const [currentMonth, setCurrentMonth] = useState(new Date());
//   const [time, setTime] = useState({ hour: "12", minute: "00", period: "AM" });

//   const handleDateClick = (day: number) => {
//     const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), day);
//     setSelectedDate(date);
//     setShowCalendar(false);
//   };

//   const handleTimeChange = (field: "hour" | "minute" | "period", value: string) => {
//     setTime({ ...time, [field]: value });
//   };

//   const changeMonth = (direction: "prev" | "next") => {
//     const newMonth = new Date(currentMonth);
//     newMonth.setMonth(currentMonth.getMonth() + (direction === "next" ? 1 : -1));
//     setCurrentMonth(newMonth);
//   };

//   const formattedDateTime = () => {
//     if (!selectedDate) return "";
//     const datePart = selectedDate.toLocaleDateString("en-GB", {
//       day: "2-digit",
//       month: "long",
//       year: "numeric",
//     });
//     return `${datePart} ${time.hour}:${time.minute} ${time.period}`;
//   };

//   const getDaysInMonth = () => {
//     const days = [];
//     const firstDay = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
//     const totalDays = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();

//     for (let i = 0; i < firstDay; i++) {
//       days.push(null); // Empty days for alignment
//     }

//     for (let day = 1; day <= totalDays; day++) {
//       days.push(day);
//     }

//     return days;
//   };

//   return (
//     <div className="w-full max-w-sm mx-auto relative">
//       {/* Input Field */}
//       <label htmlFor="datetime" className="block text-gray-700 font-medium mb-1">
//         When do you need this done?
//       </label>
//       <input
//         id="datetime"
//         type="text"
//         value={formattedDateTime()}
//         readOnly
//         placeholder="Select date and time"
//         onClick={() => setShowCalendar(!showCalendar)}
//         className="w-full p-2.5 border rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 cursor-pointer"
//       />

//       {/* Calendar Picker */}
//       {showCalendar && (
//         <div className="absolute top-16 left-0 w-80 bg-white border rounded-lg shadow-lg p-4 z-10">
//           {/* Month Navigation */}
//           <div className="flex justify-between items-center mb-4">
//             <button
//               onClick={() => changeMonth("prev")}
//               className="text-gray-500 hover:text-gray-700"
//             >
//               &lt;
//             </button>
//             <span className="font-semibold">
//               {currentMonth.toLocaleDateString("en-GB", { month: "long", year: "numeric" })}
//             </span>
//             <button
//               onClick={() => changeMonth("next")}
//               className="text-gray-500 hover:text-gray-700"
//             >
//               &gt;
//             </button>
//           </div>

//           {/* Day Headers */}
//           <div className="grid grid-cols-7 text-center text-gray-500 mb-2">
//             <span>S</span>
//             <span>M</span>
//             <span>T</span>
//             <span>W</span>
//             <span>T</span>
//             <span>F</span>
//             <span>S</span>
//           </div>

//           {/* Calendar Days */}
//           <div className="grid grid-cols-7 text-center">
//             {getDaysInMonth().map((day, index) => (
//               <div key={index} className="p-1">
//                 {day ? (
//                   <button
//                     onClick={() => handleDateClick(day)}
//                     className={`w-10 h-10 rounded-full ${
//                       selectedDate?.getDate() === day &&
//                       currentMonth.getMonth() === selectedDate?.getMonth()
//                         ? "bg-blue-500 text-white"
//                         : "hover:bg-blue-100 text-gray-700"
//                     }`}
//                   >
//                     {day}
//                   </button>
//                 ) : (
//                   <span></span>
//                 )}
//               </div>
//             ))}
//           </div>

//           {/* Time Picker */}
//           {selectedDate && (
//             <div className="mt-4 flex items-center justify-center space-x-2">
//               <span className="text-gray-700">
//                 {selectedDate.toLocaleDateString("en-GB", {
//                   weekday: "short",
//                   day: "numeric",
//                   month: "short",
//                 })}
//               </span>
//               <select
//                 value={time.hour}
//                 onChange={(e) => handleTimeChange("hour", e.target.value)}
//                 className="p-1 border rounded-md"
//               >
//                 {Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, "0")).map(
//                   (hour) => (
//                     <option key={hour} value={hour}>
//                       {hour}
//                     </option>
//                   )
//                 )}
//               </select>
//               <span>:</span>
//               <select
//                 value={time.minute}
//                 onChange={(e) => handleTimeChange("minute", e.target.value)}
//                 className="p-1 border rounded-md"
//               >
//                 {Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, "0")).map((minute) => (
//                   <option key={minute} value={minute}>
//                     {minute}
//                   </option>
//                 ))}
//               </select>
//               <select
//                 value={time.period}
//                 onChange={(e) => handleTimeChange("period", e.target.value)}
//                 className="p-1 border rounded-md"
//               >
//                 <option value="AM">AM</option>
//                 <option value="PM">PM</option>
//               </select>
//             </div>
//           )}
//         </div>
//       )}
//     </div>
//   );
// };

// export default DateTimePicker;

// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// type DateTimePickerProps = {
//   initialDate?: Date;
//   onDateChange: (date: Date | null) => void;
//   label?: string;
// };

// const DateTimePickers: React.FC<DateTimePickerProps> = ({initialDate, onDateChange,label}) => {
//   const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate || null);

//   const handleChange = (date: Date | null) => {
//     setSelectedDate(date);
//     onDateChange(date);
//   };

//   const [formData, setFormData] = useState({
//     date_time: ""
//   });

//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
//       {label && <label>{label}</label>}
//       <DatePicker
//         selected={selectedDate}
//         onChange={handleChange}
//         showTimeSelect
//         timeIntervals={1}
//         dateFormat="d MMMM yyyy, h:mm ss"
//         placeholderText="Select date and time"
//         isClearable
//         customInput={<input type="text" />}
//         className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
//       />
//     </div>
//   );
// };

// export default DateTimePickers;


// import React, { useState } from "react";
// import DatePicker from "react-datepicker";
// import "react-datepicker/dist/react-datepicker.css";

// type DateTimePickerProps = {
//   initialDate?: Date;
//   onDateChange: (date: Date | null) => void;
//   label?: string;
// };

// const DateTimePickers: React.FC<DateTimePickerProps> = ({
//   initialDate,
//   onDateChange,
//   label,
// }) => {
//   const [selectedDate, setSelectedDate] = useState<Date | null>(initialDate || null);

//   const [formData, setFormData] = useState({
//     date_time: ""
//   });

//   console.log(formData)

//   const handleChange = (date: Date | null) => {
//     setSelectedDate(date);
//     onDateChange(date);
    
//     if (date) {
//       // Update formData with the selected date and time
//       setFormData(prevData => ({
//         ...prevData,
//         date_time: date.toISOString(),
//       }));
//     }
//   };

//   return (
//     <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
//       {label && <label>{label}</label>}
//       <DatePicker
//         selected={selectedDate}
//         onChange={handleChange}
//         showTimeSelect
//         timeIntervals={1}
//         dateFormat="d MMMM yyyy, h:mm:ss"
//         placeholderText="Select date and time"
//         isClearable
//         customInput={<input type="text" />}
//         className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
//       />
//     </div>
//   );
// };

// export default DateTimePickers;



import React, { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const DateTimePickerWithForm: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [formData, setFormData] = useState({
    date_time: "",
  });

  console.log(formData);

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);

    if (date) {
      setFormData((prevData) => ({
        ...prevData,
        date_time: date.toISOString(),
      }));
    }
  };

  return (
    <div style={{ maxWidth: "500px", margin: "0 auto" }}>
      <h2>Form with DateTime Picker</h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        <label>Select Date and Time</label>
        <DatePicker
          selected={selectedDate}
          onChange={handleChange}
          showTimeSelect
          timeIntervals={1}
          dateFormat="d MMMM yyyy, h:mm:ss"
          placeholderText="Select date and time"
          isClearable
          customInput={<input type="text" />}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 text-sm focus:outline-none focus:ring-1 focus:ring-orange-500 focus:border-transparent"
        />
      </div>

      {/* <div>
        <h3>Form Data:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div> */}
    </div>
  );
};

export default DateTimePickerWithForm;
