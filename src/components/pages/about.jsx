import React from 'react'
import { Link } from 'react-router-dom'
import { CheckCircle } from 'lucide-react'
import mostafaImg from '../../assets/projectmanager.jpg';
import mahmoudImg from '../../assets/ceo.jpg';
 
import teamimg from '../../assets/applyphoto.png';
import aboutBg from '../../assets/peoplelearning.jpeg';

const About = () => {

  const team = [
    {
      name: "د. عبدالعزيز",
      role: "المدير الطبي والمؤسس",
      description: "أكثر من 7 سنوات خبرة في الطب والرعاية البيطرية",
      Image: mostafaImg
    },
    {
      name: "د. سامي",
      role: "مدير العمليات",
      description: "متخصص في إدارة الخدمات البيطرية وتطوير جودة الرعاية",
      Image: mahmoudImg
    },
  ]

  return (
    <div className="bg-white min-h-screen font-sans">

      {/* Hero Section */}
      <section className="relative py-24 shadow-xl overflow-hidden">
        <div className="absolute inset-0 w-full h-full">
          <img 
            src={aboutBg} 
            alt="خلفية الصيدلية البيطرية" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-gray-900/95 via-green-900/80 to-[#E8D461]/30"></div>
        </div>

        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:20px_20px] z-0"></div>

        <div className="max-w-7xl mx-auto px-4 text-center text-white relative z-10">
          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">
            من نحن
          </h1>
          <p className="text-xl md:text-2xl text-gray-100 max-w-3xl mx-auto leading-relaxed drop-shadow-md">
            صيدلية بيطرية متخصصة في تقديم أفضل رعاية لحيواناتكم
            <span className="block text-[#E8D461] mt-2 font-bold">
              ثقة • جودة • رعاية مستمرة
            </span>
          </p>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-4 bg-[#E8D461]"></div>
      </section>

      {/* Mission Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              رسالتنا
            </h2>
            <p className="text-gray-700 text-lg mb-6 leading-relaxed border-l-4 border-[#E8D461] pl-6">
              في صيدليتنا البيطرية نؤمن أن صحة الحيوان أساس السعادة والأمان. هدفنا هو توفير أدوية بيطرية أصلية وخدمات طبية موثوقة بأعلى المعايير.
            </p>
            <p className="text-gray-700 text-lg leading-relaxed pl-6">
              ندمج الخبرة الطبية مع أحدث الأساليب لضمان رعاية متكاملة للحيوانات الأليفة والمواشي.
            </p>
          </div>

          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-tr from-gray-900 to-green-700 rounded-3xl transform translate-x-3 translate-y-3 transition-transform"></div>
            <div className="relative bg-white p-2 rounded-3xl border-4 border-[#E8D461] shadow-2xl z-10 h-[400px] overflow-hidden">
              <img 
                src={teamimg} 
                alt="فريق الصيدلية البيطرية" 
                className="rounded-2xl object-cover w-full h-full hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="bg-gray-50 py-24 relative">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900">قيمنا</h2>
            <div className="w-24 h-1 bg-green-700 mx-auto mt-4 rounded-full"></div>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-green-700">
              <CheckCircle size={40} className="text-[#E8D461] mb-6" />
              <h3 className="text-2xl font-bold mb-4">الجودة</h3>
              <p className="text-gray-600">نلتزم بتوفير أدوية وخدمات بيطرية معتمدة وموثوقة.</p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-gray-900">
              <CheckCircle size={40} className="text-[#E8D461] mb-6" />
              <h3 className="text-2xl font-bold mb-4">الثقة</h3>
              <p className="text-gray-600">نبني علاقتنا مع العملاء على الصدق والشفافية.</p>
            </div>

            <div className="bg-white p-10 rounded-2xl shadow-lg border-t-4 border-green-700">
              <CheckCircle size={40} className="text-[#E8D461] mb-6" />
              <h3 className="text-2xl font-bold mb-4">الابتكار</h3>
              <p className="text-gray-600">نواكب أحدث التطورات في المجال البيطري.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="max-w-7xl mx-auto px-4 py-24">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900">فريق العمل</h2>
          <p className="text-xl text-gray-600 mt-4">خبراء في خدمة صحة الحيوان</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition text-center">
              <div className="w-28 h-28 rounded-full mx-auto mb-6 overflow-hidden">
                <img src={member.Image} alt={member.name} className="w-full h-full object-cover rounded-full" />
              </div>
              <h3 className="font-bold text-xl mb-2">{member.name}</h3>
              <p className="text-green-700 font-bold mb-2">{member.role}</p>
              <p className="text-gray-600">{member.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-gray-900 via-green-700 to-[#E8D461] py-24 text-center text-white">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          صحة حيوانك تهمنا
        </h2>
        <p className="text-xl mb-10 max-w-2xl mx-auto">
          تواصل معنا اليوم واحصل على أفضل رعاية بيطرية في المملكة
        </p>
        <Link
          to="/contact"
          className="inline-block px-10 py-4 bg-[#E8D461] text-gray-900 rounded-full font-bold hover:bg-white transition"
        >
          تواصل معنا الآن
        </Link>
      </section>
    </div>
  )
}

export default About
