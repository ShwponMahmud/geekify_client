import Image from "next/image";
import React from "react";
import blogThumnail from "../../../../../assets/images/why-choose-us-banner.jpg";
import { baseUrl } from "@/assets/baseUrl";
import Link from "next/link";

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

const OurLatestBlogs = async () => {
  let blogs: Blog[] = [];

  try {
    const response = await fetch(
      `${baseUrl}/blogs?with_relation[]= media&with_relation[]= blogCategory`,
      {
        headers: {
          "Content-Type": "application/json",
          "Client-Secret": `secret`,
        },
      }
    );

    if (!response.ok) {
      throw new Error("Failed to fetch blogs");
    }

    const responseData = await response.json();
    blogs = (responseData.data || []).slice(0, 6);
  } catch (error) {
    console.error("Error fetching blogs:", error);
  }

  return (
    <div>
      <div className="our_latest_blogs_section py-8 md:py-14 lg:py-20 xl:py-28">
        <div className="container mx-auto">
          <div className="our_latest_blogs_heading_container w-full lg:w-120 m-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-5">Our latest Blogs</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              autem reiciendis corporis amet, maxime placeat harum doloribus
              odit, corrupti, explicabo laboriosam iure commodi quidem quod!
            </p>
          </div>

          <div className="our_latest_blog_content_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div className=" our_latest_blog_content_card shadow-boxShadow hover:shadow-hoverBoxShadow hover:transition-all rounded-md ">
                <div className="w-[100%] h-[250px] overflow-hidden relative border-b">
                  <Image
                    width={600}
                    height={300}
                    src={blog?.thumbnail}
                    alt="blog"
                    className="rounded-md "
                  />
                </div>
                <div className="p-4 ">
                  <h2 className="text-[18px] font-semibold text-gray-900">{blog?.title}</h2>
                  <div className=" mt-5 ">
                    <div className="category cursor-pointer text-[14px] mb-3">
                      <b className="text-primaryColor">Category:</b> {blog?.blogCategory?.name}
                    </div>
                    <div className="date text-[14px]"><b className="text-primaryColor">Created Date:</b> {blog?.created_at}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="our_blog_see_more_btn_container flex justify-center mt-14">
            <Link href={"/blogs"}>
            <button className="bg-primaryColor text-white rounded py-3 px-8 hover:bg-white hover:text-primaryColor border border-primaryColor transition-[.5s]">
              See More
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurLatestBlogs;
