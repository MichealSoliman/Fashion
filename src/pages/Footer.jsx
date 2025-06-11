import React from 'react';
import { 
  Facebook, 
  Instagram, 
  Twitter, 
  Youtube, 
  Mail, 
  Phone, 
  MapPin, 
  CreditCard, 
  Truck, 
  Shield, 
  RotateCcw,
  Heart,
  Star,
  ChevronRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-slate-900 via-slate-800 to-black text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      {/* Newsletter Section */}
  

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 py-20 relative">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-12 h-12 bg-gradient-to-r from-gold-500 to-gold-600 rounded-xl flex items-center justify-center shadow-lg">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold bg-gradient-to-r from-gold-400 to-gold-600 bg-clip-text text-transparent">
                أزياء فاخرة
              </h2>
            </div>
            <p className="text-slate-300 leading-relaxed text-lg">
              نحن نقدم أفضل الملابس الفاخرة والعصرية للرجال والنساء. جودة عالية وتصاميم حصرية تناسب جميع الأذواق.
            </p>
            <div className="flex space-x-4 space-x-reverse">
              {[
                { icon: Facebook, href: "#", label: "Facebook" },
                { icon: Instagram, href: "#", label: "Instagram" },
                { icon: Twitter, href: "#", label: "Twitter" },
                { icon: Youtube, href: "#", label: "YouTube" }
              ].map((social, index) => (
                <a 
                  key={index}
                  href={social.href} 
                  aria-label={social.label}
                  className="w-12 h-12 bg-slate-800/50 hover:bg-gradient-to-r hover:from-gold-500 hover:to-gold-600 rounded-xl flex items-center justify-center transition-all duration-300 group backdrop-blur-sm border border-slate-700/50 hover:border-gold-500/50 transform hover:scale-110 hover:shadow-lg hover:shadow-gold-500/25"
                >
                  <social.icon className="w-5 h-5 group-hover:text-white transition-colors duration-300" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gold-400 flex items-center">
              <ChevronRight className="w-5 h-5 ml-2" />
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {[
                'الرئيسية',
                'المجموعات الجديدة',
                'ملابس رجالي',
                'ملابس نسائي',
                'الإكسسوارات',
                'العروض الخاصة',
                'من نحن',
                'اتصل بنا'
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-slate-300 hover:text-gold-400 transition-all duration-300 hover:translate-x-2 inline-flex items-center group text-lg"
                  >
                    <span className="w-2 h-2 bg-gold-500 rounded-full ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Customer Service */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gold-400 flex items-center">
              <ChevronRight className="w-5 h-5 ml-2" />
              خدمة العملاء
            </h3>
            <ul className="space-y-3">
              {[
                'سياسة الإرجاع',
                'الشحن والتوصيل',
                'دليل المقاسات',
                'طرق الدفع',
                'الأسئلة الشائعة',
                'تتبع الطلب',
                'الضمان',
                'الدعم الفني'
              ].map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-slate-300 hover:text-gold-400 transition-all duration-300 hover:translate-x-2 inline-flex items-center group text-lg"
                  >
                    <span className="w-2 h-2 bg-gold-500 rounded-full ml-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-gold-400 flex items-center">
              <ChevronRight className="w-5 h-5 ml-2" />
              معلومات الاتصال
            </h3>
            <div className="space-y-4">
              {[
                { icon: MapPin, text: "شارع التحرير، القاهرة، مصر" },
                { icon: Phone, text: "+20 123 456 7890" },
                { icon: Mail, text: "info@luxuryfashion.com" }
              ].map((contact, index) => (
                <div key={index} className="flex items-center space-x-4 space-x-reverse group">
                  <div className="w-10 h-10 bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg flex items-center justify-center shadow-md group-hover:shadow-lg group-hover:shadow-gold-500/25 transition-all duration-300">
                    <contact.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="text-slate-300 group-hover:text-white transition-colors duration-300 text-lg">
                    {contact.text}
                  </span>
                </div>
              ))}
            </div>
            
            {/* Working Hours */}
            <div className="mt-8 p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 backdrop-blur-sm">
              <h4 className="text-lg font-semibold text-gold-400 mb-3 flex items-center">
                <Star className="w-4 h-4 ml-2" />
                ساعات العمل
              </h4>
              <div className="text-slate-300 space-y-2">
                <div className="flex justify-between">
                  <span>السبت - الخميس:</span>
                  <span className="text-gold-400">9:00 ص - 10:00 م</span>
                </div>
                <div className="flex justify-between">
                  <span>الجمعة:</span>
                  <span className="text-gold-400">2:00 م - 10:00 م</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="border-t border-slate-700/50 relative">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Truck, title: "شحن مجاني", desc: "للطلبات أكثر من 500 جنيه" },
              { icon: RotateCcw, title: "إرجاع مجاني", desc: "خلال 30 يوم" },
              { icon: Shield, title: "دفع آمن", desc: "حماية كاملة للبيانات" },
              { icon: Star, title: "جودة مضمونة", desc: "منتجات أصلية 100%" }
            ].map((feature, index) => (
              <div key={index} className="flex items-center space-x-4 space-x-reverse group">
                <div className="w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:shadow-gold-500/30 transition-all duration-300 transform group-hover:scale-110">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h4 className="font-semibold text-white text-lg group-hover:text-gold-400 transition-colors duration-300">
                    {feature.title}
                  </h4>
                  <p className="text-slate-400 group-hover:text-slate-300 transition-colors duration-300">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Payment Methods */}
      <div className="border-t border-slate-700/50 relative">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center">
            <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 md:space-x-reverse mb-6 lg:mb-0">
              <span className="text-slate-400 text-lg">طرق الدفع المقبولة:</span>
              <div className="flex space-x-3 space-x-reverse">
                {['VISA', 'MasterCard', 'PayPal', 'Apple Pay'].map((method, index) => (
                  <div key={index} className="w-16 h-10 bg-slate-800/50 rounded-lg border border-slate-600/50 flex items-center justify-center backdrop-blur-sm hover:border-gold-500/50 transition-all duration-300 transform hover:scale-105">
                    <span className="text-xs text-slate-300 font-bold">{method}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex items-center space-x-3 space-x-reverse">
              <div className="w-8 h-8 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center">
                <CreditCard className="w-4 h-4 text-white" />
              </div>
              <span className="text-slate-400">دفع آمن ومشفر 256-bit SSL</span>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-slate-700/50 relative">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="flex flex-col lg:flex-row justify-between items-center text-slate-400">
            <div className="mb-4 lg:mb-0 text-center lg:text-right">
              <p className="text-lg">
                © 2024 <span className="text-gold-400 font-semibold">أزياء فاخرة</span>. جميع الحقوق محفوظة.
              </p>
            </div>
            <div className="flex flex-wrap justify-center lg:justify-end space-x-8 space-x-reverse">
              {['سياسة الخصوصية', 'شروط الاستخدام', 'ملفات تعريف الارتباط'].map((link, index) => (
                <a 
                  key={index}
                  href="#" 
                  className="hover:text-gold-400 transition-colors duration-300 relative group"
                >
                  {link}
                  <span className="absolute bottom-0 right-0 w-0 h-0.5 bg-gold-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div class="fixed bottom-4 left-4 flex flex-col gap-3 z-50">

  <a href="tel:0560000000" 
     class="bg-blue-600 text-white flex items-center gap-2 px-4 py-2 rounded-full shadow-lg hover:bg-blue-700 transition">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    </svg>
    اتصال
  </a>

 
  <a href="https://wa.me/966560000000" target="_blank"
     class="bg-green-500 text-white flex items-center gap-2 px-4 py-2 rounded-full shadow-lg hover:bg-green-600 transition">
    <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" viewBox="0 0 448 512" fill="currentColor">
      <path d="M380.9 97.1C339 ... (اختصرنا لأغراض العرض)" />
    </svg>
    واتساب
  </a>
</div>
    </footer>
  );
};

export default Footer;