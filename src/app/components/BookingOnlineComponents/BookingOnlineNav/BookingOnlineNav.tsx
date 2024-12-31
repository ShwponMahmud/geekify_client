import Image from "next/image";
import Link from "next/link";
import { LuPhoneCall } from "react-icons/lu";


function BookingOnlineNav() {
  return (
    <>
      <div className="booking_online_nav bg-primaryColor text-white h-[100px] grid content-center">
        <div className="container mx-auto flex justify-between content-center">
          <Link href={"/"}>
            <Image
              width={188}
              height={40}
              src="/logo_white.png"
              alt="Geekify logo"
            />
          </Link>

          <Link href={'tel:0291589800'}>
            <div className="text-[17px] font-semibold flex gap-2">
              <span className="mt-1 text-xl">
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
