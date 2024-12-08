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
              About This Position
            </h2>
            <p className="lg:text-xl">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur sint velit nobis dolore in maiores. Recusandae
              inventore non quidem provident corporis repellendus nam impedit,
              error sequi quas velit consectetur, quia nemo quo nesciunt rem
              voluptates. Suscipit inventore ea veritatis dolore.
            </p>
          </div>
          <div className="benefits_content pt-24 pb-0 xl:pb-16 xl:pt-36 grid grid-cols-1  lg:grid-cols-2 gap-20 xl:gap-10">
            <div className="border-[5px] border-primaryColor w-[70%] h-[70%] xl:w-[450px] xl:h-[300px]  ml-[10%] mt-[10%]">
              <Image
                className="ml-[-60px] mt-[-80px] rounded-xl"
                width={450}
                src={benefitBanner1}
                alt=""
              />
              <Image
                className="ml-[50px] md:ml-[150px] lg:ml-[150px] xl:ml-[60px] mt-[-140px] rounded-xl"
                width={450}
                src={benefitBanner2}
                alt=""
              />
            </div>
            <div>
              <h2 className="text-2xl md:text-3xl lg:text-5xl font-semibold pb-5">
                Your Benefits
              </h2>
              <p className="lg:text-xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus suscipit delectus itaque ullam, error necessitatibus,
                ducimus sit explicabo animi similique tenetur deserunt qui
                tempore minus ratione optio dolores nobis? Laudantium sed odio
                commodi facere quos, eligendi ut sapiente inventore modi! Lorem.
              </p>
              <br />
              <p className="lg:text-xl">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Temporibus suscipit delectus itaque ullam, error necessitatibus,
                ducimus sit explicabo animi similique tenetur deserunt qui.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPositionAndBenefit;
