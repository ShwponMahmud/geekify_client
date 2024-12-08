import { baseUrl } from "@/assets/baseUrl";
import BlogView from "./BlogsView/BlogView";

interface Blog {
  id: number;
  title: string;
  slug: string;
  read_time: string;
  read_count: number;
  is_featured: string;
  status: string;
  description: string;
  created_at: string;
  updated_at: string;
  image: string;
  thumbnail: string;
  meta_data: string;
  blogCategory: {
    id: number;
    name: string;
    slug: string;
    status: string;
  };
}

const BlogsView = async () => {
  let blogs: Blog[] = [];

  try {
    const response = await fetch(
      `${baseUrl}/blogs?with_relation[]= media&with_relation[]= blogCategory`,
      {
        headers: {
          "Cache-Control": "no-cache",
          "Content-Type": "application/json",
          "Client-Secret": `secret`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const responseData = await response.json();
    blogs = responseData.data || [];
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }




  return (
    <>
      <div className="blogs_view_section pb-8 md:pb-14 lg:pb-20 xl:pb-28">
        <div className="container mx-auto">
          {/* <div className="our_latest_blog_content_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {blogs?.map((blog) => (
              <Link href={`/blogs/${blog.slug}`}>
                {blog ? (
                  <div className="our_latest_blog_content_card  shadow-boxShadow hover:shadow-hoverBoxShadow hover:transition-[.5s] rounded-md ">
                    <div className="w-[100%] h-[200px] overflow-hidden relative border-b">
                      <Image
                        width={350}
                        height={300}
                        src={blog?.thumbnail}
                        alt="blog"
                        className="rounded-md "
                      />
                    </div>

                    <div className="p-4 ">
                      <h2 className="text-[15px] font-semibold text-gray-900">
                        {blog?.title}
                      </h2>
                      <div className=" mt-5 ">
                        <div className="category cursor-pointer text-[14px] mb-3">
                          <b className="text-primaryColor">Category:</b>{" "}
                          {blog?.blogCategory?.name}
                        </div>
                        <div className="date text-[14px]">
                          <b className="text-primaryColor">Created Date:</b>{" "}
                          {blog?.created_at}
                        </div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <Skeleton borderRadius="8px" />
                )}
              </Link>
            ))}
          </div> */}

          <BlogView blogs={blogs}/>
          
          <div className="our_blog_see_more_btn_container flex justify-center mt-14">
            <button className="text-[16px] font-semibold border border-primaryColor hover:bg-primaryColor text-primaryColor hover:text-white rounded-[10px] transition-[.5s] py-3 px-8">
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogsView;
