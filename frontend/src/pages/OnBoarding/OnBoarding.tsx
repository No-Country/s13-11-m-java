import { Link } from "react-router-dom";
import Slider, { Settings } from "react-slick";

import { Button } from "@/components/ui/button";

import { carouselItems } from "./items";

import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import "./OnBoarding.css";

const settings: Settings = {
  dots: true,
  infinite: true,
  speed: 700,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  // autoplay: true,
  // autoplaySpeed: 5000,
};

const Carousel: React.FC = () => {
  return (
    <div className="px-8">
      <Slider {...settings} className="pb-2">
        {carouselItems.map((item, index) => (
          <div key={index}>
            <div className="h-min-screen-without-header grid grid-cols-1 items-center sm:container md:grid-cols-5">
              <div className="col-span-2 space-y-2 max-md:order-2 md:space-y-8">
                <h2 className="text-xl lg:text-3xl">{item.title}</h2>
                <p className="text-lg lg:text-2xl">{item.description}</p>
                {item.button && (
                  <Button className="w-full text-base" size="rounded" asChild>
                    <Link to={item.button.link}>{item.button.title}</Link>
                  </Button>
                )}
              </div>
              <div className="col-span-3 mx-auto max-w-sm md:max-w-full">
                <img src={item.image} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
