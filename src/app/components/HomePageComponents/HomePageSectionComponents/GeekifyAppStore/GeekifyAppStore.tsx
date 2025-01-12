import Image from "next/image";
import React from "react";
import appImg from "../../../../../assets/images/Group 34559.png";
import googlePlayBtnIng from "../../../../../assets/images/Google download button.png";
import appStoreBtnImg from "../../../../../assets/images/Apple download button.png";
import Link from "next/link";

function GeekifyAppStore() {
  return (
    <>
      <div className="geekify_app_store_section bg-sectionBackgroundColor pt-8 md:pt-14 lg:pt-20 xl:pt-28">
        <div className="container mx-auto">
          <div className="geekify_app_store_content_container grid lg:grid-cols-2 gap-10 ">
            <div>
              <h1 className="text-3xl lg:text-5xl font-semibold">
                Book Anytime, Anywhere:{" "}
                <span className="text-primaryColor">
                  Download Geekify on App Store for free.
                </span>
              </h1>

              <p className="mt-10">
                Find and book your appointment at any time and in any place with
                our Geekify customer app.
              </p>
              <div className="flex gap-5 mt-10">
                <Link href="https://play.google.com/store/apps/details?id=com.krazyit.geekify">
                  <Image height={50} src={googlePlayBtnIng} alt="" />
                </Link>
                <Link href="https://apps.apple.com/us/app/geekify-technologies-by-geeks/id1665418506">
                  <Image height={50} src={appStoreBtnImg} alt="" />
                </Link>
              </div>
            </div>
            <div className="justify-items-center">
              <Image
                src={"/phone-frame.png"}
                width={512}
                height={400}
                className="w-auto h-auto lg:h-[500px]"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default GeekifyAppStore;
