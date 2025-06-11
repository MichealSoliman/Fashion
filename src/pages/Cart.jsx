import React from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import { 
  Plus, 
  Minus, 
  Trash2, 
  ShoppingBag, 
  ArrowRight,
  Heart,
  Star,
  Package,
  CreditCard,
  Truck
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { 
  addToCart, 
  removeFromCart, 
  updateQuantity, 
  clearCart 
} from '../store/slices/cartSlice';
import { Link } from 'react-router-dom';

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totalQuantity, totalAmount } = useSelector(state => state.cart);

  const handleUpdateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      dispatch(removeFromCart(id));
    } else {
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { x: -20, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    },
    exit: {
      x: 100,
      opacity: 0,
      transition: { duration: 0.3 }
    }
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-16"
          >
            <div className="w-32 h-32 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <ShoppingBag className="h-16 w-16 text-purple-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">سلة التسوق فارغة</h2>
            <p className="text-gray-600 mb-8 text-lg">
              لم تقم بإضافة أي منتجات إلى سلة التسوق بعد
            </p>
            <Link to="/">
              <Button className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white px-8 py-3 text-lg rounded-full">
                <ArrowRight className="ml-2 h-5 w-5" />
                ابدأ التسوق
              </Button>
            </Link>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl lg:text-5xl font-bold mb-4">
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              سلة التسوق
            </span>
          </h1>
          <p className="text-gray-600 text-lg">
            لديك {totalQuantity} منتج في سلة التسوق
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="space-y-6"
            >
              {items.map((item) => (
                <motion.div
                  key={item.id}
                  variants={itemVariants}
                  layout
                  className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    
                    {/* Product Image */}
                    <div className="md:w-48 h-48 flex-shrink-0">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover rounded-xl"
                      />
                    </div>

                    {/* Product Details */}
                    <div className="flex-1 space-y-4">
                      
                      {/* Title and Category */}
                      <div>
                        <h3 className="text-xl font-bold text-gray-800 mb-2">
                          {item.title}
                        </h3>
                        <span className="inline-block bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-semibold">
                          {item.category}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <div className="flex space-x-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`h-4 w-4 ${
                                i < Math.floor(item.rating)
                                  ? 'text-yellow-400 fill-current'
                                  : 'text-gray-300'
                              }`}
                            />
                          ))}
                        </div>
                        <span className="text-sm text-gray-500">({item.reviews})</span>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 line-clamp-2">
                        {item.description}
                      </p>

                      {/* Size Selection */}
                      <div className="flex items-center space-x-2 rtl:space-x-reverse">
                        <span className="text-sm font-semibold text-gray-700">المقاس:</span>
                        <div className="flex space-x-2 rtl:space-x-reverse">
                          {item.sizes.slice(0, 3).map((size, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-gray-100 text-gray-600 text-sm rounded-md border"
                            >
                              {size}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Price and Quantity Controls */}
                      <div className="flex items-center justify-between">
                        
                        {/* Price */}
                        <div className="text-right">
                          <div className="text-2xl font-bold text-purple-600">
                            {item.price * item.quantity} ر.س
                          </div>
                          <div className="text-sm text-gray-500">
                            {item.price} ر.س × {item.quantity}
                          </div>
                        </div>

                        {/* Quantity Controls */}
                        <div className="flex items-center space-x-4 rtl:space-x-reverse">
                          
                          {/* Remove Button */}
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            onClick={() => handleRemoveItem(item.id)}
                            className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors duration-300"
                          >
                            <Trash2 className="h-5 w-5" />
                          </motion.button>

                          {/* Quantity Controls */}
                          <div className="flex items-center space-x-3 rtl:space-x-reverse bg-gray-100 rounded-full p-1">
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleUpdateQuantity(item.id, item.quantity - 1)}
                              className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 transition-colors duration-300"
                            >
                              <Minus className="h-4 w-4" />
                            </motion.button>
                            
                            <span className="w-8 text-center font-semibold text-gray-800">
                              {item.quantity}
                            </span>
                            
                            <motion.button
                              whileHover={{ scale: 1.1 }}
                              whileTap={{ scale: 0.9 }}
                              onClick={() => handleUpdateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-gray-600 hover:text-purple-600 transition-colors duration-300"
                            >
                              <Plus className="h-4 w-4" />
                            </motion.button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Clear Cart Button */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 text-center"
            >
              <Button
                variant="outline"
                onClick={handleClearCart}
                className="text-red-500 border-red-200 hover:bg-red-50 hover:border-red-300"
              >
                <Trash2 className="ml-2 h-4 w-4" />
                إفراغ السلة
              </Button>
            </motion.div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl shadow-lg p-8 border border-gray-100 sticky top-8"
            >
              
              {/* Summary Header */}
              <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                ملخص الطلب
              </h3>

              {/* Order Details */}
              <div className="space-y-4 mb-6">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">المجموع الفرعي:</span>
                  <span className="font-semibold">{totalAmount} ر.س</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">الشحن:</span>
                  <span className="font-semibold text-green-600">مجاني</span>
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">الضريبة (15%):</span>
                  <span className="font-semibold">{Math.round(totalAmount * 0.15)} ر.س</span>
                </div>
                
                <hr className="border-gray-200" />
                
                <div className="flex justify-between items-center text-lg">
                  <span className="font-bold text-gray-800">المجموع الكلي:</span>
                  <span className="font-bold text-purple-600">
                    {Math.round(totalAmount * 1.15)} ر.س
                  </span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-gray-600">
                  <Truck className="h-4 w-4 text-green-500" />
                  <span>شحن مجاني للطلبات أكثر من 200 ر.س</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-gray-600">
                  <Package className="h-4 w-4 text-blue-500" />
                  <span>إمكانية الإرجاع خلال 30 يوم</span>
                </div>
                <div className="flex items-center space-x-3 rtl:space-x-reverse text-sm text-gray-600">
                  <CreditCard className="h-4 w-4 text-purple-500" />
                  <span>دفع آمن ومضمون</span>
                </div>
              </div>

              {/* Checkout Button */}
              <Button className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 text-lg font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
                <CreditCard className="ml-2 h-5 w-5" />
                إتمام الشراء
              </Button>

              {/* Continue Shopping */}
              <Link to="/">
                <Button
                  variant="outline"
                  className="w-full mt-4 border-purple-200 text-purple-600 hover:bg-purple-50 py-3"
                >
                  <ArrowRight className="ml-2 h-4 w-4" />
                  متابعة التسوق
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;

