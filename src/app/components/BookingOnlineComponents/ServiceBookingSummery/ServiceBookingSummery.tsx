import { LuPenSquare } from "react-icons/lu";

function ServiceBookingSummery() {
  return (
    <>
      <div className="service_booking_summery_section mt-5 ">
        <div className="container mx-auto text-deepGrayColor">
          <h1 className="text-3xl font-semibold text-center">Service Booking Summery </h1>
          <div className="w-[60%] mx-auto border p-5 rounded-lg mt-5">
            <li className="grid grid-cols-3 gap-2 list-disc mb-3">
              <b>Service Name:</b> <span>Data Recovery</span>{" "}
              <button className="justify-items-end">
                <LuPenSquare />
              </button>
            </li>
            <li className="grid grid-cols-3 gap-2 list-disc mb-3">
              <b>Platform:</b> <span>Windows</span>{" "}
            </li>
            <li className="grid grid-cols-3 gap-2 list-disc mb-3">
              <b>Note:</b> <span>test </span>{" "}
            </li>

            <hr className="mb-4" />
            <li className="grid grid-cols-3 gap-2 list-disc mb-3">
              <b>Require For:</b> <span>Home</span>{" "}
              <button className="justify-items-end">
                <LuPenSquare />
              </button>
            </li>
            <li className="grid grid-cols-3 gap-2 list-disc mb-3">
              <b>Delivery Type:</b> <span>Onsite</span>{" "}
            </li>
            <li className="grid grid-cols-3 gap-2 list-disc mb-3">
              <b>Parking Type:</b> <span>No Parking </span>{" "}
            </li>

            <hr className="mb-4" />
            <li className="grid grid-cols-3 gap-2 list-disc mb-3">
              <b>Name:</b> <span>Jhon</span>{" "}
              <button className="justify-items-end">
                <LuPenSquare />
              </button>
            </li>
            <li className="grid grid-cols-3 gap-2 list-disc mb-3">
              <b>Email:</b> <span>jhon@gmail.com</span>{" "}
            </li>
            <li className="grid grid-cols-3 gap-2 list-disc mb-3">
              <b>Phone:</b> <span>04000000000 </span>{" "}
            </li>

            <hr className="mb-4" />
            <li className="grid grid-cols-3 gap-2 list-disc mb-3">
              <b>Address:</b> <span>NSW Coastline cycleway </span>{" "}
              <button className="justify-items-end">
                <LuPenSquare />
              </button>
            </li>
            <li className="grid grid-cols-3 gap-2 list-disc mb-3">
              <b>Booking Schedule:</b> <span>2024-12-10 at 09:00 AM</span>{" "}
            </li>
            <li className="grid grid-cols-3 gap-2 list-disc mb-3">
              <b>Booking Duration:</b> <span>1 hour 30 min. </span>{" "}
            </li>

          </div>

          <div className="w-[60%] mx-auto flex justify-between mt-6">
          <button className="bg-primaryColor text-white rounded-md p-[10px]">Prev</button>
          <button className="bg-primaryColor text-white rounded-md p-[10px] ">Save & Continue</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ServiceBookingSummery;
