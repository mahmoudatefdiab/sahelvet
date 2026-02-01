import React from "react";
import { Link } from "react-router-dom";
import { Mail, MapPin, Facebook, Instagram, Phone, Clock } from "lucide-react";
import logo from "../assets/1.png";
import { siteConfig } from './config.js';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-300 py-16 mt-20 border-t border-gray-800" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-12 text-right">
          
          {/* ===== معلومات الصيدلية ===== */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img src={logo} alt={`${siteConfig.siteName} Logo`} className="h-12 w-auto bg-white rounded-lg p-1" />
            </div>
            <p className="text-sm leading-relaxed text-gray-400 mb-4">
              صيدلية الساحل البيطرية، وجهتكم الموثوقة للرعاية البيطرية المتكاملة. نوفر الأدوية، اللقاحات، والاستشارات الطبية لضمان صحة حيواناتكم.
            </p>
            <div className="flex items-center gap-2 text-green-500 text-sm font-bold">
              <Clock size={16} />
              <span>مفتوح على مدار الساعة</span>
            </div>
          </div>

          {/* ===== روابط سريعة ===== */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">روابط سريعة</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="hover:text-primary transition duration-300">
                  الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-primary transition duration-300">
                  من نحن
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition duration-300">
                  خدماتنا
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition duration-300">
                  تواصل معنا
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== خدماتنا ===== */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">خدماتنا الطبية</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/services" className="hover:text-primary transition duration-300">
                  الأدوية البيطرية
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition duration-300">
                  التطعيمات واللقاحات
                </Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-primary transition duration-300">
                  المكملات الغذائية
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-primary transition duration-300 text-primary font-bold">
                  حالات الطوارئ
                </Link>
              </li>
            </ul>
          </div>

          {/* ===== معلومات التواصل ===== */}
          <div>
            <h4 className="font-bold text-white mb-4 text-lg">تواصل معنا</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="bg-gray-800 p-2 rounded-full text-primary">
                   <Phone size={16} style={{ color: siteConfig.colors.primary }} />
                </div>
                <a
                  href="tel:+966552300820"
                  className="hover:text-white transition dir-ltr"
                >
                  055 230 0820
                </a>
              </li>

              <li className="flex items-center gap-3">
                <div className="bg-gray-800 p-2 rounded-full text-green-500">
                  {/* WhatsApp SVG Icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.117.555 4.088 1.515 5.822L0 24l6.324-1.49C8.053 23.444 10.01 24 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.464 17.09c-.257.722-1.488 1.376-2.034 1.467-.516.084-1.16.122-3.063-.548-2.868-1.01-4.705-4.02-4.843-4.188-.138-.168-1.14-1.564-1.14-2.99 0-1.426.73-2.124 1.02-2.414.264-.263.577-.327.771-.327.193 0 .383.003.551.007.178.005.417-.067.65.499.23.564.78 1.953.847 2.097.066.145.108.315.017.51-.09.195-.135.314-.27.49-.137.176-.288.39-.41.524-.137.147-.281.31-.12.597.16.287.708 1.165 1.518 1.887.524.492.954.655 1.365.837.541.24.822.207.952.126.13-.08.418-.151.637-.308.219-.158.471-.21.675-.21.205 0 .404.003.581.007.178.005.527.07.637.338.11.267.739 1.437.843 1.607.103.17.173.29.11.457z" />
                  </svg>
                </div>
                <a
                  href="https://wa.me/966552300820"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition"
                >
                  راسلنا عبر واتساب
                </a>
              </li>

              <li className="flex items-start gap-3">
                <div className="bg-gray-800 p-2 rounded-full text-red-500">
                  <MapPin size={16} />
                </div>
                <span>القوز، المملكة العربية السعودية</span>
              </li>
            </ul>
          </div>
        </div>

        {/* ===== الحقوق والسوشيال ميديا ===== */}
        <div className="border-t border-gray-800 pt-8 pb-4 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-gray-500 text-center md:text-right">
            &copy; {currentYear} صيدلية الساحل البيطرية. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-blue-600 hover:text-white transition duration-300"
              aria-label="Facebook"
            >
              <Facebook size={18} />
            </a>
            <a
              href="#"
              className="bg-gray-800 p-2 rounded-full hover:bg-pink-600 hover:text-white transition duration-300"
              aria-label="Instagram"
            >
              <Instagram size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;