import React, { useState, useEffect, useRef } from 'react';
import { Form, Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, Zap, MapPin, Phone, Clock } from 'lucide-react';
import { siteConfig } from '../../components/config';
import background from '../../assets/unnamed.webp';
import background1 from '../../assets/133.png';
import home1 from '../../assets/homepage1.png';
import home2 from '../../assets/homepage2.png';
 

/* ================= COUNTER COMPONENT ================= */
const Counter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting && !visible) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [visible]);

  useEffect(() => {
    if (!visible) return;
    let start;
    const animate = (t) => {
      if (!start) start = t;
      const progress = Math.min((t - start) / duration, 1);
      setCount(Math.floor(progress * end));
      if (progress < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [visible, end, duration]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

/* ================= MAIN HOME COMPONENT ================= */
const Home = () => {
  const [offsetY, setOffsetY] = useState(0);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const iconMap = {
    BookOpen,
    Users,
    Award,
    Zap
  };

  return (
    <div className="relative bg-white overflow-hidden" dir="rtl">

      {/* ================= HERO SECTION WITH MAP ================= */}
      <section 
        className="relative min-h-[85vh] flex items-center pt-24 pb-12 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${background})` 
        }}
      >
        {/* طبقة تغطية بيضاء شبه شفافة لضمان وضوح النص */}
        <div className="absolute inset-0 bg-white/50 z-0"></div>

        {/* خلفية زخرفية خفيفة (اختياري - تم تقليل الشفافية) */}
        <div className="absolute inset-0 opacity-5 pointer-events-none z-0" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${siteConfig.colors.primary} 1px, transparent 0)`, backgroundSize: '40px 40px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* الجزء النصي (يمين) */}
            <div className="space-y-8 text-right order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-bold animate-pulse shadow-sm border border-green-200">
                <Clock size={16} />
                <span>مفتوح الآن - نخدمكم على مدار الساعة</span>
              </div>
              
              <h1 className="text-5xl md:text-7xl font-black leading-tight text-gray-900 drop-shadow-sm">
                صيدلية <span style={{ color: siteConfig.colors.primary }}>الساحل البيطرية</span>
                <br />
                <span className="text-3xl md:text-5xl text-gray-600 font-bold mt-4 block">للرعاية البيطرية المتكاملة</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed border-r-4 border-[#E8D461] pr-6 font-medium">
                وجهتكم الأولى للأدوية البيطرية، المكملات الغذائية، ومستلزمات الحيوانات الأليفة. نقدم استشارات متخصصة لضمان صحة وسلامة حيواناتكم.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="tel:+966552300820"
                  className="px-8 py-4 text-white rounded-full font-bold hover:shadow-lg transition transform hover:scale-105 text-center flex items-center justify-center gap-2"
                  style={{ backgroundColor: siteConfig.colors.primary }}
                >
                  <Phone size={20} /> اتصل بنا: 0552300820
                </a>
                <Link
                  to="/services"
                  className="px-8 py-4 border-2 border-gray-400 text-gray-800 rounded-full font-bold hover:border-gray-900 hover:text-gray-900 hover:bg-white/50 transition text-center"
                >
                  تصفح الخدمات
                </Link>
              </div>

              {/* تفاصيل العنوان */}
              <div className="flex items-start gap-3 text-gray-700 mt-6 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm w-fit border border-gray-100">
                <MapPin size={24} style={{ color: siteConfig.colors.primary }} className="mt-1" />
                <div>
                  <p className="font-bold text-gray-900">العنوان:</p>
                  <p>4295، القوز 28961، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>

            {/* بطاقة الخريطة (يسار) */}
            <div className="relative h-[450px] lg:h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white order-1 lg:order-2 group">
              {/* iframe الخريطة */}
              <iframe 
                src="https://maps.google.com/maps?q=صيدلية+الساحل+البيطرية+القوز&t=&z=15&ie=UTF8&iwloc=&output=embed"
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="موقع صيدلية الساحل البيطرية"
                className="w-full h-full grayscale group-hover:grayscale-0 transition-all duration-500"
              ></iframe>
              
              {/* تلميح عائم فوق الخريطة */}
              <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md p-4 rounded-2xl shadow-xl max-w-xs border border-gray-100">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center text-white" style={{ backgroundColor: siteConfig.colors.primary }}>
                    <MapPin size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">زورونا في الفرع</p>
                    <p className="text-xs text-gray-500">طريق القوز العام</p>
                  </div>
                </div>
                <a 
                  href="https://goo.gl/maps/PlaceLinkHere" 
                  target="_blank" 
                  rel="noreferrer"
                  className="text-xs font-bold hover:underline block text-center mt-2 text-blue-600"
                >
                  اضغط للتوجيه عبر Google Maps
                </a>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= TESTIMONIAL / QUOTE ================= */}
      <div className="text-center py-12 px-4 bg-white">
        <p className="text-xl md:text-2xl text-gray-700 italic max-w-3xl mx-auto font-medium">
          "نحن لا نقدم الدواء فحسب، بل نقدم الرعاية والاهتمام الذي يستحقه  حيوانك."
        </p>
      </div>

       

      {/* ================= CTA SECTION ================= */}
      <section className="relative py-28 text-center text-white">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage: `url(${background1})`,
            transform: `translateY(${offsetY * 0.1}px)`,
            top: '-40%'
          }}
          role="img"
          aria-label="خلفية التواصل"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />

        <div className="relative z-10 space-y-8 px-4">
          <h2 className="text-5xl md:text-7xl font-black leading-tight">
            صحة حيوانك <span style={{ color: siteConfig.colors.primary }} className="italic">أمانة</span>
          </h2>
          <p className="text-xl text-gray-200 max-w-2xl mx-auto">
            تواصل معنا اليوم للحصول على أفضل رعاية واستشارة بيطرية متخصصة.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-3 px-10 py-5 bg-white text-gray-900 rounded-full font-bold hover:shadow-2xl transition transform hover:scale-105 text-lg"
            style={{ backgroundColor: siteConfig.colors.primary, color: '#000' }}
          >
            تواصل معنا الآن <ArrowRight size={24} />
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Home;