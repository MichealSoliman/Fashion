import React from 'react';
import { motion } from 'framer-motion';
import img2 from "../../src/assets/img/pexels-fotios-photos-1425249.jpg";
import { 
  Shield, 
  Award, 
  Truck, 
  Heart, 
  Star, 
  Users,
  Sparkles,
  CheckCircle
} from 'lucide-react';

const AboutSection = () => {
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

  const cardVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    hover: {
      scale: 1.05,
      y: -10,
      transition: { duration: 0.3 }
    }
  };

  const features = [
    {
      icon: Shield,
      title: "جودة مضمونة",
      description: "نستخدم أجود أنواع الأقمشة والخامات لضمان الراحة والمتانة",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: Award,
      title: "تصاميم حصرية",
      description: "تصاميم عصرية وأنيقة تواكب أحدث صيحات الموضة العالمية",
      color: "from-purple-500 to-pink-500"
    },
    {
      icon: Truck,
      title: "شحن سريع",
      description: "توصيل مجاني وسريع لجميع أنحاء المملكة خلال 24-48 ساعة",
      color: "from-green-500 to-emerald-500"
    },
    {
      icon: Heart,
      title: "رضا العملاء",
      description: "نضع رضا عملائنا في المقدمة ونسعى لتقديم أفضل خدمة",
      color: "from-red-500 to-rose-500"
    }
  ];

  const stats = [
    { number: "10+", label: "سنوات خبرة", icon: Star },
    { number: "50K+", label: "عميل سعيد", icon: Users },
    { number: "1000+", label: "منتج متنوع", icon: Sparkles },
    { number: "99%", label: "رضا العملاء", icon: CheckCircle }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
      
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full opacity-30 blur-3xl"
        />
        <motion.div
          animate={{ rotate: -360 }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-r from-blue-100 to-cyan-100 rounded-full opacity-30 blur-3xl"
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 rtl:space-x-reverse bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 mb-6"
          >
            <Sparkles className="h-5 w-5 text-purple-600" />
            <span className="text-purple-600 font-semibold">لماذا نحن مختلفون</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
              نحن نؤمن بأن
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              الملابس تعكس الشخصية
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            في متجر الأزياء، نسعى لتقديم أفضل تجربة تسوق للملابس العصرية. 
            نحن نفهم أن الملابس ليست مجرد قطع قماش، بل هي وسيلة للتعبير عن الذات والثقة بالنفس.
          </motion.p>
        </motion.div>

        {/* Features Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={cardVariants}
              whileHover="hover"
              className="group"
            >
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full">
                <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                
                <h3 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-purple-600 transition-colors duration-300">
                  {feature.title}
                </h3>
                
                <p className="text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Stats Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-12 text-white mb-20"
        >
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="text-center"
              >
                <div className="flex justify-center mb-4">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                    <stat.icon className="h-6 w-6 text-white" />
                  </div>
                </div>
                <div className="text-3xl lg:text-4xl font-bold mb-2">{stat.number}</div>
                <div className="text-purple-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Story Section */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="grid lg:grid-cols-2 gap-16 items-center"
        >
          
          {/* Text Content */}
          <motion.div variants={itemVariants} className="space-y-6">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-800">
              قصتنا مع الموضة
            </h3>
            
            <div className="space-y-4 text-gray-600 leading-relaxed">
              <p>
                بدأت رحلتنا من حلم بسيط: تقديم ملابس عصرية وعالية الجودة بأسعار معقولة. 
                نؤمن بأن كل شخص يستحق أن يشعر بالثقة والأناقة في ملابسه.
              </p>
              
              <p>
                نحن نختار كل قطعة بعناية فائقة، ونتعامل مع أفضل الموردين والمصممين 
                لضمان حصولك على منتجات تجمع بين الجودة والأناقة والراحة.
              </p>
              
              <p>
                فريقنا المتخصص يعمل باستمرار على متابعة أحدث صيحات الموضة العالمية 
                وتقديمها لك بلمسة عربية أصيلة تناسب ذوقك وثقافتك.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">خامات عالية الجودة</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">تصاميم عصرية</span>
              </div>
              <div className="flex items-center space-x-2 rtl:space-x-reverse">
                <CheckCircle className="h-5 w-5 text-green-500" />
                <span className="text-gray-700">أسعار منافسة</span>
              </div>
            </div>
          </motion.div>

          {/* Images Grid */}
          <motion.div variants={itemVariants} className="grid grid-cols-2 gap-6">
            <div className="space-y-6">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1445205170230-053b83016050?w=300&h=400&fit=crop"
                  alt="Fashion Design"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=300&h=300&fit=crop"
                  alt="Quality Materials"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
            </div>
            
            <div className="space-y-6 pt-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src="https://images.unsplash.com/photo-1441984904996-e0b6ba687e04?w=300&h=300&fit=crop"
                  alt="Fashion Store"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl shadow-lg"
              >
                <img
                  src={img2}
                  alt="Happy Customers"
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;

