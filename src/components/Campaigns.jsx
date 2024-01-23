import Slider from "react-slick";
import Banners from "../Api/banners.json";
import { useState, useEffect } from "react";

function Campaigns() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    setBanners(Banners);
  }, []);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };

  return (
    <div className="container mx-auto ">
      <h3 className="text-sm font-semibold mb-3">Kampanyalar</h3>
      <Slider {...settings}>
        {banners.map((banner, index) => (
          <div key={index}>
            <img src={banner.image} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default Campaigns;
