import React from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const GiftCardPreview = () => {
  const { template, customText, recipientName, senderName, imageUrl } = useSelector(
    (state: RootState) => state.giftCard
  );

  const getTemplateStyle = () => {
    switch (template) {
      case 'birthday':
        return 'bg-gradient-to-r from-pink-500 to-purple-500';
      case 'anniversary':
        return 'bg-gradient-to-r from-red-500 to-pink-500';
      case 'event':
        return 'bg-gradient-to-r from-blue-500 to-purple-500';
      default:
        return 'bg-gradient-to-r from-gray-500 to-gray-600';
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`rounded-xl shadow-2xl overflow-hidden max-w-lg mx-auto ${getTemplateStyle()}`}
    >
      <div className="relative">
        {imageUrl && (
          <img
            src={imageUrl}
            alt="Gift card"
            className="w-full h-48 object-cover"
          />
        )}
        <div className="p-6 text-white">
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold mb-4"
          >
            Dear {recipientName || 'Friend'}
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg mb-6"
          >
            {customText || 'Your message will appear here...'}
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-right italic"
          >
            From, {senderName || 'Someone special'}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default GiftCardPreview;