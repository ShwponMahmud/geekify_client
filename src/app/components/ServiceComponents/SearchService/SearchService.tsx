"use client";

import { useAppDispatch } from "@/app/rtk-state/hooks";
import { useForm, SubmitHandler } from "react-hook-form";
import { searchServiceByName } from "@/app/rtk-state/reducers/serviceSlice";

type FormData = {
  search: string;
};

function SearchService() {
  const dispatch = useAppDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    const normalizedSearchQuery = data?.search?.trim().toLowerCase();
    dispatch(searchServiceByName(normalizedSearchQuery));

    reset();
  };

  return (
    <>
      <div className="container mx-auto pt-8 md:pt-14 lg:pt-20 xl:pt-28">
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex justify-center items-center mb-5 xl:mb-[52px]">
            <input
              type="text"
              {...register("search")}
              className="w-[100%] sm:w-[55%] md:w-[50%] lg:w-[40%] xl:w-[30%] py-[6px] px-3 border-[3px] border-primaryColor rounded-l-[10px]  text-[15px] leading-[34px] text-[#20313B] focus:outline-none"
              placeholder="Find your service here"
            />
            <button
              type="submit"
              style={{ clipPath: "polygon(100% -290%, 0% 100%, 100% 100%)" }}
              className="pt-[14px] pb-[13px] w-[150px] md:w-[180px] text-right ml-[-50px] px-8 bg-primaryColor text-white text-xl leading-[25px] font-medium rounded-r-[10px] clip-path-[polygon(100%_25%,0%_100%,100%_100%)]"
            >
              Search
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

export default SearchService;
