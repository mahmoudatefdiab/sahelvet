import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Facebook, MessageSquare, Clock, Send } from 'lucide-react';
import calling from '../../assets/calling.png';
import { siteConfig } from '../../components/config'; // استيراد إعدادات الألوان إذا كانت موجودة

const Contact = () => {
  const [offset, setOffset] = useState(0);

  // Parallax scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setOffset(window.pageYOffset * 0.35);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const contactInfo = [
    {
      icon: Phone,
      title: "اتصل بنا",
      content: "0552300820",
      link: "tel:+966552300820",
      color: "text-green-600"
    },
    {
      icon: MessageSquare,
      title: "واتساب",
      content: "راسلنا مباشرة",
      link: "https://wa.me/966552300820", // رابط واتساب صحيح
      color: "text-green-500"
    },
    {
      icon: MapPin,
      title: "العنوان",
      content: "4295، القوز 28961، السعودية",
      link: "https://share.google/Wny8S9OdFtuO9hjuH ", // يمكنك وضع رابط جوجل ماب المباشر هنا
      color: "text-red-600"
    },
    {
      icon: Mail,
      title: "البريد الإلكتروني",
      content: "atefdiab601@gmail.com",
      link: "mailto:atefdiab601@gmail.com",
      color: "text-blue-600"
    },
    {
      icon: Clock,
      title: "ساعات العمل",
      content: "مفتوح على مدار الساعة",
      link: "#",
      color: "text-purple-600"
    },
    {
      icon: Facebook,
      title: "فيسبوك",
      content: "تابعنا على فيسبوك",
      link: "https://facebook.com", // ضع رابط صفحة الصيدلية هنا
      color: "text-blue-700"
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gray-50" dir="rtl">

      {/* ===== PARALLAX BACKGROUND ===== */}
      <div
        className="absolute inset-0 bg-cover bg-center h-[60vh]"
        style={{
          backgroundImage: `url(${calling})`,
          transform: `translateY(${offset * 0.5}px)`
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 to-gray-900/60"></div>
      </div>

      {/* ===== HEADER ===== */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-32 pb-20 text-center text-white">
        <h1 className="text-4xl md:text-6xl font-black mb-6 drop-shadow-lg">
          تواصل مع <span style={{ color: siteConfig?.colors?.primary || '#E8D461' }}>صيدلية الساحل</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-200 max-w-2xl mx-auto leading-relaxed">
          نحن هنا لخدمتك وخدمة حيوانك الأليف. لا تتردد في الاتصال بنا لأي استفسار أو استشارة طبية.
        </p>
      </div>

      {/* ===== CONTACT CARDS ===== */}
      <div className="relative z-20 max-w-7xl mx-auto px-6 -mt-16 mb-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {contactInfo.map((info, idx) => {
            const Icon = info.icon;
            return (
              <a
                key={idx}
                href={info.link}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 group border border-gray-100"
              >
                {/* Icon Box */}
                <div className={`p-4 rounded-xl bg-gray-50 group-hover:bg-gray-100 transition-colors ${info.color}`}>
                  <Icon size={28} />
                </div>

                {/* Text */}
                <div className="leading-tight">
                  <p className="text-sm font-bold text-gray-400 uppercase mb-1">
                    {info.title}
                  </p>
                  <span className="text-lg font-bold text-gray-800 group-hover:text-primary transition-colors">
                    {info.content}
                  </span>
                </div>
              </a>
            );
          })}
        </div>
      </div>

      {/* ===== MAP & FORM SECTION ===== */}
      <section className="relative z-10 max-w-7xl mx-auto px-6 pb-24">
        <div className="bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">
          <div className="grid lg:grid-cols-2">
            
            {/* Right Side: Map */}
            <div className="h-[400px] lg:h-auto w-full bg-gray-200 relative">
               <iframe 
                src="https://www.google.com/maps?sca_esv=a4272fd1b67d5ab0&sxsrf=ANbL-n6ic_EaAwdZ7ORLwFify2Z5fJe5YA:1769962054531&si=AL3DRZGNtcdgKOqVhotcr-UG2kkYpwR2WO4qu3O00NmpwBmLnUqhCqOoEEjB3s87tl6iWDZzwlVXIsja38d7TVYbk5z1lNFCPTetsPjqBAh8luZvgRcFjal2PIFu-6KC9KQYZBNYrJroWJvnoCIqubVyzCUJqVyckg%3D%3D&biw=1536&bih=791&dpr=2.5&aic=0&um=1&ie=UTF-8&fb=1&gl=de&sa=X&geocode=KRsnx1IAIeQVMcu8f46ZWHXX&daddr=4295,+AlQouz+28961,+Saudi-Arabien" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع صيدلية الساحل"
                className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
              ></iframe>
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-4 py-2 rounded-lg shadow text-xs font-bold text-gray-700">
                📍 صيدلية الساحل البيطرية - القوز
              </div>
            </div>

            {/* Left Side: Simple Message Text */}
            <div className="p-10 lg:p-16 flex flex-col justify-center text-right bg-gray-50">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mb-6 text-blue-600">
                <Send size={32} />
              </div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900">
                تفضل بزيارتنا
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed text-lg">
                يسعدنا استقبالكم في فرعنا بالقوز لتقديم أفضل خدمات الرعاية البيطرية. فريقنا الطبي جاهز للإجابة على جميع استفساراتكم وتوفير الدواء المناسب.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <MapPin size={20} className="text-red-500" />
                  <span>طريق القوز العام، بجوار المعالم الرئيسية</span>
                </div>
                <div className="flex items-center gap-3 text-gray-700">
                  <Phone size={20} className="text-green-500" />
                  <span>دعم هاتفي وواتساب متاح</span>
                </div>
              </div>

              <a 
                href="https://wa.me/966552300820"
                className="mt-10 inline-flex items-center justify-center gap-2 px-8 py-4 bg-green-600 text-white rounded-xl font-bold hover:bg-green-700 transition shadow-lg hover:shadow-green-200"
              >
                <MessageSquare size={20} />
                تحدث معنا عبر واتساب
              </a>
            </div>

          </div>
        </div>
      </section>

      <div className="h-20"></div>
    </section>
  );
};

export default Contact;