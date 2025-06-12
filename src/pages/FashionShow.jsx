// FashionShowcaseSection.jsx - مكون مستقل
// انسخ هذا المكون إلى مشروع React الخاص بك

import React, { useEffect, useRef, useState } from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

// إذا لم يكن لديك زر shadcn/ui، استبدله بزر عادي
// import { Button } from '@/components/ui/button.jsx';

// مكون زر بديل إذا لم يكن shadcn/ui متاحًا:
const Button = ({ children, size, variant, className, ...props }) => {
  const baseClasses = "inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background";
  const sizeClasses = {
    sm: "h-9 px-3 text-sm",
    lg: "h-11 px-8 text-base"
  };
  const variantClasses = {
    default: "bg-primary text-primary-foreground hover:bg-primary/90",
    outline: "border border-input hover:bg-accent hover:text-accent-foreground"
  };
  
  return (
    <button 
      className={`${baseClasses} ${sizeClasses[size] || sizeClasses.lg} ${variantClasses[variant] || variantClasses.default} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

const FashionShow = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* نمط الخلفية */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-20 w-96 h-96 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full blur-3xl transition-transform duration-1000 ease-out"
          style={{
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
          }}
        ></div>
      </div>

      {/* جسيمات عائمة */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh] ">
          
          {/* جانب المحتوى */}
          <div className={`space-y-8 lg:pr-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            {/* شارة */}
            <div className={`inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 transition-all duration-700 delay-200 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
            }`}>
              <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              <span className="text-sm font-medium text-white">مجموعة جديدة</span>
            </div>

            {/* العنوان الرئيسي */}
            <div className="space-y-4">
              <h1 className={`text-5xl lg:text-7xl font-bold text-white leading-tight transition-all duration-1000 delay-300 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                اكتشف
                <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent animate-gradient">
                  الجديد من الأزياء
                </span>
              </h1>
              <p className={`text-xl text-gray-300 leading-relaxed max-w-lg transition-all duration-1000 delay-500 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}>
                مستوحاة من الجمال الرقيق للحدائق المزهرة، مجموعتنا الأخيرة تمزج بين الأشكال الانسيابية والتطريز الزهري المعقد.
              </p>
            </div>

            {/* الميزات */}
            <div className={`grid grid-cols-2 gap-6 transition-all duration-1000 delay-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="space-y-2 group">
                <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">15+</div>
                <div className="text-sm text-gray-400">قطعة حصرية</div>
              </div>
              <div className="space-y-2 group">
                <div className="text-3xl font-bold text-white group-hover:scale-110 transition-transform duration-300">محدودة</div>
                <div className="text-sm text-gray-400">إصدار المجموعة</div>
              </div>
            </div>

            {/* أزرار الحث على اتخاذ إجراء (CTA) */}
            <div className={`flex flex-col sm:flex-row gap-4 transition-all duration-1000 delay-900 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 px-8 py-6 text-lg font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
              >
                اكتشف المجموعة
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                variant="outline" 
                size="lg"
                className="border-white/30 text-white hover:bg-white/10 px-8 py-6 text-lg font-semibold backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:border-white/50"
              >
                عرض كتيب الإطلالات
              </Button>
            </div>
          </div>

          {/* الجانب البصري */}
          <div className={`relative transition-all duration-1200 delay-400 ${
            isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'
          }`}>
            {/* حاوية الصورة الرئيسية */}
            <div className="relative group">
              {/* عناصر زخرفية */}
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-r from-yellow-400 to-pink-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full blur-xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
              
              {/* عنصر نائب للصورة مع تدرج */}
              <div className="relative aspect-[3/4] bg-gradient-to-br from-purple-200 via-pink-200 to-yellow-200 rounded-3xl overflow-hidden shadow-2xl group-hover:scale-105 transition-all duration-700 group-hover:shadow-purple-500/25">
                {/* نمط التراكب */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent"></div>
                
                {/* تأثير اللمعان المتحرك */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -skew-x-12 animate-shimmer"></div>
                
                {/* تراكب المحتوى */}
                <div className="absolute bottom-8 left-8 right-8 transform transition-all duration-500 group-hover:translate-y-0 translate-y-2">
                  <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-6 space-y-3 shadow-xl">
                    <h3 className="text-xl font-bold text-gray-900">فستان مميز</h3>
                    <p className="text-gray-600">حرير مطرز يدويًا بزخارف زهرية دقيقة</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-gray-900">$1,299</span>
                      <Button size="sm" className="bg-black text-white hover:bg-gray-800 transition-all duration-300 hover:scale-105">
                        نظرة سريعة
                      </Button>
                    </div>
                  </div>
                </div>

                {/* نقاط تفاعلية */}
                <div className="absolute top-1/3 right-8 group/hotspot">
                  <div className="w-4 h-4 bg-white rounded-full shadow-lg animate-ping cursor-pointer"></div>
                  <div className="w-4 h-4 bg-white rounded-full shadow-lg absolute top-0 cursor-pointer hover:scale-125 transition-transform"></div>
                  <div className="absolute top-6 right-0 bg-black/80 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover/hotspot:opacity-100 transition-all duration-300 whitespace-nowrap transform translate-y-2 group-hover/hotspot:translate-y-0">
                    تفاصيل التطريز
                  </div>
                </div>
                
                <div className="absolute bottom-1/3 left-8 group/hotspot">
                  <div className="w-4 h-4 bg-white rounded-full shadow-lg animate-ping cursor-pointer" style={{ animationDelay: '0.5s' }}></div>
                  <div className="w-4 h-4 bg-white rounded-full shadow-lg absolute top-0 cursor-pointer hover:scale-125 transition-transform"></div>
                  <div className="absolute bottom-6 left-0 bg-black/80 text-white text-xs px-3 py-2 rounded-lg opacity-0 group-hover/hotspot:opacity-100 transition-all duration-300 whitespace-nowrap transform translate-y-2 group-hover/hotspot:translate-y-0">
                    حرير فاخر
                  </div>
                </div>
              </div>

              {/* عناصر عائمة */}
              <div className="absolute top-12 -right-4 bg-white/20 backdrop-blur-sm rounded-2xl p-4 border border-white/30 transform transition-all duration-500 hover:scale-110 hover:bg-white/30">
                <div className="text-center">
                  <div className="text-2xl font-bold text-white">4.9</div>
                  <div className="text-xs text-gray-300">تقييم العملاء</div>
                  <div className="flex justify-center mt-1">
                    {[...Array(5)].map((_, i) => (
                      <span key={i} className="text-yellow-400 text-xs animate-pulse" style={{ animationDelay: `${i * 0.1}s` }}>★</span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* مؤشر التمرير السفلي */}
      <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1100 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      }`}>
        <div className="flex flex-col items-center space-y-2 text-white/60 animate-bounce">
          <span className="text-sm">مرر لاستكشاف المزيد</span>
          <div className="w-px h-8 bg-gradient-to-b from-white/60 to-transparent"></div>
        </div>
      </div>
    </section>
  );
};

export default FashionShow;

