import React from "react";
import blogImg from "../../../../assets/images/why-choose-us-banner.jpg";
import Image from "next/image";
import Link from "next/link";

function BlogsView() {
  return (
    <>
      <div className="blogs_view_section pb-8 md:pb-14 lg:pb-20 xl:pb-28">
        <div className="container mx-auto">
          <div className="our_latest_blog_content_container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
           <Link href="/blogs/1">
           <div className="our_latest_blog_content_card p-3 shadow-boxShadow hover:shadow-hoverBoxShadow hover:transition-[.5s] rounded-md ">
              <Image src={blogImg} alt="" className="rounded-md" />

              <div className="flex justify-between my-4 text-primaryColor">
                <div className="category cursor-pointer">Category</div>
                <div className="date">25/11/2024</div>
              </div>
              <p className="text-sm pb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                mollitia animi dolorem, id quos dicta. Officia, similique amet
                qui, incidunt temporibus illum quibusdam dolores ipsa, excepturi
                sapiente vel. Quibusdam, perferendis?
              </p>
            </div>
           </Link>
            <div className="our_latest_blog_content_card p-3 shadow-boxShadow hover:shadow-hoverBoxShadow hover:transition-[.5s] rounded-md ">
              <Image src={blogImg} alt="" className="rounded-md" />

              <div className="flex justify-between my-4 text-primaryColor">
                <div className="category cursor-pointer">Category</div>
                <div className="date">25/11/2024</div>
              </div>
              <p className="text-sm pb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                mollitia animi dolorem, id quos dicta. Officia, similique amet
                qui, incidunt temporibus illum quibusdam dolores ipsa, excepturi
                sapiente vel. Quibusdam, perferendis?
              </p>
            </div>
            <div className="our_latest_blog_content_card p-3 shadow-boxShadow hover:shadow-hoverBoxShadow hover:transition-[.5s] rounded-md ">
              <Image src={blogImg} alt="" className="rounded-md" />

              <div className="flex justify-between my-4 text-primaryColor">
                <div className="category cursor-pointer">Category</div>
                <div className="date">25/11/2024</div>
              </div>
              <p className="text-sm pb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                mollitia animi dolorem, id quos dicta. Officia, similique amet
                qui, incidunt temporibus illum quibusdam dolores ipsa, excepturi
                sapiente vel. Quibusdam, perferendis?
              </p>
            </div>
            <div className="our_latest_blog_content_card p-3 shadow-boxShadow hover:shadow-hoverBoxShadow hover:transition-[.5s] rounded-md ">
              <Image src={blogImg} alt="" className="rounded-md" />

              <div className="flex justify-between my-4 text-primaryColor">
                <div className="category cursor-pointer">Category</div>
                <div className="date">25/11/2024</div>
              </div>
              <p className="text-sm pb-3">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                mollitia animi dolorem, id quos dicta. Officia, similique amet
                qui, incidunt temporibus illum quibusdam dolores ipsa, excepturi
                sapiente vel. Quibusdam, perferendis?
              </p>
            </div>
           
           
          </div>
          <div className="our_blog_see_more_btn_container flex justify-center mt-14">
            <button className="text-[16px] font-semibold border border-primaryColor hover:bg-primaryColor text-primaryColor hover:text-white rounded-[10px] transition-[.5s] py-3 px-8">
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogsView;
