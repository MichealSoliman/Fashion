import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Star, Sparkles, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const HeroSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl"
        />
        <motion.div
          animate={{ y: [-20, 20, -20] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/2 left-10 w-6 h-6 bg-purple-400 rounded-full opacity-30"
        />
        <motion.div
          animate={{ y: [20, -20, 20] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 right-10 w-4 h-4 bg-pink-400 rounded-full opacity-30"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-right space-y-8"
          >
            
            {/* Badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-purple-100"
            >
              <Sparkles className="h-5 w-5 text-purple-600" />
              <span className="text-purple-600 font-semibold">مجموعة جديدة 2024</span>
              <div className="flex space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                ))}
              </div>
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl lg:text-7xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
                أزياء عصرية
              </span>
              <br />
              <span className="text-gray-800">
                تناسب شخصيتك
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={itemVariants}
              className="text-xl lg:text-2xl text-gray-600 leading-relaxed max-w-2xl mx-auto lg:mx-0"
            >
              اكتشف مجموعتنا الحصرية من الملابس العصرية عالية الجودة. 
              تصاميم أنيقة تجمع بين الراحة والأناقة لتناسب جميع المناسبات.
            </motion.p>

            {/* Features */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center lg:justify-start gap-6 text-gray-600"
            >
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                <span>شحن مجاني</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                <span>جودة عالية</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span>أسعار منافسة</span>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <Link to="/products">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
                >
                  <ShoppingBag className="ml-2 h-5 w-5 group-hover:rotate-12 transition-transform duration-300" />
                  تسوق الآن
                  <ArrowRight className="mr-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </Link>
              
              <Link to="/about">
                <Button
                  variant="outline"
                  size="lg"
                  className="border-2 border-purple-300 text-purple-600 hover:bg-purple-50 px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:border-purple-400"
                >
                  اعرف المزيد
                </Button>
              </Link>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-200"
            >
              <div className="text-center">
                <div className="text-3xl font-bold text-purple-600">1000+</div>
                <div className="text-gray-600">منتج</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-pink-600">5000+</div>
                <div className="text-gray-600">عميل سعيد</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-600">4.9</div>
                <div className="text-gray-600">تقييم</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Hero Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <motion.div
              variants={floatingVariants}
              animate="animate"
              className="relative z-10"
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=800&fit=crop&crop=center"
                  alt="Fashion Collection"
                  className="w-full h-[600px] object-cover rounded-3xl shadow-2xl"
                />
                
                {/* Overlay Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-purple-900/20 to-transparent rounded-3xl"></div>
                
                {/* Floating Elements */}
                <motion.div
                  animate={{ rotate: [0, 10, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -top-6 -right-6 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-sm font-semibold text-gray-700">متوفر الآن</span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [-5, 5, -5] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-4 shadow-xl"
                >
                  <div className="flex items-center space-x-2 rtl:space-x-reverse">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="text-sm font-semibold text-gray-700">تقييم ممتاز</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>

            {/* Background Decoration */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-200 to-pink-200 rounded-3xl transform rotate-6 scale-105 opacity-20 -z-10"></div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-purple-300 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-500 rounded-full mt-2 animate-pulse"></div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;

