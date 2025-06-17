// import React, { useEffect, useRef, useState } from 'react';
// import { Button } from '@/components/ui/button';
// import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
// import { Badge } from '@/components/ui/badge';
// import { 
//   Sparkles, 
//   ArrowRight, 
//   Clock, 
//   Users, 
//   Leaf, 
//   Award,
//   Heart,
//   Eye,
//   Scissors,
//   Palette
// } from 'lucide-react';

// const FashionStories = () => {
//   const [isVisible, setIsVisible] = useState(false);
//   const [activeStory, setActiveStory] = useState(null);
//   const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
//   const sectionRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         setIsVisible(entry.isIntersecting);
//       },
//       { threshold: 0.1 }
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   useEffect(() => {
//     const handleMouseMove = (e) => {
//       setMousePosition({ x: e.clientX, y: e.clientY });
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => window.removeEventListener('mousemove', handleMouseMove);
//   }, []);

//   const stories = [
//     {
//       id: 1,
//       title: "رحلة الحرير الطبيعي",
//       subtitle: "من دودة القز إلى الفستان الفاخر",
//       description: "اكتشف كيف يتحول الحرير الطبيعي من شرنقة صغيرة إلى قماش فاخر يزين أرقى الفساتين في العالم",
//       icon: <Sparkles className="w-6 h-6" />,
//       duration: "45 يوماً",
//       craftsmen: "12 حرفي",
//       sustainability: "100% طبيعي",
//       image: "bg-gradient-to-br from-amber-100 via-orange-100 to-pink-100",
//       color: "from-amber-500 to-orange-500",
//       details: [
//         "زراعة أشجار التوت في مزارع مختارة بعناية",
//         "تربية دود القز في بيئة مثالية لمدة 35 يوماً",
//         "جمع الشرانق وغزل الحرير بتقنيات تقليدية",
//         "صباغة الحرير بألوان طبيعية مستخرجة من النباتات"
//       ]
//     },
//     {
//       id: 2,
//       title: "فن التطريز اليدوي",
//       subtitle: "حرفة عمرها قرون من الزمن",
//       description: "تعرف على الحرفيين المهرة الذين يحولون القماش العادي إلى تحف فنية بخيوط الذهب والفضة",
//       icon: <Scissors className="w-6 h-6" />,
//       duration: "3 أسابيع",
//       craftsmen: "8 حرفي",
//       sustainability: "تقنيات تراثية",
//       image: "bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100",
//       color: "from-purple-500 to-pink-500",
//       details: [
//         "اختيار الأنماط التراثية من أرشيف التصاميم القديمة",
//         "تحضير خيوط الذهب والفضة الخالصة",
//         "التطريز اليدوي بإبر خاصة وتقنيات موروثة",
//         "الفحص النهائي وضمان الجودة لكل قطعة"
//       ]
//     },
//     {
//       id: 3,
//       title: "الصباغة الطبيعية",
//       subtitle: "ألوان من قلب الطبيعة",
//       description: "استكشف عالم الألوان الطبيعية المستخرجة من الزهور والأوراق والجذور لإنتاج درجات لونية فريدة",
//       icon: <Palette className="w-6 h-6" />,
//       duration: "10 أيام",
//       craftsmen: "5 حرفي",
//       sustainability: "خالي من الكيماويات",
//       image: "bg-gradient-to-br from-green-100 via-blue-100 to-teal-100",
//       color: "from-green-500 to-teal-500",
//       details: [
//         "جمع المواد الطبيعية من مصادر مستدامة",
//         "استخلاص الألوان بطرق تقليدية آمنة",
//         "اختبار ثبات الألوان على عينات مختلفة",
//         "تطبيق الصبغة بتقنيات متقنة للحصول على توزيع مثالي"
//       ]
//     },
//     {
//       id: 4,
//       title: "التصميم المستدام",
//       subtitle: "موضة تحترم البيئة",
//       description: "تعلم كيف نجمع بين الأناقة والمسؤولية البيئية في كل قطعة نصممها",
//       icon: <Leaf className="w-6 h-6" />,
//       duration: "مستمر",
//       craftsmen: "فريق متخصص",
//       sustainability: "صفر نفايات",
//       image: "bg-gradient-to-br from-emerald-100 via-green-100 to-lime-100",
//       color: "from-emerald-500 to-green-500",
//       details: [
//         "استخدام مواد قابلة للتدوير والتحلل الحيوي",
//         "تقليل استهلاك المياه في عمليات الإنتاج",
//         "التعاون مع موردين محليين لتقليل البصمة الكربونية",
//         "برامج إعادة تدوير الملابس المستعملة"
//       ]
//     },
//     {
//       id: 5,
//       title: "ضمان الجودة",
//       subtitle: "معايير عالمية للتميز",
//       description: "اكتشف عمليات الفحص الدقيقة التي تضمن وصول كل قطعة إليك بأعلى معايير الجودة",
//       icon: <Award className="w-6 h-6" />,
//       duration: "48 ساعة",
//       craftsmen: "فريق الجودة",
//       sustainability: "معايير دولية",
//       image: "bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100",
//       color: "from-blue-500 to-indigo-500",
//       details: [
//         "فحص المواد الخام قبل بدء الإنتاج",
//         "مراقبة جودة كل مرحلة من مراحل التصنيع",
//         "اختبارات المتانة والمقاومة للغسيل",
//         "الفحص النهائي قبل التعبئة والشحن"
//       ]
//     },
//     {
//       id: 6,
//       title: "قصص العملاء",
//       subtitle: "تجارب حقيقية وذكريات لا تُنسى",
//       description: "استمع إلى قصص عملائنا وكيف أصبحت قطعنا جزءاً من أهم لحظات حياتهم",
//       icon: <Heart className="w-6 h-6" />,
//       duration: "ذكريات أبدية",
//       craftsmen: "عملاؤنا الأعزاء",
//       sustainability: "قيمة عاطفية",
//       image: "bg-gradient-to-br from-rose-100 via-pink-100 to-red-100",
//       color: "from-rose-500 to-pink-500",
//       details: [
//         "فساتين زفاف تحكي قصص حب جميلة",
//         "قطع تراثية تنتقل بين الأجيال",
//         "ملابس مهنية ترافق قصص نجاح ملهمة",
//         "قطع خاصة لمناسبات لا تُنسى"
//       ]
//     }
//   ];

//   return (
//     <section 
//       ref={sectionRef}
//       className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 py-20 px-6 overflow-hidden"
//     >
//       {/* Background Decorative Elements */}
//       <div className="absolute inset-0 overflow-hidden pointer-events-none">
//         <div 
//           className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 animate-float"
//           style={{
//             transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
//           }}
//         ></div>
//         <div 
//           className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-200 to-teal-200 rounded-full blur-3xl opacity-30 animate-float" 
//           style={{ 
//             animationDelay: '2s',
//             transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
//           }}
//         ></div>
//         <div 
//           className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full blur-3xl opacity-20 animate-float" 
//           style={{ 
//             animationDelay: '4s',
//             transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px) translate(-50%, -50%)`
//           }}
//         ></div>
        
//         {/* Floating particles */}
//         {[...Array(15)].map((_, i) => (
//           <div
//             key={i}
//             className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"
//             style={{
//               left: `${Math.random() * 100}%`,
//               top: `${Math.random() * 100}%`,
//               animationDelay: `${Math.random() * 5}s`,
//               animationDuration: `${3 + Math.random() * 2}s`
//             }}
//           />
//         ))}
//       </div>

//       <div className="relative z-10 max-w-7xl mx-auto">
//         {/* Header Section */}
//         <div className={`text-center mb-16 transition-all duration-1000 ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//         }`}>
//           <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-purple-200 text-purple-700 bg-purple-50 animate-shimmer">
//             <Sparkles className="w-4 h-4 mr-2 animate-icon-bounce" />
//             قصص من وراء الكواليس
//           </Badge>
          
//           <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight text-reveal">
//             رحلة إبداع
//             <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent animate-gradient-shift">
//               كل قطعة
//             </span>
//           </h1>
          
//           <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-reveal arabic-text" style={{ animationDelay: '0.3s' }}>
//             اكتشف القصص الملهمة والحرفية المتقنة وراء كل قطعة من مجموعتنا الفاخرة. 
//             من اختيار أجود المواد إلى اللمسات الأخيرة، كل تفصيل يحكي قصة من الشغف والإتقان.
//           </p>
//         </div>

//         {/* Stories Grid */}
//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
//           {stories.map((story, index) => (
//             <Card 
//               key={story.id}
//               className={`group cursor-pointer card-hover-effect border-0 bg-white/80 backdrop-blur-sm animate-card-entrance ${
//                 isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//               } stagger-${index + 1}`}
//               onClick={() => setActiveStory(activeStory === story.id ? null : story.id)}
//             >
//               <CardHeader className="pb-4">
//                 <div className={`card-image w-full h-48 rounded-lg ${story.image} mb-4 relative overflow-hidden transition-transform duration-500 animate-shimmer`}>
//                   <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
//                   <div className={`card-icon absolute top-4 right-4 p-3 rounded-full bg-gradient-to-r ${story.color} text-white shadow-lg transition-all duration-300 animate-pulse-glow`}>
//                     {story.icon}
//                   </div>
//                   <div className="absolute bottom-4 left-4 right-4">
//                     <div className="flex gap-2 flex-wrap">
//                       <Badge variant="secondary" className="bg-white/90 text-gray-700 text-xs backdrop-blur-sm">
//                         <Clock className="w-3 h-3 mr-1" />
//                         {story.duration}
//                       </Badge>
//                       <Badge variant="secondary" className="bg-white/90 text-gray-700 text-xs backdrop-blur-sm">
//                         <Users className="w-3 h-3 mr-1" />
//                         {story.craftsmen}
//                       </Badge>
//                     </div>
//                   </div>
//                 </div>
                
//                 <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
//                   {story.title}
//                 </CardTitle>
//                 <CardDescription className="text-sm font-medium text-purple-600">
//                   {story.subtitle}
//                 </CardDescription>
//               </CardHeader>
              
//               <CardContent className="pt-0">
//                 <p className="text-gray-600 text-sm leading-relaxed mb-4 arabic-text">
//                   {story.description}
//                 </p>
                
//                 <div className="flex items-center justify-between">
//                   <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
//                     <Leaf className="w-3 h-3 mr-1" />
//                     {story.sustainability}
//                   </Badge>
                  
//                   <Button 
//                     variant="ghost" 
//                     size="sm" 
//                     className="text-purple-600 hover:text-purple-700 hover:bg-purple-50 p-2"
//                   >
//                     {activeStory === story.id ? (
//                       <Eye className="w-4 h-4" />
//                     ) : (
//                       <ArrowRight className="w-4 h-4" />
//                     )}
//                   </Button>
//                 </div>
                
//                 {/* Expandable Details */}
//                 {activeStory === story.id && (
//                   <div className="mt-6 pt-4 border-t border-gray-100 animate-in slide-in-from-top-2 duration-300">
//                     <h4 className="font-semibold text-gray-900 mb-3">مراحل العملية:</h4>
//                     <ul className="space-y-2">
//                       {story.details.map((detail, idx) => (
//                         <li key={idx} className="flex items-start gap-2 text-sm text-gray-600 arabic-text">
//                           <div className="w-1.5 h-1.5 rounded-full bg-purple-400 mt-2 flex-shrink-0"></div>
//                           {detail}
//                         </li>
//                       ))}
//                     </ul>
//                   </div>
//                 )}
//               </CardContent>
//             </Card>
//           ))}
//         </div>

//         {/* Call to Action */}
//         <div className={`text-center transition-all duration-1000 delay-500 ${
//           isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
//         }`}>
//           <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 p-1 rounded-2xl inline-block">
//             <div className="bg-white rounded-xl px-8 py-6">
//               <h3 className="text-2xl font-bold text-gray-900 mb-4">
//                 اكتشف مجموعتنا الكاملة
//               </h3>
//               <p className="text-gray-600 mb-6 max-w-2xl mx-auto arabic-text">
//                 كل قطعة في مجموعتنا تحمل قصة فريدة من الحرفية والإتقان. 
//                 استكشف تشكيلتنا الكاملة واعثر على القطعة التي تحكي قصتك.
//               </p>
//               <div className="flex flex-col sm:flex-row gap-4 justify-center">
//                 <Button 
//                   size="lg" 
//                   className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-xl button-interactive"
//                 >
//                   تصفح المجموعة
//                   <ArrowRight className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
//                 </Button>
//                 <Button 
//                   variant="outline" 
//                   size="lg"
//                   className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105 button-interactive"
//                 >
//                   تواصل معنا
//                 </Button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default FashionStories;


import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  Sparkles, 
  ArrowRight, 
  Clock, 
  Users, 
  Leaf, 
  Award,
  Heart,
  Eye,
  Scissors,
  Palette,
  ChevronDown,
  ChevronUp
} from 'lucide-react';

const FashionStories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeStory, setActiveStory] = useState(null);
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

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const stories = [
    {
      id: 1,
      title: "رحلة الحرير الطبيعي",
      subtitle: "من دودة القز إلى الفستان الفاخر",
      description: "اكتشف كيف يتحول الحرير الطبيعي من شرنقة صغيرة إلى قماش فاخر يزين أرقى الفساتين في العالم",
      icon: <Sparkles className="w-6 h-6" />,
      duration: "45 يوماً",
      craftsmen: "12 حرفي",
      sustainability: "100% طبيعي",
      image: "bg-gradient-to-br from-amber-100 via-orange-100 to-pink-100",
      color: "from-amber-500 to-orange-500",
      animatedImage: "https://images.unsplash.com/photo-1594736797933-d0b22736438e?w=400&h=200&fit=crop&auto=format",
      details: [
        "زراعة أشجار التوت في مزارع مختارة بعناية",
        "تربية دود القز في بيئة مثالية لمدة 35 يوماً",
        "جمع الشرانق وغزل الحرير بتقنيات تقليدية",
        "صباغة الحرير بألوان طبيعية مستخرجة من النباتات"
      ]
    },
    {
      id: 2,
      title: "فن التطريز اليدوي",
      subtitle: "حرفة عمرها قرون من الزمن",
      description: "تعرف على الحرفيين المهرة الذين يحولون القماش العادي إلى تحف فنية بخيوط الذهب والفضة",
      icon: <Scissors className="w-6 h-6" />,
      duration: "3 أسابيع",
      craftsmen: "8 حرفي",
      sustainability: "تقنيات تراثية",
      image: "bg-gradient-to-br from-purple-100 via-pink-100 to-rose-100",
      color: "from-purple-500 to-pink-500",
      animatedImage: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=200&fit=crop&auto=format",
      details: [
        "اختيار الأنماط التراثية من أرشيف التصاميم القديمة",
        "تحضير خيوط الذهب والفضة الخالصة",
        "التطريز اليدوي بإبر خاصة وتقنيات موروثة",
        "الفحص النهائي وضمان الجودة لكل قطعة"
      ]
    },
    {
      id: 3,
      title: "الصباغة الطبيعية",
      subtitle: "ألوان من قلب الطبيعة",
      description: "استكشف عالم الألوان الطبيعية المستخرجة من الزهور والأوراق والجذور لإنتاج درجات لونية فريدة",
      icon: <Palette className="w-6 h-6" />,
      duration: "10 أيام",
      craftsmen: "5 حرفي",
      sustainability: "خالي من الكيماويات",
      image: "bg-gradient-to-br from-green-100 via-blue-100 to-teal-100",
      color: "from-green-500 to-teal-500",
      animatedImage: "https://images.unsplash.com/photo-1541123437800-1bb1317badc2?w=400&h=200&fit=crop&auto=format",
      details: [
        "جمع المواد الطبيعية من مصادر مستدامة",
        "استخلاص الألوان بطرق تقليدية آمنة",
        "اختبار ثبات الألوان على عينات مختلфة",
        "تطبيق الصبغة بتقنيات متقنة للحصول على توزيع مثالي"
      ]
    },
    {
      id: 4,
      title: "التصميم المستدام",
      subtitle: "موضة تحترم البيئة",
      description: "تعلم كيف نجمع بين الأناقة والمسؤولية البيئية في كل قطعة نصممها",
      icon: <Leaf className="w-6 h-6" />,
      duration: "مستمر",
      craftsmen: "فريق متخصص",
      sustainability: "صفر نفايات",
      image: "bg-gradient-to-br from-emerald-100 via-green-100 to-lime-100",
      color: "from-emerald-500 to-green-500",
      animatedImage: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=200&fit=crop&auto=format",
      details: [
        "استخدام مواد قابلة للتدوير والتحلل الحيوي",
        "تقليل استهلاك المياه في عمليات الإنتاج",
        "التعاون مع موردين محليين لتقليل البصمة الكربونية",
        "برامج إعادة تدوير الملابس المستعملة"
      ]
    },
    {
      id: 5,
      title: "ضمان الجودة",
      subtitle: "معايير عالمية للتميز",
      description: "اكتشف عمليات الفحص الدقيقة التي تضمن وصول كل قطعة إليك بأعلى معايير الجودة",
      icon: <Award className="w-6 h-6" />,
      duration: "48 ساعة",
      craftsmen: "فريق الجودة",
      sustainability: "معايير دولية",
      image: "bg-gradient-to-br from-blue-100 via-indigo-100 to-purple-100",
      color: "from-blue-500 to-indigo-500",
      animatedImage: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=200&fit=crop&auto=format",
      details: [
        "فحص المواد الخام قبل بدء الإنتاج",
        "مراقبة جودة كل مرحلة من مراحل التصنيع",
        "اختبارات المتانة والمقاومة للغسيل",
        "الفحص النهائي قبل التعبئة والشحن"
      ]
    },
    {
      id: 6,
      title: "قصص العملاء",
      subtitle: "تجارب حقيقية وذكريات لا تُنسى",
      description: "استمع إلى قصص عملائنا وكيف أصبحت قطعنا جزءاً من أهم لحظات حياتهم",
      icon: <Heart className="w-6 h-6" />,
      duration: "ذكريات أبدية",
      craftsmen: "عملاؤنا الأعزاء",
      sustainability: "قيمة عاطفية",
      image: "bg-gradient-to-br from-rose-100 via-pink-100 to-red-100",
      color: "from-rose-500 to-pink-500",
      animatedImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=400&h=200&fit=crop&auto=format",
      details: [
        "فساتين زفاف تحكي قصص حب جميلة",
        "قطع تراثية تنتقل بين الأجيال",
        "ملابس مهنية ترافق قصص نجاح ملهمة",
        "قطع خاصة لمناسبات لا تُنسى"
      ]
    }
  ];

  return (
    <section 
      ref={sectionRef}
      className="relative min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 py-20 px-6 overflow-hidden"
    >
      {/* Background Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full blur-3xl opacity-30 animate-float"
          style={{
            transform: `translate(${mousePosition.x * 0.01}px, ${mousePosition.y * 0.01}px)`
          }}
        ></div>
        <div 
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-200 to-teal-200 rounded-full blur-3xl opacity-30 animate-float" 
          style={{ 
            animationDelay: '2s',
            transform: `translate(${mousePosition.x * -0.01}px, ${mousePosition.y * -0.01}px)`
          }}
        ></div>
        <div 
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-amber-200 to-orange-200 rounded-full blur-3xl opacity-20 animate-float" 
          style={{ 
            animationDelay: '4s',
            transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px) translate(-50%, -50%)`
          }}
        ></div>
        
        {/* Floating particles */}
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${3 + Math.random() * 2}s`
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto">
        {/* Header Section */}
        <div className={`text-center mb-16 transition-all duration-1000 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <Badge variant="outline" className="mb-4 px-4 py-2 text-sm font-medium border-purple-200 text-purple-700 bg-purple-50 animate-shimmer">
            <Sparkles className="w-4 h-4 mr-2 animate-icon-bounce" />
            قصص من وراء الكواليس
          </Badge>
          
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight text-reveal">
            رحلة إبداع
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent animate-gradient-shift">
              كل قطعة
            </span>
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed text-reveal arabic-text" style={{ animationDelay: '0.3s' }}>
            اكتشف القصص الملهمة والحرفية المتقنة وراء كل قطعة من مجموعتنا الفاخرة. 
            من اختيار أجود المواد إلى اللمسات الأخيرة، كل تفصيل يحكي قصة من الشغف والإتقان.
          </p>
        </div>

        {/* Stories Grid - استخدام columns بدلاً من grid */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-8 mb-16 space-y-8">
          {stories.map((story, index) => (
            <div 
              key={story.id}
              className={`break-inside-avoid mb-8 transition-all duration-1000 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <Card 
                className={`group cursor-pointer card-hover-effect border-0 bg-white/80 backdrop-blur-sm transition-all duration-500 hover:shadow-2xl hover:scale-[1.02] w-full ${
                  activeStory === story.id ? 'shadow-2xl scale-[1.02] ring-2 ring-purple-300 ring-opacity-50' : ''
                }`}
                onClick={() => setActiveStory(activeStory === story.id ? null : story.id)}
              >
                <CardHeader className="pb-4">
                  {/* Animated Image Section */}
                  <div className="relative w-full h-48 rounded-lg overflow-hidden mb-4 group-hover:scale-[1.05] transition-transform duration-500">
                    <img 
                      src={story.animatedImage} 
                      alt={story.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                      style={{
                        filter: 'brightness(0.9) contrast(1.1)',
                      }}
                    />
                    
                    {/* Overlay gradients */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20"></div>
                    <div className={`absolute inset-0 bg-gradient-to-br ${story.color} opacity-20 mix-blend-multiply`}></div>
                    
                    {/* Animated floating icon */}
                    <div className={`absolute top-4 right-4 p-3 rounded-full bg-gradient-to-r ${story.color} text-white shadow-lg transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 animate-bounce-slow`}>
                      {story.icon}
                    </div>
                    
                    {/* Info badges */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex gap-2 flex-wrap">
                        <Badge variant="secondary" className="bg-white/95 text-gray-700 text-xs backdrop-blur-sm border-0 shadow-sm">
                          <Clock className="w-3 h-3 mr-1" />
                          {story.duration}
                        </Badge>
                        <Badge variant="secondary" className="bg-white/95 text-gray-700 text-xs backdrop-blur-sm border-0 shadow-sm">
                          <Users className="w-3 h-3 mr-1" />
                          {story.craftsmen}
                        </Badge>
                      </div>
                    </div>
                    
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300"></div>
                  </div>
                  
                  <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-purple-700 transition-colors duration-300 mb-2">
                    {story.title}
                  </CardTitle>
                  <CardDescription className="text-sm font-medium text-purple-600 mb-3">
                    {story.subtitle}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 arabic-text">
                    {story.description}
                  </p>
                  
                  <div className="flex items-center justify-between mb-4">
                    <Badge variant="outline" className="border-green-200 text-green-700 bg-green-50">
                      <Leaf className="w-3 h-3 mr-1" />
                      {story.sustainability}
                    </Badge>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className={`transition-all duration-300 ${
                        activeStory === story.id 
                          ? 'text-purple-700 bg-purple-100 hover:bg-purple-200' 
                          : 'text-purple-600 hover:text-purple-700 hover:bg-purple-50'
                      } p-2`}
                    >
                      {activeStory === story.id ? (
                        <ChevronUp className="w-4 h-4" />
                      ) : (
                        <ChevronDown className="w-4 h-4" />
                      )}
                    </Button>
                  </div>
                  
                  {/* Expandable Details with smooth animation */}
                  {activeStory === story.id && (
                    <div className="animate-in slide-in-from-top-2 duration-500">
                      <div className="pt-4 border-t border-gray-100">
                        <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                          <Eye className="w-4 h-4 mr-2 text-purple-600" />
                          مراحل العملية:
                        </h4>
                        <div className="space-y-3">
                          {story.details.map((detail, idx) => (
                            <div 
                              key={idx} 
                              className="flex items-start gap-3 text-sm text-gray-600 arabic-text p-2 rounded-lg bg-gray-50/50 hover:bg-gray-100/50 transition-colors duration-200"
                              style={{
                                animationDelay: `${idx * 0.1}s`
                              }}
                            >
                              <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${story.color} mt-2 flex-shrink-0 animate-pulse`}></div>
                              <span>{detail}</span>
                            </div>
                          ))}
                        </div>
                        
                        {/* Additional action button when expanded */}
                        <div className="mt-4 pt-3 border-t border-gray-100">
                          <Button 
                            size="sm" 
                            variant="outline"
                            className={`w-full bg-gradient-to-r ${story.color} bg-clip-text text-transparent border-gray-200 hover:bg-gray-50 transition-all duration-300`}
                          >
                            تعرف على المزيد
                            <ArrowRight className="mr-2 w-4 h-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  )}
                </CardContent>
              </Card>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-500 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 p-1 rounded-2xl inline-block">
            <div className="bg-white rounded-xl px-8 py-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                اكتشف مجموعتنا الكاملة
              </h3>
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto arabic-text">
                كل قطعة في مجموعتنا تحمل قصة فريدة من الحرفية والإتقان. 
                استكشف تشكيلتنا الكاملة واعثر على القطعة التي تحكي قصتك.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg font-semibold group transition-all duration-300 hover:scale-105 hover:shadow-xl"
                >
                  تصفح المجموعة
                  <ArrowRight className="mr-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-purple-200 text-purple-700 hover:bg-purple-50 px-8 py-3 text-lg font-semibold transition-all duration-300 hover:scale-105"
                >
                  تواصل معنا
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes bounce-slow {
          0%, 20%, 50%, 80%, 100% {
            transform: translateY(0);
          }
          40% {
            transform: translateY(-10px);
          }
          60% {
            transform: translateY(-5px);
          }
        }
        
        .animate-bounce-slow {
          animation: bounce-slow 3s infinite;
        }
        
        .arabic-text {
          font-family: 'Cairo', 'Tajawal', sans-serif;
        }
      `}</style>
    </section>
  );
};

export default FashionStories;
 
