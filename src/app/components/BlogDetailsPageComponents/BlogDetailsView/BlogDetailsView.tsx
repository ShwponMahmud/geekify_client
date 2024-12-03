import Image from "next/image";
import React from "react";
import blogBanner from "../../../../assets/images/why-choose-us-banner.jpg";

function BlogDetailsView() {
  return (
    <>
      <div className="blog_details_view_section py-8 md:py-14 lg:py-20">
        <div className="blog_details_view_heading mb-14">
          <h1 className="text-4xl text-deepGrayColor font-semibold">
            Why DIY Computer Repair is Not Practical | Geek Talks
          </h1>
          <p className="text-[20px] mt-4 text-primaryColor">
            Categories, April 14th, 2023
          </p>

          <div className="blog_details_view_banner pt-10">
            <Image className="rounded-[10px]" src={blogBanner} alt="blog banner" />
          </div>
        </div>

        <div className="blog_detail_view_content text-deepGrayColor">
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum eos
            quis reiciendis temporibus voluptate nemo molestiae provident esse
            reprehenderit. Illo, et minima! Aut, cupiditate voluptas
            reprehenderit eligendi sed voluptate accusamus voluptatum alias
            numquam placeat delectus laudantium doloremque debitis illo minima.
            reprehenderit. Illo, et minima! Aut, cupiditate voluptas
            reprehenderit eligendi sed voluptate accusamus voluptatum alias
            numquam placeat delectus laudantium doloremque debitis illo minima.
          </p>
          <h2 className="my-5 text-3xl font-semibold">
            1, Lorem, ipsum dolor sit amet consectetur dolorum.
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, exercitationem non facilis tempore esse eaque debitis
            et laudantium deleniti adipisci facere saepe? Quod dicta dignissimos
            ipsum ad aliquid sequi, consectetur soluta libero sapiente porro
            perspiciatis culpa, voluptatem officia a animi? Quae porro numquam
            explicabo, commodi voluptate reprehenderit adipisci qui distinctio.
          </p>
          <h2 className="my-5 text-3xl font-semibold">
            2, Lorem, ipsum dolor sit amet consectetur dolorum.
          </h2>

          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dignissimos, exercitationem non facilis tempore esse eaque debitis
            et laudantium deleniti adipisci facere saepe? Quod dicta dignissimos
            ipsum ad aliquid sequi, consectetur soluta libero sapiente porro
            perspiciatis culpa, voluptatem officia a animi? Quae porro numquam
            explicabo, commodi voluptate reprehenderit adipisci qui distinctio.
          </p>
        </div>
      </div>
    </>
  );
}

export default BlogDetailsView;
