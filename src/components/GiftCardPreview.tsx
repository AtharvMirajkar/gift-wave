import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { RootState } from '../store/store';
import { Gift, Heart, PartyPopper, Sparkles } from 'lucide-react';

const GiftCardPreview = () => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [imageHeight, setImageHeight] = useState<number | null>(null);
  const {
    template,
    customText,
    recipientName,
    senderName,
    imageUrl,
    primaryColor,
    secondaryColor,
    textColor,
  } = useSelector((state: RootState) => state.giftCard);

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
    const baseStyle = {
      background: `linear-gradient(135deg, ${primaryColor}, ${secondaryColor})`,
      icon: <Gift className="w-8 h-8" style={{ color: textColor }} />,
      pattern: '',
      textBg: `linear-gradient(to right, ${primaryColor}99, ${secondaryColor}99)`,
      shadow: `0 25px 50px -12px ${primaryColor}66`,
      iconBg: `linear-gradient(135deg, ${primaryColor}33, ${secondaryColor}33)`,
    };

    switch (template) {
      case 'birthday':
        return {
          ...baseStyle,
          icon: <PartyPopper className="w-8 h-8" style={{ color: textColor }} />,
          pattern: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${encodeURIComponent(textColor)}' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        };
      case 'anniversary':
        return {
          ...baseStyle,
          icon: <Heart className="w-8 h-8" style={{ color: textColor }} />,
          pattern: `url("data:image/svg+xml,%3Csvg width='52' height='26' viewBox='0 0 52 26' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${encodeURIComponent(textColor)}' fill-opacity='0.15'%3E%3Cpath d='M10 10c0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4 3.314 0 6 2.686 6 6 0 2.21 1.79 4 4 4v2c-3.314 0-6-2.686-6-6 0-2.21-1.79-4-4-4-3.314 0-6-2.686-6-6zm25.464-1.95l8.486 8.486-1.414 1.414-8.486-8.486 1.414-1.414z' /%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        };
      case 'event':
        return {
          ...baseStyle,
          icon: <Sparkles className="w-8 h-8" style={{ color: textColor }} />,
          pattern: `url("data:image/svg+xml,%3Csvg width='48' height='32' viewBox='0 0 48 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='${encodeURIComponent(textColor)}' fill-opacity='0.15'%3E%3Cpath d='M27 32c0-3.314 2.686-6 6-6 5.523 0 10-4.477 10-10S38.523 6 33 6c-3.314 0-6-2.686-6-6h2c0 2.21 1.79 4 4 4 6.627 0 12 5.373 12 12s-5.373 12-12 12c-2.21 0-4 1.79-4 4h-2zm-6 0c0-3.314-2.686-6-6-6-5.523 0-10-4.477-10-10S9.477 6 15 6c3.314 0 6-2.686 6-6h-2c0 2.21-1.79 4-4 4C8.373 4 3 9.373 3 16s5.373 12 12 12c2.21 0 4 1.79 4 4h2z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        };
      default:
        return baseStyle;
    }
  };

  const templateStyle = getTemplateStyle();

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      className="relative rounded-xl shadow-2xl overflow-hidden min-w-[320px] w-full max-w-lg mx-auto"
      style={{
        background: templateStyle.background,
        boxShadow: templateStyle.shadow,
        backgroundImage: templateStyle.pattern,
      }}
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
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent"></div>
          </div>
        )}
        <div className="relative p-8 flex flex-col justify-between backdrop-blur-sm"
          style={{ background: templateStyle.textBg }}>
          <div className="flex items-center justify-between mb-6">
            {templateStyle.icon}
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3 }}
              className="w-12 h-12 rounded-full backdrop-blur-sm flex items-center justify-center"
              style={{ background: templateStyle.iconBg }}
            >
              {templateStyle.icon}
            </motion.div>
          </div>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold drop-shadow-lg" style={{ color: textColor }}>
              Dear {recipientName || 'Friend'}
            </h2>
            <p className="text-xl leading-relaxed drop-shadow-lg" style={{ color: textColor }}>
              {customText || 'Your message will appear here...'}
            </p>
            <div className="flex items-center justify-between pt-6">
              <p className="text-lg italic drop-shadow-lg" style={{ color: textColor }}>
                From, {senderName || 'Someone special'}
              </p>
              <motion.div
                whileHover={{ rotate: 10 }}
                className="opacity-75"
              >
                {templateStyle.icon}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default GiftCardPreview;