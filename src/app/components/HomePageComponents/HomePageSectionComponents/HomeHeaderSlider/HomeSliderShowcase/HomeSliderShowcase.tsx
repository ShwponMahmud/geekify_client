import QuickLink from "../QuickLink/QuickLink";
import Slider from "../Slider/Slider";
import TextSlider from "../TextSlider/TextSlider";
import "./HomeSliderShowcase.css";

const HomeSliderShowcase: React.FC = () => {
  return (
    <>
      <div className="showcase_section mt-[100px]">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-4 ">
          <div className="mt-10 lg:mt-28 xxl:mt-40">
            <TextSlider/>
          </div>
          <div>
            <Slider />
          </div>
        </div>
      </div>

      <QuickLink />
    </>
  );
};

export default HomeSliderShowcase;
