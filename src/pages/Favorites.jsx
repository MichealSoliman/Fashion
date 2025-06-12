import React from 'react';
import { motion } from 'framer-motion';
import { useSelector, useDispatch } from 'react-redux';
import {
  Trash2,
  Heart,
  Star,
  ArrowRight,
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { removeFromWishlist } from '../store/slices/wishlistSlice'; // Make sure this path is correct
import { Link } from 'react-router-dom';

const Favorites = () => {
  const dispatch = useDispatch();
  const { items } = useSelector(state => state.wishlist); // THIS IS THE CRUCIAL CHANGE: state.wishlist instead of state.favorites

  // Add this console.log to help debug
  console.log("Current wishlist items in Favorites.jsx:", items);

  const handleRemoveItem = (id) => {
    dispatch(removeFromWishlist(id));
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
            <div className="w-32 h-32 bg-gradient-to-r from-red-100 to-orange-100 rounded-full flex items-center justify-center mx-auto mb-8">
              <Heart className="h-16 w-16 text-red-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-800 mb-4">قائمة المفضلة فارغة</h2>
            <p className="text-gray-600 mb-8 text-lg">
              لم تقم بإضافة أي منتجات إلى قائمة المفضلة بعد
            </p>
            <Link to="/">
              <Button className="bg-gradient-to-r from-red-600 to-orange-600 hover:from-red-700 hover:to-orange-700 text-white px-8 py-3 text-lg rounded-full">
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
            <span className="bg-gradient-to-r from-red-600 to-orange-600 bg-clip-text text-transparent">
              قائمة المفضلة
            </span>
          </h1>
          <p className="text-gray-600 text-lg">
            لديك {items.length} منتج في قائمة المفضلة
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-1 gap-12">
          
          {/* Favorite Items */}
          <div className="lg:col-span-1">
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
                        <span className="inline-block bg-red-100 text-red-600 px-3 py-1 rounded-full text-sm font-semibold">
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

                      {/* Price and Remove Button */}
                      <div className="flex items-center justify-between">
                        
                        {/* Price */}
                        <div className="text-right">
                          <div className="text-2xl font-bold text-red-600">
                            {item.price} ر.س
                          </div>
                        </div>

                        {/* Remove Button */}
                        <motion.button
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                          onClick={() => handleRemoveItem(item.id)}
                          className="p-2 text-red-500 hover:bg-red-50 rounded-full transition-colors duration-300"
                        >
                          <Trash2 className="h-5 w-5" />
                        </motion.button>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Favorites;


