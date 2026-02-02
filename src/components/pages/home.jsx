import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, Users, Award, Zap, MapPin, Phone, Clock, Ticket, Copy, Check, Gift, AlertCircle } from 'lucide-react';
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
  
  // --- Refs & States ---
  const discountSectionRef = useRef(null);
  const [discount, setDiscount] = useState(null);
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    const onScroll = () => setOffsetY(window.pageYOffset);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // --- Local Storage Check ---
  useEffect(() => {
    const savedDiscount = localStorage.getItem('sahel_pharmacy_discount');
    if (savedDiscount) {
      setDiscount(JSON.parse(savedDiscount));
    }
  }, []);

  const scrollToDiscount = () => {
    discountSectionRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const generateDiscount = () => {
    if (discount || localStorage.getItem('sahel_pharmacy_discount')) return;

    const percent = Math.floor(Math.random() * 10) + 1;
    const randomSuffix = Math.random().toString(36).substring(2, 5).toUpperCase();
    const code = `SAHEL${percent}${randomSuffix}`;
    const newDiscountData = { percent, code };
    
    setDiscount(newDiscountData);
    localStorage.setItem('sahel_pharmacy_discount', JSON.stringify(newDiscountData));
  };

  const copyToClipboard = () => {
    if (!discount) return;
    navigator.clipboard.writeText(discount.code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000);
  };

  return (
    <div className="relative bg-white overflow-hidden" dir="rtl">

      {/* ================= HERO SECTION ================= */}
      <section 
        className="relative min-h-[85vh] flex items-center pt-24 pb-12 bg-cover bg-center bg-no-repeat"
        style={{ 
          backgroundImage: `url(${background})` 
        }}
      >
        <div className="absolute inset-0 bg-white/60 z-0"></div>
        <div className="absolute inset-0 opacity-5 pointer-events-none z-0" 
             style={{ backgroundImage: `radial-gradient(circle at 2px 2px, ${siteConfig.colors.primary} 1px, transparent 0)`, backgroundSize: '40px 40px' }}>
        </div>

        <div className="max-w-7xl mx-auto px-4 w-full relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            
            {/* الجزء النصي (يمين) */}
            <div className="space-y-8 text-right order-2 lg:order-1">
               
              
              <h1 className="text-5xl md:text-7xl font-black leading-tight text-gray-900 drop-shadow-sm">
                صيدلية <span style={{ color: siteConfig.colors.primary }}>الساحل البيطرية</span>
                <br />
                <span className="text-3xl md:text-5xl text-gray-600 font-bold mt-4 block">للرعاية البيطرية المتكاملة</span>
              </h1>

              <p className="text-lg md:text-xl text-gray-700 max-w-xl leading-relaxed border-r-4 border-[#E8D461] pr-6 font-medium">
                وجهتكم الأولى للأدوية البيطرية، المكملات الغذائية، ومستلزمات الحيوانات الأليفة.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <button
                  onClick={scrollToDiscount}
                  className="px-8 py-4 bg-gray-900 text-white rounded-full font-bold hover:shadow-lg transition transform hover:scale-105 text-center flex items-center justify-center gap-2"
                >
                  <Ticket size={20} className="text-[#E8D461]" /> 
                  {discount ? "عرض الكود الخاص بي" : "احصل على كود خصم"}
                </button>
                <a
                  href="tel:+966552300820"
                  className="px-8 py-4 border-2 border-gray-900 text-gray-900 rounded-full font-bold hover:bg-gray-900 hover:text-white transition text-center flex items-center justify-center gap-2"
                >
                  <Phone size={20} /> اتصل بنا
                </a>
              </div>

              <div className="flex items-start gap-3 text-gray-700 mt-6 bg-white/80 backdrop-blur-sm p-4 rounded-lg shadow-sm w-fit border border-gray-100">
                <MapPin size={24} style={{ color: siteConfig.colors.primary }} className="mt-1" />
                <div>
                  <p className="font-bold text-gray-900">العنوان:</p>
                  <p>4295، القوز 28961، المملكة العربية السعودية</p>
                </div>
              </div>
            </div>

            {/* الجزء الأيسر: الخريطة + تنبيه الخصم */}
            <div className="relative order-1 lg:order-2">
              
              {/* === BADGE: تنبيه الخصم العائم فوق الخريطة === */}
              <div 
                onClick={scrollToDiscount}
                className="absolute -top-6 right-4 z-20 cursor-pointer animate-bounce"
              >
                <div className="bg-yellow-400 text-gray-900 px-6 py-3 rounded-2xl shadow-xl border-4 border-white flex items-center gap-3 transform hover:scale-105 transition-transform">
                  <div className="bg-white p-2 rounded-full">
                    <Gift size={24} className="text-red-600" />
                  </div>
                  <div className="text-right leading-tight">
                    <p className="font-black text-sm">اكسب خصم على فاتورتك! 🎁</p>
                    <p className="text-xs font-bold text-gray-800 mt-0.5">
                      (للأدوية البيطرية - فواتير +100 ريال)
                    </p>
                  </div>
                </div>
                {/* سهم صغير يشير للأسفل */}
                <div className="w-0 h-0 border-l-[10px] border-l-transparent border-r-[10px] border-r-transparent border-t-[10px] border-t-yellow-400 mx-auto mt-[-2px]"></div>
              </div>

              {/* حاوية الخريطة */}
              <div className="relative h-[450px] lg:h-[550px] w-full rounded-3xl overflow-hidden shadow-2xl border-4 border-white group mt-4 lg:mt-0">
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
        </div>
      </section>

      {/* ================= TESTIMONIAL ================= */}
      <div className="text-center py-12 px-4 bg-white">
        <p className="text-xl md:text-2xl text-gray-700 italic max-w-3xl mx-auto font-medium">
          "نحن لا نقدم الدواء فحسب، بل نقدم الرعاية والاهتمام الذي يستحقه حيوانك."
        </p>
      </div>

      {/* ================= DISCOUNT / LUCKY DRAW SECTION ================= */}
      <section ref={discountSectionRef} className="py-20 px-4 bg-gray-50 scroll-mt-20">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden border border-gray-100 relative">
          
          <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold px-4 py-1 rounded-br-xl z-10">
            {discount ? "الكود جاهز" : "عرض خاص"}
          </div>

          <div className="grid md:grid-cols-2">
            
            {/* الجزء التفاعلي */}
            <div className="p-8 md:p-12 text-center flex flex-col justify-center items-center">
              <div className="w-20 h-20 bg-yellow-100 rounded-full flex items-center justify-center mb-6 text-yellow-600 shadow-inner">
                <Gift size={40} />
              </div>
              
              <h2 className="text-3xl font-black text-gray-900 mb-2">اكسب خصم فوري!</h2>
              <p className="text-gray-500 mb-8 leading-relaxed">
                {discount 
                  ? "لقد حصلت بالفعل على كود خصم! استخدمه الآن."
                  : "اضغط على الزر لمعرفة نسبة الخصم الخاصة بك."
                }
              </p>

              {!discount ? (
                <button
                  onClick={generateDiscount}
                  className="group relative px-10 py-5 bg-gradient-to-r from-gray-900 to-gray-800 text-white rounded-2xl font-bold shadow-xl hover:shadow-2xl transition-all hover:-translate-y-1 w-full md:w-auto overflow-hidden"
                >
                  <span className="relative z-10 flex items-center justify-center gap-2">
                    <Ticket size={24} className="group-hover:rotate-12 transition-transform text-[#E8D461]" />
                    اكشف كود الخصم الآن
                  </span>
                  <div className="absolute inset-0 bg-[#E8D461] opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
                </button>
              ) : (
                <div className="w-full animate-in fade-in zoom-in duration-500">
                  <div className="bg-green-50 border-2 border-green-200 rounded-2xl p-6 mb-4 relative overflow-hidden text-center">
                    <p className="text-gray-600 text-sm font-bold mb-2">🎉 مبروك! قيمة خصمك هي:</p>
                    <p className="text-5xl font-black text-green-600 mb-4 drop-shadow-sm">{discount.percent}%</p>
                    
                    <div className="flex items-center gap-2 bg-white border-2 border-dashed border-green-300 rounded-xl p-3 relative group cursor-pointer hover:border-green-500 transition-colors" onClick={copyToClipboard}>
                      <code className="flex-1 font-mono text-xl font-bold text-gray-800 tracking-wider">
                        {discount.code}
                      </code>
                      <button 
                        className={`p-2 rounded-lg transition-colors ${isCopied ? 'bg-green-500 text-white' : 'bg-gray-100 text-gray-600 hover:bg-gray-200'}`}
                      >
                        {isCopied ? <Check size={20} /> : <Copy size={20} />}
                      </button>
                    </div>
                    <p className="text-xs text-green-600 mt-2 font-bold h-4">
                      {isCopied ? 'تم نسخ الكود!' : 'اضغط على الكود لنسخه'}
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* الجزء الزخرفي وشروط الاستخدام */}
            <div className="hidden md:flex relative bg-gray-900 p-12 text-white overflow-hidden flex-col justify-center">
              <div className="absolute inset-0 opacity-10" 
                   style={{ backgroundImage: `radial-gradient(circle at 2px 2px, white 1px, transparent 0)`, backgroundSize: '24px 24px' }}>
              </div>
              
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <AlertCircle className="text-[#E8D461]" />
                  شروط الاستخدام
                </h3>
                <ul className="space-y-5 text-gray-300 text-sm leading-relaxed">
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#E8D461] text-gray-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">1</span>
                    الخصم صالح فقط على <strong className="text-white underline">الأدوية البيطرية</strong>.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#E8D461] text-gray-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">2</span>
                    يجب أن تكون قيمة الفاتورة <strong className="text-white underline">100 ريال أو أكثر</strong>.
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="w-6 h-6 rounded-full bg-[#E8D461] text-gray-900 flex items-center justify-center font-bold text-xs shrink-0 mt-0.5">3</span>
                    الكود    متاح للاستخدام لمرة واحدة فقط.
                  </li>
                </ul>
              </div>
            </div>

          </div>
        </div>
      </section>

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