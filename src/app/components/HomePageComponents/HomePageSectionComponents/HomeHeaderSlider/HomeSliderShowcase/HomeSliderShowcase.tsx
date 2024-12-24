import QuickLink from "../QuickLink/QuickLink";
import Slider from "../Slider/Slider";
import TextSlider from "../TextSlider/TextSlider";
import "./HomeSliderShowcase.css";

const HomeSliderShowcase: React.FC = () => {
  return (
    <>
      <div>
        <div className="w-full">
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
