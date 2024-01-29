import Slider from "react-slick";
import Banners from "../Api/banners.json";
import { useState, useEffect } from "react";
import Title from "./ui/Title";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useWindowWidth } from "@react-hook/window-size";

function NextBtn({ className, style, onClick }) {
  return (
    <button
      className={` text-primary-brand-color absolute top-1/2 -right-6 -translate-y-1/2 `}
      style={style}
      onClick={onClick}
    >
      <IoIosArrowForward size={22} />
    </button>
  );
}

function PrevBtn({ className, style, onClick }) {
  return (
    <button
      className={` text-primary-brand-color absolute top-1/2 -left-6 -translate-y-1/2`}
      style={style}
      onClick={onClick}
    >
      <IoIosArrowBack size={22} />
    </button>
  );
}

function Campaigns() {
  const [banners, setBanners] = useState([]);
  const windowWidth = useWindowWidth();

  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
    nextArrow: <NextBtn />,
    prevArrow: <PrevBtn />,

    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  return (
    <div className="container mx-auto md:pt-8 ">
      <div className="hidden md:block">
        <Title>Kampanyalar</Title>
      </div>
      <Slider {...settings} className="md:-mx-2">
        {banners.map((banner, index) => (
          <div key={index} className="block  md:px-2">
            <img src={banner.image} className="md:rounded-lg" />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Campaigns;
