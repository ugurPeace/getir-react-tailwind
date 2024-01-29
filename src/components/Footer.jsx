import Menu from "./ui/Menu";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { BiGlobe } from "react-icons/bi";

function Footer() {
  const menus = [
    {
      title: "Getir'i Keşfedin",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kariyer",
        },
        {
          title: "İletişim",
        },
        {
          title: "Covid-19 Hakkında",
        },
        {
          title: "Sosyal Sorumluluk Projeleri",
        },
      ],
    },
    {
      title: "Yardıma mı ihtiyacınız var?",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kariyer",
        },
        {
          title: "İletişim",
        },
        {
          title: "Covid-19 Hakkında",
        },
        {
          title: "Sosyal Sorumluluk Projeleri",
        },
      ],
    },
    {
      title: "İş Ortağımız Olun ",
      items: [
        {
          title: "Hakkımızda",
        },
        {
          title: "Kariyer",
        },
        {
          title: "İletişim",
        },
        {
          title: "Covid-19 Hakkında",
        },
        {
          title: "Sosyal Sorumluluk Projeleri",
        },
      ],
    },
  ];

  return (
    <div className="bg-white mt-10 px-4 mb-10">
      <div className="container mx-auto px-4 ">
        <div className="grid gap-y-6  md:grid-cols-2 lg:grid-cols-4 pt-5 md:pt-10">
          <section>
            <nav className="grid gap-y-4">
              <h6 className="text-lg text-primary-brand-color">
                Getir'i indirin
              </h6>
              <a href="#">
                <img src="https://getir.com/_next/static/images/appstore-tr-141ed939fceebdcee96af608fa293b31.svg" />
              </a>

              <a href="#">
                <img src="https://getir.com/_next/static/images/googleplay-tr-6b0c941b7d1a65d781fb4b644498be75.svg" />
              </a>
              <a href="#">
                <img src="https://getir.com/_next/static/images/huawei-appgallery-tr-4b890fa3167bc62f9069edaf45aa7f30.svg" />
              </a>
            </nav>
          </section>
          {menus.map((menu, index) => (
            <Menu key={index} menu={menu} />
          ))}
        </div>
        <div className="flex justify-between items-center border-t border-gray-100 mt-6 py-6 ">
          <div className="text-xs text-primary-brand-color hover:underline flex gap-x-8">
            &copy; 2024 Getir Replica Web Site by Ugur
          </div>
          <nav className="flex gap-x-3">
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-gray-500 transitions-colors hover:bg-primary-color hover:bg-opacity-10 flex items-center justify-center hover:text-primary-brand-color"
            >
              <FaFacebook size={21} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-gray-500 transitions-colors hover:bg-primary-color hover:bg-opacity-10 flex items-center justify-center hover:text-primary-brand-color"
            >
              <FaTwitter size={21} />
            </a>
            <a
              href="#"
              className="w-8 h-8 rounded-lg text-gray-500 transitions-colors hover:bg-primary-color hover:bg-opacity-10 flex items-center justify-center hover:text-primary-brand-color"
            >
              <FaInstagram size={21} />
            </a>
            <a
              href="#"
              className="w-8 h-8 text-gray-500 transitions-colors hover:bg-primary-color hover:bg-opacity-10 flex items-center justify-center hover:text-primary-brand-color border rounded border-gray-100"
            >
              <BiGlobe size={20} />
            </a>
          </nav>
        </div>
      </div>
    </div>
  );
}

export default Footer;
