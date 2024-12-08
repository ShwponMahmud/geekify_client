import { baseUrl } from "@/assets/baseUrl";
import BlogCategoryBtn from "./BlogCategoryBtn";
import BlogSearch from "../BlogSearch/BlogSearch";

interface BlogCategories {
  id: number;
  name: string;
  slug: string;
  status: string;
}

async function BlogsCategories() {
  let blogsCategories: BlogCategories[] = [];

  try {
    const response = await fetch(`${baseUrl}/blog-categories`, {
      headers: {
        "Cache-Control": "no-cache",
        "Content-Type": "application/json",
        "Client-Secret": `secret`,
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch blogs categories");
    }

    const responseData = await response.json();
    blogsCategories = responseData.data || [];
  } catch (error) {
    console.error("Error fetching blogs categories:", error);
  }

  return (
    <>
      <div className="blog_category_filter_section py-8 md:py-14 lg:py-20">
        <div className="container mx-auto">
          <div className="">
            <div className="flex justify-between overflow-hidden items-center mb-5 ">
              <small>Search By Blogs Category:</small>
              <BlogSearch />
            </div>
            <div className="flex flex-col sm:flex-wrap sm:flex-row gap-4">
              {blogsCategories.map((category) => (
                <BlogCategoryBtn category={category} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogsCategories;
