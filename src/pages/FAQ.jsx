import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Search, 
  ChevronDown, 
  MessageCircle, 
  Sparkles, 
  HelpCircle,
  ArrowRight,
  Users,
  Crown,
  Globe,
  Award
} from 'lucide-react';

const FAQItem = ({ question, answer, isOpen, onToggle, index }) => {
  const contentRef = useRef(null);

  return (
    <motion.div 
      className="border-b border-purple-100 last:border-b-0 group overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ scale: 1.01 }}
    >
      <motion.button
        className="flex justify-between items-center w-full text-right py-6 px-6 bg-white/80 backdrop-blur-sm hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 transition-all duration-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-inset group-hover:shadow-lg relative overflow-hidden"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${index}`}
        whileHover={{ x: 5 }}
        whileTap={{ scale: 0.98 }}
      >
        {/* تأثير خلفي متحرك */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-pink-500/10"
          initial={{ x: '-100%' }}
          whileHover={{ x: '0%' }}
          transition={{ duration: 0.6 }}
        />
        
        <span className="text-lg font-semibold text-gray-800 flex-1 text-right group-hover:text-purple-700 transition-colors duration-300 relative z-10">
          {question}
        </span>
        <div className="ml-4 flex-shrink-0 relative z-10">
          <motion.div 
            className={`w-10 h-10 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center transition-all duration-500 shadow-md ${
              isOpen ? 'bg-gradient-to-r from-purple-500 to-pink-600 shadow-lg' : 'group-hover:from-purple-200 group-hover:to-pink-200'
            }`}
            whileHover={{ scale: 1.1, rotate: 5 }}
            whileTap={{ scale: 0.9 }}
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.3 }}
          >
            <ChevronDown
              className={`w-5 h-5 transition-colors duration-300 ${
                isOpen ? 'text-white' : 'text-purple-600'
              }`}
            />
          </motion.div>
        </div>
      </motion.button>
      
      {/* محتوى الإجابة مع أنيميشن محسن */}
      <div
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? '1000px' : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <motion.div
          ref={contentRef}
          className="px-6 pb-6 text-gray-600 leading-relaxed text-right"
          initial={false}
          animate={isOpen ? 
            { y: 0, opacity: 1 } : 
            { y: -20, opacity: 0 }
          }
          transition={{ 
            duration: 0.4,
            ease: "easeInOut",
            delay: isOpen ? 0.2 : 0
          }}
        >
          <div className="border-r-4 border-purple-400 pr-4 bg-gradient-to-r from-purple-50/50 to-pink-50/50 p-6 rounded-r-xl backdrop-blur-sm shadow-inner">
            {answer}
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <motion.div 
      className="relative mb-8"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div 
        className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none"
        whileHover={{ scale: 1.1 }}
      >
        <Search className="w-5 h-5 text-purple-400" />
      </motion.div>
      <motion.input
        type="text"
        placeholder="ابحث في الأسئلة الشائعة..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pr-12 pl-4 py-4 border border-purple-200 rounded-2xl focus:ring-2 focus:ring-purple-500 focus:border-purple-500 text-right bg-white/80 backdrop-blur-sm shadow-lg transition-all duration-300 hover:shadow-xl"
        dir="rtl"
        whileFocus={{ scale: 1.02 }}
      />
    </motion.div>
  );
};

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <motion.div 
      className="flex flex-wrap gap-3 mb-10 justify-center"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, staggerChildren: 0.1 }}
    >
      {categories.map((category, index) => (
        <motion.button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.1 }}
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 backdrop-blur-sm shadow-lg ${
            selectedCategory === category.id
              ? 'bg-gradient-to-r from-purple-500 to-pink-600 text-white shadow-purple-300'
              : 'bg-white/80 text-gray-700 hover:bg-gradient-to-r hover:from-purple-100 hover:to-pink-100 hover:text-purple-700'
          }`}
        >
          {category.name}
        </motion.button>
      ))}
    </motion.div>
  );
};

const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
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

  const categories = [
    { id: 'all', name: 'الكل' },
    { id: 'payment', name: 'الدفع والفواتير' },
    { id: 'shipping', name: 'الشحن والتوصيل' },
    { id: 'returns', name: 'الإرجاع والاستبدال' },
    { id: 'products', name: 'المنتجات والمقاسات' },
    { id: 'support', name: 'الدعم والمساعدة' },
  ];

  const faqs = [
    {
      id: 1,
      category: 'payment',
      question: 'ما هي طرق الدفع المتاحة؟',
      answer: 'نقبل الدفع عبر البطاقات الائتمانية (فيزا، ماستركارد)، مدى، Apple Pay، وخدمات الدفع الإلكتروني مثل PayPal. كما نوفر خيار الدفع عند الاستلام في بعض المناطق.',
    },
    {
      id: 2,
      category: 'returns',
      question: 'هل يمكنني إرجاع أو استبدال المنتج؟',
      answer: 'نعم، يمكنك إرجاع أو استبدال المنتجات خلال 14 يومًا من تاريخ الشراء، بشرط أن تكون في حالتها الأصلية وغير مستخدمة ومع جميع الملصقات المرفقة. يرجى مراجعة سياسة الإرجاع والاستبدال الكاملة على موقعنا.',
    },
    {
      id: 3,
      category: 'shipping',
      question: 'كم يستغرق الشحن؟ وما هي تكلفته؟',
      answer: 'يختلف وقت وتكلفة الشحن حسب موقعك وطريقة الشحن المختارة. عادةً ما يستغرق الشحن داخل المملكة من 2-5 أيام عمل للشحن العادي، و 1-2 يوم للشحن السريع. الشحن مجاني للطلبات التي تزيد عن 200 ريال.',
    },
    {
      id: 4,
      category: 'shipping',
      question: 'كيف يمكنني تتبع طلبي؟',
      answer: 'بعد شحن طلبك، ستتلقى رسالة نصية ورسالة بريد إلكتروني تحتوي على رقم تتبع الشحنة ورابط لتتبعها عبر موقع شركة الشحن. يمكنك أيضاً تتبع طلبك من خلال حسابك على موقعنا.',
    },
    {
      id: 5,
      category: 'shipping',
      question: 'هل تتوفر خدمة التوصيل الدولي؟',
      answer: 'نعم، نوفر خدمة التوصيل الدولي إلى دول الخليج العربي ومعظم الدول العربية. يرجى مراجعة صفحة الشحن الدولي لمزيد من التفاصيل حول الدول المدعومة والتكاليف.',
    },
    {
      id: 6,
      category: 'products',
      question: 'كيف أختار المقاس الصحيح؟',
      answer: 'نقدم جدول مقاسات مفصل لكل منتج لمساعدتك في اختيار المقاس المناسب. يمكنك العثور عليه في صفحة المنتج تحت قسم "دليل المقاسات". إذا كنت بحاجة إلى مساعدة إضافية، فلا تتردد في التواصل مع خدمة العملاء.',
    },
    {
      id: 7,
      category: 'products',
      question: 'هل المنتجات أصلية؟',
      answer: 'نحن نضمن أن جميع منتجاتنا أصلية 100% ونقوم بالتعامل مباشرة مع الموردين والعلامات التجارية الموثوقة. كل منتج يأتي مع ضمان الأصالة وشهادة من العلامة التجارية.',
    },
    {
      id: 8,
      category: 'support',
      question: 'كيف يمكنني التواصل مع خدمة العملاء؟',
      answer: 'يمكنك التواصل معنا عبر البريد الإلكتروني support@fashionstore.com، أو الاتصال بنا على الرقم 920012345 خلال ساعات العمل (9 صباحاً - 9 مساءً)، أو استخدام الدردشة المباشرة على موقعنا.',
    },
    {
      id: 9,
      category: 'support',
      question: 'هل يمكنني تعديل أو إلغاء طلبي بعد تأكيده؟',
      answer: 'إذا كنت ترغب في تعديل أو إلغاء طلبك، يرجى التواصل معنا خلال ساعة من تأكيد الطلب. قد لا نتمكن من إجراء التعديلات إذا تم تحضير الطلب أو شحنه بالفعل.',
    },
    {
      id: 10,
      category: 'payment',
      question: 'هل لديكم عروض أو خصومات؟',
      answer: 'نعم، نقدم عروضاً وخصومات بشكل دوري خلال المواسم والمناسبات الخاصة. يرجى الاشتراك في قائمتنا البريدية ومتابعة حساباتنا على وسائل التواصل الاجتماعي لتلقي آخر التحديثات والعروض الحصرية.',
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch = faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleItem = (id) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(id)) {
      newOpenItems.delete(id);
    } else {
      newOpenItems.add(id);
    }
    setOpenItems(newOpenItems);
  };

  const expandAll = () => {
    setOpenItems(new Set(filteredFaqs.map(faq => faq.id)));
  };

  const collapseAll = () => {
    setOpenItems(new Set());
  };

  // متغيرات الأنيميشن المبسطة
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
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-indigo-50 relative overflow-hidden" dir="rtl">
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
        {[...Array(15)].map((_, i) => (
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

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header محسن */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.8, delay: 0.2, type: "spring" }}
            className="inline-flex items-center gap-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full text-sm font-semibold mb-8 shadow-lg"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <HelpCircle className="w-5 h-5" />
            </motion.div>
            أسئلة وأجوبة شاملة
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <HelpCircle className="w-5 h-5" />
            </motion.div>
          </motion.div>

          <motion.h2 
            className="text-6xl md:text-7xl font-bold text-gray-900 mb-8"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <span className="text-shimmer bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              الأسئلة الشائعة
            </span>
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto mb-10 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            إليك إجابات على أكثر الأسئلة شيوعاً حول منتجاتنا وخدماتنا
            <br />
            <span className="text-purple-600 font-semibold">كل ما تحتاج لمعرفته في مكان واحد</span>
          </motion.p>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: 120 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="h-1 bg-gradient-to-r from-purple-500 to-pink-600 mx-auto rounded-full"
          />
          
          {/* Search Bar */}
          <SearchBar 
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          />
          
          {/* Category Filter */}
          <CategoryFilter 
            categories={categories}
            selectedCategory={selectedCategory}
            onCategoryChange={setSelectedCategory}
          />
          
          {/* Expand/Collapse All Buttons */}
          <motion.div 
            className="flex justify-center gap-6 mb-10"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.button
              onClick={expandAll}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-sm font-semibold text-purple-600 hover:text-purple-800 transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl"
            >
              توسيع الكل
            </motion.button>
            <motion.button
              onClick={collapseAll}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="px-6 py-3 text-sm font-semibold text-gray-600 hover:text-gray-800 transition-all duration-300 bg-white/80 backdrop-blur-sm rounded-full shadow-lg hover:shadow-xl"
            >
              طي الكل
            </motion.button>
          </motion.div>
        </motion.div>

     

        {/* FAQ Items مع key لضمان إعادة التشغيل */}
        <motion.div 
          className="bg-white/90 backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border border-purple-100"
          key={`${selectedCategory}-${searchTerm}`} // إضافة key فريد لإعادة التشغيل
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <AnimatePresence mode="wait">
            {filteredFaqs.length > 0 ? (
              <motion.div
                key="faq-list"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                {filteredFaqs.map((faq, index) => (
                  <FAQItem
                    key={faq.id}
                    question={faq.question}
                    answer={faq.answer}
                    isOpen={openItems.has(faq.id)}
                    onToggle={() => toggleItem(faq.id)}
                    index={index}
                  />
                ))}
              </motion.div>
            ) : (
              <motion.div 
                key="no-results"
                className="p-12 text-center text-gray-500"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.6 }}
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <Search className="w-20 h-20 mx-auto mb-6 text-gray-300" />
                </motion.div>
                <p className="text-xl font-semibold mb-2">لم يتم العثور على أسئلة</p>
                <p>جرب البحث بكلمات مختلفة أو اختر فئة أخرى</p>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Contact CTA محسن */}
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <motion.p 
            className="text-gray-600 mb-6 text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
          >
            لم تجد إجابة لسؤالك؟
          </motion.p>
          <motion.button 
            className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white font-bold py-4 px-12 rounded-full transition-all duration-300 shadow-2xl hover:shadow-purple-300 transform hover:-translate-y-1 flex items-center gap-3 mx-auto relative overflow-hidden group"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <motion.span
              className="flex items-center gap-3 relative z-10"
              whileHover={{ x: 5 }}
            >
              <MessageCircle className="w-5 h-5" />
              تواصل معنا
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <ArrowRight className="w-5 h-5" />
              </motion.div>
            </motion.span>
          </motion.button>
        </motion.div>

           {/* إحصائيات سريعة */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {[
            { icon: MessageCircle, label: "سؤال", value: "100+", color: "#8B5CF6" },
            { icon: Users, label: "عميل راضي", value: "50K+", color: "#10B981" },
            { icon: Globe, label: "دولة", value: "25+", color: "#F59E0B" },
            { icon: Award, label: "تقييم", value: "4.9★", color: "#DC2626" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05, y: -8 }}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center p-6 rounded-2xl bg-white/80 backdrop-blur-sm shadow-lg mt-5"
            >
              <motion.div
                className="mb-3"
                whileHover={{ scale: 1.2, rotate: 10 }}
                style={{ color: stat.color }}
              >
                <stat.icon className="w-8 h-8 mx-auto" />
              </motion.div>
              <motion.div
                className="text-3xl font-bold text-gray-900 mb-1"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {stat.value}
              </motion.div>
              <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default FAQSection;
