// SynapseAILanding.jsx - صفحة هبوط كاملة لمنتج Synapse AI
import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowRight, 
  Brain, 
  BarChart3, 
  Workflow, 
  Zap, 
  Shield, 
  Users,
  CheckCircle,
  Star,
  Menu,
  X,
  Play,
  ChevronDown,
  MessageSquare,
  Target,
  TrendingUp,
  Clock
} from 'lucide-react';

// مكون الزر المحسن
const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  const baseClasses = "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2";
  
  const variants = {
    primary: "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white shadow-lg hover:shadow-xl hover:scale-105 focus:ring-blue-500",
    secondary: "bg-white text-gray-900 border-2 border-gray-200 hover:border-blue-500 hover:text-blue-600 shadow-md hover:shadow-lg",
    outline: "border-2 border-white text-white hover:bg-white hover:text-gray-900 backdrop-blur-sm",
    ghost: "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
  };
  
  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg"
  };
  
  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// مكون الأيقونة مع الخلفية
const FeatureIcon = ({ icon: Icon, className = "" }) => (
  <div className={`w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center shadow-lg ${className}`}>
    <Icon className="w-6 h-6 text-white" />
  </div>
);

// مكون الشهادة
const TestimonialCard = ({ name, role, company, content, avatar }) => (
  <div className="bg-white rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 border border-gray-100">
    <div className="flex items-center mb-6">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
      ))}
    </div>
    <p className="text-gray-700 text-lg leading-relaxed mb-6 italic">
      "{content}"
    </p>
    <div className="flex items-center">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
        {name.charAt(0)}
      </div>
      <div className="mr-4">
        <h4 className="font-semibold text-gray-900">{name}</h4>
        <p className="text-gray-600 text-sm">{role}، {company}</p>
      </div>
    </div>
  </div>
);

// مكون حالة الاستخدام
const UseCaseCard = ({ icon: Icon, title, description, benefits }) => (
  <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 group">
    <div className="flex items-center mb-6">
      <FeatureIcon icon={Icon} className="ml-4" />
      <h3 className="text-xl font-bold text-gray-900">{title}</h3>
    </div>
    <p className="text-gray-600 mb-6 leading-relaxed">{description}</p>
    <ul className="space-y-2">
      {benefits.map((benefit, index) => (
        <li key={index} className="flex items-center text-gray-700">
          <CheckCircle className="w-5 h-5 text-green-500 ml-2 flex-shrink-0" />
          <span>{benefit}</span>
        </li>
      ))}
    </ul>
  </div>
);

// مكون الأسئلة الشائعة
const FAQItem = ({ question, answer, isOpen, onToggle }) => (
  <div className="border border-gray-200 rounded-lg overflow-hidden">
    <button
      className="w-full px-6 py-4 text-right bg-gray-50 hover:bg-gray-100 transition-colors duration-200 flex items-center justify-between"
      onClick={onToggle}
    >
      <span className="font-semibold text-gray-900">{question}</span>
      <ChevronDown className={`w-5 h-5 text-gray-500 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    {isOpen && (
      <div className="px-6 py-4 bg-white">
        <p className="text-gray-700 leading-relaxed">{answer}</p>
      </div>
    )}
  </div>
);

// المكون الرئيسي
const FashionShow = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);
  const [isVisible, setIsVisible] = useState({});
  
  const sectionRefs = {
    hero: useRef(null),
    features: useRef(null),
    howItWorks: useRef(null),
    testimonials: useRef(null),
    useCases: useRef(null),
    faq: useRef(null)
  };

  // تأثير الظهور عند التمرير
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }));
        });
      },
      { threshold: 0.1 }
    );

    Object.values(sectionRefs).forEach(ref => {
      if (ref.current) observer.observe(ref.current);
    });

    return () => observer.disconnect();
  }, []);






  const useCases = [
    {
      icon: Target,
      title: "للمسوقين",
      description: "تحليل بيانات الحملات التسويقية، تحديد اتجاهات السوق، وإنشاء تقارير أداء مفصلة.",
      benefits: [
        "اتخاذ قرارات تسويقية مبنية على البيانات",
        "تحسين عائد الاستثمار للحملات",
        "توفير الوقت في إعداد التقارير"
      ]
    },
    {
      icon: TrendingUp,
      title: "لفرق المبيعات",
      description: "تتبع العملاء المحتملين، إعداد عروض المبيعات المخصصة، وإدارة علاقات العملاء.",
      benefits: [
        "زيادة كفاءة فريق المبيعات",
        "تحسين معدلات التحويل",
        "بناء علاقات أقوى مع العملاء"
      ]
    },
    {
      icon: Users,
      title: "لمديري المشاريع",
      description: "تتبع تقدم المشروع، إدارة الموارد، تحديد الاختناقات، والتواصل الفعال.",
      benefits: [
        "إنجاز المشاريع في الوقت المحدد",
        "تحسين التعاون بين الفريق",
        "تقليل الضغط على المديرين"
      ]
    }
  ];

 const faqs = [
  {
    question: "كيف أختار المقاس المناسب لي؟",
    answer: "نوفر دليل مقاسات دقيق لكل منتج في صفحة التفاصيل. يمكنك استخدامه لمقارنة مقاساتك.",
  },
  {
    question: "هل يمكنني استبدال أو إرجاع منتج؟",
    answer: "نعم، يمكنك استبدال أو إرجاع أي منتج خلال 14 يومًا بشرط أن يكون بحالته الأصلية وغير مستخدم.",
  },
  {
    question: "كم يستغرق وقت التوصيل؟",
    answer: "يستغرق التوصيل عادة من 2 إلى 5 أيام عمل حسب موقعك داخل المملكة.",
  },
  {
    question: "هل الشحن مجاني؟",
    answer: "نعم، الشحن مجاني للطلبات التي تزيد عن 200 ريال سعودي.",
  },
  {
    question: "هل المنتجات أصلية؟",
    answer: "جميع منتجاتنا أصلية 100% ونحرص على تقديم أعلى معايير الجودة في كل قطعة.",
  }
];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
     

      {/* Hero Section */}
   <section 
  ref={sectionRefs.hero}
  id="hero"
  className="pt-20 pb-16 bg-gradient-to-br from-slate-50 via-pink-50 to-red-50 overflow-hidden"
>
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
      <div className={`space-y-8 transition-all duration-1000 ${isVisible.hero ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
        <div className="inline-flex items-center px-4 py-2 bg-pink-100 text-pink-800 rounded-full text-sm font-medium">
          <Zap className="w-4 h-4 ml-2" />
          موضة أنيقة وعصرية
        </div>

        <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
          تألقي بأحدث صيحات
          <span className="block bg-gradient-to-r from-rose-600 to-fuchsia-600 bg-clip-text text-transparent">
            الأزياء العصرية
          </span>
        </h1>

        <p className="text-xl text-gray-600 leading-relaxed max-w-2xl">
          اكتشفي تشكيلتنا الفريدة من الملابس التي تجمع بين الأناقة والجودة. نحن نقدم لكِ تصاميم تناسب جميع الأذواق والمناسبات، مع تجربة تسوق لا تُضاهى.
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Button variant="primary" size="lg" className="group">
            تسوقي الآن
            <ArrowRight className="w-5 h-5 mr-2 group-hover:translate-x-1 transition-transform" />
          </Button>
          <Button variant="secondary" size="lg" className="group">
            <Play className="w-5 h-5 ml-2" />
            شاهدي المجموعة
          </Button>
        </div>

        <div className="flex items-center space-x-8 pt-8">
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">5000+</div>
            <div className="text-sm text-gray-600">عميلة راضية</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">100%</div>
            <div className="text-sm text-gray-600">خامات عالية الجودة</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-gray-900">4.9/5</div>
            <div className="text-sm text-gray-600">تقييم المتجر</div>
          </div>
        </div>
      </div>

      <div className={`relative transition-all duration-1200 delay-300 ${isVisible.hero ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
        <div className="relative">
          {/* Background decorative elements */}
          <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-pink-400 to-rose-500 rounded-full blur-3xl opacity-20 animate-pulse"></div>
          <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-gradient-to-br from-fuchsia-400 to-pink-500 rounded-full blur-3xl opacity-20 animate-pulse" style={{animationDelay: '1s'}}></div>
          
          {/* Main illustration */}
          <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100">
            <div className="aspect-square bg-gradient-to-br from-rose-500 via-fuchsia-600 to-pink-500 rounded-2xl flex items-center justify-center">
              <div className="text-white text-center">
                <Brain className="w-24 h-24 mx-auto mb-4 animate-pulse" />
                <h3 className="text-2xl font-bold mb-2">بوتيك الأناقة</h3>
                <p className="text-pink-100">موضة كل يوم</p>
              </div>
            </div>

            {/* Floating elements */}
            <div className="absolute -top-4 -right-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-gray-700">متاح الآن</span>
              </div>
            </div>

            <div className="absolute -bottom-4 -left-4 bg-white rounded-xl shadow-lg p-4 border border-gray-100">
              <div className="text-center">
                <div className="text-2xl font-bold text-gray-900">30%</div>
                <div className="text-xs text-gray-600">خصومات موسمية</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Problem & Solution Section */}
<section className="py-20 bg-white">
  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      
      {/* القسم الأيسر - التحديات */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          هل تواجهين صعوبة في اختيار إطلالة أنيقة؟
        </h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 ml-4">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">عدم وجود تشكيلة متنوعة</h3>
              <p className="text-gray-600">من الصعب إيجاد قطع تناسب جميع المناسبات والذوق الشخصي.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 ml-4">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">الأسعار المرتفعة</h3>
              <p className="text-gray-600">العديد من المتاجر تبيع بأسعار مبالغ فيها مقارنة بالجودة.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-6 h-6 bg-red-100 rounded-full flex items-center justify-center mt-1 ml-4">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">صعوبة في اختيار المقاس المناسب</h3>
              <p className="text-gray-600">الاختلاف في المقاسات يجعل التسوق عبر الإنترنت تحديًا حقيقيًا.</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* القسم الأيمن - الحلول */}
      <div>
        <h2 className="text-4xl font-bold text-gray-900 mb-8">
          <span className="bg-gradient-to-r from-rose-600 to-pink-500 bg-clip-text text-transparent">
            بوتيك الأناقة هو اختيارك المثالي
          </span>
        </h2>
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 ml-4">
              <CheckCircle className="w-4 h-4 text-green-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">تشكيلة متنوعة تناسب جميع الأذواق</h3>
              <p className="text-gray-600">أزياء كلاسيكية، كاجوال، وسهرات – كلها متوفرة بمكان واحد.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 ml-4">
              <CheckCircle className="w-4 h-4 text-green-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">أسعار تنافسية مع خصومات دورية</h3>
              <p className="text-gray-600">نقدم جودة عالية بأسعار مناسبة لجميع الميزانيات.</p>
            </div>
          </div>
          <div className="flex items-start">
            <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center mt-1 ml-4">
              <CheckCircle className="w-4 h-4 text-green-500" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 mb-2">دليل مقاسات دقيق وتجربة سهلة</h3>
              <p className="text-gray-600">ساعدناك تختاري المقاس المناسب بدقة لتسوق مريح بدون قلق.</p>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>








     





      {/* Final CTA Section */}
<section className="py-20 bg-gradient-to-br from-pink-600 via-purple-600 to-blue-600">
  <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    
    {/* العنوان */}
    <h2 className="text-4xl font-bold text-white mb-6">
      جاهزة لتجديد إطلالتك؟
    </h2>
    
    {/* الوصف */}
    <p className="text-xl text-pink-100 mb-8 max-w-2xl mx-auto">
      انضمي إلى آلاف النساء الأنيقات اللاتي يعتمدن علينا لإطلالة عصرية كل يوم
    </p>
    
    {/* الأزرار */}
    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <Button variant="secondary" size="lg" className="bg-white text-pink-600 hover:bg-gray-100">
        تسوقي الآن
      </Button>
      <Button variant="outline" size="lg">
        تواصلي معنا عبر واتساب
      </Button>
    </div>

    {/* مميزات إضافية */}
    <p className="text-pink-200 text-sm mt-6">
      شحن سريع لجميع المدن • استرجاع سهل خلال 14 يوم • دعم مباشر طوال اليوم
    </p>
  </div>
</section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-4">
                Synapse AI
              </h3>
              <p className="text-gray-400 leading-relaxed">
                مساعدك الذكي لتعزيز الإنتاجية وتبسيط سير العمل باستخدام أحدث تقنيات الذكاء الاصطناعي.
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">المنتج</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">الميزات</a></li>
                <li><a href="#" className="hover:text-white transition-colors">التسعير</a></li>
                <li><a href="#" className="hover:text-white transition-colors">التكاملات</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الأمان</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">الشركة</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">من نحن</a></li>
                <li><a href="#" className="hover:text-white transition-colors">المدونة</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الوظائف</a></li>
                <li><a href="#" className="hover:text-white transition-colors">اتصل بنا</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">الدعم</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">مركز المساعدة</a></li>
                <li><a href="#" className="hover:text-white transition-colors">الوثائق</a></li>
                <li><a href="#" className="hover:text-white transition-colors">حالة النظام</a></li>
                <li><a href="#" className="hover:text-white transition-colors">سياسة الخصوصية</a></li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Synapse AI. جميع الحقوق محفوظة.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default FashionShow;

