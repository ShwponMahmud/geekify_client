import Image from "next/image";
import React from "react";
import appImg from "../../../../../assets/images/Group 34559.png";
import googlePlayBtnIng from "../../../../../assets/images/Google download button.png";
import appStoreBtnImg from "../../../../../assets/images/Apple download button.png";

function GeekifyAppStore() {
  return (
    <>
      <div className="geekify_app_store_section bg-sectionBackgroundColor mt-28 pt-28">
        <div className="container mx-auto">
          <div className="geekify_app_store_content_container grid grid-cols-2 gap-10 ">
            <div className="mt-20">
              <h1 className="text-4xl font-semibold">
                Book Anytime, Anywhere: Download Geekify on App Store for free. 
              </h1>

              <p className="mt-10 text-grayColor">
                Find and book your appointment at any time and in any place with
                our Geekify customer app. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia id mollitia at ab fuga dolorum omnis deserunt! Reiciendis, earum laborum.
              </p>
              <div className="flex gap-5 mt-10">
                <Image height={50} src={googlePlayBtnIng} alt="" />
                <Image height={50} src={appStoreBtnImg} alt="" />
              </div>
            </div>
            <div className="justify-items-center">
              <Image src={appImg} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GeekifyAppStore;
