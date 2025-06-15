import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import img1 from "../assets/img/pexels-bohlemedia-1884584.jpg"
import { 
  Heart, 
  Star, 
  Calendar, 
  MapPin, 
  Users, 
  Award, 
  Sparkles, 
  ArrowRight,
  Play,
  Quote,
  Globe,
  TrendingUp,
  BookOpen,
  Crown,
  Zap
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const BrandStories = () => {
  const [selectedStory, setSelectedStory] = useState(null);
  const [activeTab, setActiveTab] = useState('heritage');
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const { scrollYProgress } = useScroll();
  
  // تتبع حركة الماوس
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // قصص الماركات مع تفاصيل أكثر
  const brandStories = [
    {
      id: 1,
      name: "أزياء الأناقة",
      tagline: "حيث تلتقي التقاليد بالحداثة",
      foundedYear: 1985,
      location: "باريس، فرنسا",
      image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&h=600&fit=crop",
      logo: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=100&h=100&fit=crop",
      story: "بدأت رحلتنا في شوارع باريس الضيقة، حيث حلم مصمم شاب بإنشاء ماركة تجمع بين الأناقة الفرنسية الكلاسيكية والابتكار العصري. من ورشة صغيرة في مونمارتر إلى عروض أزياء في أسبوع الموضة الباريسي، كانت رحلة مليئة بالتحديات والإنجازات. اليوم، نحن نفخر بكوننا رمزاً للأناقة الراقية التي تعبر عن الشخصية الفريدة لكل امرأة.",
      achievements: [
        "أكثر من 500 متجر حول العالم",
        "جائزة أفضل تصميم أوروبي 2023",
        "شراكة مع أشهر عارضات الأزياء",
        "مبيعات تتجاوز 100 مليون يورو سنوياً"
      ],
      values: ["الجودة", "الابتكار", "الاستدامة", "الأناقة"],
      category: "luxury",
      color: "#8B5CF6",
      founder: "إيزابيل دوبوا",
      employees: "2,500+",
      countries: "45",
      link: "/brands",
    },
    {
      id: 2,
      name: "موضة الشباب",
      tagline: "أزياء تعبر عن شخصيتك",
      foundedYear: 2010,
      location: "لوس أنجلوس، أمريكا",
      image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=800&h=600&fit=crop",
      logo: "https://images.unsplash.com/photo-1572635196237-14b3f281503f?w=100&h=100&fit=crop",
      story: "ولدت من رؤية مجموعة من الشباب المبدعين الذين أرادوا كسر القوالب التقليدية في عالم الموضة. بدأنا بتصميمات جريئة وألوان زاهية تعكس روح الشباب وطاقتهم. من شوارع هوليوود إلى منصات التواصل الاجتماعي، انتشرت تصميماتنا كالنار في الهشيم. نحن نؤمن بأن الأزياء يجب أن تكون تعبيراً حقيقياً عن الشخصية والإبداع، وليس مجرد ملابس.",
      achievements: [
        "أسرع نمو في قطاع الأزياء الشبابية",
        "5 مليون متابع على وسائل التواصل",
        "تعاون مع أشهر المؤثرين",
        "حضور في 25 دولة"
      ],
      values: ["الإبداع", "التنوع", "الحرية", "الشباب"],
      category: "streetwear",
      color: "#F59E0B",
      founder: "أليكس جونسون",
      employees: "800+",
      countries: "25",
      link: "/blog1"
    },
    {
      id: 3,
      name: "الأزياء المستدامة",
      tagline: "موضة صديقة للبيئة",
      foundedYear: 2018,
      location: "كوبنهاغن، الدنمارك",
      image: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&h=600&fit=crop",
      logo: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=100&h=100&fit=crop",
      story: "في عالم يواجه تحديات بيئية متزايدة، قررنا أن نكون جزءاً من الحل وليس المشكلة. بدأت رحلتنا بسؤال بسيط: كيف يمكننا صنع أزياء جميلة دون الإضرار بكوكبنا؟ من خلال البحث والتطوير، توصلنا إلى تقنيات مبتكرة لاستخدام مواد مستدامة وعمليات إنتاج صديقة للبيئة. كل قطعة نصنعها تحكي قصة الحب للطبيعة والمسؤولية تجاه الأجيال القادمة.",
      achievements: [
        "100% مواد مستدامة ومعاد تدويرها",
        "شهادة الكربون المحايد",
        "جائزة الموضة المستدامة 2023",
        "توفير 50% من استهلاك المياه"
      ],
      values: ["الاستدامة", "المسؤولية", "الشفافية", "الجودة"],
      category: "sustainable",
      color: "#10B981",
      founder: "إيما لارسن",
      employees: "300+",
      countries: "15"
    },
    {
      id: 4,
      name: "التراث العربي",
      tagline: "أصالة بلمسة عصرية",
      foundedYear: 1995,
      location: "دبي، الإمارات",
      image: img1,
      logo: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=100&h=100&fit=crop",
      story: "نحن نحتفي بالتراث العربي الغني ونعيد تفسيره بطريقة عصرية تناسب المرأة العربية المعاصرة. من الأقمشة التقليدية المطرزة يدوياً إلى القصات العصرية، نحن نجمع بين عبق الماضي وروح الحاضر. كل تصميم يحكي قصة من التاريخ العربي العريق، مع لمسة حديثة تجعله مناسباً لكل مناسبة. نحن فخورون بكوننا سفراء للثقافة العربية في عالم الموضة.",
      achievements: [
        "أول ماركة عربية في أسبوع الموضة الباريسي",
        "تصدير لأكثر من 40 دولة",
        "جائزة التميز الثقافي من اليونسكو",
        "دعم أكثر من 200 حرفي تقليدي"
      ],
      values: ["الأصالة", "التراث", "الفخر", "التطوير"],
      category: "heritage",
      color: "#DC2626",
      founder: "فاطمة الزهراء",
      employees: "1,200+",
      countries: "40"
    }
  ];

  const tabs = [
    { id: 'heritage', label: 'التراث', icon: Award, color: '#DC2626' },
    { id: 'innovation', label: 'الابتكار', icon: Sparkles, color: '#8B5CF6' },
    { id: 'sustainability', label: 'الاستدامة', icon: Globe, color: '#10B981' },
    { id: 'community', label: 'المجتمع', icon: Users, color: '#F59E0B' }
  ];

  // متغيرات الرسوم المتحركة المتقدمة
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 60, opacity: 0, scale: 0.8 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
        duration: 0.8
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      x: [-10, 10, -10],
      rotate: [-5, 5, -5],
      transition: {
        duration: 8,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  // تحويلات التمرير
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0.6]);

  return (
    <section className="py-20 bg-gradient-to-br relative overflow-hidden ">
      {/* خلفية متحركة متقدمة */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-gradient-to-r from-purple-300 to-pink-300 rounded-full blur-3xl"
          style={{ y: y1, opacity }}
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full blur-3xl"
          style={{ y: y2, opacity }}
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full blur-3xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
        
        {/* جسيمات متحركة */}
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.8, 0.2],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* مؤشر الماوس التفاعلي */}
      {/* <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 0.3,
        }}
      /> */}

      <div className="container mx-auto px-4 relative z-10">
        {/* العنوان الرئيسي المحسن */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Quote className="w-5 h-5" />
            </motion.div>
            قصص ملهمة من عالم الموضة
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Quote className="w-5 h-5" />
            </motion.div>
          </motion.div>
          
          <motion.h2
            className="text-6xl md:text-7xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-shimmer">قصص الماركات</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            اكتشف الرحلات الملهمة وراء أشهر الماركات العالمية، من الحلم الأول إلى النجاح العالمي
            <br />
            <span className="text-purple-600 font-semibold">قصص حقيقية من الإبداع والمثابرة والنجاح</span>
          </motion.p>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 120 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto mt-8 rounded-full"
          />
        </motion.div>

        {/* التبويبات المحسنة */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-6 mb-16"
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={tab.id}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveTab(tab.id)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`tab-button flex items-center gap-3 px-8 py-4 rounded-2xl font-semibold transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-xl scale-105'
                  : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white shadow-lg hover:shadow-xl'
              } ${activeTab === tab.id ? 'active' : ''}`}
              style={{
                boxShadow: activeTab === tab.id ? `0 10px 30px ${tab.color}40` : undefined
              }}
            >
              <motion.div
                animate={activeTab === tab.id ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 0.5 }}
              >
                <tab.icon className="w-5 h-5" />
              </motion.div>
              {tab.label}
            </motion.button>
          ))}
        </motion.div>

        {/* شبكة قصص الماركات المحسنة */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-10 mb-20"
        >
          {brandStories.map((brand, index) => (
            <motion.div
              key={brand.id}
              variants={itemVariants}
              className="group"
            >
              <BrandStoryCard
                brand={brand}
                index={index}
                onSelect={() => setSelectedStory(brand)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* إحصائيات الماركات المحسنة */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16"
        >
          {[
            { icon: Award, label: "ماركة مميزة", value: "50+", color: "#8B5CF6" },
            { icon: Globe, label: "دولة", value: "120+", color: "#10B981" },
            { icon: Users, label: "عميل سعيد", value: "2M+", color: "#F59E0B" },
            { icon: TrendingUp, label: "نمو سنوي", value: "25%", color: "#DC2626" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -8 }}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="stat-card text-center p-8 rounded-3xl"
            >
              <motion.div
                className="icon-bounce mb-4"
                whileHover={{ scale: 1.2 }}
                style={{ color: stat.color }}
              >
                <stat.icon className="w-10 h-10 mx-auto" />
              </motion.div>
              <motion.div
                className="text-4xl font-bold text-gray-900 mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* زر استكشاف المزيد المحسن */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="btn-story text-white px-16 py-6 rounded-full text-xl font-bold shadow-2xl relative overflow-hidden group"
            >
              <motion.span
                className="flex items-center gap-4 relative z-10"
                whileHover={{ x: 5 }}
              >
                <BookOpen className="w-6 h-6" />
                استكشف جميع القصص الملهمة
                <motion.div
                  animate={{ x: [0, 8, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <ArrowRight className="w-6 h-6" />
                </motion.div>
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* مودال تفاصيل القصة المحسن */}
      <AnimatePresence>
        {selectedStory && (
          <StoryModal 
            story={selectedStory} 
            onClose={() => setSelectedStory(null)} 
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// مكون بطاقة قصة الماركة المحسن
const BrandStoryCard = ({ brand, index, onSelect }) => {
  return (
    <motion.div
      whileHover={{ y: -15, rotateY: 5, rotateX: 5 }}
      className="story-card bg-white rounded-3xl shadow-story hover:shadow-story-hover transition-all duration-500 overflow-hidden cursor-pointer relative"
      onClick={onSelect}
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* صورة الخلفية */}
      <div className="relative h-72 overflow-hidden">
        <motion.img
          src={brand.image}
          alt={brand.name}
          className="image-parallax w-full h-full object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        />
        
        {/* طبقة التراكب المتدرجة */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        
        {/* شعار الماركة مع تأثير */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          whileInView={{ scale: 1, rotate: 0 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring" }}
          className="absolute top-6 left-6"
        >
          <motion.img
            src={brand.logo}
            alt={`${brand.name} logo`}
            className="w-16 h-16 rounded-full border-3 border-white shadow-xl"
            whileHover={{ scale: 1.1, rotate: 5 }}
          />
        </motion.div>

        {/* فئة الماركة مع تأثير نبضة */}
        <motion.div
          className="absolute top-6 right-6"
          whileHover={{ scale: 1.1 }}
        >
          <span 
            className="badge-glow px-4 py-2 rounded-full text-sm font-bold text-white relative overflow-hidden"
            style={{ backgroundColor: brand.color }}
          >
            {brand.category}
          </span>
        </motion.div>

        {/* أيقونة التاج للماركات الفاخرة */}
        {brand.category === 'luxury' && (
          <motion.div
            className="absolute top-6 left-1/2 transform -translate-x-1/2"
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Crown className="w-8 h-8 text-yellow-400" />
          </motion.div>
        )}

        {/* معلومات أساسية */}
        <div className="absolute bottom-6 left-6 right-6 text-white">
          <motion.h3
            className="text-3xl font-bold mb-3"
            whileHover={{ scale: 1.05 }}
          >
            {brand.name}
          </motion.h3>
          <motion.p
            className="text-lg opacity-90 mb-4"
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 0.9, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            {brand.tagline}
          </motion.p>
          <div className="flex items-center gap-6 text-sm">
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <Calendar className="w-4 h-4" />
              {brand.foundedYear}
            </motion.div>
            <motion.div
              className="flex items-center gap-2"
              whileHover={{ scale: 1.05 }}
            >
              <MapPin className="w-4 h-4" />
              {brand.location}
            </motion.div>
          </div>
        </div>
      </div>

      {/* محتوى البطاقة */}
      <div className="p-8">
        <motion.p
          className="text-gray-600 leading-relaxed mb-6 line-clamp-4"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {brand.story}
        </motion.p>
        
        {/* إحصائيات سريعة */}
        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{brand.employees}</div>
            <div className="text-xs text-gray-500">موظف</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{brand.countries}</div>
            <div className="text-xs text-gray-500">دولة</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-purple-600">{2024 - brand.foundedYear}</div>
            <div className="text-xs text-gray-500">سنة</div>
          </div>
        </div>
        
        {/* القيم */}
        <div className="flex flex-wrap gap-2 mb-6">
          {brand.values.slice(0, 3).map((value, idx) => (
            <motion.span
              key={idx}
              className="value-tag px-4 py-2 rounded-full text-sm font-medium"
              whileHover={{ scale: 1.05 }}
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ delay: idx * 0.1 }}
            >
              {value}
            </motion.span>
          ))}
        </div>

        {/* زر القراءة */}
        <motion.div
          whileHover={{ x: 8 }}
          className="flex items-center gap-3 text-purple-600 font-bold text-lg group-hover:text-purple-700 transition-colors"
        >
          <Play className="w-5 h-5" />
          اقرأ القصة كاملة
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

// مكون مودال تفاصيل القصة المحسن
const StoryModal = ({ story, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="modal-backdrop fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.7, opacity: 0, rotateY: -15 }}
        animate={{ scale: 1, opacity: 1, rotateY: 0 }}
        exit={{ scale: 0.7, opacity: 0, rotateY: 15 }}
        transition={{ type: "spring", damping: 25, stiffness: 300 }}
        className="modal-content rounded-3xl max-w-5xl w-full max-h-[90vh] overflow-y-auto bg-black/80"
        onClick={(e) => e.stopPropagation()}
      >
        {/* رأس المودال */}
        <div className="relative h-80 overflow-hidden rounded-t-3xl  ">
          <motion.img
            src={story.image}
            alt={story.name}
            className="w-full h-full object-cover"
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.8 }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent" />
          
          <motion.button
            onClick={onClose}
            className="absolute top-6 right-6 w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-colors text-2xl"
            whileHover={{ scale: 1.1, rotate: 90 }}
            whileTap={{ scale: 0.9 }}
          >
            ×
          </motion.button>
          
          <div className="absolute bottom-8 left-8 text-white">
            <motion.h2
              className="text-4xl font-bold mb-3"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {story.name}
            </motion.h2>
            <motion.p
              className="text-xl opacity-90"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 0.9 }}
              transition={{ delay: 0.3 }}
            >
              {story.tagline}
            </motion.p>
          </div>
        </div>

        {/* محتوى المودال */}
        <div className="p-10">
          <div className="grid md:grid-cols-2 gap-10 bg-white rounded-3xl shadow-lg p-8 z-3">
            {/* القصة */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <BookOpen className="w-8 h-8 text-purple-600" />
                قصتنا
              </h3>
              <p className="text-gray-600 leading-relaxed mb-8 text-lg">{story.story}</p>
              
              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-500" />
                إنجازاتنا
              </h4>
              <ul className="space-y-3">
                {story.achievements.map((achievement, idx) => (
                  <motion.li
                    key={idx}
                    className="flex items-center gap-3 text-gray-600"
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: 0.5 + idx * 0.1 }}
                  >
                    <Star className="w-5 h-5 text-yellow-500 flex-shrink-0" />
                    {achievement}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            {/* المعلومات والقيم */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              <h3 className="text-3xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                <Zap className="w-8 h-8 text-purple-600" />
                معلومات الماركة
              </h3>
              <div className="space-y-6 mb-8">
                <motion.div
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <Calendar className="w-6 h-6 text-purple-600" />
                  <div>
                    <div className="font-semibold">تأسست في</div>
                    <div className="text-gray-600">{story.foundedYear}</div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <MapPin className="w-6 h-6 text-purple-600" />
                  <div>
                    <div className="font-semibold">المقر الرئيسي</div>
                    <div className="text-gray-600">{story.location}</div>
                  </div>
                </motion.div>
                <motion.div
                  className="flex items-center gap-4 p-4 bg-gray-50 rounded-2xl"
                  whileHover={{ scale: 1.02 }}
                >
                  <Users className="w-6 h-6 text-purple-600" />
                  <div>
                    <div className="font-semibold">المؤسس</div>
                    <div className="text-gray-600">{story.founder}</div>
                  </div>
                </motion.div>
              </div>

              <h4 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Heart className="w-6 h-6 text-red-500" />
                قيمنا
              </h4>
              <div className="flex flex-wrap gap-3">
                {story.values.map((value, idx) => (
                  <motion.span
                    key={idx}
                    className="px-6 py-3 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-semibold border border-purple-200"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{ delay: 0.6 + idx * 0.1, type: "spring" }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    {value}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BrandStories;

