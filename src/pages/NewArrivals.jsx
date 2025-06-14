import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Heart, ShoppingBag, Star, Eye, Sparkles, TrendingUp, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import img1 from "../assets/img/pexels-69816215-8365688.jpg"
import img2 from "../assets/img/pexels-pixabay-413960.jpg"
import img3 from "../assets/img/pexels-melvin-buezo-1253763-2529148.jpg"
import img4 from "../assets/img/pexels-karolina-grabowska-4996708.jpg"
import img5 from "../assets/img/pexels-anuradha-mishra-357832475-14900849.jpg"
import img6 from "../assets/img/pexels-shivam-31367058.jpg"
const NewArrivals = () => {
  const [hoveredProduct, setHoveredProduct] = useState(null);
  const [likedProducts, setLikedProducts] = useState(new Set());

  // بيانات تمثيلية للمنتجات الجديدة
  const products = [
    {
  id: 1,
  name: "حقيبة يد جلد فاخرة",
  price: 459,
  originalPrice: 599,
  image: img1,
  category: "حقائب",
  isNew: true,
  isTrending: true,
  rating: 4.9,
  reviews: 173,
  colors: ['#5D4037', '#A1887F', '#D7CCC8']
},
{
  id: 2,
  name: "نظارة شمسية كلاسيكية",
  price: 199,
  originalPrice: 269,
  image: img2,
  category: "إكسسوارات",
  isNew: true,
  isTrending: false,
  rating: 4.6,
  reviews: 88,
  colors: ['#212121', '#FFC107', '#FF5722']
},
{
  id: 3,
  name: "حذاء رياضي مريح",
  price: 329,
  originalPrice: 429,
  image: img3,
  category: "أحذية",
  isNew: true,
  isTrending: true,
  rating: 4.7,
  reviews: 140,
  colors: ['#2E86C1', '#A3E4D7', '#F9E79F']
},
{
  id: 4,
  name: "قبعة قش صيفية",
  price: 149,
  originalPrice: 199,
  image: img4,
  category: "إكسسوارات",
  isNew: true,
  isTrending: false,
  rating: 4.4,
  reviews: 54,
  colors: ['#FAD7A0', '#EDBB99', '#E59866']
},
{
  id: 5,
  name: "وشاح حريري مطبوع",
  price: 179,
  originalPrice: 249,
  image: img5,
  category: "إكسسوارات",
  isNew: true,
  isTrending: true,
  rating: 4.8,
  reviews: 112,
  colors: ['#F1948A', '#F5CBA7', '#BB8FCE']
},
{
  id: 6,
  name: "حزام جلد أنيق",
  price: 139,
  originalPrice: 189,
  image:img6,
  category: "إكسسوارات",
  isNew: true,
  isTrending: false,
  rating: 4.5,
  reviews: 61,
  colors: ['#4E342E', '#A1887F', '#BCAAA4']
}

  ];

  const toggleLike = (productId) => {
    setLikedProducts(prev => {
      const newSet = new Set(prev);
      if (newSet.has(productId)) {
        newSet.delete(productId);
      } else {
        newSet.add(productId);
      }
      return newSet;
    });
  };

  // متغيرات الرسوم المتحركة
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <section className="py-16 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden">
      {/* خلفية متحركة */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-pink-300 to-purple-300 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
        />
        <motion.div
          className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-r from-blue-300 to-cyan-300 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-24 h-24 bg-gradient-to-r from-yellow-300 to-orange-300 rounded-full blur-xl"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* العنوان الرئيسي */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="inline-flex items-center gap-2 bg-gradient-to-r from-pink-500 to-purple-600 text-white px-6 py-2 rounded-full text-sm font-semibold mb-6"
          >
            <Sparkles className="w-4 h-4" />
            وصل حديثاً
            <Sparkles className="w-4 h-4" />
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="gradient-text">الوصول الجديد</span>
          </h2>
          
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            اكتشف أحدث صيحات الموضة والتصاميم العصرية التي وصلت حديثاً إلى متجرنا
            <br />
            <span className="text-purple-600 font-semibold">مجموعة حصرية ومحدودة</span>
          </motion.p>
          
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 96 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="h-1 bg-gradient-to-r from-pink-500 to-purple-600 mx-auto mt-8 rounded-full"
          />
        </motion.div>

        {/* شبكة المنتجات */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onHoverStart={() => setHoveredProduct(product.id)}
              onHoverEnd={() => setHoveredProduct(null)}
              className="group relative"
            >
              <ProductCard 
                product={product} 
                index={index}
                isHovered={hoveredProduct === product.id}
                isLiked={likedProducts.has(product.id)}
                onToggleLike={() => toggleLike(product.id)}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* إحصائيات سريعة */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 mb-12"
        >
          {[
            { icon: Sparkles, label: "منتج جديد", value: "50+" },
            { icon: TrendingUp, label: "الأكثر مبيعاً", value: "15+" },
            { icon: Star, label: "تقييم عالي", value: "4.8" },
            { icon: Zap, label: "توصيل سريع", value: "24h" }
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="text-center p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg"
            >
              <stat.icon className="w-8 h-8 text-purple-600 mx-auto mb-2" />
              <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* زر عرض المزيد */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button 
              size="lg" 
              className="btn-gradient text-white px-12 py-4 rounded-full text-lg font-semibold shadow-luxury hover:shadow-2xl transition-all duration-300 relative overflow-hidden"
            >
              <motion.span
                initial={{ x: 0 }}
                whileHover={{ x: 5 }}
                className="flex items-center gap-2"
              >
                عرض جميع المنتجات الجديدة
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>
              </motion.span>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

// مكون بطاقة المنتج المحسن
const ProductCard = ({ product, index, isHovered, isLiked, onToggleLike }) => {
  const [selectedColor, setSelectedColor] = useState(0);

  return (
    <motion.div
      layout
      whileHover={{ y: -12, rotateY: 5 }}
      className="product-card bg-white rounded-3xl shadow-luxury hover:shadow-2xl transition-all duration-500 overflow-hidden relative"
      style={{ transformStyle: "preserve-3d" }}
    >
      {/* صورة المنتج */}
      <div className="relative overflow-hidden group">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-80 object-cover"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
        
        {/* طبقة التراكب */}
        <motion.div
          className="image-overlay absolute inset-0"
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        />

        {/* الشارات */}
        <div className="absolute top-4 left-4 flex flex-col gap-2">
          <AnimatePresence>
            {product.isNew && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"
              >
                <Sparkles className="w-3 h-3" />
                جديد
              </motion.div>
            )}
            {product.isTrending && (
              <motion.div
                initial={{ scale: 0, rotate: -180 }}
                animate={{ scale: 1, rotate: 0 }}
                exit={{ scale: 0, rotate: 180 }}
                transition={{ delay: 0.1 }}
                className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1"
              >
                <TrendingUp className="w-3 h-3" />
                رائج
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* أيقونات التفاعل */}
        <motion.div
          className="absolute top-4 right-4 flex flex-col gap-2"
          initial={{ opacity: 0, x: 20 }}
          whileHover={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.button
            whileHover={{ scale: 1.2, rotate: 10 }}
            whileTap={{ scale: 0.9 }}
            onClick={onToggleLike}
            className="glass-effect p-3 rounded-full shadow-lg hover:bg-white/40 transition-all duration-300"
          >
            <Heart 
              className={`w-5 h-5 transition-colors ${
                isLiked ? 'text-red-500 fill-current' : 'text-gray-700 hover:text-red-500'
              }`} 
            />
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.2, rotate: -10 }}
            whileTap={{ scale: 0.9 }}
            className="glass-effect p-3 rounded-full shadow-lg hover:bg-white/40 transition-all duration-300"
          >
            <Eye className="w-5 h-5 text-gray-700 hover:text-blue-500 transition-colors" />
          </motion.button>
        </motion.div>

        {/* ألوان المنتج */}
        <motion.div
          className="absolute bottom-4 left-4 flex gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {product.colors.map((color, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setSelectedColor(index)}
              className={`w-6 h-6 rounded-full border-2 ${
                selectedColor === index ? 'border-white shadow-lg' : 'border-white/50'
              }`}
              style={{ backgroundColor: color }}
            />
          ))}
        </motion.div>

        {/* زر الإضافة للسلة */}
        <motion.div
          className="absolute bottom-4 right-4 left-4"
          initial={{ opacity: 0, y: 20 }}
          whileHover={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
            <Button className="w-full bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white rounded-full py-3 font-semibold shadow-lg">
              <motion.div
                className="flex items-center justify-center gap-2"
                whileHover={{ x: 2 }}
              >
                <ShoppingBag className="w-4 h-4" />
                أضف للسلة
              </motion.div>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* معلومات المنتج */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-sm text-purple-600 bg-purple-100 px-3 py-1 rounded-full font-medium"
          >
            {product.category}
          </motion.span>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-current" />
            <span className="text-sm font-semibold text-gray-700">{product.rating}</span>
            <span className="text-xs text-gray-400">({product.reviews})</span>
          </div>
        </div>
        
        <motion.h3
          whileHover={{ color: "#8b5cf6" }}
          className="text-xl font-bold text-gray-900 mb-4 transition-colors duration-300"
        >
          {product.name}
        </motion.h3>
        
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="text-2xl font-bold text-gray-900"
            >
              {product.price} ر.س
            </motion.span>
            {product.originalPrice && (
              <motion.span
                initial={{ opacity: 0.7 }}
                whileHover={{ opacity: 1 }}
                className="text-lg text-gray-400 line-through"
              >
                {product.originalPrice} ر.س
              </motion.span>
            )}
          </div>
          {product.originalPrice && (
            <motion.div
              whileHover={{ scale: 1.1 }}
              className="bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
            >
              -{Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </motion.div>
          )}
        </div>
      </div>

      {/* تأثير الهوفر الإضافي */}
      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-gradient-to-t from-purple-500/10 to-transparent pointer-events-none rounded-3xl"
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default NewArrivals;

