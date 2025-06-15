import React, { useState, useRef, useEffect } from 'react';

const FAQItem = ({ question, answer, isOpen, onToggle, index }) => {
  const contentRef = useRef(null);
  const [contentHeight, setContentHeight] = useState(0);

  useEffect(() => {
    if (contentRef.current) {
      setContentHeight(contentRef.current.scrollHeight);
    }
  }, [answer]);

  return (
    <div className="border-b border-gray-200 last:border-b-0 group">
      <button
        className="flex justify-between items-center w-full text-right py-6 px-6 bg-white hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-inset group-hover:shadow-sm"
        onClick={onToggle}
        aria-expanded={isOpen}
        aria-controls={`faq-content-${index}`}
      >
        <span className="text-lg font-semibold text-gray-800 flex-1 text-right group-hover:text-blue-700 transition-colors duration-200">
          {question}
        </span>
        <div className="ml-4 flex-shrink-0">
          <div className={`w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center transition-all duration-300 ${
            isOpen ? 'bg-blue-500 rotate-180' : 'group-hover:bg-blue-200'
          }`}>
            <svg
              className={`w-4 h-4 transition-colors duration-200 ${
                isOpen ? 'text-white' : 'text-blue-600'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </button>
      <div
        id={`faq-content-${index}`}
        className="overflow-hidden transition-all duration-500 ease-in-out"
        style={{
          maxHeight: isOpen ? `${contentHeight}px` : '0px',
          opacity: isOpen ? 1 : 0,
        }}
      >
        <div
          ref={contentRef}
          className="px-6 pb-6 text-gray-600 leading-relaxed text-right"
        >
          <div className="border-r-4 border-blue-200 pr-4 bg-gray-50 p-4 rounded-r-lg">
            {answer}
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchBar = ({ searchTerm, onSearchChange }) => {
  return (
    <div className="relative mb-8">
      <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
        <svg
          className="w-5 h-5 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
      </div>
      <input
        type="text"
        placeholder="ابحث في الأسئلة الشائعة..."
        value={searchTerm}
        onChange={(e) => onSearchChange(e.target.value)}
        className="w-full pr-10 pl-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-right"
        dir="rtl"
      />
    </div>
  );
};

const CategoryFilter = ({ categories, selectedCategory, onCategoryChange }) => {
  return (
    <div className="flex flex-wrap gap-2 mb-8 justify-center">
      {categories.map((category) => (
        <button
          key={category.id}
          onClick={() => onCategoryChange(category.id)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
            selectedCategory === category.id
              ? 'bg-blue-500 text-white shadow-md'
              : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
          }`}
        >
          {category.name}
        </button>
      ))}
    </div>
  );
};

const FAQSection = () => {
  const [openItems, setOpenItems] = useState(new Set());
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

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

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white" dir="rtl">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            الأسئلة الشائعة
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            إليك إجابات على أكثر الأسئلة شيوعاً حول منتجاتنا وخدماتنا
          </p>
          
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
          <div className="flex justify-center gap-4 mb-8">
            <button
              onClick={expandAll}
              className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 transition-colors duration-200"
            >
              توسيع الكل
            </button>
            <button
              onClick={collapseAll}
              className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 transition-colors duration-200"
            >
              طي الكل
            </button>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {filteredFaqs.length > 0 ? (
            filteredFaqs.map((faq, index) => (
              <FAQItem
                key={faq.id}
                question={faq.question}
                answer={faq.answer}
                isOpen={openItems.has(faq.id)}
                onToggle={() => toggleItem(faq.id)}
                index={index}
              />
            ))
          ) : (
            <div className="p-8 text-center text-gray-500">
              <svg className="w-16 h-16 mx-auto mb-4 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.824-2.562M15 6.306a7.962 7.962 0 00-6 0m6 0a7.962 7.962 0 105.824 8.518M9.172 16.172L6.343 19.01a1.992 1.992 0 01-2.829 0l-.707-.707a1.992 1.992 0 010-2.829l2.829-2.828M15.172 6.172a4 4 0 00-6 0" />
              </svg>
              <p>لم يتم العثور على أسئلة تطابق بحثك</p>
            </div>
          )}
        </div>

        {/* Contact CTA */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            لم تجد إجابة لسؤالك؟
          </p>
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold py-3 px-8 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            تواصل معنا
          </button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

