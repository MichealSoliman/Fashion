import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, 
  Heart, 
  Menu, 
  X, 
  Sparkles,
  User
} from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  
  const cartItems = useSelector(state => state.cart.totalQuantity);
  const wishlistItems = useSelector(state => state.wishlist.totalItems);

  const navLinks = [
    { name: 'الرئيسية', path: '/', label: 'Home' },
    { name: ' من نحن', path: '/about', label: 'About' },
    { name: 'المنتجات', path: '/products', label: 'Products' },
  ];

  const isActivePath = (path) => location.pathname === path;

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50 shadow-lg"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 lg:h-20">
          
          {/* Logo */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="flex items-center space-x-2 rtl:space-x-reverse"
          >
            <Link to="/" className="flex items-center space-x-2 rtl:space-x-reverse">
              <div className="relative">
                <Sparkles className="h-8 w-8 text-purple-600" />
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0"
                >
                  <Sparkles className="h-8 w-8 text-pink-500 opacity-50" />
                </motion.div>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                أزياء
              </span>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8 rtl:space-x-reverse">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                whileHover={{ y: -2 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={link.path}
                  className={`relative px-4 py-2 text-lg font-medium transition-all duration-300 ${
                    isActivePath(link.path)
                      ? 'text-purple-600'
                      : 'text-gray-700 hover:text-purple-600'
                  }`}
                >
                  {link.name}
                  {isActivePath(link.path) && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600"
                      initial={false}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              </motion.div>
            ))}
          </div>

          {/* Cart, Wishlist & User Icons */}
          <div className="flex items-center space-x-4 rtl:space-x-reverse">
            
            {/* Wishlist */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Button
                variant="ghost"
                size="icon"
                className="relative p-2 hover:bg-purple-50 transition-colors duration-300"
              >
                <Heart className="h-6 w-6 text-gray-700 hover:text-red-500 transition-colors duration-300" />
                {wishlistItems > 0 && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-pink-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-lg"
                  >
                    {wishlistItems}
                  </motion.span>
                )}
              </Button>
            </motion.div>

            {/* Shopping Cart */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="relative"
            >
              <Link to="/cart">
                <Button
                  variant="ghost"
                  size="icon"
                  className="relative p-2 hover:bg-purple-50 transition-colors duration-300"
                >
                  <ShoppingCart className="h-6 w-6 text-gray-700 hover:text-purple-600 transition-colors duration-300" />
                  {cartItems > 0 && (
                    <motion.span
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="absolute -top-1 -right-1 bg-gradient-to-r from-purple-500 to-blue-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-bold shadow-lg"
                    >
                      {cartItems}
                    </motion.span>
                  )}
                </Button>
              </Link>
            </motion.div>

            {/* User Profile */}
            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button
                variant="ghost"
                size="icon"
                className="p-2 hover:bg-purple-50 transition-colors duration-300"
              >
                <User className="h-6 w-6 text-gray-700 hover:text-purple-600 transition-colors duration-300" />
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <div className="lg:hidden">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2"
              >
                {isMenuOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        <motion.div
          initial={false}
          animate={{ height: isMenuOpen ? 'auto' : 0 }}
          transition={{ duration: 0.3 }}
          className="lg:hidden overflow-hidden"
        >
          <div className="py-4 space-y-2">
            {navLinks.map((link) => (
              <motion.div
                key={link.path}
                whileHover={{ x: 10 }}
                transition={{ duration: 0.2 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block px-4 py-3 text-lg font-medium rounded-lg transition-all duration-300 ${
                    isActivePath(link.path)
                      ? 'bg-gradient-to-r from-purple-100 to-pink-100 text-purple-600 border-r-4 border-purple-600'
                      : 'text-gray-700 hover:bg-gray-50 hover:text-purple-600'
                  }`}
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;

