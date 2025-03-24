import React from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { setTemplate } from '../store/giftCardSlice';
import { useNavigate } from 'react-router-dom';

interface CardTemplateProps {
  type: string;
  imageUrl: string;
  title: string;
  description: string;
}

const CardTemplate: React.FC<CardTemplateProps> = ({ type, imageUrl, title, description }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleTemplateSelect = () => {
    dispatch(setTemplate(type));
    navigate(`/edit/${type}`);
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer rounded-lg overflow-hidden shadow-lg bg-white transform transition-all duration-300 hover:shadow-2xl"
      onClick={handleTemplateSelect}
    >
      <div className="relative">
        <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

export default CardTemplate;