import Image from "next/image";
import React from "react";
import blogBanner from "../../../../assets/images/why-choose-us-banner.jpg";

interface Blog {
  id: number;
  title: string;
  slug: string;
  read_time: string;
  read_count: number;
  is_featured: string;
  status: string;
  description: string | undefined;
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

interface BlogDetailsProps {
  blog: Blog | null;
}

const BlogDetailsView = async ({ blog }: BlogDetailsProps) => {
  return (
    <>
      <div className="blog_details_view_section py-8 md:py-14 lg:py-20">
        <div className="blog_details_view_heading mb-14">
          <h1 className="text-4xl text-deepGrayColor font-semibold">
            {blog?.title}
          </h1>
          <p className=" mt-4">
            <span className="text-[20px] font-semibold text-primaryColor">
              Category: {blog?.blogCategory?.name}{" "}
            </span>
            , {blog?.created_at}
          </p>

          <div className="blog_details_view_banner pt-10">
            <Image
              className="rounded-[10px]"
              src={blogBanner}
              alt="blog banner"
            />
          </div>
        </div>

        <div className="blog_detail_view_content text-deepGrayColor">
          {/* dangerouslySetInnerHTML={{ __html: blog?.description ?? "",}} */}
        </div>
      </div>
    </>
  );
};

export default BlogDetailsView;
