import Image from "next/image";
import Link from "next/link";
import { LuPhoneCall } from "react-icons/lu";


function BookingOnlineNav() {
  return (
    <>
      <div className="booking_online_nav bg-primaryColor text-white h-[100px] grid content-center">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <Link href={"/"}>
            <Image
              width={500}
              height={300}
              src="/logo_white.png"
              alt="Geekify logo"
              className="w-[188px] h-[40px] lg:w-[300px] lg:h-[65px]"
            />
          </Link>

          <div className="w-[90%] h-[0.1px] bg-gray-100 my-[6px] md:hidden"></div>

          <Link href={'tel:0291589800'}>
            <div className="text-xl lg:text-2xl font-semibold flex gap-2">
              <span className="mt-1 text-xl lg:text-2xl">
                <LuPhoneCall />
              </span>{" "}
              02 9158 9800
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}

export default BookingOnlineNav;
