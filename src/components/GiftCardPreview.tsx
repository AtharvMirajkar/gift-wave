import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';

const GiftCardPreview = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState<number | null>(null);
  const { template, customText, recipientName, senderName, imageUrl } = useSelector(
    (state: RootState) => state.giftCard
  );

  useEffect(() => {
    if (imageUrl) {
      const img = new Image();
      img.onload = () => {
        const aspectRatio = img.height / img.width;
        const width = cardRef.current?.clientWidth || 0;
        setImageHeight(width * aspectRatio);
      };
      img.src = imageUrl;
    } else {
      setImageHeight(null);
    }
  }, [imageUrl]);

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
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className={`rounded-xl shadow-2xl overflow-hidden min-w-[320px] w-full max-w-lg mx-auto ${getTemplateStyle()}`}
    >
      <div className="relative flex flex-col">
        {imageUrl && (
          <div 
            className="relative w-full overflow-hidden"
            style={{ height: imageHeight ? `${imageHeight}px` : 'auto' }}
          >
            <img
              src={imageUrl}
              alt="Gift card"
              className="w-full h-full object-contain"
            />
          </div>
        )}
        <div className={`p-6 flex flex-col justify-between ${imageUrl ? 'bg-opacity-90 backdrop-blur-sm' : ''}`}>
          <motion.h2
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold mb-4 text-white"
          >
            Dear {recipientName || 'Friend'}
          </motion.h2>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg mb-6 text-white"
          >
            {customText || 'Your message will appear here...'}
          </motion.p>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="text-right italic text-white"
          >
            From, {senderName || 'Someone special'}
          </motion.p>
        </div>
      </div>
    </motion.div>
  );
};

export default GiftCardPreview;