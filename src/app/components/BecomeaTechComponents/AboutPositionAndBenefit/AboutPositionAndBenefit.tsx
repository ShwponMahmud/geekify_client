import Image from "next/image";
import benefitBanner1 from "../../../../assets/images/benefitsBanner.jpg";
import benefitBanner2 from "../../../../assets/images/benefitsBanner2.png";

function AboutPositionAndBenefit() {
  return (
    <>
      <div className="about_position_benefit_section py-8 md:py-14 lg:py-20 xl:py-28">
        <div className="container mx-auto">
          <div className="about_position_content">
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold pb-5">
              Looking for a future in the tech industry?
            </h2>
            <p className="lg:text-xl">
              Geekify offers a flexible and interactive working and learning environment. Our techs get regular support from us and get to work in their desired time frames. Work with a team of experienced techs, 
              in a vast platform that keeps you on your toes with variety and intensity of tasks, every day is an adventure!
            </p>
          </div>
          <div className="benefits_content pt-24 pb-0 xl:pb-16 xl:pt-36 grid grid-cols-1  lg:grid-cols-2 gap-10 xl:gap-20 items-center">
            <div className="border-[5px] border-primaryColor w-[70%] h-[70%] xl:w-[450px] xl:h-[300px]  ml-[10%] mt-[10%]">
              <Image
                className="ml-[-60px] mt-[-80px] rounded-xl"
                width={450}
                src={benefitBanner1}
                alt=""
              />
              <Image
                className="ml-[50px] md:ml-[150px] lg:ml-[50px] xl:ml-[60px] mt-[-85px] md:mt-[-140px] rounded-xl"
                width={450}
                src={benefitBanner2}
                alt=""
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold pb-5">
                Your Benefits
              </h2>
              <ul className="list-disc pl-5">
                <li>Support from an experienced team of helpers</li>
                <li>A lucrative remuneration</li>
                <li>An opportunity to advance your career in the tech industry</li>
                <li>And much more!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPositionAndBenefit;
