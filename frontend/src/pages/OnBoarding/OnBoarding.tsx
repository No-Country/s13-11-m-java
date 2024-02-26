import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

import { carouselItems, settings } from "./items";
import Slider from "react-slick";

import "./OnBoarding.css";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";

const Carousel: React.FC = () => {
  return (
    <div>
      <Slider {...settings} className="pb-2">
        {carouselItems.map(({ title, description, image, button }, index) => (
          <div key={index} className="px-8">
            <div className="h-min-screen-without-header grid grid-cols-1 items-center sm:container md:grid-cols-5">
              <div className="col-span-2 space-y-2 max-md:order-2 md:space-y-8">
                <h2 className="text-xl lg:text-3xl">{title}</h2>
                <p className="text-lg lg:text-2xl">{description}</p>
                {button && (
                  <Button className="w-full text-base" size="rounded" asChild tabIndex={-1}>
                    <Link to={button.link}>{button.title}</Link>
                  </Button>
                )}
              </div>
              <div className="mx-auto max-w-sm md:col-span-3 md:max-w-full">
                <img src={image} />
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;
