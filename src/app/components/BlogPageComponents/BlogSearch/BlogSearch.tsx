"use client";

import { useAppDispatch } from "@/app/rtk-state/hooks";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { pickBlogCategoryByName } from "@/app/rtk-state/reducers/categorySlice";

type FormData = {
  search: string;
};

export default function BlogSearch() {
  const dispatch = useAppDispatch()
  const [isHovered, setIsHovered] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit: SubmitHandler<FormData> = (data) => {
    // dispatch(pickBlogCategoryByName(data?.search));
    const normalizedSearchQuery = data?.search?.trim().toLowerCase();
    dispatch(pickBlogCategoryByName(normalizedSearchQuery)); 
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div
        className={`flex items-center justify-end ${
          isHovered ? "w-[256px]" : "w-24"
        }`}
      >
        <div
          className={`flex items-center bg-white border-2 border-orange-500 rounded-full overflow-hidden transition-all duration-500 ${
            isHovered ? "w-64" : "w-24 contents"
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <input
            type="text"
            placeholder="Search"
            {...register("search")}
            className={`flex-grow bg-none outline-none text-sm text-gray-700 px-4 transition-opacity duration-500 ${
              isHovered ? "w-64 opacity-100" : "w-5 opacity-0"
            }`}
          />

          <button
            type="submit"
            className={` bg-orange-500 w-24 h-12 flex justify-center items-center text-white rounded-full`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11 19a8 8 0 100-16 8 8 0 000 16zm6-6l4 4"
              />
            </svg>
          </button>
        </div>
      </div>
    </form>
  );
}
