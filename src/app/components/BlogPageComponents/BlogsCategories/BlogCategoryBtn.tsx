"use client";

import { useAppDispatch } from "@/app/rtk-state/hooks";
import { pickCategory } from "@/app/rtk-state/reducers/categorySlice";


function BlogCategoryBtn({ category }: any) {
  const dispatch = useAppDispatch()

  const handlePickCategorySlug = (categorySlug: string) => {
    dispatch(pickCategory(categorySlug))
  };

  return (
    <>
      <button
        onClick={(e) => handlePickCategorySlug(category.slug)}
        className="border borderColor py-3 px-5  text-[14px] rounded-3xl cursor-pointer hover:border-primaryColor hover:text-primaryColor transition-[.5s]"
      >
        {category.name}
      </button>
    </>
  );
}

export default BlogCategoryBtn;
