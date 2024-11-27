import React from "react";

function SearchService() {
  return (
    <>
      <div className="container mx-auto pt-28">
        <div className="flex justify-center items-center mb-8 md:mb-[52px]">
          <input
            type="search"
            className="w-[100%] md:w-[50%] lg:w-[30%] py-[6px] px-5 border-[3px] border-primaryColor rounded-l-[10px] font-semibold text-[17px] leading-[34px] text-[#20313B] focus:outline-none"
            placeholder="Find your service here"
          />
          <button
            style={{ clipPath: "polygon(100% -290%, 0% 100%, 100% 100%)" }}
            className="py-[13.6px] w-[180px] text-right ml-[-50px] px-8 bg-primaryColor text-white font-bold text-[22px] leading-[25px] rounded-r-[10px] clip-path-[polygon(100%_25%,0%_100%,100%_100%)]"
          >
            Search
          </button>
        </div>
      </div>
    </>
  );
}

export default SearchService;
