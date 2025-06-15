import { useState } from 'react';
import { FiChevronDown, FiChevronUp } from 'react-icons/fi';

const FAQ= () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: 'ما هي سياسة الإرجاع والاستبدال؟',
      answer: 'يمكنك إرجاع أو استبدال المنتج خلال 14 يومًا من تاريخ الشراء بشرط أن يكون المنتج بحالته الأصلية مع وجود العلامات والفاتورة. لا نقبل إرجاع الملابس الداخلية أو المنتجات المستعملة.'
    },
    {
      question: 'كم تستغرق فترة التوصيل؟',
      answer: 'تتراوح فترة التوصيل من 2 إلى 5 أيام عمل داخل المدينة، ومن 5 إلى 10 أيام عمل للمحافظات الأخرى. قد تختلف الفترة حسب المنطقة والظروف اللوجستية.'
    },
    {
      question: 'هل لديكم خدمة التوصيل السريع؟',
      answer: 'نعم، لدينا خدمة توصيل سريع خلال 24 ساعة داخل المدينة مقابل رسوم إضافية. يمكنك اختيار هذه الخدمة عند الدفع.'
    },
    {
      question: 'كيف أعرف المقاس المناسب لي؟',
      answer: 'لدينا دليل مقاسات مفصل لكل منتج. ننصح بقياس نفسك باستخدام شريط القياس ومقارنة النتائج مع جدول المقاسات الموجود في صفحة المنتج.'
    },
    {
      question: 'ما هي طرق الدفع المتاحة؟',
      answer: 'نقبل الدفع نقدًا عند الاستلام، التحويل البنكي، وبطاقات الائتمان والخصم عبر بوابات الدفع الإلكتروني الآمنة.'
    },
    {
      question: 'هل تقدمون خصومات للعملاء الدائمين؟',
      answer: 'نعم، لدينا برنامج ولاء للعملاء الدائمين مع خصومات تصل إلى 20% على المشتريات التالية بعد تجاوز حد معين من المشتريات.'
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          الأسئلة الشائعة
        </h2>
        
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm transition-all duration-300"
            >
              <button
                className="w-full flex justify-between items-center p-5 text-right focus:outline-none"
                onClick={() => toggleFAQ(index)}
              >
                <span className="text-lg font-medium text-gray-700">
                  {faq.question}
                </span>
                {activeIndex === index ? (
                  <FiChevronUp className="text-gray-500 text-xl" />
                ) : (
                  <FiChevronDown className="text-gray-500 text-xl" />
                )}
              </button>
              
              <div
                className={`px-5 pb-5 text-gray-600 transition-all duration-300 ease-in-out overflow-hidden ${
                  activeIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;