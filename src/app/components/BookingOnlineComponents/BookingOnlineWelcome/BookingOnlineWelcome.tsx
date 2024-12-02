import Image from "next/image";

function BookingOnlineWelcome() {
  return (
    <>
      <div className="booking_online_welcome">
        <div className="container mx-auto justify-items-center">
          <div className="h-[80vh] grid content-center text-center">
            <div className="justify-items-center">
              <Image
                width={288}
                height={62}
                src="/logo.png"
                alt="Geekify logo"
              />

              <h1 className="mt-[50px] text-4xl font-semibold text-deepGrayColor">
                Welcome to Geekify!
              </h1>
              <button className="bg-primaryColor border border-primaryColor py-[10px] px-[20px] rounded-[7px] text-white mt-[40px] hover:bg-white hover:text-primaryColor transition-[.5s]">
                Start Booking
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingOnlineWelcome;
