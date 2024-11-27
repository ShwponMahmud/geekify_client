import Image from "next/image";
import React from "react";
import authorImg from "../../../../assets/images/7bc2ca5c030903428305bc9213da60ad.jpg";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn, FaInstagram, FaXTwitter } from "react-icons/fa6";

function BlogAuthorAboutDetails() {
  return (
    <>
      <div className="max-w-[50%] blog_author_about_details_section border border-borderColor p-[30px] rounded-[10px] ">
        <div className="author_about flex gap-5">
          <div className="author_avatar border-2 border-primaryColor rounded-[50%] h-[70px] w-[200px] overflow-hidden ">
            <Image src={authorImg} className="h-[70px] w-[200px]" alt="" />
          </div>
          <div className="author_name mt-[5px]">
            <h5 className="text-grayColor ">ABOUT THE AUTHOR</h5>
            <h3 className="text-[25px] text-darkColor font-semibold">
              Author Name
            </h3>
            <div className="author_description mt-5 text-deepGrayColor">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet
                labore recusandae corrupti quaerat enim dolor perferendis
                sapiente architecto libero sunt autem non, commodi velit
                aliquid, quod quos facere vel laudantium?
              </p>
            </div>
            <div className="flex items-center gap-5">
              <button className="mt-5 border border-primaryColor rounded-3xl py-2 px-7 text-[15px] hover:bg-primaryColor hover:text-white transition-[.5s]">
                Lets Chat
              </button>
              <div className="author_social mt-4">
                <div className="flex space-x-[25px]">
                  {/* Social Media Icons */}
                  <a
                    href="#"
                    className="w-[30px] h-[30px] rounded-[5px] bg-primaryColor text-[#ffffff] flex justify-center items-center"
                  >
                    <FaFacebookF />
                  </a>
                  <a
                    href="#"
                    className="w-[30px] h-[30px] rounded-[5px] bg-primaryColor text-[#ffffff] flex justify-center items-center"
                  >
                    <FaLinkedinIn />
                  </a>
                  <a
                    href="#"
                    className="w-[30px] h-[30px] rounded-[5px] bg-primaryColor text-[#ffffff] flex justify-center items-center"
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href="#"
                    className="w-[30px] h-[30px] rounded-[5px] bg-primaryColor text-[#ffffff] flex justify-center items-center"
                  >
                    <FaXTwitter />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BlogAuthorAboutDetails;
