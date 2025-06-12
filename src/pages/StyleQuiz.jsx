import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Sparkles,
  ArrowRight,
  ArrowLeft,
  MessageSquare,
  RefreshCw,
  Palette,
  Target,
  Award,
  Share2
} from 'lucide-react';
import { Button } from '@/components/ui/button';

// Quiz questions data
const quizQuestions = [
  {
    id: 1,
    question: "ما هو نشاطك المفضل في عطلة نهاية الأسبوع؟",
    options: [
      { id: 'a', text: "قراءة كتاب في مقهى هادئ", styles: ['classic', 'minimalist'] },
      { id: 'b', text: "الذهاب لحفلة أو مناسبة اجتماعية", styles: ['glamorous', 'trendy'] },
      { id: 'c', text: "استكشاف أماكن جديدة في الطبيعة", styles: ['bohemian', 'casual'] },
      { id: 'd', text: "ممارسة الرياضة أو النشاطات البدنية", styles: ['sporty', 'casual'] }
    ]
  },
  {
    id: 2,
    question: "أي من هذه الألوان تجذبك أكثر؟",
    options: [
      { id: 'a', text: "الأسود والأبيض والرمادي", styles: ['classic', 'minimalist'] },
      { id: 'b', text: "الذهبي والفضي والألوان المعدنية", styles: ['glamorous', 'trendy'] },
      { id: 'c', text: "الألوان الترابية والطبيعية", styles: ['bohemian', 'casual'] },
      { id: 'd', text: "الألوان الزاهية والنيون", styles: ['sporty', 'trendy'] }
    ]
  },
  {
    id: 3,
    question: "كيف تصفين شخصيتك؟",
    options: [
      { id: 'a', text: "هادئة ومنظمة وأحب البساطة", styles: ['classic', 'minimalist'] },
      { id: 'b', text: "واثقة ومحبة للأضواء والانتباه", styles: ['glamorous', 'trendy'] },
      { id: 'c', text: "حرة ومبدعة وأحب التميز", styles: ['bohemian', 'artistic'] },
      { id: 'd', text: "نشيطة وعملية وأحب الراحة", styles: ['sporty', 'casual'] }
    ]
  },
  {
    id: 4,
    question: "ما هو مصدر إلهامك في الموضة؟",
    options: [
      { id: 'a', text: "الأيقونات الكلاسيكية مثل أودري هيبورن", styles: ['classic', 'glamorous'] },
      { id: 'b', text: "المشاهير والمؤثرين على وسائل التواصل", styles: ['trendy', 'glamorous'] },
      { id: 'c', text: "الفن والثقافات المختلفة", styles: ['bohemian', 'artistic'] },
      { id: 'd', text: "الراحة والعملية في الحياة اليومية", styles: ['casual', 'minimalist'] }
    ]
  },
  {
    id: 5,
    question: "أي من هذه القطع تعتبرينها أساسية في خزانتك؟",
    options: [
      { id: 'a', text: "بلوزة بيضاء كلاسيكية وبنطلون أسود", styles: ['classic', 'minimalist'] },
      { id: 'b', text: "فستان أسود أنيق وحذاء بكعب عالي", styles: ['glamorous', 'classic'] },
      { id: 'c', text: "كيمونو ملون وإكسسوارات مميزة", styles: ['bohemian', 'artistic'] },
      { id: 'd', text: "جينز مريح وحذاء رياضي", styles: ['casual', 'sporty'] }
    ]
  }
];

const StyleQuiz = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [isStarted, setIsStarted] = useState(false);

  const handleAnswer = () => {
    if (currentQuestion < quizQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setAnswers([]);
    setShowResult(false);
    setIsStarted(false);
  };

  const handleContactUs = () => {
    // يمكنك استبدال هذا برابط صفحة التواصل الفعلية أو وظيفة مودال/دردشة
    alert('سيتم توجيهك لصفحة التواصل لمعرفة ستايلك الآن!');
    // مثال: window.location.href = '/contact-us';
  };

  // Start Screen
  if (!isStarted) {
    return (
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-8">
              <Palette className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                اكتشف ستايلك
              </span>
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              اختبار شخصية مصمم خصيصاً لمساعدتك في اكتشاف ستايلك الفريد والعثور على القطع المثالية لك
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Target className="h-6 w-6 text-purple-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">5 أسئلة فقط</h3>
                <p className="text-gray-600 text-sm">اختبار سريع وممتع</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-pink-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Award className="h-6 w-6 text-pink-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">نتائج مخصصة</h3>
                <p className="text-gray-600 text-sm">اقتراحات منتجات مناسبة لك</p>
              </div>
              
              <div className="bg-white rounded-2xl p-6 shadow-lg">
                <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Share2 className="h-6 w-6 text-orange-600" />
                </div>
                <h3 className="font-bold text-gray-800 mb-2">شارك النتيجة</h3>
                <p className="text-gray-600 text-sm">مع الأصدقاء على وسائل التواصل</p>
              </div>
            </div>

            <Button
              onClick={() => setIsStarted(true)}
              className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-12 py-4 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            >
              <Sparkles className="ml-2 h-5 w-5" />
              ابدء الاختبار
            </Button>
          </motion.div>
        </div>
      </section>
    );
  }

  // Result Screen (Simplified)
  if (showResult) {
    return (
      <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full mb-6">
              <Palette className="h-10 w-10 text-white" />
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                شكراً لك على إكمال الاختبار!
              </span>
            </h2>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed">
              للحصول على استشارة شخصية ومعرفة ستايلك الفريد، تواصلي معنا الآن.
            </p>

            <div className="flex justify-center space-x-4 rtl:space-x-reverse mb-12">
              <Button
                onClick={handleContactUs}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white px-6 py-3 text-lg rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <MessageSquare className="ml-2 h-5 w-5" />
                تواصل لمعرفة ستايلك الآن
              </Button>
              
              <Button
                onClick={resetQuiz}
                variant="outline"
                className="border-gray-200 text-gray-600 hover:bg-gray-50 px-6 py-3 text-lg rounded-full"
              >
                <RefreshCw className="ml-2 h-5 w-5" />
                إعادة الاختبار
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    );
  }

  // Quiz Questions
  const question = quizQuestions[currentQuestion];
  const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;

  return (
    <section className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Progress Bar */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-gray-600">
              السؤال {currentQuestion + 1} من {quizQuestions.length}
            </span>
            <span className="text-sm font-medium text-gray-600">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <motion.div
              className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
            />
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={currentQuestion}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-white rounded-3xl shadow-xl p-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
              {question.question}
            </h2>

            <div className="grid gap-4">
              {question.options.map((option) => (
                <motion.button
                  key={option.id}
                  onClick={() => handleAnswer(option)}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center p-6 bg-gray-50 hover:bg-purple-50 rounded-2xl transition-all duration-300 text-right border-2 border-transparent hover:border-purple-200"
                >
                  <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full ml-4">
                    {/* {option.icon} */} {/* This was commented out, leaving it as is as it's not directly related to the main icons */}
                  </div>
                  <span className="text-lg font-medium text-gray-700 flex-1">
                    {option.text}
                  </span>
                  <ArrowRight className="h-5 w-5 text-gray-400" />
                </motion.button>
              ))}
            </div>

            {currentQuestion > 0 && (
              <div className="flex justify-center mt-8">
                <Button
                  onClick={() => setCurrentQuestion(currentQuestion - 1)}
                  variant="outline"
                  className="border-gray-200 text-gray-600 hover:bg-gray-50"
                >
                  <ArrowLeft className="ml-2 h-4 w-4" />
                  السؤال السابق
                </Button>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default StyleQuiz;
