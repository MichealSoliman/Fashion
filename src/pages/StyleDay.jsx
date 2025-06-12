import React from 'react';

// سكشن أسلوبك اليوم - مكون React محترف لمتجر الملابس
const StyleDay = () => {
  return (
    <section className="bg-gradient-to-br from-rose-50 via-white to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* عنوان السكشن الرئيسي */}
        <div className="text-center mb-16">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
              أسلوبك اليوم
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
          </div>
          <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
            اكتشف إطلالات عصرية ومميزة تناسب شخصيتك وتعكس ذوقك الرفيع
          </p>
        </div>

        {/* المحتوى الرئيسي - تخطيط شبكي مبتكر */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

          {/* العمود الأيسر - إطلالة مميزة */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
              <div className="relative bg-white rounded-3xl p-8 shadow-xl">
                <div className="aspect-w-3 aspect-h-4 mb-6">
                  <div className="w-full h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
                        <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <h3 className="text-xl font-bold text-gray-800 mb-2">الإطلالة المميزة</h3>
                      <p className="text-gray-600 text-sm">أناقة عصرية تناسب كل المناسبات</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-bold text-gray-800">إطلالة الأناقة العصرية</h3>
                  <p className="text-gray-600 leading-relaxed">
                    تشكيلة مختارة بعناية تجمع بين الأناقة والراحة، مثالية للأجواء العملية والمناسبات الخاصة
                  </p>
                  <div className="flex flex-wrap gap-2 pt-4">
                    <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">أنيقة</span>
                    <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">عملية</span>
                    <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">عصرية</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* العمود الأوسط - معلومات الستايل */}
          <div className="lg:col-span-4 space-y-6">
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h4 className="text-xl font-bold text-gray-800 mr-4">نصائح الستايل</h4>
              </div>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 ml-3 flex-shrink-0"></span>
                  <span>اختر الألوان التي تناسب لون بشرتك</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 ml-3 flex-shrink-0"></span>
                  <span>امزج بين القطع الكلاسيكية والعصرية</span>
                </li>
                <li className="flex items-start">
                  <span className="w-2 h-2 bg-rose-500 rounded-full mt-2 ml-3 flex-shrink-0"></span>
                  <span>اهتم بالتفاصيل والإكسسوارات</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
              <h4 className="text-xl font-bold mb-3">اقتباس اليوم</h4>
              <p className="text-purple-100 italic leading-relaxed">
                "الأناقة ليست في الثوب الذي ترتديه، بل في الطريقة التي تحمل بها نفسك"
              </p>
            </div>
          </div>

          {/* العمود الأيمن - إطلالات إضافية */}
          <div className="lg:col-span-3">
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-gray-800 mb-6">إطلالات أخرى</h4>

              {/* إطلالة 1 */}
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg mb-3 flex items-center justify-center">
                  <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
                </div>
                <h5 className="font-semibold text-gray-800 mb-1">الإطلالة الكلاسيكية</h5>
                <p className="text-gray-600 text-sm">أناقة خالدة لا تذبل</p>
              </div>

              {/* إطلالة 2 */}
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg mb-3 flex items-center justify-center">
                  <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                </div>
                <h5 className="font-semibold text-gray-800 mb-1">الإطلالة الكاجوال</h5>
                <p className="text-gray-600 text-sm">راحة وأناقة في آن واحد</p>
              </div>

              {/* إطلالة 3 */}
              <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
                <div className="w-full h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg mb-3 flex items-center justify-center">
                  <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
                </div>
                <h5 className="font-semibold text-gray-800 mb-1">الإطلالة الجريئة</h5>
                <p className="text-gray-600 text-sm">للشخصيات المميزة</p>
              </div>
            </div>
          </div>
        </div>

        {/* قسم الألوان الرائجة */}
        <div className="bg-white rounded-3xl p-8 shadow-xl mb-16">
          <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">ألوان الموسم</h3>
          <div className="flex flex-wrap justify-center gap-6">
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg"></div>
              <span className="text-sm font-medium text-gray-700">البنفسجي الملكي</span>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg"></div>
              <span className="text-sm font-medium text-gray-700">الوردي الناعم</span>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg"></div>
              <span className="text-sm font-medium text-gray-700">الأزرق السماوي</span>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg"></div>
              <span className="text-sm font-medium text-gray-700">الأخضر الطبيعي</span>
            </div>
            <div className="text-center group cursor-pointer">
              <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg"></div>
              <span className="text-sm font-medium text-gray-700">البرتقالي المشرق</span>
            </div>
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="text-center">
          <div className="inline-flex items-center space-x-reverse space-x-4 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100">
            <div className="flex items-center space-x-reverse space-x-2">
              <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">تحديث يومي</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-reverse space-x-2">
              <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">إطلالات مختارة</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-reverse space-x-2">
              <div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse"></div>
              <span className="text-gray-700 font-medium">أحدث الصيحات</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StyleDay;

/*
تعليقات إضافية:

1. المكون محترف وجاهز للاستخدام في أي مشروع React
2. يستخدم Tailwind CSS للتنسيق بشكل كامل
3. تصميم متجاوب يعمل على جميع الأحجام
4. لا يحتوي على أي actions أو تفاعل - UI فقط
5. الألوان والتدرجات مختارة بعناية لتناسب متجر الأزياء
6. التخطيط مبتكر وغير تقليدي - بدون كاردات عادية
7. جميع النصوص باللغة العربية
8. يمكن تخصيصه بسهولة حسب احتياجات المتجر

طريقة الاستخدام:
import StyleOfTheDaySection from './StyleOfTheDaySection';

function App() {
  return (
    <div>
      <StyleOfTheDaySection />
    </div>
  );
}
*/