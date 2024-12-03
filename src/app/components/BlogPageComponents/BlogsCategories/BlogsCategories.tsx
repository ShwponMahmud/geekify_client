import React from "react";

const blogsCategories = [
  {
    id: 1,
    categoryName: "Tips for good computer health",
  },
  {
    id: 2,
    categoryName: "Email configuration",
  },
  {
    id: 3,
    categoryName: "Cyber security",
  },
  {
    id: 4,
    categoryName: "Technical service",
  },
  {
    id: 2,
    categoryName: "Email configuration",
  },
  {
    id: 3,
    categoryName: "Cyber security",
  },
  
];
function BlogsCategories() {
  return (
    <>
      <div className="blog_category_filter_section py-8 md:py-14 lg:py-20">
        <div className="container mx-auto">
          <div className="flex flex-col sm:flex-wrap sm:flex-row gap-5">
            {blogsCategories.map((category) => (
              <div className="border borderColor py-3 px-5 rounded-3xl cursor-pointer hover:border-primaryColor hover:text-primaryColor transition-[.5s]">{category.categoryName}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogsCategories;
