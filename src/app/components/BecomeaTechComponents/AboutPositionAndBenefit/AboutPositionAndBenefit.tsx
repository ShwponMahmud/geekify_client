import Image from "next/image";
import benefitBanner1 from "../../../../assets/images/benefitsBanner.jpg";

function AboutPositionAndBenefit() {
  return (
    <>
      <div className="about_position_benefit_section py-28">
        <div className="container mx-auto">
          <div className="about_position_content">
            <h2 className="text-3xl font-bold mb-5">About This Position</h2>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Aspernatur sint velit nobis dolore in maiores. Recusandae
              inventore non quidem provident corporis repellendus nam impedit,
              error sequi quas velit consectetur, quia nemo quo nesciunt rem
              voluptates. Suscipit inventore ea veritatis dolore.
            </p>
          </div>
          <div className="benefits_content pt-36 pb-16 grid grid-cols-2 gap-5 ">
            <div className="border-[1px] bg-primaryColor w-[600px] h-[600px] rounded-xl ml-[10%]">
              <Image className="ml-[150px] mt-[-50px] rounded-xl" width={500} src={benefitBanner1} alt="" />
              <Image className="ml-[-50px] mt-[30px] rounded-xl" width={500} src={benefitBanner1} alt="" />
            </div>
            <div>
              <h2 className="text-3xl font-bold mb-5">Your Benefits</h2>
              <p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus suscipit delectus itaque ullam, error necessitatibus,
              ducimus sit explicabo animi similique tenetur deserunt qui tempore
              minus ratione optio dolores nobis? Laudantium sed odio commodi
              facere quos, eligendi ut sapiente inventore modi! Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus suscipit delectus itaque ullam, error necessitatibus,
              ducimus sit explicabo animi similique tenetur deserunt qui tempore
              minus ratione optio dolores nobis? Laudantium sed odio commodi
              facere quos, eligendi ut sapiente inventore modi!
							</p>
							<br />
              <p>
							Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus suscipit delectus itaque ullam, error necessitatibus,
              ducimus sit explicabo animi similique tenetur deserunt qui tempore
              minus ratione optio dolores nobis? Laudantium sed odio commodi
              facere quos, eligendi ut sapiente inventore modi!
							</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutPositionAndBenefit;
