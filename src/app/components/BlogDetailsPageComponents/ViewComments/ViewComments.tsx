import Image from "next/image";
import React from "react";
import authorImg from "../../../../assets/images/smart-women.jpg";
import "./ViewComments.css";
function ViewComments() {
  return (
    <>
      <div className="view_comments_section_container pt-10">
        <h2 className="text-[30px] font-bold text-deepGrayColor py-2">
          Comments (40)
        </h2>
        <hr />

        <div className="comments_content_view mt-10">
          <div className="max-w-[800px] blog_author_about_details_section ">
            <div className="author_about flex gap-5">
              <div>
                <div className="author_avatar">
                  <Image src={authorImg} alt="" />
                </div>
                <span></span>
              </div>
              <div className="author_name mt-[5px]">
                <h3 className="text-[25px] text-darkColor font-semibold">
                  Name
                </h3>
                <small className="text-grayColor ">
                  April 26th, 2025 at 2:46 PM
                </small>
                <div className="author_description mt-3 text-deepGrayColor">
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eveniet labore recusandae corrupti quaerat enim dolor
                    perferendis sapiente architecto libero sunt autem non,
                    commodi velit aliquid, quod quos facere vel laudantium?
                  </p>
                </div>
                <div className="flex items-center gap-5">
                  <button className="mt-5 border border-primaryColor bg-primaryColor text-white hover:bg-white hover:text-primaryColor rounded-3xl py-2 px-7 text-[15px] transition-[.5s]">
                    Replay
                  </button>
                  <div className="text-2xl font-semibold bg-primaryColor rounded-[50%] py-[5px] px-[13px] text-white mt-5">0</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ViewComments;
