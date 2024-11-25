import Image from "next/image";
import React from "react";
import blogThumnail from "../../../../../assets/images/why-choose-us-banner.jpg";
function OurLatestBlogs() {
  return (
    <div>
      <div className="our_latest_blogs_section py-40">
        <div className="container mx-auto">
          <div className="our_latest_blogs_heading_container w-120 m-auto text-center mb-12">
            <h1 className="text-4xl font-bold mb-5">Our latest Blogs</h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum
              autem reiciendis corporis amet, maxime placeat harum doloribus
              odit, corrupti, explicabo laboriosam iure commodi quidem quod!
            </p>
          </div>

          <div className="our_latest_blog_content_container grid grid-cols-3 gap-6">
            <div className="our_latest_blog_content_card py-4 px-5 shadow-boxShadow hover:shadow-hoverBoxShadow hover:transition-all rounded-md ">
              <Image src={blogThumnail} alt="" className="rounded-md" />
              <div className="flex justify-between my-4 text-primaryColor">
                <div className="category cursor-pointer">Category</div>
                <div className="date">25/11/2024</div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                mollitia animi dolorem, id quos dicta. Officia, similique amet
                qui, incidunt temporibus illum quibusdam dolores ipsa, excepturi
                sapiente vel. Quibusdam, perferendis?
              </p>
            </div>
            <div className="our_latest_blog_content_card py-4 px-5 shadow-boxShadow hover:shadow-hoverBoxShadow hover:transition-all rounded-md">
              <Image src={blogThumnail} alt="" className="rounded-md" />
              <div className="flex justify-between my-4 text-primaryColor">
                <div className="category cursor-pointer">Category</div>
                <div className="date">25/11/2024</div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                mollitia animi dolorem, id quos dicta. Officia, similique amet
                qui, incidunt temporibus illum quibusdam dolores ipsa, excepturi
                sapiente vel. Quibusdam, perferendis?
              </p>
            </div>
            <div className="our_latest_blog_content_card py-4 px-5 shadow-boxShadow hover:shadow-hoverBoxShadow hover:transition-all rounded-md">
              <Image src={blogThumnail} alt="" className="rounded-md" />
              <div className="flex justify-between my-4 text-primaryColor">
                <div className="category cursor-pointer">Category</div>
                <div className="date">25/11/2024</div>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla
                mollitia animi dolorem, id quos dicta. Officia, similique amet
                qui, incidunt temporibus illum quibusdam dolores ipsa, excepturi
                sapiente vel. Quibusdam, perferendis?
              </p>
            </div>
          </div>
          <div className="our_blog_see_more_btn_container flex justify-center mt-14">
          <button className="bg-primaryColor text-white border-none rounded py-3 px-8">See More</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurLatestBlogs;
