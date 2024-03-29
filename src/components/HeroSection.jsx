import Slider from "react-slick";
import React, { useState } from "react";
import ReactFlagsSelect from "react-flags-select";
import { FaFacebook } from "react-icons/fa";
import { useWindowWidth } from "@react-hook/window-size";

function HeroSection() {
  const [selected, setSelected] = useState("TR");
  const windowWidth = useWindowWidth();

  const phones = {
    US: "+1",
    DE: "+49",
    TR: "+90",
    IT: "+39",
  };

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3500,
    cssEase: "linear",
  };

  return (
    <div className="relative h-auto md:h-[500px] before:bg-gradient-to-r before:from-primary-brand-color before:to-transparent before:absolute before:inset-0 before:w-full before:h-full before:z-10 ">
      {windowWidth >= 768 && (
        <Slider {...settings}>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-1.jpg"
            />
          </div>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-2.jpg"
            />
          </div>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-3.jpg"
            />
          </div>
          <div>
            <img
              className="w-full h-[500px] object-cover"
              src="https://cdn.getir.com/getirweb-images/common/hero-posters/getir-mainpage-4.jpg"
            />
          </div>
        </Slider>
      )}
      <div className="md:container flex justify-between items-center relative md:absolute top-0 left-0 md:left-1/2 md:-translate-x-1/2 translate-x-0 h-full z-20 ">
        <div className="hidden md:block">
          <img src="https://getir.com/_next/static/images/bimutluluk-b3a7fcb14fc9a9c09b60d7dc9b1b8fd6.svg" />

          <h3 className="text-4xl mt-8 font-semibold px-4 text-white ">
            Replica Web Site <br /> By Ugur
          </h3>
        </div>

        <div className="w-full md:w-[400px] md:rounded-lg bg-gray-50 p-6 mr-4 ">
          <h4 className="text-primary-brand-color font-semibold text-center mb-4">
            Giriş yap veya kayıt ol
          </h4>
          <div className="grid gap-y-3">
            <div className="flex gap-x-2">
              <ReactFlagsSelect
                countries={Object.keys(phones)}
                customLabels={phones}
                onSelect={(code) => setSelected(code)}
                selected={selected}
                className="menu-flags"
              />
              <label className="flex-1 relative block cursor-pointer">
                <input
                  required
                  className="text-sm font-semibold pt-2 p h-14 px-4 border-2 border-gray-200 rounded w-full transition-colors hover:border-primary-brand-color   outline-none focus:border-primary-brand-color peer "
                  type="text"
                />
                <span
                  className="absolute top-0 left-0 h-full px-4 flex items-center text-sm text-gray-500 transition-all  peer-focus:h-7 peer-focus:text-primary-brand-color peer-focus:text-xs
              peer-valid:h-7 peer-valid:text-primary-brand-color peer-valid:text-xs"
                >
                  Telefon numarası
                </span>
              </label>
            </div>
            <button className="bg-brand-yellow h-12 flex items-center justify-center rounded-md w-full text-sm font-semibold text-primary-brand-color transition-colors hover:bg-primary-brand-color hover:text-brand-yellow">
              Telefon numarası ile devam et
            </button>
            <hr className="h-[1px] bg-gray-300 my-2" />
            <button className="bg-blue-700 bg-opacity-10 h-12 px-4   flex items-center rounded-md w-full text-sm font-semibold text-blue-700 text-opacity-80 transition-colors hover:bg-blue-700 hover:text-white">
              <FaFacebook size={24} />
              <span className="mx-auto">Facebook ile devam et</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
