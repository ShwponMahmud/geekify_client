import React from "react";
import blogImg from "../../../../assets/images/why-choose-us-banner.jpg";
import Image from "next/image";

function BlogsView() {
  return (
    <>
      <div className="blogs_view_section">
        <div className="container mx-auto">
          <div className="our_latest_blog_content_container grid grid-cols-4 gap-6">
            <div className="our_latest_blog_content_card p-3 shadow-boxShadow hover:shadow-hoverBoxShadow hover:transition-all rounded-md ">
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
            <div className="our_latest_blog_content_card p-3 shadow-boxShadow hover:shadow-hoverBoxShadow hover:transition-all rounded-md ">
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
            <div className="our_latest_blog_content_card p-3 shadow-boxShadow hover:shadow-hoverBoxShadow hover:transition-all rounded-md ">
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
            <div className="our_latest_blog_content_card p-3 shadow-boxShadow hover:shadow-hoverBoxShadow hover:transition-all rounded-md ">
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
            <div className="our_latest_blog_content_card p-3 shadow-boxShadow hover:shadow-hoverBoxShadow hover:transition-all rounded-md ">
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
            <div className="our_latest_blog_content_card p-3 shadow-boxShadow hover:shadow-hoverBoxShadow hover:transition-all rounded-md ">
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
            <div className="our_latest_blog_content_card p-3 shadow-boxShadow hover:shadow-hoverBoxShadow hover:transition-all rounded-md ">
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
            <div className="our_latest_blog_content_card p-3 shadow-boxShadow hover:shadow-hoverBoxShadow hover:transition-all rounded-md ">
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
            <button className="bg-primaryColor text-white border-none rounded py-3 px-8">
              See More
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogsView;
