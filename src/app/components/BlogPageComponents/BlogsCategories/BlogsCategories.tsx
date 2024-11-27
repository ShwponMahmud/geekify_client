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
      <div className="blog_category_filter_section py-20">
        <div className="container mx-auto">
          <div className="flex justify-between">
            {blogsCategories.map((category) => (
              <div className="border borderColor py-3 px-10 rounded-3xl cursor-pointer hover:border-primaryColor hover:text-primaryColor transition-[.5s]">{category.categoryName}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogsCategories;
