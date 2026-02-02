import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  Stethoscope, 
  Syringe, 
  Pill, 
  Scissors, 
  Truck, 
  Activity, 
  Phone, 
  MessageCircle, 
  ArrowRight, 
  CheckCircle 
} from 'lucide-react';
import { siteConfig } from '../../components/config';
import servicesBg from '../../assets/camles.png'; // تأكد من وجود صورة مناسبة

const Services = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [openSheet, setOpenSheet] = useState(false);
  const [selectedService, setSelectedService] = useState(null);

  // 1. قائمة الخدمات البيطرية (Mock Data)
  // يمكنك نقل هذه البيانات لاحقاً إلى ملف config
  const servicesList = [
    {
      id: 1,
      title: 'كشف بيطري شامل',
      category: 'medical',
      description: 'فحص سريري كامل للحيوان لتشخيص الأمراض بدقة.',
      icon: Stethoscope,
     },
    {
      id: 2,
      title: 'تطعيمات وتحصين',
      category: 'prevention',
      description: 'جدول تطعيمات كامل للقطط والكلاب والمواشي.',
      icon: Syringe,
     },
    {
      id: 3,
      title: 'صرف الأدوية البيطرية',
      category: 'pharmacy',
      description: 'توفير كافة الأدوية العلاجية والمكملات الغذائية.',
      icon: Pill,
     },
     
    {
      id: 5,
      title: 'متابعة الحمل والولادة',
      category: 'medical',
      description: 'سونار ومتابعة ورعاية المواليد الجدد.',
      icon: Activity,
     },
  ];

  // 2. استخراج التصنيفات
  const categories = useMemo(() => {
    const cats = [{ id: 'all', label: 'كل الخدمات' }];
    const uniqueCats = [...new Set(servicesList.map(s => s.category))];
    
    const labels = {
      medical: 'عيادة وكشوفات',
      prevention: 'تطعيمات ووقاية',
      pharmacy: 'أدوية ومستلزمات',
      surgery: 'جراحة وعمليات'
    };

    uniqueCats.forEach(cat => {
      cats.push({ id: cat, label: labels[cat] || cat });
    });
    return cats;
  }, []);

  // 3. تصفية الخدمات
  const filteredServices = useMemo(() => {
    if (selectedCategory === 'all') return servicesList;
    return servicesList.filter(service => service.category === selectedCategory);
  }, [selectedCategory]);

  const handleBookClick = (service) => {
    setSelectedService(service);
    setOpenSheet(true);
  };

  return (
    <div className="bg-[#fcfcfc] font-sans min-h-screen" dir="rtl">
      
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src={servicesBg} 
            alt="Veterinary Services" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-gray-900/90 via-gray-900/50 to-transparent"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-right">
             
       
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
            خدماتنا <span style={{ color: siteConfig.colors.primary }}>البيطرية</span>
          </h1>
          <p className="text-xl text-gray-200 max-w-2xl font-light leading-relaxed">
            نقدم مجموعة شاملة من الخدمات الطبية والعلاجية تحت إشراف نخبة من الأطباء البيطريين لضمان صحة وسلامة حيواناتكم.
          </p>
        </div>
      </section>

      {/* ===== FILTER NAVIGATION ===== */}
      <section className="max-w-7xl mx-auto px-6 -mt-10 relative z-20 mb-12">
        <div className="bg-white/90 backdrop-blur-xl p-4 rounded-3xl shadow-2xl border border-white/50 flex flex-wrap gap-3 justify-center">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
                selectedCategory === cat.id
                  ? 'shadow-lg scale-105 text-gray-900'
                  : 'text-gray-500 hover:bg-gray-100'
              }`}
              style={selectedCategory === cat.id ? {
                backgroundColor: siteConfig.colors.primary,
              } : {}}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* ===== SERVICES GRID ===== */}
      <section className="max-w-7xl mx-auto px-6 py-10">
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className="group flex flex-col justify-between bg-white rounded-2xl p-6 shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-gray-200"
              >
                <div>
                  {/* Icon & Title */}
                  <div className="flex items-center gap-4 mb-4">
                    <div className="p-3 bg-gray-50 rounded-xl group-hover:bg-yellow-50 transition-colors" style={{ color: siteConfig.colors.secondary }}>
                      {Icon && <Icon size={28} />}
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-gray-900 leading-tight">
                        {service.title}
                      </h4>
                      <span className="text-xs font-medium text-green-600 bg-green-50 px-2 py-0.5 rounded-full mt-1 inline-block">
                        {service.price}
                      </span>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-500 text-sm leading-relaxed mb-6">
                    {service.description}
                  </p>
                </div>

                {/* Button */}
                <button
                  onClick={() => handleBookClick(service)}
                  className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-bold transition-colors bg-gray-900 text-white hover:opacity-90 group-hover:bg-primary group-hover:text-black"
                  style={{  }}
                >
                  احجز الخدمة <ArrowRight size={16} className="rotate-180" />
                </button>
              </div>
            );
          })}
        </div>

        {filteredServices.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">لا توجد خدمات متاحة في هذا القسم حالياً.</p>
          </div>
        )}
      </section>

      {/* ===== EMERGENCY CTA ===== */}
      <section className="max-w-7xl mx-auto px-6 mb-20 mt-10">
        <div className="bg-gray-900 rounded-[2.5rem] p-10 md:p-16 relative overflow-hidden text-center">
          <div className="absolute top-0 right-0 w-80 h-80 bg-red-600/20 rounded-full blur-[80px]" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#E8D461]/20 rounded-full blur-[80px]" />

          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              هل لديك حالة طارئة؟
            </h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto mb-10">
              لا تتردد في الاتصال بنا. فريقنا جاهز لتقديم الدعم والمشورة الطبية العاجلة لحيوانك الأليف.
            </p>
            <a
              href={`tel:${siteConfig.contact.phone}`}
              className="inline-flex items-center gap-3 px-10 py-4 rounded-full font-black hover:shadow-lg transition-all transform hover:scale-105 text-lg"
              style={{ backgroundColor: siteConfig.colors.primary, color: '#000' }}
            >
              اتصل بالطوارئ الآن <Truck size={24} />
            </a>
          </div>
        </div>
      </section>

      {/* ===== BOOKING MODAL (SHEET) ===== */}
      {openSheet && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6">
          <div
            className="absolute inset-0 bg-gray-900/70 backdrop-blur-sm cursor-pointer"
            onClick={() => setOpenSheet(false)}
          />
          <div className="relative w-full max-w-md bg-white rounded-[2rem] p-8 shadow-2xl animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setOpenSheet(false)}
              className="absolute top-5 left-5 text-gray-400 hover:text-red-500 transition-colors"
            >
              ✕
            </button>

            <div className="text-center mb-8">
              <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4 text-yellow-700">
                <CheckCircle size={32} />
              </div>
              <h3 className="text-2xl font-bold text-gray-900">تأكيد الحجز</h3>
              {selectedService && (
                <p className="text-gray-500 mt-2 text-sm">
                  أنت على وشك طلب خدمة: <span className="font-bold text-gray-800">{selectedService.title}</span>
                </p>
              )}
            </div>

            <div className="space-y-4">
              <a
                href={`https://wa.me/966552300820?text=مرحباً، أرغب في حجز خدمة: ${selectedService?.title}`}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-[#25D366] text-white rounded-xl font-bold hover:shadow-lg transition-all"
              >
                <MessageCircle size={22} /> الحجز عبر واتساب
              </a>
              <a
                href={`tel:${siteConfig.contact.phone}`}
                className="flex items-center justify-center gap-3 w-full py-4 bg-gray-900 text-white rounded-xl font-bold hover:bg-gray-800 transition-all"
              >
                <Phone size={22} /> اتصال مباشر
              </a>
            </div>

            <p className="text-center text-xs text-gray-400 mt-6">
              سيقوم فريقنا بالرد عليك لتأكيد الموعد والسعر.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;