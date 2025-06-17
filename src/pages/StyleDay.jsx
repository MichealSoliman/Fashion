// import React from 'react';

// // سكشن أسلوبك اليوم - مكون React محترف لمتجر الملابس
// const StyleDay = () => {
//   return (
//     <section className="bg-gradient-to-br from-rose-50 via-white to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">

//         {/* عنوان السكشن الرئيسي */}
//         <div className="text-center mb-16">
//           <div className="inline-block">
//             <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-rose-600 bg-clip-text text-transparent mb-4">
//               أسلوبك اليوم
//             </h2>
//             <div className="h-1 w-24 bg-gradient-to-r from-purple-600 to-pink-600 mx-auto rounded-full"></div>
//           </div>
//           <p className="text-gray-600 text-lg mt-6 max-w-2xl mx-auto leading-relaxed">
//             اكتشف إطلالات عصرية ومميزة تناسب شخصيتك وتعكس ذوقك الرفيع
//           </p>
//         </div>

//         {/* المحتوى الرئيسي - تخطيط شبكي مبتكر */}
//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">

//           {/* العمود الأيسر - إطلالة مميزة */}
//           <div className="lg:col-span-5">
//             <div className="relative group">
//               <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl blur opacity-20 group-hover:opacity-30 transition-opacity duration-300"></div>
//               <div className="relative bg-white rounded-3xl p-8 shadow-xl">
//                 <div className="aspect-w-3 aspect-h-4 mb-6">
//                   <div className="w-full h-80 bg-gradient-to-br from-purple-100 to-pink-100 rounded-2xl flex items-center justify-center">
//                     <div className="text-center">
//                       <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mx-auto mb-4 flex items-center justify-center">
//                         <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
//                           <path fillRule="evenodd" d="M3 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm0 4a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
//                         </svg>
//                       </div>
//                       <h3 className="text-xl font-bold text-gray-800 mb-2">الإطلالة المميزة</h3>
//                       <p className="text-gray-600 text-sm">أناقة عصرية تناسب كل المناسبات</p>
//                     </div>
//                   </div>
//                 </div>
//                 <div className="space-y-3">
//                   <h3 className="text-2xl font-bold text-gray-800">إطلالة الأناقة العصرية</h3>
//                   <p className="text-gray-600 leading-relaxed">
//                     تشكيلة مختارة بعناية تجمع بين الأناقة والراحة، مثالية للأجواء العملية والمناسبات الخاصة
//                   </p>
//                   <div className="flex flex-wrap gap-2 pt-4">
//                     <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm font-medium">أنيقة</span>
//                     <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full text-sm font-medium">عملية</span>
//                     <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full text-sm font-medium">عصرية</span>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>

//           {/* العمود الأوسط - معلومات الستايل */}
//           <div className="lg:col-span-4 space-y-6">
//             <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
//               <div className="flex items-center mb-4">
//                 <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
//                   <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
//                     <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
//                   </svg>
//                 </div>
//                 <h4 className="text-xl font-bold text-gray-800 mr-4">نصائح الستايل</h4>
//               </div>
//               <ul className="space-y-3 text-gray-600">
//                 <li className="flex items-start">
//                   <span className="w-2 h-2 bg-purple-500 rounded-full mt-2 ml-3 flex-shrink-0"></span>
//                   <span>اختر الألوان التي تناسب لون بشرتك</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="w-2 h-2 bg-pink-500 rounded-full mt-2 ml-3 flex-shrink-0"></span>
//                   <span>امزج بين القطع الكلاسيكية والعصرية</span>
//                 </li>
//                 <li className="flex items-start">
//                   <span className="w-2 h-2 bg-rose-500 rounded-full mt-2 ml-3 flex-shrink-0"></span>
//                   <span>اهتم بالتفاصيل والإكسسوارات</span>
//                 </li>
//               </ul>
//             </div>

//             <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white">
//               <h4 className="text-xl font-bold mb-3">اقتباس اليوم</h4>
//               <p className="text-purple-100 italic leading-relaxed">
//                 "الأناقة ليست في الثوب الذي ترتديه، بل في الطريقة التي تحمل بها نفسك"
//               </p>
//             </div>
//           </div>

//           {/* العمود الأيمن - إطلالات إضافية */}
//           <div className="lg:col-span-3">
//             <div className="space-y-4">
//               <h4 className="text-xl font-bold text-gray-800 mb-6">إطلالات أخرى</h4>

//               {/* إطلالة 1 */}
//               <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
//                 <div className="w-full h-32 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-lg mb-3 flex items-center justify-center">
//                   <div className="w-8 h-8 bg-blue-500 rounded-full"></div>
//                 </div>
//                 <h5 className="font-semibold text-gray-800 mb-1">الإطلالة الكلاسيكية</h5>
//                 <p className="text-gray-600 text-sm">أناقة خالدة لا تذبل</p>
//               </div>

//               {/* إطلالة 2 */}
//               <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
//                 <div className="w-full h-32 bg-gradient-to-br from-green-100 to-emerald-100 rounded-lg mb-3 flex items-center justify-center">
//                   <div className="w-8 h-8 bg-green-500 rounded-full"></div>
//                 </div>
//                 <h5 className="font-semibold text-gray-800 mb-1">الإطلالة الكاجوال</h5>
//                 <p className="text-gray-600 text-sm">راحة وأناقة في آن واحد</p>
//               </div>

//               {/* إطلالة 3 */}
//               <div className="bg-white rounded-xl p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
//                 <div className="w-full h-32 bg-gradient-to-br from-orange-100 to-red-100 rounded-lg mb-3 flex items-center justify-center">
//                   <div className="w-8 h-8 bg-orange-500 rounded-full"></div>
//                 </div>
//                 <h5 className="font-semibold text-gray-800 mb-1">الإطلالة الجريئة</h5>
//                 <p className="text-gray-600 text-sm">للشخصيات المميزة</p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* قسم الألوان الرائجة */}
//         <div className="bg-white rounded-3xl p-8 shadow-xl mb-16">
//           <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">ألوان الموسم</h3>
//           <div className="flex flex-wrap justify-center gap-6">
//             <div className="text-center group cursor-pointer">
//               <div className="w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-full mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg"></div>
//               <span className="text-sm font-medium text-gray-700">البنفسجي الملكي</span>
//             </div>
//             <div className="text-center group cursor-pointer">
//               <div className="w-16 h-16 bg-gradient-to-br from-pink-400 to-pink-600 rounded-full mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg"></div>
//               <span className="text-sm font-medium text-gray-700">الوردي الناعم</span>
//             </div>
//             <div className="text-center group cursor-pointer">
//               <div className="w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg"></div>
//               <span className="text-sm font-medium text-gray-700">الأزرق السماوي</span>
//             </div>
//             <div className="text-center group cursor-pointer">
//               <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-full mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg"></div>
//               <span className="text-sm font-medium text-gray-700">الأخضر الطبيعي</span>
//             </div>
//             <div className="text-center group cursor-pointer">
//               <div className="w-16 h-16 bg-gradient-to-br from-orange-400 to-orange-600 rounded-full mx-auto mb-2 group-hover:scale-110 transition-transform duration-300 shadow-lg"></div>
//               <span className="text-sm font-medium text-gray-700">البرتقالي المشرق</span>
//             </div>
//           </div>
//         </div>

//         {/* الشريط السفلي */}
//         <div className="text-center">
//           <div className="inline-flex items-center space-x-reverse space-x-4 bg-white rounded-full px-8 py-4 shadow-lg border border-gray-100">
//             <div className="flex items-center space-x-reverse space-x-2">
//               <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
//               <span className="text-gray-700 font-medium">تحديث يومي</span>
//             </div>
//             <div className="w-px h-6 bg-gray-300"></div>
//             <div className="flex items-center space-x-reverse space-x-2">
//               <div className="w-3 h-3 bg-pink-500 rounded-full animate-pulse"></div>
//               <span className="text-gray-700 font-medium">إطلالات مختارة</span>
//             </div>
//             <div className="w-px h-6 bg-gray-300"></div>
//             <div className="flex items-center space-x-reverse space-x-2">
//               <div className="w-3 h-3 bg-rose-500 rounded-full animate-pulse"></div>
//               <span className="text-gray-700 font-medium">أحدث الصيحات</span>
//             </div>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// };

// export default StyleDay;

import React, { useState } from 'react';

// مكون أسلوبك اليوم المحسن - تصميم جديد ومبتكر
const StyleDay = () => {
  const [activeStyle, setActiveStyle] = useState('modern');
  const [selectedColor, setSelectedColor] = useState('emerald');

  const styleCategories = {
    modern: {
      title: 'الأناقة العصرية',
      description: 'إطلالة متطورة تجمع بين البساطة والفخامة',
      color: 'from-emerald-500 to-teal-600',
      bgColor: 'from-emerald-50 to-teal-50'
    },
    classic: {
      title: 'الكلاسيكية الخالدة',
      description: 'أناقة تقليدية لا تفقد رونقها مع الزمن',
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50'
    },
    casual: {
      title: 'الراحة الأنيقة',
      description: 'مزيج مثالي من الراحة والأناقة اليومية',
      color: 'from-orange-500 to-red-600',
      bgColor: 'from-orange-50 to-red-50'
    },
    bold: {
      title: 'الجرأة المميزة',
      description: 'للشخصيات القوية التي تحب التميز',
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50'
    }
  };

  const seasonColors = [
    { name: 'الزمردي الفاخر', value: 'emerald', gradient: 'from-emerald-400 to-emerald-600' },
    { name: 'الذهبي المشرق', value: 'amber', gradient: 'from-amber-400 to-amber-600' },
    { name: 'الأزرق الملكي', value: 'blue', gradient: 'from-blue-400 to-blue-600' },
    { name: 'الوردي الناعم', value: 'rose', gradient: 'from-rose-400 to-rose-600' },
    { name: 'البنفسجي الساحر', value: 'violet', gradient: 'from-violet-400 to-violet-600' },
    { name: 'الأخضر الطبيعي', value: 'green', gradient: 'from-green-400 to-green-600' }
  ];

  const styleIcons = {
    modern: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2L2 7v10c0 5.55 3.84 9.739 9 11 5.16-1.261 9-5.45 9-11V7l-10-5z"/>
      </svg>
    ),
    classic: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
      </svg>
    ),
    casual: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
      </svg>
    ),
    bold: (
      <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
        <path d="M13 3c-4.97 0-9 4.03-9 9H1l3.89 3.89.07.14L9 12H6c0-3.87 3.13-7 7-7s7 3.13 7 7-3.13 7-7 7c-1.93 0-3.68-.79-4.94-2.06l-1.42 1.42C8.27 19.99 10.51 21 13 21c4.97 0 9-4.03 9-9s-4.03-9-9-9z"/>
      </svg>
    )
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* الهيدر الجديد مع تأثيرات متحركة */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-to-r from-emerald-200/30 to-teal-200/30 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <div className="relative z-10">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center transform rotate-12">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                  </svg>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  ستايل اليوم
                </h1>
                <div className="w-12 h-12 bg-gradient-to-r from-teal-500 to-cyan-600 rounded-2xl flex items-center justify-center transform -rotate-12">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              اكتشف عالماً من الأناقة والإبداع، حيث تلتقي الموضة بالشخصية لتخلق إطلالة استثنائية تعبر عنك
            </p>
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2 space-x-reverse">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-teal-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-3 h-3 bg-cyan-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* قسم اختيار نوع الإطلالة */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">اختر نوع إطلالتك</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(styleCategories).map(([key, style]) => (
              <div
                key={key}
                onClick={() => setActiveStyle(key)}
                className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  activeStyle === key ? 'scale-105' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${style.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 ${
                  activeStyle === key ? `border-emerald-300 bg-gradient-to-br ${style.bgColor}` : 'border-gray-100 hover:border-gray-200'
                }`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${style.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto transform transition-transform duration-300 ${
                    activeStyle === key ? 'rotate-12' : 'group-hover:rotate-6'
                  }`}>
                    {styleIcons[key]}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-3">{style.title}</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">{style.description}</p>
                  {activeStyle === key && (
                    <div className="absolute top-4 left-4">
                      <div className="w-6 h-6 bg-emerald-500 rounded-full flex items-center justify-center">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* قسم الإطلالة المختارة */}
        <div className="mb-16">
          <div className={`bg-gradient-to-br ${styleCategories[activeStyle].bgColor} rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100`}>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              
              {/* معاينة الإطلالة */}
              <div className="relative">
                <div className="aspect-w-3 aspect-h-4">
                  <div className={`w-full h-96 bg-gradient-to-br ${styleCategories[activeStyle].color} rounded-3xl flex items-center justify-center relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/10 rounded-3xl"></div>
                    <div className="relative z-10 text-center text-white">
                      <div className="w-24 h-24 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-sm">
                        {styleIcons[activeStyle]}
                      </div>
                      <h3 className="text-2xl font-bold mb-2">{styleCategories[activeStyle].title}</h3>
                      <p className="text-white/90 text-lg">{styleCategories[activeStyle].description}</p>
                    </div>
                    <div className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full backdrop-blur-sm"></div>
                    <div className="absolute bottom-4 left-4 w-12 h-12 bg-white/20 rounded-full backdrop-blur-sm"></div>
                    <div className="absolute top-1/2 left-4 w-6 h-6 bg-white/20 rounded-full backdrop-blur-sm"></div>
                  </div>
                </div>
              </div>

              {/* تفاصيل الإطلالة */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-4">{styleCategories[activeStyle].title}</h3>
                  <p className="text-gray-600 text-lg leading-relaxed mb-6">
                    {styleCategories[activeStyle].description}. هذه الإطلالة مصممة خصيصاً لتعكس شخصيتك المميزة وتمنحك الثقة في كل خطوة.
                  </p>
                </div>

                {/* نصائح الإطلالة */}
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                  <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center">
                    <div className={`w-8 h-8 bg-gradient-to-r ${styleCategories[activeStyle].color} rounded-lg flex items-center justify-center text-white ml-3`}>
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                      </svg>
                    </div>
                    نصائح للإطلالة المثالية
                  </h4>
                  <div className="space-y-3">
                    <div className="flex items-start">
                      <div className={`w-2 h-2 bg-gradient-to-r ${styleCategories[activeStyle].color} rounded-full mt-2 ml-3 flex-shrink-0`}></div>
                      <span className="text-gray-700">اختر القطع التي تناسب شكل جسمك وتبرز نقاط قوتك</span>
                    </div>
                    <div className="flex items-start">
                      <div className={`w-2 h-2 bg-gradient-to-r ${styleCategories[activeStyle].color} rounded-full mt-2 ml-3 flex-shrink-0`}></div>
                      <span className="text-gray-700">انتبه لتناسق الألوان والأقمشة لإطلالة متجانسة</span>
                    </div>
                    <div className="flex items-start">
                      <div className={`w-2 h-2 bg-gradient-to-r ${styleCategories[activeStyle].color} rounded-full mt-2 ml-3 flex-shrink-0`}></div>
                      <span className="text-gray-700">أضف لمسة شخصية من خلال الإكسسوارات المناسبة</span>
                    </div>
                  </div>
                </div>

                {/* أزرار التفاعل */}
                <div className="flex flex-wrap gap-4">
                  <button className={`px-6 py-3 bg-gradient-to-r ${styleCategories[activeStyle].color} text-white rounded-xl font-semibold hover:shadow-lg transform hover:scale-105 transition-all duration-300`}>
                    احفظ الإطلالة
                  </button>
                  <button className="px-6 py-3 bg-white text-gray-700 rounded-xl font-semibold border border-gray-200 hover:shadow-lg transform hover:scale-105 transition-all duration-300">
                    شارك مع الأصدقاء
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* قسم ألوان الموسم التفاعلي */}
      

        {/* قسم الإحصائيات والمعلومات */}
        <div className="mb-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">500+</h3>
              <p className="text-gray-600">إطلالة مميزة</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M16 6l2.29 2.29-4.88 4.88-4-4L2 16.59 3.41 18l6-6 4 4 6.3-6.29L22 12V6z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">98%</h3>
              <p className="text-gray-600">رضا العملاء</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-800 mb-2">24/7</h3>
              <p className="text-gray-600">تحديث مستمر</p>
            </div>
          </div>
        </div>

        {/* اقتباس ملهم */}
        <div className="mb-16">
          <div className="bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-3xl p-12 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <div className="w-16 h-16 bg-white/20 rounded-full mx-auto mb-6 flex items-center justify-center backdrop-blur-sm">
                <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
                </svg>
              </div>
              <blockquote className="text-2xl lg:text-3xl font-bold mb-4 leading-relaxed">
                "الأناقة الحقيقية تكمن في الثقة بالنفس والتعبير عن الشخصية الفريدة"
              </blockquote>
              <p className="text-white/80 text-lg">- خبراء الموضة العالمية</p>
            </div>
            <div className="absolute top-8 left-8 w-32 h-32 bg-white/10 rounded-full blur-xl"></div>
            <div className="absolute bottom-8 right-8 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* الشريط السفلي المحسن */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-white rounded-full px-8 py-6 shadow-2xl border border-gray-100 space-x-8 space-x-reverse">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="relative">
                <div className="w-4 h-4 bg-emerald-500 rounded-full animate-ping absolute"></div>
                <div className="w-4 h-4 bg-emerald-500 rounded-full"></div>
              </div>
              <span className="text-gray-700 font-semibold">تحديث لحظي</span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="relative">
                <div className="w-4 h-4 bg-teal-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-gray-700 font-semibold">إطلالات حصرية</span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="relative">
                <div className="w-4 h-4 bg-cyan-500 rounded-full animate-bounce"></div>
              </div>
              <span className="text-gray-700 font-semibold">أحدث الاتجاهات</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StyleDay;

