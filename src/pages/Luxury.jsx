import React, { useState, useEffect } from 'react';

// سكشن فاخر ومحترف لمتجر الملابس الراقية
// مع انميشن متقدم وتأثيرات بصرية مبهرة
const Luxury = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeProduct, setActiveProduct] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // تتبع حركة الماوس للتأثيرات التفاعلية
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 100,
        y: (e.clientY / window.innerHeight) * 100,
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // تفعيل الانميشن عند التحميل
  useEffect(() => {
    const timer = setTimeout(() => setIsVisible(true), 300);
    return () => clearTimeout(timer);
  }, []);

  // قائمة المنتجات الفاخرة
  const luxuryProducts = [
    {
      id: 1,
      name: 'كوليكشن الأناقة الذهبية',
      category: 'أزياء راقية',
      price: '2,999',
      description: 'تشكيلة استثنائية من الأزياء الفاخرة المصممة بعناية فائقة',
      gradient: 'from-amber-400 via-yellow-500 to-amber-600',
      bgGradient: 'from-amber-50 via-orange-50 to-yellow-50'
    },
    {
      id: 2,
      name: 'مجموعة البلاتين الراقية',
      category: 'إكسسوارات فاخرة',
      price: '4,499',
      description: 'قطع مختارة بعناية تعكس الذوق الرفيع والأناقة الخالدة',
      gradient: 'from-slate-400 via-gray-500 to-slate-600',
      bgGradient: 'from-slate-50 via-gray-50 to-slate-50'
    },
    {
      id: 3,
      name: 'كولكشن الماس الأسود',
      category: 'أزياء حصرية',
      price: '6,999',
      description: 'تصاميم حصرية تجمع بين الفخامة والعصرية في قطع استثنائية',
      gradient: 'from-gray-800 via-gray-900 to-black',
      bgGradient: 'from-gray-50 via-slate-50 to-gray-100'
    }
  ];

  return (
    <section className="relative min-h-screen overflow-hidden bg-gradient-to-br from-slate-50 via-white to-gray-50">

      {/* خلفية متحركة مع تأثير Parallax */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute inset-0 opacity-5"
          style={{
            transform: `translate(${mousePosition.x * 0.1}px, ${mousePosition.y * 0.1}px)`,
            transition: 'transform 0.5s ease-out'
          }}
        >
          <div className="absolute top-10 left-10 w-72 h-72 bg-gradient-to-r from-amber-400 to-yellow-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-blue-400 to-indigo-500 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
        </div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">

        {/* Hero Section الفاخر */}
        <div className="text-center mb-20">
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            {/* العنوان الرئيسي بتأثير ذهبي */}
            <div className="relative inline-block mb-8">
            
              <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
              الفخامة
            </h2>
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-amber-600/20 blur-2xl rounded-full animate-pulse"></div>
            </div>

            <div className={`transform transition-all duration-1000 delay-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
              <h4 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-gray-800 via-slate-700 to-gray-900 bg-clip-text text-transparent mb-6">
                تتجسد في التفاصيل
              </h4>

              <p className="text-xl sm:text-2xl text-gray-600 max-w-4xl mx-auto leading-relaxed mb-12">
                اكتشف عالماً من الأناقة والرقي، حيث تلتقي التصاميم الاستثنائية بأجود الخامات لتمنحك إطلالة لا تُنسى
              </p>

              {/* خط فاصل ذهبي متحرك */}
              <div className="relative w-48 h-1 mx-auto mb-12 overflow-hidden rounded-full">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>

        {/* عرض المنتجات الفاخرة بتخطيط مبتكر */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-20">
          {luxuryProducts.map((product, index) => (
            <div
              key={product.id}
              className={`group relative transform transition-all duration-700 hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
              onMouseEnter={() => setActiveProduct(index)}
            >

              {/* كارت المنتج الفاخر */}
              <div className="relative overflow-hidden rounded-3xl shadow-2xl group-hover:shadow-3xl transition-all duration-500">

                {/* خلفية متدرجة للكارت */}
                <div className={`absolute inset-0 bg-gradient-to-br ${product.bgGradient} opacity-90`}></div>

                {/* تأثير الوهج عند الـ hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform -skew-x-12 group-hover:animate-pulse"></div>

                <div className="relative p-8 h-96 flex flex-col">

                  {/* أيقونة المنتج */}
                  <div className="flex-shrink-0 mb-6">
                    <div className={`w-20 h-20 bg-gradient-to-r ${product.gradient} rounded-2xl flex items-center justify-center shadow-lg transform group-hover:rotate-12 transition-transform duration-500`}>
                      <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z" clipRule="evenodd" />
                      </svg>
                    </div>
                  </div>

                  {/* معلومات المنتج */}
                  <div className="flex-grow">
                    <div className="mb-3">
                      <span className="inline-block px-3 py-1 bg-white/50 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-white/20">
                        {product.category}
                      </span>
                    </div>

                    <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-gray-900 transition-colors duration-300">
                      {product.name}
                    </h3>

                    <p className="text-gray-600 leading-relaxed mb-6 group-hover:text-gray-700 transition-colors duration-300">
                      {product.description}
                    </p>
                  </div>

                  {/* السعر والزر */}
                  <div className="flex items-center justify-between">
                    <div className="text-right">
                      <span className="text-3xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent">
                        {product.price}
                      </span>
                      <span className="text-gray-500 text-lg mr-2">ر.س</span>
                    </div>

                    {/* زر فاخر تفاعلي */}
                    <button className="group/btn relative overflow-hidden bg-gradient-to-r from-gray-800 to-gray-900 text-white px-6 py-3 rounded-xl font-medium transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl">
                      <span className="relative z-10">استكشف</span>
                      <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-yellow-600 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </button>
                  </div>
                </div>

                {/* حدود ذهبية متوهجة */}
                <div className="absolute inset-0 rounded-3xl border-2 border-transparent bg-gradient-to-r from-amber-400/50 via-yellow-500/50 to-amber-600/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 mask-border"></div>
              </div>

              {/* تأثير الظل المتحرك */}
              <div className="absolute -inset-4 bg-gradient-to-r from-amber-400/20 via-yellow-500/20 to-amber-600/20 rounded-3xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"></div>
            </div>
          ))}
        </div>

        {/* قسم الإحصائيات الفاخرة */}
        <div className={`bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-white/20 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">

            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-amber-600 to-yellow-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                10K+
              </div>
              <p className="text-gray-600 font-medium">عميل راضٍ</p>
            </div>

            <div className="group">
              <div className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                500+
              </div>
              <p className="text-gray-600 font-medium">تصميم حصري</p>
            </div>

            <div className="group">  
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300">
                15+
              </div>
              <p className="text-gray-600 font-medium">سنة خبرة</p>
            </div>
          </div>
        </div>

        {/* Call to Action فاخر */}
        <div className="text-center mt-16">
          <div className={`transform transition-all duration-1000 delay-500 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>

            <h3 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
              ارتقِ بأسلوبك إلى مستوى جديد
            </h3>

            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              انضم إلى نخبة من عشاق الأناقة واكتشف عالماً من التصاميم الاستثنائية
            </p>

            {/* أزرار فاخرة متعددة */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">

              {/* الزر الرئيسي الذهبي */}
              <button className="group relative overflow-hidden bg-gradient-to-r from-amber-500 via-yellow-500 to-amber-600 text-white px-8 py-4 rounded-2xl font-bold text-lg transform hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl min-w-[200px]">
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                  تسوق الآن
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
              </button>

              {/* الزر الثانوي الشفاف */}
              <button className="group relative overflow-hidden border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-2xl font-bold text-lg transform hover:scale-105 transition-all duration-300 backdrop-blur-sm bg-white/50 hover:bg-white/80 min-w-[200px]">
                <span className="relative z-10 flex items-center justify-center">
                  <svg className="w-5 h-5 ml-2 group-hover:rotate-12 transition-transform duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-3a1 1 0 00-.867.5 1 1 0 11-1.731-1A3 3 0 0113 8a3.001 3.001 0 01-2 2.83V11a1 1 0 11-2 0v-1a1 1 0 011-1 1 1 0 100-2zm0 8a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
                  </svg>
                  تعرف أكثر
                </span>
              </button>
            </div>
          </div>
        </div>

      </div>

      {/* خط فاصل ذهبي في أسفل السكشن */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-amber-500 to-transparent"></div>

      {/* نقاط مضيئة متحركة للديكور */}
      <div className="absolute top-20 left-20 w-2 h-2 bg-amber-400 rounded-full animate-ping"></div>
      <div className="absolute bottom-40 right-32 w-2 h-2 bg-purple-400 rounded-full animate-ping" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-20 w-2 h-2 bg-pink-400 rounded-full animate-ping" style={{animationDelay: '2s'}}></div>

    </section>
  );
};

export default Luxury;

/*
مميزات هذا المكون الفاخر:

🎨 التصميم:
- تصميم فاخر وراقي يليق بالعلامات التجارية المميزة
- ألوان ذهبية وتدرجات premium فاخرة
- تخطيط مبتكر وغير تقليدي

✨ الانميشن والتأثيرات:
- انميشن متدرج للعناصر عند التحميل
- تأثيرات parallax تتبع حركة الماوس
- تأثيرات hover متطورة وسلسة
- انتقالات ناعمة ومتقنة

🌟 التفاعلية:
- أزرار تفاعلية مع تأثيرات متقدمة
- كاردات منتجات بتأثيرات 3D
- حدود متوهجة عند التفاعل
- ظلال متحركة وديناميكية

💎 الجودة:
- كود نظيف ومنظم مع تعليقات شاملة
- أداء محسن وسريع
- تصميم متجاوب بالكامل
- سهولة التخصيص والتطوير

طريقة الاستخدام:
import LuxuryFashionSection from './LuxuryFashionSection';

function App() {
  return <LuxuryFashionSection />;
}
*/