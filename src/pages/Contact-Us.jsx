import React, { useState } from 'react';

// مكون تواصل معنا احترافي ومبتكر
const ContactUs = () => {
  const [activeMethod, setActiveMethod] = useState('form');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    contactPreference: 'email'
  });

  const contactMethods = {
    form: {
      title: 'نموذج التواصل',
      description: 'أرسل رسالتك مباشرة وسنرد عليك في أقرب وقت',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
        </svg>
      ),
      color: 'from-blue-500 to-indigo-600',
      bgColor: 'from-blue-50 to-indigo-50'
    },
    phone: {
      title: 'اتصال مباشر',
      description: 'تحدث معنا مباشرة للحصول على إجابات فورية',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
      ),
      color: 'from-green-500 to-emerald-600',
      bgColor: 'from-green-50 to-emerald-50'
    },
    whatsapp: {
      title: 'واتساب',
      description: 'راسلنا على الواتساب للتواصل السريع والمريح',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
        </svg>
      ),
      color: 'from-emerald-500 to-green-600',
      bgColor: 'from-emerald-50 to-green-50'
    },
    social: {
      title: 'وسائل التواصل',
      description: 'تابعنا وتواصل معنا عبر منصات التواصل الاجتماعي',
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'from-purple-500 to-pink-600',
      bgColor: 'from-purple-50 to-pink-50'
    }
  };

  const socialPlatforms = [
    {
      name: 'فيسبوك',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      color: 'text-blue-600 hover:text-blue-700',
      bgColor: 'hover:bg-blue-50'
    },
    {
      name: 'تويتر',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      color: 'text-sky-500 hover:text-sky-600',
      bgColor: 'hover:bg-sky-50'
    },
    {
      name: 'إنستغرام',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
      color: 'text-pink-600 hover:text-pink-700',
      bgColor: 'hover:bg-pink-50'
    },
    {
      name: 'لينكد إن',
      icon: (
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      color: 'text-blue-700 hover:text-blue-800',
      bgColor: 'hover:bg-blue-50'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // هنا يمكن إضافة منطق إرسال النموذج
    console.log('Form submitted:', formData);
  };

  return (
    <section className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-gray-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* الهيدر الرئيسي */}
        <div className="text-center mb-20 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-gradient-to-r from-blue-200/30 to-purple-200/30 rounded-full blur-3xl animate-pulse"></div>
          </div>
          <div className="relative z-10">
            <div className="inline-block mb-6">
              <div className="flex items-center justify-center space-x-4 space-x-reverse">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center transform rotate-12">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-black bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                  تواصل معنا
                </h1>
                <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-2xl flex items-center justify-center transform -rotate-12">
                  <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                  </svg>
                </div>
              </div>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium">
              نحن هنا لخدمتك! اختر الطريقة الأنسب للتواصل معنا وسنكون سعداء بالرد على استفساراتك
            </p>
            <div className="mt-8 flex justify-center">
              <div className="flex space-x-2 space-x-reverse">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-bounce"></div>
                <div className="w-3 h-3 bg-indigo-500 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></div>
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></div>
              </div>
            </div>
          </div>
        </div>

        {/* اختيار طريقة التواصل */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">اختر طريقة التواصل المفضلة</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {Object.entries(contactMethods).map(([key, method]) => (
              <div
                key={key}
                onClick={() => setActiveMethod(key)}
                className={`relative group cursor-pointer transition-all duration-500 transform hover:scale-105 ${
                  activeMethod === key ? 'scale-105' : ''
                }`}
              >
                <div className={`absolute inset-0 bg-gradient-to-r ${method.color} rounded-3xl blur opacity-20 group-hover:opacity-40 transition-opacity duration-300`}></div>
                <div className={`relative bg-white rounded-3xl p-8 shadow-xl border-2 transition-all duration-300 ${
                  activeMethod === key ? `border-blue-300 bg-gradient-to-br ${method.bgColor}` : 'border-gray-100 hover:border-gray-200'
                }`}>
                  <div className={`w-16 h-16 bg-gradient-to-r ${method.color} rounded-2xl flex items-center justify-center text-white mb-6 mx-auto transform transition-transform duration-300 ${
                    activeMethod === key ? 'rotate-12' : 'group-hover:rotate-6'
                  }`}>
                    {method.icon}
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 text-center mb-3">{method.title}</h3>
                  <p className="text-gray-600 text-center text-sm leading-relaxed">{method.description}</p>
                  {activeMethod === key && (
                    <div className="absolute top-4 left-4">
                      <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center">
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

        {/* محتوى طريقة التواصل المختارة */}
        <div className="mb-16">
          {activeMethod === 'form' && (
            <div className={`bg-gradient-to-br ${contactMethods.form.bgColor} rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100`}>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                
                {/* نموذج التواصل */}
                <div>
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">أرسل رسالتك</h3>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">الاسم الكامل</label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                          placeholder="أدخل اسمك الكامل"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">البريد الإلكتروني</label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                          placeholder="example@email.com"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">رقم الهاتف</label>
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                          placeholder="+20 123 456 7890"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-semibold text-gray-700 mb-2">طريقة التواصل المفضلة</label>
                        <select
                          name="contactPreference"
                          value={formData.contactPreference}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                        >
                          <option value="email">البريد الإلكتروني</option>
                          <option value="phone">الهاتف</option>
                          <option value="whatsapp">واتساب</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">موضوع الرسالة</label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm"
                        placeholder="ما هو موضوع رسالتك؟"
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">الرسالة</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleInputChange}
                        rows="6"
                        className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 bg-white/70 backdrop-blur-sm resize-none"
                        placeholder="اكتب رسالتك هنا..."
                        required
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-4 px-8 rounded-xl font-bold text-lg hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center justify-center space-x-2 space-x-reverse"
                    >
                      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
                      </svg>
                      <span>إرسال الرسالة</span>
                    </button>
                  </form>
                </div>

                {/* معلومات إضافية */}
                <div className="space-y-8">
                  <div>
                    <h4 className="text-2xl font-bold text-gray-800 mb-4">لماذا تختارنا؟</h4>
                    <div className="space-y-4">
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white ml-4 flex-shrink-0">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-1">استجابة سريعة</h5>
                          <p className="text-gray-600 text-sm">نرد على جميع الرسائل خلال 24 ساعة كحد أقصى</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white ml-4 flex-shrink-0">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-1">خصوصية وأمان</h5>
                          <p className="text-gray-600 text-sm">نحافظ على سرية معلوماتك الشخصية بأعلى معايير الأمان</p>
                        </div>
                      </div>
                      <div className="flex items-start">
                        <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-lg flex items-center justify-center text-white ml-4 flex-shrink-0">
                          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-6-3a2 2 0 11-4 0 2 2 0 014 0zm-2 4a5 5 0 00-4.546 2.916A5.986 5.986 0 0010 16a5.986 5.986 0 004.546-2.084A5 5 0 0010 11z" clipRule="evenodd" />
                          </svg>
                        </div>
                        <div>
                          <h5 className="font-semibold text-gray-800 mb-1">دعم شخصي</h5>
                          <p className="text-gray-600 text-sm">فريق دعم متخصص لحل جميع استفساراتك ومشاكلك</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                    <h4 className="text-xl font-bold text-gray-800 mb-4">أوقات العمل</h4>
                    <div className="space-y-2 text-gray-600">
                      <div className="flex justify-between">
                        <span>السبت - الخميس</span>
                        <span className="font-semibold">9:00 ص - 6:00 م</span>
                      </div>
                      <div className="flex justify-between">
                        <span>الجمعة</span>
                        <span className="font-semibold">مغلق</span>
                      </div>
                      <div className="flex justify-between">
                        <span>الدعم الطارئ</span>
                        <span className="font-semibold text-green-600">24/7</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeMethod === 'phone' && (
            <div className={`bg-gradient-to-br ${contactMethods.phone.bgColor} rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100`}>
              <div className="text-center max-w-4xl mx-auto">
                <div className="w-24 h-24 bg-gradient-to-r from-green-500 to-emerald-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-8">
                  {contactMethods.phone.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">اتصل بنا مباشرة</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  تحدث مع فريق الدعم المتخصص للحصول على إجابات فورية لجميع استفساراتك
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                    <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">الخط الساخن</h4>
                    <p className="text-2xl font-bold text-green-600 mb-1">19999</p>
                    <p className="text-gray-600 text-sm">متاح 24/7</p>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10h5v-2h-5c-4.34 0-8-3.66-8-8s3.66-8 8-8 8 3.66 8 8v1.43c0 .79-.71 1.57-1.5 1.57s-1.5-.78-1.5-1.57V12c0-2.76-2.24-5-5-5s-5 2.24-5 5 2.24 5 5 5c1.38 0 2.64-.56 3.54-1.47.65.89 1.77 1.47 2.96 1.47 1.97 0 3.5-1.53 3.5-3.57V12c0-5.52-4.48-10-10-10z"/>
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">المبيعات</h4>
                    <p className="text-2xl font-bold text-blue-600 mb-1">+20 100 123 4567</p>
                    <p className="text-gray-600 text-sm">9 ص - 6 م</p>
                  </div>

                  <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-white/50">
                    <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-purple-600" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                      </svg>
                    </div>
                    <h4 className="font-bold text-gray-800 mb-2">الدعم الفني</h4>
                    <p className="text-2xl font-bold text-purple-600 mb-1">+20 100 987 6543</p>
                    <p className="text-gray-600 text-sm">24/7</p>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="tel:19999"
                    className="bg-gradient-to-r from-green-500 to-emerald-600 text-white py-3 px-8 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 space-x-reverse"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
                    </svg>
                    <span>اتصل الآن</span>
                  </a>
                  <button className="bg-white text-gray-700 py-3 px-8 rounded-xl font-bold border border-gray-200 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 space-x-reverse">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                    </svg>
                    <span>طلب معاودة اتصال</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeMethod === 'whatsapp' && (
            <div className={`bg-gradient-to-br ${contactMethods.whatsapp.bgColor} rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100`}>
              <div className="text-center max-w-4xl mx-auto">
                <div className="w-24 h-24 bg-gradient-to-r from-emerald-500 to-green-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-8">
                  {contactMethods.whatsapp.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">راسلنا على الواتساب</h3>
                <p className="text-gray-600 text-lg mb-8 leading-relaxed">
                  تواصل معنا بسهولة عبر الواتساب للحصول على دعم سريع ومريح
                </p>
                
                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50 mb-8 max-w-md mx-auto">
                  <div className="w-16 h-16 bg-green-100 rounded-2xl flex items-center justify-center mx-auto mb-4">
                    <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                  </div>
                  <h4 className="text-xl font-bold text-gray-800 mb-2">رقم الواتساب</h4>
                  <p className="text-3xl font-bold text-green-600 mb-4">+20 100 555 7777</p>
                  <p className="text-gray-600 text-sm mb-6">متاح من 9 صباحاً حتى 10 مساءً</p>
                  
                  <div className="space-y-3 text-right">
                    <div className="bg-green-500 text-white p-3 rounded-2xl rounded-br-sm max-w-xs mr-auto">
                      <p className="text-sm">مرحباً! كيف يمكنني مساعدتك اليوم؟</p>
                    </div>
                    <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl rounded-bl-sm max-w-xs">
                      <p className="text-sm">أهلاً! أريد الاستفسار عن خدماتكم</p>
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap justify-center gap-4">
                  <a
                    href="https://wa.me/201005557777"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-emerald-500 to-green-600 text-white py-3 px-8 rounded-xl font-bold hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 space-x-reverse"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.488"/>
                    </svg>
                    <span>ابدأ المحادثة</span>
                  </a>
                  <button className="bg-white text-gray-700 py-3 px-8 rounded-xl font-bold border border-gray-200 hover:shadow-lg transform hover:scale-105 transition-all duration-300 flex items-center space-x-2 space-x-reverse">
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 1H4c-1.1 0-2 .9-2 2v14h2V3h12V1zm3 4H8c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h11c1.1 0 2-.9 2-2V7c0-1.1-.9-2-2-2zm-1 16H9V7h9v14z"/>
                    </svg>
                    <span>نسخ الرقم</span>
                  </button>
                </div>
              </div>
            </div>
          )}

          {activeMethod === 'social' && (
            <div className={`bg-gradient-to-br ${contactMethods.social.bgColor} rounded-3xl p-8 lg:p-12 shadow-2xl border border-gray-100`}>
              <div className="text-center max-w-4xl mx-auto">
                <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-pink-600 rounded-3xl flex items-center justify-center text-white mx-auto mb-8">
                  {contactMethods.social.icon}
                </div>
                <h3 className="text-3xl font-bold text-gray-800 mb-6">تابعنا على وسائل التواصل</h3>
                <p className="text-gray-600 text-lg mb-12 leading-relaxed">
                  ابق على تواصل معنا عبر منصات التواصل الاجتماعي للحصول على آخر الأخبار والتحديثات
                </p>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                  {socialPlatforms.map((platform, index) => (
                    <div
                      key={platform.name}
                      className={`group cursor-pointer transition-all duration-500 transform hover:scale-110`}
                      style={{animationDelay: `${index * 0.1}s`}}
                    >
                      <div className={`bg-white rounded-2xl p-8 shadow-lg border border-gray-100 ${platform.bgColor} transition-all duration-300 group-hover:shadow-xl`}>
                        <div className={`w-16 h-16 ${platform.color} mx-auto mb-4 transition-colors duration-300`}>
                          {platform.icon}
                        </div>
                        <h4 className="font-bold text-gray-800 mb-2">{platform.name}</h4>
                        <p className="text-gray-600 text-sm mb-4">تابعنا للحصول على التحديثات</p>
                        <button className={`w-full py-2 px-4 rounded-lg font-semibold transition-all duration-300 ${platform.color} ${platform.bgColor} border border-current hover:bg-opacity-10`}>
                          متابعة
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-white/70 backdrop-blur-sm rounded-2xl p-8 border border-white/50">
                  <h4 className="text-2xl font-bold text-gray-800 mb-6">إحصائيات متابعينا</h4>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-600 mb-1">50K+</div>
                      <div className="text-gray-600 text-sm">فيسبوك</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-sky-500 mb-1">25K+</div>
                      <div className="text-gray-600 text-sm">تويتر</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-pink-600 mb-1">75K+</div>
                      <div className="text-gray-600 text-sm">إنستغرام</div>
                    </div>
                    <div className="text-center">
                      <div className="text-3xl font-bold text-blue-700 mb-1">15K+</div>
                      <div className="text-gray-600 text-sm">لينكد إن</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* معلومات الاتصال السريع */}
        <div className="mb-16">
          <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
            <h3 className="text-2xl font-bold text-center text-gray-800 mb-8">معلومات الاتصال السريع</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">العنوان</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  شارع التحرير، المعادي<br />
                  القاهرة، مصر 11728
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">البريد الإلكتروني</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  info@company.com<br />
                  support@company.com
                </p>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-2xl flex items-center justify-center text-white mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                  <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                  </svg>
                </div>
                <h4 className="font-bold text-gray-800 mb-2">التقييم</h4>
                <div className="flex justify-center mb-2">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-gray-600 text-sm">4.9/5 من 1000+ عميل</p>
              </div>
            </div>
          </div>
        </div>

        {/* الشريط السفلي */}
        <div className="text-center">
          <div className="inline-flex items-center justify-center bg-white rounded-full px-8 py-6 shadow-2xl border border-gray-100 space-x-8 space-x-reverse">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="relative">
                <div className="w-4 h-4 bg-blue-500 rounded-full animate-ping absolute"></div>
                <div className="w-4 h-4 bg-blue-500 rounded-full"></div>
              </div>
              <span className="text-gray-700 font-semibold">دعم فوري</span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="relative">
                <div className="w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
              </div>
              <span className="text-gray-700 font-semibold">استجابة سريعة</span>
            </div>
            <div className="w-px h-8 bg-gray-300"></div>
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="relative">
                <div className="w-4 h-4 bg-purple-500 rounded-full animate-bounce"></div>
              </div>
              <span className="text-gray-700 font-semibold">خدمة متميزة</span>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactUs;

