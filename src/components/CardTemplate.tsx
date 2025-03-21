import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setTemplate } from '../store/giftCardSlice';

interface CardTemplateProps {
  type: string;
  imageUrl: string;
  title: string;
}

const CardTemplate: React.FC<CardTemplateProps> = ({ type, imageUrl, title }) => {
  const dispatch = useDispatch();

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer rounded-lg overflow-hidden shadow-lg"
      onClick={() => dispatch(setTemplate(type))}
    >
      <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
      <div className="p-4 bg-white">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
    </motion.div>
  );
};

export default CardTemplate;